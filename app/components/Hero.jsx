// app/components/Hero.jsx
export default function Hero() {
  return (
    <section className="hero-section">
      <img
        src="/Hero_img.avif"
        alt="Priyanka's Atelier Hero"
        className="hero-image"
      />

      {/* Gradient overlay — darkens bottom for text legibility */}
      <div className="hero-overlay" />

      {/* Centred content block */}
      <div className="hero-content">
        <h1 className="hero-headline">
          Timeless Elegance,<br />Handcrafted for You
        </h1>

        <p className="hero-sub">
          Bespoke bridal couture &amp; luxury Indian fashion by Priyanka Ponaganti
        </p>

        <div className="hero-cta-panel">
          <div className="hero-cta-row">
            <a href="/couture-collection" className="category-button-overlay">
              EXPLORE COLLECTIONS
            </a>
            <a href="https://calendly.com/care-priyankasatelier/30min" className="category-button-overlay">
              BOOK A CONSULT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
