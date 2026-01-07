"use client";

export default function BookAConsult() {
  return (
    <main className="consult-container">
      <p className="consult-sub">PRIYANKA’S ATELIER</p>

      <h1 className="consult-title">Book Appointment</h1>

      <p className="consult-text">
        Whether you’re seeking bespoke bridal couture, festive ensembles,
        or timeless heirlooms — book an appointment to experience
        the craftsmanship and philosophy of Priyanka’s Atelier up close.
        Our design team is here to bring your vision to life.
      </p>

      <a
        href="https://calendly.com/care-priyankasatelier/30min"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="consult-btn">
          Book Now
        </button>
      </a>
    </main>
  );
}
