export default function PretCollection() {
  return (
    <main className="couture-page">

      {/* HERO */}
      <section className="couture-hero">
        <img src="/images/pret-hero.jpg" className="couture-hero-img" />
        
        <div className="couture-hero-content">
          <h1>Pret Collection</h1>
          <p>A blend of comfort, refinement, and everyday elegance.</p>
          <a href="#explore" className="couture-button">Explore Collection →</a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="couture-about">
        <h2>Everyday Contemporary Luxe</h2>
        <p>
          The Pret Collection offers effortless silhouettes crafted for everyday
          wear. Designed with lightweight fabrics, modern tailoring, and soft
          textures, these pieces reflect a balance of style and ease.
        </p>
      </section>

      {/* CATEGORIES */}
<section id="explore" className="couture-categories">

  <div className="couture-category-card">
    <img src="/images/pret-kurti.jpg" />
    <h3>Kurti Sets</h3>
    <p>Comfortable and elegant kurti sets for every occasion.</p>
  </div>

  <div className="couture-category-card">
    <img src="/images/pret-maxi.jpg" />
    <h3>Maxi Frocks</h3>
    <p>Flowy, graceful maxi frocks crafted for effortless style.</p>
  </div>

  <div className="couture-category-card">
    <img src="/images/pret-sharara.jpg" />
    <h3>Sharara Frocks</h3>
    <p>Beautiful sharara-style outfits with intricate detailing.</p>
  </div>

</section>


      {/* FEATURED */}
      <section className="couture-featured">
        <h2>Featured Pret Pieces</h2>
        <p>Soft, wearable designs crafted for everyday style.</p>

        <div className="featured-grid">
          <img src="/images/pf1.jpg" />
          <img src="/images/pf2.jpg" />
          <img src="/images/pf3.jpg" />
          <img src="/images/pf4.jpg" />
          <img src="/images/pf5.jpg" />
          <img src="/images/pf6.jpg" />
        </div>
      </section>

      {/* CRAFT */}
      <section className="couture-craft">
        <div className="craft-text">
          <h2>Crafted for Comfort</h2>
          <p>
            Pret wear at Priyanka’s Atelier focuses on breathable fabrics,
            effortless silhouettes, and subtle detailing. Perfect for a modern,
            on-the-move lifestyle.
          </p>
        </div>

        <img src="/images/pret-craft.jpg" className="craft-img" />
      </section>

      {/* CTA */}
      <section className="couture-cta">
        <h2>Discover More Styles</h2>
        <a href="/book-a-consult" className="couture-button">
          Book Appointment →
        </a>
      </section>

    </main>
  );
}
