"use client";

import { useRef } from "react";
import { Box, type BoxProps } from "@mui/material";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type ResponsiveSize = BoxProps["sx"];

export type SpinningGlobeProps = Omit<BoxProps, "children"> & {
  src?: string;
  alt?: string;
  duration?: number;
  size?: ResponsiveSize;
};

const SpinningGlobe = ({
  src = "/images/globe-network.jpg",
  alt = "Digital network globe",
  duration = 30,
  size = { xs: 260, sm: 340, md: 440 },
  sx,
  ...boxProps
}: SpinningGlobeProps) => {
  const globeRef = useRef<HTMLDivElement | null>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useGSAP(
    () => {
      if (!globeRef.current) return;

      tweenRef.current = gsap.to(globeRef.current, {
        rotationY: 360,
        duration,
        ease: "none",
        repeat: -1,
        transformOrigin: "50% 50%",
        transformPerspective: 900,
        force3D: true,
      });
    },
    { scope: globeRef, dependencies: [duration] }
  );

  const pauseRotation = () => tweenRef.current?.pause();
  const resumeRotation = () => tweenRef.current?.resume();

  return (
    <Box
      {...boxProps}
      onMouseEnter={pauseRotation}
      onMouseLeave={resumeRotation}
      sx={[
        {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mx: "auto",
          perspective: 900,
          width: size,
          maxWidth: "100%",
          aspectRatio: "1 / 1",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Box
        ref={globeRef}
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          overflow: "hidden",
          transformStyle: "preserve-3d",
          willChange: "transform",
          backfaceVisibility: "hidden",
        }}
      >
        <Box
          component="img"
          src={src}
          alt={alt}
          sx={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: "translateZ(0)",
          }}
        />
      </Box>
    </Box>
  );
};

export default SpinningGlobe;
