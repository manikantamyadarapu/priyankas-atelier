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
  Priyanka’s Atelier is a designer fashion label inspired by passion,
  creativity, and handcrafted elegance. Founded by Priyanka at the age
  of 20, the brand reflects a journey of dedication, artistry, and refined
  craftsmanship. <br /><br />

  Every creation blends modern aesthetics with timeless style,
  thoughtfully designed to celebrate individuality, confidence,
  and grace in every woman.
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
