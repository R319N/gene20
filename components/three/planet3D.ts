import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import * as THREE from "three"
import { earthFragment, earthVertex } from "./shaders/earth";
import getStarfield from './getStarField'
import getLayer from "./getLayer";
import { getFresnelMat } from './getFresnelMat';

gsap.registerPlugin(ScrollTrigger);

const getViewportSettings = () => {
    const width = window.innerWidth;

    if (width < 480) {
        return {
            cameraZ: 12,
            cameraY: 1.2,
            groupScale: 0.72,
            groupX: 0,
            groupY: 0,
            nebulaX: 0,
            nebulaScale: 1.8,
        };
    }

    if (width < 768) {
        return {
            cameraZ: 15,
            cameraY: 1,
            groupScale: 0.82,
            groupX: 0,
            groupY: 0,
            nebulaX: 0,
            nebulaScale: 1.6,
        };
    }

    if (width < 1024) {
        return {
            cameraZ: 8,
            cameraY: 0,
            groupScale: 0.8,
            groupX: 1.4,
            groupY: 0,
            nebulaX: -1.1,
            nebulaScale: 1.25,
        };
    }

    return {
        cameraZ: 8,
        cameraY: 0,
        groupScale: 0.8,
        groupX: 1.4,
        groupY: 0,
        nebulaX: -2.8,
        nebulaScale: 1,
    };
};


const createNetworkGlobe = () => {
    const group = new THREE.Group();
    const nodeCount = 140;
    const radius = 1.005;
    const positions: THREE.Vector3[] = [];

    for (let i = 0; i < nodeCount; i++) {
        const y = 1 - (i / (nodeCount - 1)) * 2;
        const ringRadius = Math.sqrt(1 - y * y);
        const theta = i * Math.PI * (3 - Math.sqrt(5));
        const point = new THREE.Vector3(
            Math.cos(theta) * ringRadius * radius,
            y * radius,
            Math.sin(theta) * ringRadius * radius,
        );

        positions.push(point);
    }

    const pointGeometry = new THREE.BufferGeometry().setFromPoints(positions);
    const pointMaterial = new THREE.PointsMaterial({
        color: 0x6de7ff,
        size: 0.02,
        transparent: true,
        opacity: 0.65,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
    });
    const nodes = new THREE.Points(pointGeometry, pointMaterial);

    const linePositions: number[] = [];
    const maxDistance = radius * 0.45;

    for (let i = 0; i < positions.length; i++) {
        let connections = 0;

        for (let j = i + 1; j < positions.length; j++) {
            if (connections >= 4) break;

            if (positions[i].distanceTo(positions[j]) <= maxDistance) {
                linePositions.push(
                    positions[i].x,
                    positions[i].y,
                    positions[i].z,
                    positions[j].x,
                    positions[j].y,
                    positions[j].z,
                );
                connections++;
            }
        }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(linePositions, 3),
    );

    const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x71c9ff,
        transparent: true,
        opacity: 0.12,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
    });

    const links = new THREE.LineSegments(lineGeometry, lineMaterial);
    group.add(links, nodes);

    group.userData.update = (time: number) => {
        group.rotation.y = time * 0.08;
        group.rotation.x = Math.sin(time * 0.35) * 0.04;
        const pulse = 1 + Math.sin(time * 1.4) * 0.008;
        group.scale.setScalar(pulse);
    };

    return group;
};

