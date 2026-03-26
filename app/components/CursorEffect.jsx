"use client";

import { useEffect, useRef } from "react";

export default function CursorEffect() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = 0, my = 0;   // actual mouse position
    let rx = 0, ry = 0;   // ring's lagging position
    let rafId;

    const onMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      // Dot snaps instantly
      dot.style.left = mx + "px";
      dot.style.top  = my + "px";
    };

    // Ring lerps toward mouse every frame
    const animate = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      ring.style.left = rx + "px";
      ring.style.top  = ry + "px";
      rafId = requestAnimationFrame(animate);
    };

    // Grow ring on hoverable elements
    const onEnter = () => ring.classList.add("cursor-ring--hover");
    const onLeave = () => ring.classList.remove("cursor-ring--hover");

    document.addEventListener("mousemove", onMouseMove);
    rafId = requestAnimationFrame(animate);

    const hoverTargets = document.querySelectorAll("a, button, [data-cursor-hover]");
    hoverTargets.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
      hoverTargets.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}