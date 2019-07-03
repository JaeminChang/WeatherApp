import React from "react";

const Weather = props => (
  <div className="weather-info">
    {props.city && props.country && (
      <p className="weather-key">
        Location:
        <span className="weather-value">
          {" "}
          {props.city}, {props.country}{" "}
        </span>
      </p>
    )}
    {props.temperature && (
      <p className="weather-key">
        Temperature:
        <span className="weather-value"> {props.temperature} </span>
      </p>
    )}
  </div>
);
