import Footer from "../components/Footer";
import BookAConsult from "../components/book-a-consult";
export default function Couture() {
  return (
    <main className="couture-page">

      {/* ===========================
          1. HERO BANNER
      ============================ */}
      <section className="couture-hero">
        <img src="/couture-page-header.jpg" className="couture-hero-img" />
        
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
          <img src="/bridal-couture.jpg" />
          <h3>Bridal Couture</h3>
          <p>Signature couture for weddings & grand celebrations.</p>
        </div>

        <div className="couture-category-card">
          <img src="/reception-wear.jpg" />
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
          <img src="/featured-couture1.jpg" />
          <img src="/featured-couture2.jpg" />
          <img src="/featured-couture3.jpg" />
          <img src="/featured-couture4.jpg" />
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

        <img src="/featured-couture-modern.jpg" className="craft-img" />
      </section>

      {/* ===========================
          6. TESTIMONIALS
      ============================ */}
     
      <BookAConsult />
      <Footer />
    </main>
  );
}
