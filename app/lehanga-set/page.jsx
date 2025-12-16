export default function LehengaSet() {
  return (
    <main className="couture-page">

      {/* ===========================
          1. HERO BANNER
      ============================ */}
      <section className="couture-hero">
        <img src="/images/lehenga-hero.jpg" className="couture-hero-img" />
        
        <div className="couture-hero-content">
          <h1>Lehenga Set</h1>
          <p>Elegantly handcrafted lehengas for every celebration.</p>
          <a href="#explore" className="couture-button">Explore Collection →</a>
        </div>
      </section>

      {/* ===========================
          2. ABOUT SECTION
      ============================ */}
      <section className="couture-about">
        <h2>Timeless Bridal Lehengas</h2>
        <p>
          Each lehenga set at Priyanka’s Atelier is handcrafted by master artisans,
          blending traditional Indian techniques with contemporary silhouettes.
          Designed for brides who seek elegance, emotion, and timeless beauty.
        </p>
      </section>

      {/* ===========================
          3. LEHENGA CATEGORIES
      ============================ */}
      <section id="explore" className="couture-categories">

        <div className="couture-category-card">
          <img src="/images/lehenga1.jpg" />
          <h3>Bridal Lehengas</h3>
          <p>Classic red & maroon silhouettes with intricate handwork.</p>
        </div>

        <div className="couture-category-card">
          <img src="/images/lehenga2.jpg" />
          <h3>Reception Lehengas</h3>
          <p>Modern shimmer, sequins, and contemporary silhouettes.</p>
        </div>

        <div className="couture-category-card">
          <img src="/images/lehenga3.jpg" />
          <h3>Sangeet Lehengas</h3>
          <p>Lightweight, elegant, and expressive for evening celebrations.</p>
        </div>

        <div className="couture-category-card">
          <img src="/images/lehenga4.jpg" />
          <h3>Handwoven Lehengas</h3>
          <p>Banarasi, Kanjivaram, and artisanal textile lehengas.</p>
        </div>

      </section>

      {/* ===========================
          4. FEATURED PIECES
      ============================ */}
      <section className="couture-featured">
        <h2>Featured Lehenga Sets</h2>
        <p>A curated selection of our most loved handcrafted lehengas.</p>

        <div className="featured-grid">
          <img src="/images/l1.jpg" />
          <img src="/images/l2.jpg" />
          <img src="/images/l3.jpg" />
          <img src="/images/l4.jpg" />
          <img src="/images/l5.jpg" />
          <img src="/images/l6.jpg" />
        </div>
      </section>

      {/* ===========================
          5. CRAFTSMANSHIP SECTION
      ============================ */}
      <section className="couture-craft">
        <div className="craft-text">
          <h2>Handcrafted With Heritage</h2>
          <p>
            Each lehenga is brought to life through age-old Indian craftsmanship—
            zardosi, resham, sequin work, stone detailing, mukaish, and hand-thread embroidery.
            Our artisans combine heritage techniques with modern design sensibilities to
            create lehengas that are timeless and deeply emotional.
          </p>
        </div>

        <img src="/images/lehenga-craft.jpg" className="craft-img" />
      </section>

      {/* ===========================
          6. TESTIMONIALS (Optional)
      ============================ */}
      <section className="couture-testimonials">
        <h2>Loved by Brides</h2>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <img src="/images/bride1.jpg" />
            <p>“The lehenga made my day unforgettable.”</p>
          </div>

          <div className="testimonial-card">
            <img src="/images/bride2.jpg" />
            <p>“Every detail reflected true craftsmanship.”</p>
          </div>

          <div className="testimonial-card">
            <img src="/images/bride3.jpg" />
            <p>“It felt royal, elegant, and magical.”</p>
          </div>
        </div>
      </section>

      {/* ===========================
          7. CTA SECTION
      ============================ */}
      <section className="couture-cta">
        <h2>Begin Your Bridal Journey</h2>
        <a href="/book-a-consult" className="couture-button">
          Book Appointment →
        </a>
      </section>

    </main>
  );
}
