import Footer from "../components/Footer";
import BookAConsult from "../components/book-a-consult";
export default function LehengaSet() {
  return (
    <main className="couture-page">

      {/* ===========================
          1. HERO BANNER
      ============================ */}
      <section className="couture-hero">
        <img src="/lehenga-hero.jpg" className="couture-hero-img" />
        
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
          <img src="/bridal-lehenga.jpg" />
          <h3>Bridal Lehengas</h3>
          <p>Classic red & maroon silhouettes with intricate handwork.</p>
        </div>

        <div className="couture-category-card">
          <img src="/reception-lehenga.jpg" />
          <h3>Reception Lehengas</h3>
          <p>Modern shimmer, sequins, and contemporary silhouettes.</p>
        </div>

        <div className="couture-category-card">
          <img src="/sangeet-lehenga.jpg" />
          <h3>Sangeet Lehengas</h3>
          <p>Lightweight, elegant, and expressive for evening celebrations.</p>
        </div>

        <div className="couture-category-card">
          <img src="/partywear-lehenga.jpg" />
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
          <img src="/featured1-lehenga" />
          <img src="/featured2-lehenga.jpg" />
          <img src="/featured3-lehenga.jpg" />
          <img src="/featured4-lehenga.jpg" />

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

        <img src="/heritage-lehenga.jpg" className="craft-img" />
      </section>

      <BookAConsult />
      <Footer />

    </main>
  );
}
