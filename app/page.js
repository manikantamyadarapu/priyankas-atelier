import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CategorySection from "./components/CategorySection";
import TenYearsOfPK from "./components/ten-years-of-pk";  
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
        image="/Hero_img.avif"
        link="/couture-collection"
      />
         <CategorySection
        title="Lehenga Set"
        image="/Book Banner.jpg"
        link="/lehenga-set"
      />
        <CategorySection
        title="Gowns"
        image="/Gowns"
        link="/Gowns"
      />
        <CategorySection
        title="RTW Collection"
        image="/rtw.jpg"
        link="/rtw-collection"
      />

      <CategorySection
        title="Pret Collection"
        image="/pret.jpg"
        link="/pret-collection"
      />
      <CategorySection
        title="Ten year's of pk"
        image="/ten-years-of-pk"
        link="/ten-years-of-pk"
      />
      <BookAConsult/>
      <Founder />
      <QuoteSection />
      <Footer />
    </main>
  );
}