const initPlanet = (): { scene: THREE.Scene, renderer: THREE.WebGLRenderer, dispose: () => void } => {
    const canvas = document.querySelector(
        "canvas.planet-3D",
    ) as HTMLCanvasElement | null;

    if (!canvas) {
        throw new Error("Planet canvas not found: expected <canvas class='planet-3D'> in the Hero section.");
    }

    // scene
    const scene = new THREE.Scene();

    //***camera setup
    const size = {
        width: window.innerWidth,
        height: window.innerHeight,
        pixelRatio: window.devicePixelRatio
    }

    const camera = new THREE.PerspectiveCamera(12, size.width / size.height, 0.1, 10000);
    camera.position.x = 0;
    camera.position.y = 0.1;
    camera.position.z = 3;
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(size.width, size.height);
    renderer.setPixelRatio(Math.min(size.pixelRatio, 1));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    // container.appendChild(renderer.domElement);


    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // texture loader
    const Tl = new THREE.TextureLoader();
    const dayTexture = Tl.load("/textures/earth.jpg");
    const nightTexture = Tl.load("/textures/earth_nightmap.jpg");
    const specularCloudsTexture = Tl.load("/textures/specularClouds.jpg");
    dayTexture.colorSpace = THREE.SRGBColorSpace;
    nightTexture.colorSpace = THREE.SRGBColorSpace;
    const baseAnisotropy = renderer.capabilities.getMaxAnisotropy();
    dayTexture.anisotropy = baseAnisotropy;
    specularCloudsTexture.anisotropy = baseAnisotropy;
    nightTexture.anisotropy = baseAnisotropy;

    // Geometry

    const earthGroup = new THREE.Group();
    earthGroup.rotation.z = (-23.4 * Math.PI) / 180;
    scene.add(earthGroup);

    const detail = 32;

    const atmosphereDayColor = "#000000";
    const atmosphereTwilightColor = "#0044ff";
    // earth material
    const earthGeometry = new THREE.IcosahedronGeometry(1, detail);


    // const earthMaterial = new THREE.MeshStandardMaterial({
    //     map: nightTexture,
    //     blending: THREE.AdditiveBlending,
    //     transparent: true,
    //     // opacity: 0.8,
    // });

    const earthMaterial = new THREE.ShaderMaterial({
        vertexShader: earthVertex,
        fragmentShader: earthFragment,
        transparent: true,
        opacity: 1,
        uniforms: {
            uDayTexture: new THREE.Uniform(dayTexture),
            uNightTexture: new THREE.Uniform(nightTexture),
            uSpecularCloudsTexture: new THREE.Uniform(specularCloudsTexture),
            uSunDirection: new THREE.Uniform(new THREE.Vector3(-1, 0, 0)),
            uAtmosphereDayColor: new THREE.Uniform(
                new THREE.Color(atmosphereDayColor),
            ),
            uAtmosphereTwilightColor: new THREE.Uniform(
                new THREE.Color(atmosphereTwilightColor),
            ),
        },
        toneMapped: false,
    });


    const networkGlobe = createNetworkGlobe();
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earthGroup.add(earth);

    const atmosphereMaterial = getFresnelMat();
    const glowMesh = new THREE.Mesh(earthGeometry, atmosphereMaterial);
    glowMesh.scale.setScalar(1.005);
    earthGroup.add(glowMesh);

    const nebula = getLayer({
        path: '/textures/rad-grad.png',
        size: 1.2,
    });
    scene.add(nebula);

    const ambientLight = new THREE.AmbientLight(0x00ffff, 0.35);
    scene.add(ambientLight);


    const stars = getStarfield({ numStars: 12000 });
    scene.add(stars);

    const sunDirection = new THREE.Vector3();
    sunDirection.set(-0.85, 0.78, -1).normalize();

    earthMaterial.uniforms.uSunDirection.value.copy(sunDirection);

    scene.add(earthGroup);

    const updatePlanetLayout = () => {
        const viewport = getViewportSettings();

        camera.position.y = viewport.cameraY;
        camera.position.z = viewport.cameraZ;
        earthGroup.position.set(viewport.groupX, viewport.groupY, 0);
        earthGroup.scale.setScalar(viewport.groupScale);
        nebula.position.x = viewport.nebulaX;
        nebula.scale.setScalar(viewport.nebulaScale);
        camera.updateProjectionMatrix();
    };

    updatePlanetLayout();

    const renderFrame = (time: number) => {
        earth.rotation.y = time * 0.2;
        glowMesh.rotation.y = time * 0.2;
        networkGlobe.userData.update(time);
        renderer.render(scene, camera);
        stars.userData.update(time);
    };

    gsap.ticker.add(renderFrame);

    gsap.ticker.lagSmoothing(0);

    const startY = earthGroup.position.y;

    const scrollTween = gsap.to(earthGroup.position, {
        y: startY + 3,
        z: 2,
        ease: "none",
        scrollTrigger: {
            trigger: "#home",
            start: "top top",
            end: "bottom top",
            scrub: true,
        },
    });

    //handle resizing
    const handleResize = () => {
        size.width = window.innerWidth;
        size.height = window.innerHeight;
        size.pixelRatio = window.devicePixelRatio;
        camera.aspect = size.width / size.height;
        camera.updateProjectionMatrix();
        renderer.setSize(size.width, size.height);
        renderer.setPixelRatio(Math.min(size.pixelRatio, 2));
        updatePlanetLayout();
    };

    window.addEventListener("resize", handleResize);

    const dispose = () => {
        window.removeEventListener("resize", handleResize);
        gsap.ticker.remove(renderFrame);
        scrollTween.kill();

        scene.traverse((object) => {
            const mesh = object as THREE.Mesh | THREE.Points | THREE.LineSegments;
            mesh.geometry?.dispose();

            const materials = Array.isArray(mesh.material)
                ? mesh.material
                : mesh.material
                    ? [mesh.material]
                    : [];

            materials.forEach((material) => {
                Object.values(material).forEach((value) => {
                    if (value instanceof THREE.Texture) {
                        value.dispose();
                    }
                });
                material.dispose();
            });
        });

        dayTexture.dispose();
        nightTexture.dispose();
        specularCloudsTexture.dispose();
        renderer.getContext().getExtension("WEBGL_lose_context")?.loseContext();
        renderer.dispose();
    };

    return { scene, renderer, dispose };

}

export default initPlanet;
