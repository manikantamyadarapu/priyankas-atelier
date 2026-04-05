"use client";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");

 const sendEmail = (e) => {
  e.preventDefault();

  const templateParams = {
    user_email: email,
    time: new Date().toLocaleString(),
  };

  // 1️⃣ Email to admin (you)
  emailjs
    .send(
      "service_cwqep3d",
      "template_kf7z3m5",
      templateParams,
      "K-5pSSnje4MzUMVPj"
    )
    .then(() => {
      console.log("Admin notified");
    });

  // 2️⃣ Welcome email to subscriber
  emailjs
    .send(
      "service_cwqep3d",
      "template_ih6d4tq",
      templateParams,
      "K-5pSSnje4MzUMVPj"
    )
    .then(() => {
      alert("Thank you for subscribing!");
      setEmail("");
    })
    .catch((error) => {
      console.error(error);
      alert("Subscription failed");
    });
};

  return (
    <footer className="footer-outer">
      {/* INNER CARD */}
      <div className="footer-inner">
        <div className="footer-wrapper">
          <div className="footer-columns">

            {/* LEFT COLUMN */}
            <div className="footer-about">
              <h2 className="footer-title">PRIYANKA'S ATELIER</h2>
              <p className="footer-description">
                At Priyanka’s Atelier Studio in Telangana, tradition meets modern elegance.
                Known for stunning bridal wear and celebrity-inspired designs, each piece is
                crafted to bring out the beauty and grace of every Indian woman.
              </p>
                <div className="footer-socials about-socials">
    <a
      href="https://www.instagram.com/priyankasatelier"
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon"
    >
      <FaInstagram />
    </a>

    <a
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon"
    >
      <FaWhatsapp />
    </a>

    <a
      href="mailto:care@priyankasatelier.in"
      className="social-icon"
    >
      <MdEmail />
    </a>
  </div>
            </div>

            {/* BRAND */}
            <div className="footer-col">
              <h3 className="footer-heading">THE BRAND</h3>
              <a href="/blouses">Blouses</a>
              <a href="/couture-collection">Couture</a>
              <a href="/about-us">About Us</a>
            </div>



            {/* POLICIES */}
            <div className="footer-col">
  <h3 className="footer-heading">POLICIES</h3>

  <Link href="/privacy-policy">Privacy Policy</Link>
  <Link href="/terms-and-conditions">Terms of Service</Link>
  <Link href="https://calendly.com/care-priyankasatelier/30min">Book a Consultation</Link>
</div>
{/* COLLAB */}
            <div className="footer-col">
              <h3 className="footer-heading">COLLAB</h3>
              <a href="#">Explore</a>
            </div>

            {/* FOLLOW */}

             {/* NEWSLETTER */}
<div className="footer-col footer-newsletter">

      <h3 className="footer-heading">STAY CONNECTED</h3>

      <p className="newsletter-text">
        Sign up for our newsletter to receive the latest updates,
        exclusive insights, and special offers from Priyanka’s Atelier.
      </p>

      <form className="newsletter-form" onSubmit={sendEmail}>

        <input
          type="email"
          placeholder="Enter your email"
          className="newsletter-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit" className="newsletter-btn">
          Subscribe
        </button>

      </form>

    </div>
          </div>
          {/* COPYRIGHT */}
<div className="copyright">
  {/* <img 
    src="./Footer-frame.png" 
    alt="decorative frame" 
    className="footer-frame" 
  /> */}
  © {new Date().getFullYear()} Priyanka’s Atelier.
  <span className="copyright-buddy">- BY WS</span>
</div>
        </div>
      </div>
    </footer>
  );
}
