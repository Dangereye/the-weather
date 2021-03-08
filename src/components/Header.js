import React from "react";
import Overview from "./Overview";
import { CgMouse } from "react-icons/cg";
import background from "../img/hot.jpg";

const Header = () => {
  return (
    <header style={{ backgroundImage: `url(${background})` }}>
      <Overview />
      <div className="scroll-down">
        <CgMouse />
      </div>
    </header>
  );
};

export default Header;
