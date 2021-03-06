import React, { useState, useEffect } from "react";
import { FiSettings } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const [background, setBackground] = useState(false);

  const changeBg = () => {
    if (window.pageYOffset > 100) {
      setBackground(true);
    } else {
      setBackground(false);
    }
  };

  useEffect(() => {
    if (pathname !== "/") {
      setBackground(true);
    } else {
      setBackground(false);
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/settings") {
      window.addEventListener("scroll", changeBg);
      return () => {
        window.removeEventListener("scroll", changeBg);
      };
    }
  });

  const bgColor = {
    background: background ? "#000" : "transparent",
    borderBottom: background ? "1px solid #333" : "none",
  };

  return (
    <nav style={bgColor}>
      <div className="container">
        <h1>
          <Link to="/" className="logo">
            the weather
          </Link>
        </h1>
        <Link
          to={pathname === "/settings" ? "/" : "/settings"}
          className="settings"
          aria-label="settings"
        >
          <FiSettings />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
