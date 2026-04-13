"use client";

import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactPage() {
  return (
    <div className="contact-container">
      <div className="contact-box">
        
        {/* LEFT SIDE: IMAGE */}
        <div className="contact-image-side">
          <img src="/founder.jpg" alt="Contact Priyanka's Atelier" />
        </div>

        {/* RIGHT SIDE: CONTACT DETAILS */}
        <div className="contact-content-side">
          <p className="consult-sub">GET IN TOUCH</p>
          <h1 className="consult-title" style={{ marginBottom: '1.5rem' }}>
            Contact <em>Us</em>
          </h1>

          <p className="consult-text" style={{ marginBottom: '2.5rem' }}>
            We’d love to hear from you. Reach out for bridal consultations,
            custom designs, or any inquiries.
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <MdEmail className="contact-icon" />
              <span>care@priyankasatelier.in</span>
            </div>

            <div className="contact-item">
              <FaWhatsapp className="contact-icon" />
              <span>+91 99999 99999</span>
            </div>

            <div className="contact-item">
              <FaInstagram className="contact-icon" />
              <span>@priyankasatelier</span>
            </div>
          </div>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginTop: '2rem' }}
            className="category-button-overlay"
          >
            Start Conversation
          </a>
        </div>

      </div>
    </div>
  );
}