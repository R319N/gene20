"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Box, Paper } from "@mui/material";
import ServicesSection from "@/sections/ServicesSection";
import IntroSection from "@/sections/IntroSection";
import HeroSection from "@/sections/HeroSection";
import PortfolioSection from "@/sections/PortfolioSection";
import ContactSection from "@/sections/ContactSection";
import TestimonialSection from "@/sections/TestimonialSection";


const sections = [
  { id: "section-01", title: "Section 1", description: "Start here with smooth GSAP scrolling." },
  { id: "section-02", title: "Section 2", description: "Keep the page moving with gentle easing." },
  { id: "section-03", title: "Section 3", description: "GSAP animates the scroll position for a smoother feel." },
];

export default function Home() {
  const targetScroll = useRef(0);
  const animation = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
    targetScroll.current = window.scrollY;

    const clamp = (value: number, min: number, max: number) =>
      Math.max(min, Math.min(max, value));

    const syncTarget = () => {
      targetScroll.current = window.scrollY;
    };

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetScroll.current = clamp(targetScroll.current + event.deltaY, 0, maxScroll);
      animation.current?.kill();
      animation.current = gsap.to(window, {
        scrollTo: { y: targetScroll.current, autoKill: false },
        duration: 1,
        ease: "power3.out",
        overwrite: "auto",
      });
    };

    window.addEventListener("scroll", syncTarget, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("scroll", syncTarget);
      window.removeEventListener("wheel", onWheel);
      animation.current?.kill();
    };
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;
    gsap.to(window, {
      scrollTo: { y: element, autoKill: false, offsetY: 24 },
      duration: 1,
      ease: "power3.out",
    });
  };

  return (
    <>
      <Paper
        component={"main"}
        sx={{
          minHeight: "100dvh",
          height: "100%",
          width: "100%",
          borderRadius: 0,
          margin: 0,
          p: 0,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: (theme) => theme.palette.background.default,
          overflow: "hidden",
          // py: "18vh",
          // px: { xs: 2, sm: 4, md: 6, lg: 8, xl: 10 },
          // gap: 4,
        }}
      >
        <HeroSection />
        <IntroSection />
        <ServicesSection />
        <Box sx={{ position: "relative", }}>
          {/* Planet arc — top right */}
          <div
            className="absolute pointer-events-none"
            style={{
              top: "-260px",
              right: "-260px",
              width: "680px",
              height: "680px",
              borderRadius: "50%",
              background: "radial-gradient(circle at 38% 58%, #0c1433 60%, #060d22 100%)",
              border: "1.5px solid rgba(140,175,255,0.75)",
              boxShadow:
                "inset 6px 6px 40px rgba(90,130,255,0.25), 0 0 60px rgba(80,120,255,0.18), 0 0 120px rgba(60,90,220,0.12)",
              zIndex: 0,
            }}
          />

          <PortfolioSection />
          <TestimonialSection />
        </Box>

        <ContactSection />
      </Paper>
    </>
  );
}
