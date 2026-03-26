import Footer from "../components/Footer";
import BookAConsult from "../components/book-a-consult";

export default function BlousePage() {
  return (
    <main className="couture-page">

      {/* ===========================
          1. HERO BANNER
      ============================ */}
      <section className="couture-hero">
        <img src="/images/blouse-hero.jpg" className="couture-hero-img" />

        <div className="couture-hero-content">
          <h1>Blouse Collection</h1>
          <p>Statement blouses crafted to elevate every saree & lehenga.</p>
          <a href="#explore" className="couture-button">
            Explore Collection →
          </a>
        </div>
      </section>

      {/* ===========================
          2. ABOUT SECTION
      ============================ */}
      <section className="couture-about">
        <h2>Signature Designer Blouses</h2>
        <p>
          Our blouse designs are a perfect blend of craftsmanship and
          modern elegance. From intricate bridal blouses to contemporary
          statement pieces, each design is tailored to enhance your overall look.
        </p>
      </section>

      {/* ===========================
          3. BLOUSE CATEGORIES
      ============================ */}
      <section id="explore" className="couture-categories">

        <div className="couture-category-card">
          <img src="/bridal-blouse.jpg" />
          <h3>Bridal Blouses</h3>
          <p>Rich embroidery, heavy detailing & timeless bridal elegance.</p>
        </div>

        <div className="couture-category-card">
          <img src="/designer-blouse.jpg" />
          <h3>Designer Blouses</h3>
          <p>Trendy cuts, modern silhouettes & statement designs.</p>
        </div>

        <div className="couture-category-card">
          <img src="/minimal-blouse.jpg" />
          <h3>Minimal Blouses</h3>
          <p>Elegant, lightweight designs for everyday sophistication.</p>
        </div>

      </section>

      {/* ===========================
          4. FEATURED PIECES
      ============================ */}
      <section className="couture-featured">
        <h2>Featured Blouses</h2>
        <p>A curated edit of our most loved blouse designs.</p>

        <div className="featured-grid">
          <img src="/featured1-blouse.jpg" />
          <img src="/featured2-blouse.jpg" />
          <img src="/featured3-blouse.jpg" />
          <img src="/featured4-blouse.jpg" />
          <img src="/featured5-blouse.jpg" />
          <img src="/featured6-blouse.jpg" />
          <img src="/featured7-blouse.jpg" />
          <img src="/featured8-blouse.jpg" />
        </div>
      </section>

      {/* ===========================
          5. CRAFTSMANSHIP
      ============================ */}
      <section className="couture-craft">
        <div className="craft-text">
          <h2>Detailing That Defines You</h2>
          <p>
            From hand embroidery to precision tailoring, every blouse is crafted
            with attention to detail. Our designs ensure the perfect fit, comfort,
            and elegance—making each piece truly unique.
          </p>
        </div>

        <img src="/heritage-blouse.jpg" className="craft-img" />
      </section>

      {/* CTA */}
      <BookAConsult />

      {/* FOOTER */}
      <Footer />

    </main>
  );
}