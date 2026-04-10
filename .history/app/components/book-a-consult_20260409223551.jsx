"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SOURCE = "PRIYANKA'S ATELIER";
const COLORS = [
  "rgba(212,175,120,", "rgba(180,130,180,", "rgba(150,200,180,",
  "rgba(210,160,160,", "rgba(140,170,210,", "rgba(230,200,140,",
  "rgba(190,145,165,", "rgba(160,210,200,", "rgba(220,180,130,",
  "rgba(175,155,210,", "rgba(255,255,255,", "rgba(255,255,255,",
];

export default function BookAConsult() {
  const canvasRef  = useRef(null);
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const wrapperRef = useRef(null);

  /* ══════════════════════════════════════
     GSAP  —  Antigravity scroll animation
     Phase 1: scale 0.72 → 1  (card grows)
     Phase 2: borderRadius 28px → 0px (edges hit screen)
     Phase 3: width/margin expand to 100vw
  ══════════════════════════════════════ */
  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const wrapper = wrapperRef.current;
    if (!section || !content || !wrapper) return;

    /* ── initial state: small centred card ── */
    gsap.set(section, {
      scale: 0.70,
      opacity: 0,
      borderRadius: "28px",
      transformOrigin: "center center",
    });

    gsap.set(content, { opacity: 0, y: 36 });

    /* ── PHASE 1 — card scales up + fades in ── */
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: "top 90%",       /* starts when wrapper enters viewport   */
        end: "top 10%",         /* ends when wrapper top hits 10% mark   */
        scrub: 1.8,             /* weighted scrub — feels like Antigravity */
      },
    });

    tl.to(section, {
      scale: 1,
      opacity: 1,
      borderRadius: "12px",
      ease: "power2.inOut",
    });

    /* ── PHASE 2 — expand to full bleed (border-radius → 0) ── */
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: wrapper,
        start: "top -20%",      /* after phase 1 finishes                */
        end: "top -80%",        /* full bleed reached                    */
        scrub: 2,
      },
    });

    tl2.to(section, {
      borderRadius: "0px",
      width: "100vw",
      maxWidth: "100vw",
      margin: "0 auto",
      minHeight: "100vh",
      ease: "power2.inOut",
    });

    /* ── text reveal (one-shot when card is ~60% visible) ── */
    ScrollTrigger.create({
      trigger: wrapper,
      start: "top 55%",
      once: true,
      onEnter: () => {
        gsap.to(content, {
          opacity: 1,
          y: 0,
          duration: 1.4,
          ease: "power4.out",
        });

        /* stagger each text child */
        const items = content.querySelectorAll(
          ".consult-sub, .consult-title, .consult-text, .consult-btn"
        );
        gsap.fromTo(
          items,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power4.out",
            stagger: 0.14,
            delay: 0.2,
          }
        );
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  /* ══════════════════════════
     Canvas floating letters
  ══════════════════════════ */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W, H, letters = [], animId;
    const mouse = { x: -999, y: -999 };

    function resize() {
      const rect = canvas.parentElement.getBoundingClientRect();
      W = canvas.width  = rect.width;
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
        this.vx = 0;
        this.vy = 0;
      }
      update() {
        this.pulse    += this.pulseSpeed;
        this.wobble   += this.wobbleSpeed;
        this.rotation += this.rotSpeed;
        this.speedX   += Math.sin(this.wobble) * this.wobbleAmp * 0.008;
        this.speedX   *= 0.99;
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 130 && dist > 0) {
          const f = (130 - dist) / 130;
          this.vx += (dx / dist) * f * 5.5;
          this.vy += (dy / dist) * f * 5.5;
          this.opacity = Math.min(this.baseOpacity * 2.8, 0.92);
        } else {
          this.opacity += (this.baseOpacity - this.opacity) * 0.04;
        }
        this.vx *= 0.91;
        this.vy *= 0.91;
        this.x  += this.speedX + this.vx;
        this.y  += this.speedY + this.vy;
        if (this.y < -50 || this.x < -80 || this.x > W + 80) this.reset(false);
      }
      draw() {
        const alpha = this.opacity * (0.78 + 0.22 * Math.sin(this.pulse));
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.font         = `italic ${this.size}px 'Cormorant Garamond', serif`;
        ctx.fillStyle    = this.color + alpha + ")";
        ctx.textAlign    = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(this.char, 0, 0);
        ctx.restore();
      }
    }

    function init() {
      resize();
      letters = [];
      for (let i = 0; i < 130; i++) letters.push(new Letter(true));
    }
    function animate() {
      ctx.clearRect(0, 0, W, H);
      letters.forEach(l => { l.update(); l.draw(); });
      animId = requestAnimationFrame(animate);
    }

    const sec   = canvas.parentElement;
    const onMM  = (e) => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; };
    const onML  = ()  => { mouse.x = -999; mouse.y = -999; };
    const onTS  = (e) => { const r = canvas.getBoundingClientRect(); const t = e.touches[0]; mouse.x = t.clientX - r.left; mouse.y = t.clientY - r.top; };
    const onTM  = (e) => { e.preventDefault(); const r = canvas.getBoundingClientRect(); const t = e.touches[0]; mouse.x = t.clientX - r.left; mouse.y = t.clientY - r.top; };
    const onTE  = ()  => { mouse.x = -999; mouse.y = -999; };

    sec.addEventListener("mousemove",  onMM);
    sec.addEventListener("mouseleave", onML);
    sec.addEventListener("touchstart", onTS, { passive: true });
    sec.addEventListener("touchmove",  onTM, { passive: false });
    sec.addEventListener("touchend",   onTE);
    window.addEventListener("resize",  init);

    init();
    animate();

    return () => {
      cancelAnimationFrame(animId);
      sec.removeEventListener("mousemove",  onMM);
      sec.removeEventListener("mouseleave", onML);
      sec.removeEventListener("touchstart", onTS);
      sec.removeEventListener("touchmove",  onTM);
      sec.removeEventListener("touchend",   onTE);
      window.removeEventListener("resize",  init);
    };
  }, []);

  return (
    /*
      .consult-wrapper  — tall scroll container (gives GSAP scroll distance)
      .consult-section  — the black card (GSAP animates this)
    */
    <div ref={wrapperRef} className="consult-wrapper">
      <div className="consult-sticky">
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
            >
              <button className="consult-btn">Book Now</button>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}