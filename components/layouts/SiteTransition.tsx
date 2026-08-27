"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function SiteTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showPreloader, setShowPreloader] = useState(true);
  const [mountedPath, setMountedPath] = useState<string | null>(pathname);

  const preloaderRef = useRef<HTMLDivElement | null>(null);
  const curtainRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  const [reduceMotion, setReduceMotion] = useState(() =>
    typeof window === "undefined" ? false : window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const finishPreloader = useCallback(() => setShowPreloader(false), []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setReduceMotion(Boolean(e.matches));
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Route change animation: curtain + content entrance
  useEffect(() => {
    if (showPreloader) {
      // wait until preload finished before animating route transitions
      return;
    }

    const curtain = curtainRef.current;
    const content = contentRef.current;
    if (!curtain || !content) {
      setMountedPath(pathname);
      return;
    }

    const dur = reduceMotion ? 0 : 0.72;
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // bring curtain up to cover screen
    gsap.set(curtain, { y: "100%", opacity: 0.65 });
    tl.to(curtain, { y: "0%", duration: dur / 2, ease: "power4.in" });

    // swap content while curtain covers screen
    tl.add(() => setMountedPath(pathname));

    // push curtain away and reveal new content
    tl.to(curtain, { y: "-100%", opacity: 0.95, duration: dur / 2, ease: "power4.out" });

    // animate new content in
    tl.from(
      content,
      {
        opacity: 0,
        y: 18,
        filter: "blur(10px)",
        scale: 0.985,
        duration: reduceMotion ? 0 : 0.48,
        ease: "power3.out",
      },
      "<"
    );

    return () => {
      tl.kill();
    };
  }, [pathname, showPreloader, reduceMotion]);

  return (
    <>
      {showPreloader ? (
        <WebsitePreloader
          preloaderRef={preloaderRef}
          reduceMotion={reduceMotion}
          onFinished={finishPreloader}
        />
      ) : null}

      {/* Curtain that animates across the screen during route changes */}
      <div
        ref={curtainRef}
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 15000,
          pointerEvents: "none",
          transform: "translateY(100%)",
          background: "linear-gradient(135deg, rgba(125,231,255,0.92), rgba(154,111,255,0.9) 48%, rgba(3,7,18,0.96))",
          boxShadow: "0 -24px 80px rgba(0,0,0,0.36)",
        }}
      />

      <div
        key={mountedPath ?? undefined}
        ref={contentRef}
        style={{ willChange: "opacity, transform, filter" }}
      >
        {children}
      </div>
    </>
  );
}

