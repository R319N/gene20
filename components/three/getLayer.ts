import * as THREE from "three";

type LayerOptions = {
  path: string;
  size?: number;
  color?: THREE.ColorRepresentation;
  opacity?: number;
};

export default function getLayer({
  path,
  size = 1,
  color = 0xffffff,
  opacity = 1,
}: LayerOptions) {
  const texture = new THREE.TextureLoader().load(path);
  texture.colorSpace = THREE.SRGBColorSpace;

  const geometry = new THREE.PlaneGeometry(size, size);
  const material = new THREE.MeshBasicMaterial({
    map: texture,
    color,
    opacity,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
  });

  return new THREE.Mesh(geometry, material);
}
