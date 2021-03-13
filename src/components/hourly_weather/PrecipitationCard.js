import React, { useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";
import Droplet from "../../icons/Droplet";

const PrecipitationCard = ({ item }) => {
  const { state } = useContext(WeatherContext);
  return (
    <div key={item.time} className="item-card">
      <div className="chance">{`${item.chance_of_rain}%`}</div>
      <Droplet
        // Heavy hourly precipitation considered 8mm or 0.3"
        // Icons set to almost fill on double those values

        unit={state.settings.precipitation === "mm" ? 8 : 200}
        volume={
          state.settings.precipitation === "mm"
            ? item.precip_mm
            : item.precip_in
        }
      />
      <div className="volume">
        {state.settings.precipitation === "mm"
          ? item.precip_mm
          : item.precip_in}
      </div>

      <div className="time">
        {new Date(item.time).toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
    </div>
  );
};

export default PrecipitationCard;
