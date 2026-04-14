"use client";

import { useEffect, useRef, useState } from "react";
import DressParticles from "./DressParticles";

export default function BookAConsult() {
  const [isInView, setIsInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="book-consult-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="book-consult-card">
        <DressParticles isActive={isInView || isHovered} />
        <p className="book-consult-eyebrow">Personal Styling Session</p>
        <h2 className="book-consult-title">Book A Consultation</h2>
        <p className="book-consult-description">
          Connect with Priyanka&apos;s Atelier for a one-on-one bridal and couture consultation.
          Share your vision, explore silhouettes, and receive expert guidance curated just for you.
        </p>

        <div className="book-consult-actions">
          <a
            href="https://calendly.com/care-priyankasatelier/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="book-consult-btn"
          >
            Book On Calendly
          </a>

          <a
            href="https://wa.me/8186962340"
            className="book-consult-btn book-consult-btn--ghost"
          >
            Contact Studio
          </a>
        </div>
      </div>
    </section>
  );
}
