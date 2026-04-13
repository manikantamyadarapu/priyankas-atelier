import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BookAConsult from "../components/book-a-consult";
import { FaStar, FaStarHalfAlt, FaRegStar, FaMapMarkerAlt, FaClock, FaPhoneAlt } from "react-icons/fa";

export const metadata = {
  title: "Production | Priyanka's Atelier",
  description: "Kala Creations Boutique - The production house of Priyanka's Atelier.",
};

export default function ProductionPage() {
  return (
    <main>
      <Navbar />

      <div className="production-page">
        <section className="production-hero">
          <div className="production-hero-content">
            <p className="production-eyebrow">THE CRAFT BEHIND THE MAGIC</p>
            <h1 className="production-title">Kala Creations Boutique</h1>
          </div>
        </section>

        <section className="production-details-wrapper">
          <div className="production-card">
            {/* IMAGE SIDE */}
            <div className="production-image-side">
              <img src="/production-img.png" alt="Kala Creations Boutique Production House" />
            </div>

            {/* CONTENT SIDE */}
            <div className="production-info-side">
              <p className="consult-sub">OUR ATELIER</p>
              <h2 className="production-name">The Production House</h2>


              <p className="production-description">
                Welcome to the heart of Priyanka's Atelier. Kala Creations Boutique is our dedicated production house where visionary designs are meticulously crafted into reality. From intricate hand-embroidery to master tailoring, our artisans breathe life into every fabric, ensuring that every garment reflects our commitment to unparalleled luxury and quality.
              </p>

              <div className="production-details">
                <div className="production-item">
                  <FaMapMarkerAlt className="production-icon" />
                  <div className="production-text-block">
                    <span>Punjagutta Officers Colony, Ameerpet, Hyderabad, Telangana 500016</span>
                    <span className="plus-code">CCMW+FR Hyderabad, Telangana</span>
                  </div>
                </div>

                <div className="production-item">
                  <FaClock className="production-icon" />
                  <div className="production-text-block">
                    <span>Closed ⋅ Opens 11 am Mon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <BookAConsult />
      <Footer />
    </main>
  );
}
