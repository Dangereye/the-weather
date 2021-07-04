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
    if (pathname === "/settings") {
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
        <Link to="/" className="logo">
          the weather
        </Link>
        <Link
          to={pathname === "/settings" ? "/" : "/settings"}
          className="settings"
        >
          <FiSettings />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
