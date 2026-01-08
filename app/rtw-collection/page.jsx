import Footer from "../components/Footer";
import BookAConsult from "../components/book-a-consult";
export default function RTWCollection() {
  return (
    <main className="couture-page">

      {/* HERO */}
      <section className="couture-hero">
        <img src="/images/rtw-hero.jpg" className="couture-hero-img" />
        
        <div className="couture-hero-content">
          <h1>RTW Collection</h1>
          <p>Thoughtfully designed ready-to-wear ensembles.</p>
          <a href="#explore" className="couture-button">Explore Collection →</a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="couture-about">
        <h2>Effortless, Elegant, Ready-to-Wear</h2>
        <p>
          The RTW Collection features contemporary silhouettes crafted with
          comfort, elegance, and everyday luxury in mind. From festive wear to
          refined occasion outfits — each piece blends modern design with
          signature craftsmanship.
        </p>
      </section>

      {/* CATEGORIES */}
<section id="explore" className="couture-categories">

  <div className="couture-category-card">
    <img src="/images/rtw-western.jpg" />
    <h3>Western Style</h3>
    <p>Contemporary silhouettes crafted for modern elegance.</p>
  </div>

  <div className="couture-category-card">
    <img src="/images/rtw-traditional.jpg" />
    <h3>Traditional Style</h3>
    <p>Classic Indian designs with handcrafted detailing.</p>
  </div>

  <div className="couture-category-card">
    <img src="/images/rtw-layered-saree.jpg" />
    <h3>Layered Style Sarees</h3>
    <p>Graceful multi-layer drapes designed for modern celebrations.</p>
  </div>

</section>



      {/* FEATURED */}
      <section className="couture-featured">
        <h2>Featured RTW Pieces</h2>
        <p>A curated selection of our signature ready-to-wear ensembles.</p>

        <div className="featured-grid">
          <img src="/images/rf1.jpg" />
          <img src="/images/rf2.jpg" />
          <img src="/images/rf3.jpg" />
          <img src="/images/rf4.jpg" />
          <img src="/images/rf5.jpg" />
          <img src="/images/rf6.jpg" />
        </div>
      </section>

      {/* CRAFT */}
      <section className="couture-craft">
        <div className="craft-text">
          <h2>Everyday Luxury</h2>
          <p>
            Designed with breathable fabrics and modern craftsmanship, our RTW
            line celebrates luxury that can be worn every day. Artful details
            bring character and charm to each piece.
          </p>
        </div>

        <img src="/images/rtw-craft.jpg" className="craft-img" />
      </section>
      <BookAConsult />
      <Footer />
    </main>
  );
}
