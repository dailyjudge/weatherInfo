import { Button } from "react-bootstrap";
import React, { useState } from "react";
const WeatherButton = ({ cities, setCity, handleCityChange }) => {
  return (
    <div>
      <Button onClick={() => handleCityChange("current")} variant="warning">
        Current
      </Button>{" "}
      {cities.map((it, idx) => (
        <Button onClick={() => setCity(it)} key={idx} variant="warning">
          {it}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
