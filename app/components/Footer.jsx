"use client";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";
import emailjs from "@emailjs/browser";


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
            </div>

            {/* BRAND */}
            <div className="footer-col">
              <h3 className="footer-heading">THE BRAND</h3>
              <a href="/bridal-wear">Bridal Wear</a>
              <a href="/about-us">About Us</a>
              <a href="/contact">Contact Us</a>
            </div>

            {/* COLLAB */}
            <div className="footer-col">
              <h3 className="footer-heading">COLLAB</h3>
              <a href="#">Explore</a>
            </div>

            {/* POLICIES */}
            <div className="footer-col">
              <h3 className="footer-heading">POLICIES</h3>
              <a href="#">Privacy Policy</a>
              <a href="#">Shipping Policy</a>
              <a href="#">Terms of Service</a>
            </div>

            {/* FOLLOW */}
            <div className="footer-col">
              <h3 className="footer-heading">FOLLOW</h3>

              <div className="footer-socials">
                <a
                  href="https://www.instagram.com/priyankasatelier"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="mailto:care@priyankasatelier.in"
                  className="social-icon"
                  aria-label="Email"
                >
                  <MdEmail />
                </a>
              </div>
            </div>
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
</div>
        </div>
      </div>
    </footer>
  );
}
