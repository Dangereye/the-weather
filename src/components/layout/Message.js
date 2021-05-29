import React, { useContext } from "react";
import { WeatherContext } from "../../contexts/WeatherContext";

const Message = ({ message }) => {
  const { state, dispatch } = useContext(WeatherContext);

  const handleClick = () => {
    dispatch({ type: "LOADING", payload: true });
    dispatch({
      type: "MESSAGE",
      payload: { ...state.message, isActive: false },
    });
    dispatch({ type: "ERROR", payload: null });
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };
  return (
    <div className={`message ${state.message.isActive && "active"}`}>
      <h3>Message:</h3>
      <p>{message}</p>
      <button className="btn dark" onClick={handleClick}>
        Retry
      </button>
    </div>
  );
};

export default Message;
