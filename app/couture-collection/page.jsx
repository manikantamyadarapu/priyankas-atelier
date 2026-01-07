export default function Couture() {
  return (
    <main className="couture-page">

      {/* ===========================
          1. HERO BANNER
      ============================ */}
      <section className="couture-hero">
        <img src="/images/couture-hero.jpg" className="couture-hero-img" />
        
        <div className="couture-hero-content">
          <h1>Couture Collection</h1>
          <p>Handcrafted heirlooms designed for the modern Indian bride.</p>
          <a href="#explore" className="couture-button">Explore Collection →</a>
        </div>
      </section>

      {/* ===========================
          2. ABOUT COUTURE
      ============================ */}
      <section className="couture-about">
        <h2>Timeless Couture. Handcrafted in India.</h2>
        <p>
          Couture at Priyanka’s Atelier celebrates the art of Indian craftsmanship.
          Every silhouette is cut, draped, and hand-embroidered by master artisans,
          blending heritage techniques with modern luxury.
        </p>
      </section>
      {/* ===========================
          3. COUTURE CATEGORIES
      ============================ */}
      <section id="explore" className="couture-categories">

        <div className="couture-category-card">
          <img src="/couture-Lehenga.jpeg" alt="Lehengas" />
          <h3>Lehengas</h3>
          <p>Intricate hand-embroidered bridal lehengas.</p>
        </div>

        <div className="couture-category-card">
          <img src="/couture-sarees.jpeg" alt="Sarees" />
          <h3>Sarees</h3>
          <p>Contemporary sarees adorned with heritage craftsmanship.</p>
        </div>

        <div className="couture-category-card">
          <img src="/images/bridal-cat.jpg" />
          <h3>Bridal Couture</h3>
          <p>Signature couture for weddings & grand celebrations.</p>
        </div>

        <div className="couture-category-card">
          <img src="/images/reception-cat.jpg" />
          <h3>Reception Wear</h3>
          <p>Modern silhouettes designed for evening glamour.</p>
        </div>

      </section>

      {/* ===========================
          4. FEATURED PIECES GALLERY
      ============================ */}
      <section className="couture-featured">
        <h2>Featured Couture Pieces</h2>
        <p>A curated selection of our most loved couture ensembles.</p>

        <div className="featured-grid">
          <img src="/images/c1.jpg" />
          <img src="/images/c2.jpg" />
          <img src="/images/c3.jpg" />
          <img src="/images/c4.jpg" />
          <img src="/images/c5.jpg" />
          <img src="/images/c6.jpg" />
        </div>
      </section>

      {/* ===========================
          5. CRAFTSMANSHIP SECTION
      ============================ */}
      <section className="couture-craft">
        <div className="craft-text">
          <h2>Where Heritage Meets Modern Design</h2>
          <p>
            Each couture piece is created using techniques passed down through 
            generations — zardozi, resham work, sequins, mukaish, and hand-thread 
            embroidery. Our atelier blends traditional Indian artistry with 
            contemporary fashion to create pieces that are truly one of a kind.
          </p>
        </div>

        <img src="/images/couture-craft.jpg" className="craft-img" />
      </section>

      {/* ===========================
          6. TESTIMONIALS
      ============================ */}
      <section className="couture-testimonials">
        <h2>Loved by Brides & Celebrities</h2>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <img src="/images/test1.jpg" />
            <p>“A masterpiece that exceeded all expectations.”</p>
          </div>

          <div className="testimonial-card">
            <img src="/images/test2.jpg" />
            <p>“Every detail felt personal and luxurious.”</p>
          </div>

          <div className="testimonial-card">
            <img src="/images/test3.jpg" />
            <p>“Truly the finest couture experience.”</p>
          </div>
        </div>
      </section>

      {/* ===========================
          7. CTA: BOOK APPOINTMENT
      ============================ */}
      <section className="couture-cta">
        <h2>Experience Couture, Up Close</h2>
        <a href="/book-a-consult" className="couture-button">
          Book Appointment →
        </a>
      </section>
    </main>
  );
}
