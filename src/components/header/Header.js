import React, { useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";
import Overview from "./Overview";
import { CgMouse } from "react-icons/cg";
import background from "../../img/hot.jpg";

const Header = () => {
  const { state } = useContext(WeatherContext);
  return (
    <header
      style={{
        backgroundImage: state.image
          ? `url(${state.image})`
          : `url(${background})`,
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
