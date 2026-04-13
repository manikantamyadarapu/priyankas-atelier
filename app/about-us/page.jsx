import Navbar from "../components/Navbar";
import BookAConsult from "../components/book-a-consult";
import Footer from "../components/Footer";

export default function AboutUs() {
  return (
    <main className="simple-about-page">
      <Navbar />

      <section className="simple-about-hero">
        <img src="/about-hero.png" alt="Priyanka's Atelier" />
        <div className="simple-about-hero-content">
          <h1>About Us</h1>
          <p>
            Handcrafted Indian fashion designed with elegance, culture, and
            personal detail.
          </p>
        </div>
      </section>

      <section className="simple-about-story">
        <h2>Priyanka's Atelier</h2>
        <p>
          Priyanka's Atelier is a designer fashion label from Hyderabad,
          creating bridal wear, couture, blouses, gowns, lehengas, pret,
          ready-to-wear, and kidswear. Every outfit is made with thoughtful
          design, fine craftsmanship, and a focus on making each woman feel
          confident and graceful.
        </p>
      </section>

      <section className="simple-about-founder">
        <div>
          <img src="/about-image.jpg" alt="Priyanka Ponaganti" />
        </div>

        <div>
          <p className="simple-about-label">Founder's Story</p>
          <h2>Priyanka Ponaganti</h2>
          <p>
            Founded by Priyanka at the age of 20, the brand reflects her love
            for creativity, detail, and handcrafted elegance. Her designs blend
            traditional Indian artistry with modern silhouettes for special
            occasions.
          </p>
        </div>
      </section>

      <BookAConsult />
      <Footer />
    </main>
  );
}
