"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function CategorySection({ title, image, link }) {
  const sectionRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-3%", shouldReduceMotion ? "-3%" : "3%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["4%", shouldReduceMotion ? "4%" : "-4%"]);

  return (
    <section ref={sectionRef} className="category-section">
      <div className="category-image-overlay">
        <motion.div className="category-image-parallax" style={{ y: imageY }}>
          <img src={image} alt={title} className="category-image" />
        </motion.div>

        <motion.div className="category-content-overlay" style={{ y: textY }}>
          <h2>{title}</h2>
          {link && (
            <Link href={link} className="category-button-overlay">
              Explore
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
