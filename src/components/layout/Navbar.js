import React, { useState, useEffect } from "react";
import { BsFillGearFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [background, setBackground] = useState();

  const changeBg = () => {
    if (window.pageYOffset > 100) {
      setBackground(true);
    } else {
      setBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBg);
    return () => {
      window.removeEventListener("scroll", changeBg);
    };
  });

  const bgColor = { background: background ? "#000" : "transparent" };

  return (
    <nav style={bgColor}>
      <div className="container">
        <Link to="/" className="logo">
          the weather
        </Link>
        <Link to="/settings" className="settings">
          <BsFillGearFill />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
