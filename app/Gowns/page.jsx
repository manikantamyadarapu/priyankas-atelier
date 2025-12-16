export default function Gowns() {
  return (
    <main className="couture-page">

      {/* ===========================
          1. HERO BANNER
      ============================ */}
      <section className="couture-hero">
        <img src="/images/gown-hero.jpg" className="couture-hero-img" />
        
        <div className="couture-hero-content">
          <h1>Gowns</h1>
          <p>Elegant handcrafted gowns for modern celebrations.</p>
          <a href="#explore" className="couture-button">Explore Collection →</a>
        </div>
      </section>

      {/* ===========================
          2. ABOUT SECTION
      ============================ */}
      <section className="couture-about">
        <h2>Timeless Evening Gowns</h2>
        <p>
          Our gowns are designed to celebrate femininity, grace, and refinement.
          Each piece blends luxurious fabrics with artistic craftsmanship,
          creating silhouettes perfect for receptions, cocktails, and evening events.
        </p>
      </section>

      {/* ===========================
          3. GOWN CATEGORIES
      ============================ */}
<section id="explore" className="couture-categories">

  <div className="couture-category-card">
    <img src="/images/gown-traditional.jpg" />
    <h3>Traditional Gowns</h3>
    <p>Classic Indian-inspired gowns with rich detailing.</p>
  </div>

  <div className="couture-category-card">
    <img src="/images/gown-western.jpg" />
    <h3>Western Gowns</h3>
    <p>Modern silhouettes crafted for premium elegance.</p>
  </div>

  <div className="couture-category-card">
    <img src="/images/gown-simple.jpg" />
    <h3>Simple Gowns</h3>
    <p>Minimal, graceful gowns perfect for intimate occasions.</p>
  </div>

  <div className="couture-category-card">
    <img src="/images/gown-indo.jpg" />
    <h3>Indo-Western Gowns</h3>
    <p>A fusion of Indian artistry with contemporary design.</p>
  </div>

</section>


      {/* ===========================
          4. FEATURED PIECES
      ============================ */}
      <section className="couture-featured">
        <h2>Featured Gowns</h2>
        <p>A curated selection of our finest handcrafted gowns.</p>

        <div className="featured-grid">
          <img src="/images/gf1.jpg" />
          <img src="/images/gf2.jpg" />
          <img src="/images/gf3.jpg" />
          <img src="/images/gf4.jpg" />
          <img src="/images/gf5.jpg" />
          <img src="/images/gf6.jpg" />
        </div>
      </section>

      {/* ===========================
          5. CRAFTSMANSHIP SECTION
      ============================ */}
      <section className="couture-craft">
        <div className="craft-text">
          <h2>Crafted With Elegance</h2>
          <p>
            Our gowns are created using luxurious fabrics such as satin, organza,
            tulle, and silk blends. Each piece is brought to life through
            hand-embroidery, intricate beadwork, and expert tailoring — creating
            ensembles that radiate grace and sophistication.
          </p>
        </div>

        <img src="/images/gown-craft.jpg" className="craft-img" />
      </section>

      {/* ===========================
          6. TESTIMONIALS
      ============================ */}
      <section className="couture-testimonials">
        <h2>Loved by Women Everywhere</h2>

        <div className="testimonials-grid">
          <div className="testimonial-card">
            <img src="/images/gown-bride1.jpg" />
            <p>“The gown was breathtaking — truly unforgettable.”</p>
          </div>

          <div className="testimonial-card">
            <img src="/images/gown-bride2.jpg" />
            <p>“Perfect fit, perfect elegance. I felt like royalty.”</p>
          </div>

          <div className="testimonial-card">
            <img src="/images/gown-bride3.jpg" />
            <p>“Every detail was magical and beautifully crafted.”</p>
          </div>
        </div>
      </section>

      {/* ===========================
          7. CTA SECTION
      ============================ */}
      <section className="couture-cta">
        <h2>Create Your Dream Look</h2>
        <a href="/book-a-consult" className="couture-button">
          Book Appointment →
        </a>
      </section>

    </main>
  );
}
