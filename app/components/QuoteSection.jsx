import Image from "next/image";

export default function QuoteSection() {
  return (
    <section className="quote-section">
      <p className="quote-text">
        “Born from the timeless artistry of Telangana, Priyanka’s Atelier blends
        heritage with modern couture — a quiet luxury that lingers long after it is seen.”
      </p>

      <div className="quote-logo">
        <Image 
  src="/logo.png"
  alt="Priyanka Atelier Logo"
  width={25}
  height={35}
/>
      </div>
    </section>
  );
}