function WebsitePreloader({
  preloaderRef,
  reduceMotion,
  onFinished,
}: {
  preloaderRef: React.RefObject<HTMLDivElement | null>;
  reduceMotion: boolean;
  onFinished: () => void;
}) {
  const logoRef = useRef<HTMLDivElement | null>(null);
  const dustRef = useRef<HTMLDivElement | null>(null);
  const counterRef = useRef<HTMLSpanElement | null>(null);
  const [progress, setProgress] = useState(0);
  const visibleProgress = reduceMotion ? 100 : progress;

  const particles = React.useMemo(
    () =>
      Array.from({ length: 120 }, (_, index) => {
        const t = index / 120;
        const wave = Math.sin(index * 2.17);
        const drift = Math.cos(index * 1.41);
        const row = Math.floor(index / 20);
        const col = index % 20;
        const logoX = (col - 9.5) * 10 + wave * 4;
        const logoY = (row - 2.5) * 11 + drift * 4;
        const startX = logoX + drift * 90;
        const startY = 120 + row * 10 + Math.abs(wave) * 70;
        const endX = Math.cos(t * Math.PI * 8) * (190 + (index % 7) * 26);
        const endY = -150 - Math.sin(t * Math.PI * 5) * 150 - (index % 5) * 32;

        return {
          id: index,
          logoX,
          logoY,
          startX,
          startY,
          endX,
          endY,
          size: 2 + (index % 4) * 0.7,
          delay: (index % 24) * 0.012,
        };
      }),
    [],
  );

  useEffect(() => {
    const preloader = preloaderRef.current;
    const logo = logoRef.current;
    const dust = dustRef.current;
    const counter = { value: 0 };

    if (!preloader || !logo || !dust) {
      onFinished();
      return;
    }

    if (reduceMotion) {
      const fade = gsap.to(preloader, {
        opacity: 0,
        duration: 0.24,
        delay: 0.2,
        ease: "power2.out",
        onComplete: onFinished,
      });
      return () => fade.kill();
    }

    const dots = Array.from(dust.querySelectorAll<HTMLElement>("[data-logo-dust]"));
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    gsap.set(logo, {
      opacity: 0,
      y: 34,
      scale: 0.94,
      filter: "blur(16px)",
      clipPath: "inset(100% 0% 0% 0%)",
    });

    dots.forEach((dot, index) => {
      const particle = particles[index];
      gsap.set(dot, {
        x: particle.startX,
        y: particle.startY,
        opacity: 0,
        scale: 0.45,
      });
    });

    tl.to(
      counter,
      {
        value: 100,
        duration: 2.6,
        ease: "power2.inOut",
        onUpdate: () => setProgress(Math.round(counter.value)),
      },
      0,
    )
      .to(
        dots,
        {
          x: (index) => particles[index].logoX,
          y: (index) => particles[index].logoY,
          opacity: 1,
          scale: 1,
          duration: 1.45,
          stagger: { each: 0.006, from: "random" },
        },
        0.12,
      )
      .to(
        logo,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.45,
        },
        0.42,
      )
      .to(
        dots,
        {
          opacity: 0.92,
          scale: 0.55,
          duration: 0.35,
          stagger: { each: 0.002, from: "center" },
        },
        1.45,
      )
      .to(
        dots,
        {
          x: (index) => particles[index].endX,
          y: (index) => particles[index].endY,
          opacity: 0,
          scale: 0.22,
          duration: 0.95,
          ease: "power3.in",
          stagger: { each: 0.004, from: "edges" },
        },
        2.05,
      )
      .to(
        logo,
        {
          opacity: 0,
          y: -20,
          scale: 0.98,
          filter: "blur(10px)",
          duration: 0.55,
          ease: "power2.in",
        },
        2.25,
      )
      .to(
        preloader,
        {
          opacity: 0,
          duration: 0.72,
          ease: "power3.out",
          onComplete: onFinished,
        },
        2.5,
      );

    return () => tl.kill();
  }, [onFinished, particles, preloaderRef, reduceMotion]);

  return (
    <Box
      ref={preloaderRef}
      sx={{
        position: "fixed",
        inset: 0,
        zIndex: 20000,
        display: "grid",
        placeItems: "center",
        overflow: "hidden",
        color: "#fff",
        background:
          "radial-gradient(circle at 30% 20%, rgba(125,231,255,0.16), transparent 32%), radial-gradient(circle at 74% 68%, rgba(154,111,255,0.13), transparent 35%), linear-gradient(180deg, #02040d 0%, #050815 56%, #000 100%)",
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.62) 0 1px, transparent 1.5px), radial-gradient(circle, rgba(125,231,255,0.5) 0 1px, transparent 1.4px)",
          backgroundPosition: "0 0, 38px 54px",
          backgroundSize: "120px 120px, 180px 180px",
          opacity: 0.34,
        }}
      />

      <Box
        ref={dustRef}
        aria-hidden
        sx={{
          position: "absolute",
          left: "50%",
          top: "47%",
          width: 1,
          height: 1,
          overflow: "visible",
          pointerEvents: "none",
        }}
      >
        {particles.map((particle) => (
          <Box
            key={particle.id}
            component="span"
            data-logo-dust
            sx={{
              position: "absolute",
              left: 0,
              top: 0,
              width: particle.size,
              height: particle.size,
              borderRadius: "50%",
              background:
                particle.id % 3 === 0
                  ? "#a8ffcb"
                  : particle.id % 3 === 1
                    ? "#7de7ff"
                    : "#ffffff",
              boxShadow: "0 0 12px currentColor",
              color: "inherit",
              willChange: "transform, opacity",
            }}
          />
        ))}
      </Box>

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "grid",
          justifyItems: "center",
          gap: { xs: 3, sm: 4 },
          width: "min(520px, calc(100vw - 40px))",
          textAlign: "center",
        }}
      >
        <Box
          ref={logoRef}
          sx={{
            position: "relative",
            width: { xs: 230, sm: 320 },
            height: { xs: 70, sm: 96 },
            display: "grid",
            placeItems: "center",
            willChange: "transform, opacity, filter, clip-path",
          }}
        >
          <Image
            src="/images/logo-thumbnail.png"
            alt="Gene20"
            fill
            sizes="(max-width: 600px) 230px, 320px"
            priority
            style={{
              objectFit: "contain",
              filter: "drop-shadow(0 0 26px rgba(125,231,255,0.42))",
            }}
          />
        </Box>

        <Typography
          component="p"
          sx={{
            m: 0,
            fontSize: { xs: 42, sm: 56 },
            lineHeight: 1,
            fontWeight: 900,
            letterSpacing: 0,
            color: "#f7fbff",
            textShadow: "0 0 28px rgba(125,231,255,0.32)",
          }}
        >
          <Box component="span" ref={counterRef}>
            {visibleProgress}
          </Box>
          %
        </Typography>
      </Box>
    </Box>
  );
}
