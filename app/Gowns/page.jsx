import Footer from "../components/Footer";
import BookAConsult from "../components/book-a-consult";

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
    <img src="/traditional-gown.jpg" />
    <h3>Traditional Gowns</h3>
    <p>Classic Indian-inspired gowns with rich detailing.</p>
  </div>

  <div className="couture-category-card">
    <img src="/simple-gown.jpg" />
    <h3>Western Gowns</h3>
    <p>Modern silhouettes crafted for premium elegance.</p>
  </div>

  <div className="couture-category-card">
    <img src="/western-gown.jpg" />
    <h3>Simple Gowns</h3>
    <p>Minimal, graceful gowns perfect for intimate occasions.</p>
  </div>

  <div className="couture-category-card">
    <img src="/indowestern-gown.jpg" />
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
          <img src="/featured1-gown.jpg" />
          <img src="/featured2-gown.jpg" />
          <img src="/featured3-gown.jpg" />
          <img src="/featured4-gown.jpg" />
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

        <img src="/heritage-gown" className="craft-img" />
      </section>


      <BookAConsult />
      <Footer />
      


    </main>
  );
}
