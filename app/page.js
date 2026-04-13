import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategorySection from "./components/CategorySection";
import BookAConsult from "./components/book-a-consult";
import Founder from "./components/Founder";
import QuoteSection from "./components/QuoteSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero/>
      {/* ALL CATEGORY BANNERS */}
        <CategorySection
        title="Couture Collection"
        image="/couture-hero.webp"
        link="/couture-collection"
      />
         <CategorySection
        title="Lehenga Set"
        image="/lehenga-hero.jpg"
        link="/lehenga-set"
      />
        <CategorySection
        title="Gowns"
        image="/gowns-hero.png"
        link="/Gowns"
      />
        <CategorySection
        title="RTW Collection"
        image="/rtw-hero.jpg"
        link="/rtw-collection"
      />

      <CategorySection
        title="Pret Collection"
        image="/pret-collection-hero.png"
        link="/pret-collection"
      />
      <CategorySection
        title="Ten year's of pk"
        image="/ten_years.jpg"
      />
      <BookAConsult/>
      <Founder />
      <QuoteSection />
      <Footer />
    </main>
  );
}
