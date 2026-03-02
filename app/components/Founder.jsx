import Image from "next/image";

export default function Founder() {
  return (
    <section className="founder-section">
      <div className="founder-container">

        {/* LEFT TEXT BLOCK */}
        <div className="founder-left">
          <p className="founder-subtitle">FOUNDER’S STORY</p>

          <h2 className="founder-title">Priyanka Ponaganti</h2>

          <div className="founder-underline"></div>

          <p className="founder-text">
            Priyanka’s Atelier is a designer fashion label born from passion, creativity, and a love for handcrafted elegance. The journey began with Priyanka, who discovered her interest in fashion design at the age of 20 and turned her dream into reality through thoughtful designs and fine craftsmanship. Each creation reflects a blend of modern aesthetics and timeless style, designed to celebrate individuality, confidence, and grace in every woman.
          </p>

          <a href="#" className="founder-link">About the founder</a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="founder-image-container">
          <Image
            src="/founder.jpg"
            alt="Founder"
            width={550}
            height={780}
            className="founder-image"
          />
        </div>

      </div>
    </section>
  );
}
