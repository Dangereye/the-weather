import React, { useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";
import TimeComponent from "../shared/TimeComponent";
import DropletIcon from "../../icons/DropletIcon";

const PrecipitationCard = ({ item }) => {
  const { state } = useContext(WeatherContext);
  return (
    <div key={item.time} className="item-card">
      <div className="chance">{`${
        item.chance_of_rain > item.chance_of_snow
          ? item.chance_of_rain
          : item.chance_of_snow
      }%`}</div>
      <div className="icon droplet">
        <DropletIcon
          // Heavy hourly precipitation considered 8mm or 0.3"
          // Icons set to almost fill on those values

          unit={state.settings.precipitation === "mm" ? 16 : 400}
          volume={
            state.settings.precipitation === "mm"
              ? item.precip_mm
              : item.precip_in
          }
        />
      </div>
      <div className="volume">
        {state.settings.precipitation === "mm"
          ? item.precip_mm
          : item.precip_in}
      </div>

      <div className="time">
        <TimeComponent data={item.time} />
      </div>
    </div>
  );
};

export default PrecipitationCard;
