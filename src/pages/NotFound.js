import React from "react";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <section className="not-found">
      <div className="container">
        <h2>404</h2>
        <p>Looks like you're lost...</p>
        <button className="dark block" onClick={goBack}>
          Go back
        </button>
      </div>
    </section>
  );
};

export default NotFound;
