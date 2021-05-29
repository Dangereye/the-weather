import React, { useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";
import Overview from "./Overview";
import { CgMouse } from "react-icons/cg";

const Header = () => {
  const { state } = useContext(WeatherContext);
  return (
    <header
      style={{
        backgroundImage: state.image ? `url(${state.image})` : "none",
      }}
    >
      <div className="container">
        <Overview />
        <div className="scroll-down">
          <CgMouse />
        </div>
      </div>
    </header>
  );
};

export default Header;
