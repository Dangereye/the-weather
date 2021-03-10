import React from "react";
import { BsFillGearFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
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
