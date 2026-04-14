"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  const [email, setEmail] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      user_email: email,
      time: new Date().toLocaleString(),
    };

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
    <footer className="site-footer">
      <div className="footer-columns">
        <div className="footer-about">
          <h2 className="footer-title">PRIYANKA'S ATELIER</h2>
          <p className="footer-description">
            At Priyanka&rsquo;s Atelier Studio in Telangana, tradition meets modern elegance.
            Known for stunning bridal wear and celebrity-inspired designs, each piece is
            crafted to bring out the beauty and grace of every Indian woman.
          </p>
          <p className="footer-description footer-address">
            3rd Floor, Jubilee Towers, Road No. 36, CBI Colony, Jubilee Hills, Hyderabad, Telangana 500033
          </p>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">THE BRAND</h3>
          <a href="/blouses">Blouses</a>
          <a href="/couture-collection">Couture</a>
          <a href="/about-us">About Us</a>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">POLICIES</h3>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-and-conditions">Terms of Service</Link>
          <Link href="https://calendly.com/care-priyankasatelier/30min">Book a Consultation</Link>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">COLLAB</h3>
          <a href="/production">Craftsmanship</a>
        </div>

        <div className="footer-col footer-newsletter">
          <h3 className="footer-heading">STAY CONNECTED</h3>
          <p className="newsletter-text">
            Sign up for our newsletter to receive the latest updates, exclusive insights,
            and special offers from Priyanka&rsquo;s Atelier. Keep up with our latest arrivals and bridal trends.
          </p>

          <form className="newsletter-form" onSubmit={sendEmail}>
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              suppressHydrationWarning
            />
            <button type="submit" className="newsletter-btn">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="copyright">
        <div className="footer-socials footer-socials--copyright">
          <a
            href="https://www.instagram.com/priyankasatelier"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaInstagram />
          </a>

          <a
            href="https://wa.me/8186962340"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <FaWhatsapp />
          </a>

          <a href="mailto:care@priyankasatelier.in" className="social-icon">
            <MdEmail />
          </a>
        </div>

        &copy; {new Date().getFullYear()} PRIYANKA&rsquo;S ATELIER
      </div>
    </footer>
  );
}
