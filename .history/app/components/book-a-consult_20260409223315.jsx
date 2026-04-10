"use client";

export default function BookAConsult() {
  const particles = Array.from({ length: 42 }, (_, index) => ({
    id: index,
    left: (index * 19) % 100,
    top: (index * 13 + 7) % 100,
    size: 1 + (index % 3) * 1.2,
    delay: (index % 8) * 0.55,
    duration: 8 + (index % 6) * 1.5,
    opacity: 0.25 + (index % 4) * 0.12,
  }));

  return (
    <section className="book-consult-wrapper">
      <div className="book-consult-stage">
        <div className="book-consult-ambient" />
        <div className="book-consult-grid" />
        <div className="book-consult-ring book-consult-ring--one" />
        <div className="book-consult-ring book-consult-ring--two" />

        <div className="book-consult-particles" aria-hidden="true">
          {particles.map((particle) => (
            <span
              key={particle.id}
              className="book-consult-particle"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
                opacity: particle.opacity,
              }}
            />
          ))}
        </div>

        <div className="book-consult-panel">
          <a
            href="https://calendly.com/care-priyankasatelier/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="book-consult-btn"
          >
            Book A Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
