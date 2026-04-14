import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategorySection from "./components/CategorySection";
import BookAConsult from "./components/book-a-consult";
import Founder from "./components/Founder";
import QuoteSection from "./components/QuoteSection";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero/>
      {/* ALL CATEGORY BANNERS */}
      <Reveal delay={0.05}>
        <CategorySection
        title="Couture Collection"
        image="/couture-hero.webp"
        link="/couture-collection"
      />
      </Reveal>
      <Reveal delay={0.08}>
         <CategorySection
        title="Lehenga Set"
        image="/lehenga-hero.jpg"
        link="/lehenga-set"
      />
      </Reveal>
      <Reveal delay={0.1}>
        <CategorySection
        title="Gowns"
        image="/gowns-hero.png"
        link="/Gowns"
      />
      </Reveal>
      <Reveal delay={0.12}>
        <CategorySection
        title="RTW Collection"
        image="/rtw-hero.jpg"
        link="/rtw-collection"
      />
      </Reveal>

      <Reveal delay={0.14}>
      <CategorySection
        title="Pret Collection"
        image="/pret-collection-hero.webp"
        link="/pret-collection"
      />
      </Reveal>
      <Reveal delay={0.16}>
      <CategorySection
        title="Ten year's of pk"
        image="/ten_years.jpg"
      />
      </Reveal>
      <Reveal>
        <BookAConsult/>
      </Reveal>
      <Reveal>
        <Founder />
      </Reveal>
      <Reveal>
        <QuoteSection />
      </Reveal>
      <Footer />
    </main>
  );
}
