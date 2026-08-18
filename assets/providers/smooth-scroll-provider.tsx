"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger, ScrollSmoother } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScroller() {
  useEffect(() => {
    ScrollSmoother.get()?.kill();

    return () => {
      ScrollSmoother.get()?.kill();
    };
  }, []);

  return null;
}