import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/pages.css";

function Header() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Courses", path: "/courses" },
    { name: "Pricing", path: "/pricing" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Sign Up", path: "/signup" },
    { name: "FAQ", path: "/faq" },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="logo">
        <NavLink to="/">Per German</NavLink>
      </div>

      <nav>
        <button
          className="mobile-menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
