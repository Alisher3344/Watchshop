import React, { useState, useEffect } from "react";
import "../App.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "navScrolled" : ""}>
      <div className="container Nav_in_div">
        <div className="NavIcon">
          <img src="Logo.svg" alt="No logo?" />
          <img
            className="ham"
            style={{ width: "22px", cursor: "pointer" }}
            src="hum.png"
            alt=""
            onClick={toggleMenu}
          />
        </div>
        <ul className={isOpen ? "mine" : ""}>
          <li>
            <a href="#header">Home</a>
          </li>
          <li>
            <a  className="back">
              Brands
              <div className="backtop">
                <p>Rolex</p>
                <p>Omega</p>
                <p>Casio</p>
              </div>
            </a>
          </li>
          <li>
            <a href="#shop">Recent Products</a>
          </li>
          <li>
            <a href="#car">Contact</a>
          </li>
          <li>
            <a href="#fut">About</a>
          </li>
        </ul>
        <div className={`Nav_img_flex ${isOpen ? "mine" : ""}`}>
          <img
            className="dark"
            style={{
              backgroundColor: "white",
              borderRadius: "50%",
              padding: "1px",
              cursor: "pointer",
            }}
            src="dark.png"
            alt="No img?"
            onClick={toggleDarkMode}
          />
          <img src="Person.svg" alt="No img?" />
          <img src="card.svg" alt="No img?" />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
