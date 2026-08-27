"use client";
import { styles } from '@/styles/styles';
import { Box } from '@mui/material';
import React, { useEffect } from 'react'
import ScrollIndicator from '@/components/ui/ScrollIndicator';
import HeroContent from '@/components/hero/HeroContent';
import initPlanet from '@/components/three/planet3D';

const HeroSection = () => {

  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const { renderer } = initPlanet();

      return () => {
        if (renderer) {
          const gl = renderer.getContext();
          gl.getExtension("WEBGL_lose_context")?.loseContext();
          renderer.dispose();
        }
      };
    } catch (error) {
      console.warn('HeroSection animation setup skipped:', error);
    }
  }, [])


  return (
    <section
      id="home"
      className="hero-section relative overflow-hidden"
      style={{
        minHeight: "100svh",
        height: "100svh",
        isolation: "isolate",
      }}
    >
      {/* <div className="gradient-wrapper">
        <div className="intro-gradient" />
      </div> */}
      <Box
        sx={{
          ...styles.section_container,
          py: 0,
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 2,
          px: { xs: "1rem", lg: "10vw" },
          position: "relative",
          overflow: "visible",
          minHeight: "100svh",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: { xs: 0, md: 24, xl: 0 },
            width: { xs: "100%", md: "46vw", xl: "100%" },
            zIndex: 0,
            pointerEvents: "none",
            overflow: "hidden",
          }}
        >
          <canvas
            className="planet-3D"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              display: "block",
              overflow: "hidden", 
            }}
          />
        </Box>
        <HeroContent />
        <ScrollIndicator label="scroll down" />
      </Box>
    </section>
  )
}

export default HeroSection
