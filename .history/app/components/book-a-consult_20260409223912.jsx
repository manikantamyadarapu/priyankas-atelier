"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BookAConsult() {
  const canvasRef  = useRef(null);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  /* ── Antigravity GSAP scroll zoom ── */
  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    section.style.backgroundColor = "#000000";

    gsap.set(section, {
      scale: 0.78,
      borderRadius: "32px",
      opacity: 1,
      backgroundColor: "#000000",
      transformOrigin: "center center",
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 95%",
        end: "top 15%",
        scrub: 1.5,
      },
    }).to(section, {
      scale: 1,
      borderRadius: "12px",
      ease: "power1.inOut",
    });

    const items = content.querySelectorAll(
      ".consult-sub, .consult-title, .consult-text, .category-button-overlay"
    );
    gsap.set(items, { opacity: 0, y: 28 });

    ScrollTrigger.create({
      trigger: section,
      start: "top 60%",
      once: true,
      onEnter: () => {
        gsap.to(items, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power4.out",
          stagger: 0.15,
          delay: 0.2,
        });
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  /* ── Canvas letter animation ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W, H, letters = [], animId;
    const mouse = { x: -999, y: -999 };
    const SOURCE = "PRIYANKA'S ATELIER";
    const COLORS = [
      "rgba(212,175,120,","rgba(180,130,180,","rgba(150,200,180,",
      "rgba(210,160,160,","rgba(140,170,210,","rgba(230,200,140,",
      "rgba(190,145,165,","rgba(160,210,200,","rgba(220,180,130,",
      "rgba(175,155,210,","rgba(255,255,255,","rgba(255,255,255,",
    ];

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      W = canvas.width = rect.width;
      H = canvas.height = rect.height;
    }

    class Letter {
      constructor(init) {
        this.char  = SOURCE[Math.floor(Math.random() * SOURCE.length)];
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.reset(init);
      }
      reset(init) {
        this.x           = Math.random() * W;
        this.y           = init ? Math.random() * H : H + 30;
        this.size        = Math.random() * 28 + 18;
        this.speedY      = -(Math.random() * 0.45 + 0.1);
        this.speedX      = (Math.random() - 0.5) * 0.3;
        this.opacity     = Math.random() * 0.45 + 0.12;
        this.baseOpacity = this.opacity;
        this.rotation    = Math.random() * Math.PI * 2;
        this.rotSpeed    = (Math.random() - 0.5) * 0.009;
        this.pulse       = Math.random() * Math.PI * 2;
        this.pulseSpeed  = Math.random() * 0.016 + 0.005;
        this.wobble      = Math.random() * Math.PI * 2;
        this.wobbleSpeed = Math.random() * 0.018 + 0.004;
        this.wobbleAmp   = Math.random() * 0.35 + 0.1;
        this.vx = 0; this.vy = 0;
      }
      update() {
        this.pulse    += this.pulseSpeed;
        this.wobble   += this.wobbleSpeed;
        this.rotation += this.rotSpeed;
        this.speedX   += Math.sin(this.wobble) * this.wobbleAmp * 0.008;
        this.speedX   *= 0.99;
        const dx = this.x - mouse.x, dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130 && dist > 0) {
          const force = (130 - dist) / 130;
          this.vx += (dx / dist) * force * 5.5;
          this.vy += (dy / dist) * force * 5.5;
          this.opacity = Math.min(this.baseOpacity * 2.8, 0.92);
        } else {
          this.opacity += (this.baseOpacity - this.opacity) * 0.04;
        }
        this.vx *= 0.91; this.vy *= 0.91;
        this.x  += this.speedX + this.vx;
        this.y  += this.speedY + this.vy;
        if (this.y < -50 || this.x < -80 || this.x > W + 80) this.reset(false);
      }
      draw() {
        const alpha = this.opacity * (0.78 + 0.22 * Math.sin(this.pulse));
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.font         = `italic ${this.size * 1.3}px 'Cormorant Garamond', serif`;
        ctx.fillStyle    = this.color + alpha + ")";
        ctx.textAlign    = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(this.char, 0, 0);
        ctx.restore();
      }
    }

    // ✅ Fixed: was missing closing } in your file
    function init() {
      resize();
      letters = [];
      for (let i = 0; i < 220; i++) letters.push(new Letter(true));
    }

    function animate() {
      ctx.clearRect(0, 0, W, H);
      letters.forEach(l => { l.update(); l.draw(); });
      animId = requestAnimationFrame(animate);
    }

    const fromMouse = (e) => { const r = canvas.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top }; };
    const fromTouch = (e) => { const r = canvas.getBoundingClientRect(); const t = e.touches[0]; return { x: t.clientX - r.left, y: t.clientY - r.top }; };

    const sec          = canvas.parentElement;
    const onMouseMove  = (e) => { const p = fromMouse(e); mouse.x = p.x; mouse.y = p.y; };
    const onMouseLeave = ()  => { mouse.x = -999; mouse.y = -999; };
    const onTouchStart = (e) => { const p = fromTouch(e); mouse.x = p.x; mouse.y = p.y; };
    const onTouchMove  = (e) => { e.preventDefault(); const p = fromTouch(e); mouse.x = p.x; mouse.y = p.y; };
    const onTouchEnd   = ()  => { mouse.x = -999; mouse.y = -999; };

    sec.addEventListener("mousemove",  onMouseMove);
    sec.addEventListener("mouseleave", onMouseLeave);
    sec.addEventListener("touchstart", onTouchStart, { passive: true });
    sec.addEventListener("touchmove",  onTouchMove,  { passive: false });
    sec.addEventListener("touchend",   onTouchEnd);
    window.addEventListener("resize",  init);

    init(); animate();

    return () => {
      cancelAnimationFrame(animId);
      sec.removeEventListener("mousemove",  onMouseMove);
      sec.removeEventListener("mouseleave", onMouseLeave);
      sec.removeEventListener("touchstart", onTouchStart);
      sec.removeEventListener("touchmove",  onTouchMove);
      sec.removeEventListener("touchend",   onTouchEnd);
      window.removeEventListener("resize",  init);
    };
  }, []);

  return (
    <div className="consult-wrapper">
      <section ref={sectionRef} className="consult-section">

        <canvas ref={canvasRef} className="consult-canvas" />

        <div ref={contentRef} className="consult-content">
          <p className="consult-sub">PRIYANKA&apos;S ATELIER</p>

          <h1 className="consult-title">
            Book <em>Appointment</em>
          </h1>

          <p className="consult-text">
            Whether you&apos;re seeking bespoke bridal couture, festive ensembles,
            or timeless heirlooms — book an appointment to experience the
            craftsmanship and philosophy of Priyanka&apos;s Atelier up close.
          </p>

          <a
            href="https://calendly.com/care-priyankasatelier/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="category-button-overlay"
          >
            Book Now
          </a>
        </div>

      </section>
    </div>
  );
}