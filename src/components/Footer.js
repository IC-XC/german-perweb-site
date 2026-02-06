import React from "react";
import "../styles/pages.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <a href="/">Home</a> | 
        <a href="/about">About</a> | 
        <a href="/courses">Courses</a> | 
        <a href="/pricing">Pricing</a> | 
        <a href="/testimonials">Testimonials</a> | 
        <a href="/signup">Sign Up</a> | 
        <a href="/faq">FAQ</a>
      </div>
      <div className="footer-contact">
        Contact: per@perconsult.be
      </div>
      <div className="footer-copy">
        &copy; 2026 Per German. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
