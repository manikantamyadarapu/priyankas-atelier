export default function AboutUs() {
  return (
    <main className="category-page">

      <section className="category-hero">
        <img src="/images/about-hero.jpg" />
        <h1 className="category-hero-title">About Us</h1>
      </section>

      <p className="category-about">
        Priyanka’s Atelier celebrates heritage craftsmanship from Telangana.
        Each piece is handmade with precision, elegance and a deep sense of culture.
      </p>

      <section className="category-highlight">
        <img src="/images/founder.jpg" />
        <h3>The Story of Priyanka’s Atelier</h3>
      </section>

      <ul className="category-points">
        <li>Handcrafted luxury</li>
        <li>Timeless design philosophy</li>
        <li>From Hyderabad, inspired by culture</li>
      </ul>

      <div className="category-cta">
        <a href="/book-a-consult">Book Appointment →</a>
      </div>

    </main>
  );
}
