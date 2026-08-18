"use client";

import React, { useEffect, useRef, useState } from "react";
import { Box, LinearProgress, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function SiteTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showPreloader, setShowPreloader] = useState(true);
  const [mountedPath, setMountedPath] = useState<string | null>(pathname);

  const preloaderRef = useRef<HTMLDivElement | null>(null);
  const spinnerRef = useRef<HTMLDivElement | null>(null);
  const curtainRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const spinnerTween = useRef<gsap.core.Tween | null>(null);

  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(Boolean(mq.matches));
    const handler = (e: MediaQueryListEvent) => setReduceMotion(Boolean(e.matches));
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Preloader lifecycle
  useEffect(() => {
    const delay = reduceMotion ? 250 : 1450;
    const hideDelay = reduceMotion ? 150 : 600;

    const timer = window.setTimeout(() => {
      if (preloaderRef.current) {
        gsap.to(preloaderRef.current, {
          opacity: 0,
          y: reduceMotion ? 0 : -20,
          scale: reduceMotion ? 1 : 0.98,
          duration: hideDelay / 1000,
          ease: "power3.out",
          onComplete: () => setShowPreloader(false),
        });
      } else {
        setShowPreloader(false);
      }
    }, delay);

    if (!reduceMotion && spinnerRef.current) {
      spinnerTween.current = gsap.to(spinnerRef.current, { rotation: 360, duration: 18, repeat: -1, ease: "linear" });
    }

    return () => {
      window.clearTimeout(timer);
      spinnerTween.current?.kill();
    };
  }, [reduceMotion]);

  // Route change animation: curtain + content entrance
  useEffect(() => {
    if (showPreloader) {
      // wait until preload finished before animating route transitions
      setMountedPath(pathname);
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
        <WebsitePreloader preloaderRef={preloaderRef} spinnerRef={spinnerRef} reduceMotion={reduceMotion} />
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
  spinnerRef,
  reduceMotion,
}: {
  preloaderRef: React.RefObject<HTMLDivElement | null>;
  spinnerRef: React.RefObject<HTMLDivElement | null>;
  reduceMotion: boolean;
}) {
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
          "radial-gradient(circle at 30% 20%, rgba(125,231,255,0.18), transparent 32%), radial-gradient(circle at 75% 70%, rgba(154,111,255,0.16), transparent 34%), linear-gradient(180deg, #02040d 0%, #070b16 100%)",
      }}
    >
      <Box
        ref={spinnerRef}
        sx={{
          position: "absolute",
          width: { xs: 260, sm: 380 },
          height: { xs: 260, sm: 380 },
          borderRadius: "50%",
          border: "1px solid rgba(125,231,255,0.18)",
          background:
            "conic-gradient(from 90deg, transparent, rgba(125,231,255,0.2), rgba(154,111,255,0.18), transparent)",
          filter: "blur(0.2px)",
        }}
      />

      <Box
        sx={{
          position: "relative",
          width: "min(420px, calc(100vw - 48px))",
          p: { xs: 3, sm: 4 },
          borderRadius: 4,
          textAlign: "center",
          border: "1px solid rgba(255,255,255,0.12)",
          background: "linear-gradient(145deg, rgba(255,255,255,0.11), rgba(255,255,255,0.045))",
          boxShadow: "0 24px 80px rgba(0,0,0,0.38)",
          backdropFilter: "blur(24px)",
        }}
      >
        <Typography
          component="p"
          sx={{
            m: 0,
            fontSize: 13,
            fontWeight: 900,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#7de7ff",
          }}
        >
          Gene20
        </Typography>
        <Typography
          component="h1"
          sx={{
            mt: 1,
            mb: 3,
            fontSize: { xs: 30, sm: 42 },
            lineHeight: 1,
            fontWeight: 950,
            letterSpacing: 0,
          }}
        >
          Preparing the experience
        </Typography>
        <LinearProgress
          sx={{
            height: 6,
            borderRadius: 999,
            backgroundColor: "rgba(255,255,255,0.08)",
            "& .MuiLinearProgress-bar": {
              borderRadius: 999,
              background: "linear-gradient(90deg, #7de7ff, #a8ffcb, #9a6fff)",
            },
          }}
        />
      </Box>
    </Box>
  );
}
