export default function MiniAtelier() {
  return (
    <main className="couture-page">

      {/* HERO */}
      <section className="couture-hero">
        <img src="/images/mini-hero.jpg" className="couture-hero-img" />
        
        <div className="couture-hero-content">
          <h1>Mini Atelier</h1>
          <p>Handcrafted couture for the little ones.</p>
          <a href="#explore" className="couture-button">Explore Collection →</a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="couture-about">
        <h2>Luxury for Little Hearts</h2>
        <p>
          Mini Atelier features handcrafted outfits designed specially for kids.
          Soft fabrics, gentle embroidery, and playful silhouettes come together
          to create charming looks for festive and family occasions.
        </p>
      </section>

      {/* CATEGORIES */}
<section id="explore" className="couture-categories">

  <div className="couture-category-card">
    <img src="/images/birthday1.jpg" />
    <h3> First Birthday Outfits</h3>
    <p>Adorable, premium outfits for your little one’s big day.</p>
  </div>

  <div className="couture-category-card">
    <img src="/images/traditional-l.jpg" />
    <h3>Traditional Lehengas</h3>
    <p>Handcrafted lehengas with soft fabrics & elegant details.</p>
  </div>

  <div className="couture-category-card">
    <img src="/images/western-frock.jpg" />
    <h3>Western Frocks</h3>
    <p>Charming and playful western-style designer frocks.</p>
  </div>

  <div className="couture-category-card">
    <img src="/images/traditional-frock.jpg" />
    <h3>Traditional Frocks</h3>
    <p>Classic blouse & skirt–style frocks with ethnic detailing.</p>
  </div>

</section>


      {/* FEATURED */}
      <section className="couture-featured">
        <h2>Featured Mini Atelier Pieces</h2>
        <p>Crafted with care, love, and playful charm.</p>

        <div className="featured-grid">
          <img src="/images/mf1.jpg" />
          <img src="/images/mf2.jpg" />
          <img src="/images/mf3.jpg" />
          <img src="/images/mf4.jpg" />
          <img src="/images/mf5.jpg" />
          <img src="/images/mf6.jpg" />
        </div>
      </section>

      {/* CRAFT */}
      <section className="couture-craft">
        <div className="craft-text">
          <h2>Soft. Safe. Comfortable.</h2>
          <p>
            Every Mini Atelier outfit is created using gentle fabrics and 
            delicate detailing to ensure comfort and elegance for kids.
          </p>
        </div>

        <img src="/images/mini-craft.jpg" className="craft-img" />
      </section>

      {/* CTA */}
      <section className="couture-cta">
        <h2>Explore Adorable Designs</h2>
        <a href="/book-a-consult" className="couture-button">
          Book Appointment →
        </a>
      </section>

    </main>
  );
}
