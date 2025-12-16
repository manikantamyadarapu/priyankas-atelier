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
            Bhargavi’s admiration for creativity was instilled in her from
            when she was a child. She had always loved art and design
            and sees them as an expression of one’s soul. She blossomed
            under the watchful eye of her mother — a woman who effortlessly
            transforms simple fabrics into phenomenal works of art.
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
