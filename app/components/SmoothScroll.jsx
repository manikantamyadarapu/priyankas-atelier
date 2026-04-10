"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,          // scroll duration — higher = smoother/slower
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo easing
      smoothWheel: true,      // smooth mouse wheel
    });

    // Connect Lenis scroll position to GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Tick Lenis on every GSAP frame
    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(tick);
    };
  }, []);

  return null;
}