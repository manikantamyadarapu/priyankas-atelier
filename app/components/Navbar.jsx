"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Navbar disappears when scrolling down  
      if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } 
      // Navbar appears when scrolling UP
      else {
        setShowNavbar(true);
      }

      // Add white background when scrolled slightly
      setIsScrolled(currentScrollY > 20);

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`navbar 
        ${isScrolled ? "navbar-scrolled" : ""} 
        ${showNavbar ? "navbar-visible" : "navbar-hidden"}`}
    >
      <div className="nav-logo">
        <h1>PRIYANKA'S ATELIER</h1>
      </div>

      <nav className="nav-menu">
        <a href="/couture-collection">COUTURE COLLECTION</a>
        <a href="/lehanga-set">LEHENGA SET</a>
        <a href="/Gowns">GOWNS</a>
        <a href="/rtw-collection">RTW COLLECTION</a>
        <a href="/pret-collection">PRET COLLECTION</a>
        <a href="/mini-atelier">MINI ATELIER</a>
        <a href="/about-us">ABOUT US</a>
      </nav>
    </header>
  );
}
