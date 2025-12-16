export default function Footer() {
  return (
    <footer className="footer-wrapper">
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

        {/* COMPANY */}
        <div className="footer-col">
          <h3 className="footer-heading">THE BRAND</h3>
          <a href="/bridal-wear">Bridal Wear</a>  
          <a href="/about-us">About Us</a>
          <a href="/contact">Contact Us</a>
        </div>
          <div className="footer-col">
          <h3 className="footer-heading">COLLAB</h3>
          <a href="#">Explore</a>
        </div>

        {/* LEGAL */}
        <div className="footer-col">
          <h3 className="footer-heading">POLICIES</h3>
          <a href="#">Privacy Policy</a>
          <a href="#">Shipping Policy</a>
          <a href="#">Terms of Service</a>
        </div>
        <div className="footer-col">
          <h3 className="footer-heading">FOLLOW</h3>
          <a href="#">Insta</a>
          <a href="#"></a>
          <a href="#"></a>
        </div>

      </div>

      {/* COPYRIGHT BAR */}
      <div className="copyright">
        © {new Date().getFullYear()} Priyanka’s Atelier — All Rights Reserved.
      </div>

    </footer>
  );
}
