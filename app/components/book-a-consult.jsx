"use client";

export default function BookAConsult() {
  return (
    <section className="book-consult-wrapper">
      <div className="book-consult-card">
        <p className="book-consult-eyebrow">Personal Styling Session</p>
        <h2 className="book-consult-title">Book A Consultation</h2>
        <p className="book-consult-description">
          Connect with Priyanka&apos;s Atelier for a one-on-one bridal and couture consultation.
          Share your vision, explore silhouettes, and receive expert guidance curated just for you.
        </p>

        <div className="book-consult-actions">
          <a
            href="https://calendly.com/care-priyankasatelier/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="book-consult-btn"
          >
            Book On Calendly
          </a>

          <a
            href="/contact-us"
            className="book-consult-btn book-consult-btn--ghost"
          >
            Contact Studio
          </a>
        </div>
      </div>
    </section>
  );
}

