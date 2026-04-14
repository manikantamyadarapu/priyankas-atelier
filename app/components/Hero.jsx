"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", shouldReduceMotion ? "0%" : "8%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", shouldReduceMotion ? "0%" : "-6%"]);

  return (
    <section ref={sectionRef} className="hero-section">
      <motion.img
        src="/Hero_img.avif"
        alt="Priyanka's Atelier Hero"
        className="hero-image"
        style={{ y: imageY }}
      />

      {/* Gradient overlay — darkens bottom for text legibility */}
      <div className="hero-overlay" />

      {/* Centred content block */}
      <div className="hero-content">
        <motion.div
          className="hero-content-inner"
          style={{ y: contentY }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.16,
                delayChildren: 0.25,
              },
            },
          }}
        >
          <motion.h1
            className="hero-headline"
            variants={{
              hidden: { opacity: 0, y: 18 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            Timeless Elegance,<br />Handcrafted for You
          </motion.h1>

          <motion.p
            className="hero-sub"
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Bespoke bridal couture &amp; luxury Indian fashion by Priyanka Ponaganti
          </motion.p>

          <motion.div
            className="hero-cta-panel"
            variants={{
              hidden: { opacity: 0, y: 14 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero-cta-row">
              <Link href="/couture-collection" className="category-button-overlay">
                BROWSE COUTURE
              </Link>
              <a href="https://calendly.com/care-priyankasatelier/30min" className="category-button-overlay">
                BOOK A CONSULT
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
