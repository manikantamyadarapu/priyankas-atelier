"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Couture Collection", href: "/couture-collection" },
  { label: "Blouses", href: "/blouses" },
  { label: "Lehenga Set", href: "/lehanga-set" },
  { label: "Gowns", href: "/Gowns" },
  { label: "RTW Collection", href: "/rtw-collection" },
  { label: "Pret Collection", href: "/pret-collection" },
  { label: "Mini Atelier", href: "/mini-atelier" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "tel:8186962340" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && !isMobileMenuOpen) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setIsScrolled(currentScrollY > 20);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header
        className={`navbar 
          ${isScrolled ? "navbar-scrolled" : ""} 
          ${showNavbar || isMobileMenuOpen ? "navbar-visible" : "navbar-hidden"}
          ${isMobileMenuOpen ? "navbar-menu-open" : ""}`}
      >
        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
        </button>

        <div className="nav-logo">
          <h1>PRIYANKA'S ATELIER</h1>
        </div>

        <nav className="nav-menu">
          {navItems.slice(1, -1).map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label.toUpperCase()}
            </Link>
          ))}
        </nav>
      </header>

      <button
        className={`mobile-menu-overlay ${isMobileMenuOpen ? "is-open" : ""}`}
        type="button"
        aria-label="Close navigation menu"
        onClick={closeMobileMenu}
      />

      <nav
        className={`mobile-nav-drawer ${isMobileMenuOpen ? "is-open" : ""}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="mobile-nav-links">
          {navItems.map((item) =>
            item.href.startsWith("/") ? (
              <Link
                key={item.href}
                href={item.href}
                className="mobile-nav-button"
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.href}
                href={item.href}
                className="mobile-nav-button"
                onClick={closeMobileMenu}
              >
                {item.label}
              </a>
            )
          )}
        </div>
      </nav>
    </>
  );
}
