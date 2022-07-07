const WeatherBox = ({ weather }) => {
  return (
    <div className="WeatherBox">
      <div className="weather-box">
        {weather?.name}
        <h2>
          {weather?.main.temp}C / {Math.floor(weather?.main.temp * 1.8 + 32)}F
        </h2>
        <h3>{weather?.weather[0].description}</h3>
      </div>
    </div>
  );
};

export default WeatherBox;
