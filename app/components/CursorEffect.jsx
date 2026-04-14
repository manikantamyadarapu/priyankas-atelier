"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export default function CursorEffect() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const supportsFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!supportsFinePointer) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let tx = mx;
    let ty = my;
    let rx = mx;
    let ry = my;
    let rafId;
    let activeTarget = null;

    const onMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;

      if (activeTarget) {
        const rect = activeTarget.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = mx - cx;
        const dy = my - cy;

        activeTarget.style.transform = `translate(${dx * 0.08}px, ${dy * 0.08}px)`;
        tx = mx - dx * 0.18;
        ty = my - dy * 0.18;
      } else {
        tx = mx;
        ty = my;
      }

      dot.style.left = `${mx}px`;
      dot.style.top = `${my}px`;
    };

    const animate = () => {
      rx += (tx - rx) * 0.13;
      ry += (ty - ry) * 0.13;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;
      rafId = requestAnimationFrame(animate);
    };

    const onEnter = (event) => {
      activeTarget = event.currentTarget;
      ring.classList.add("cursor-ring--hover");
    };

    const onLeave = (event) => {
      event.currentTarget.style.transform = "";
      activeTarget = null;
      tx = mx;
      ty = my;
      ring.classList.remove("cursor-ring--hover");
    };

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
        el.style.transform = "";
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, [pathname]);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
