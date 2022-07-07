import "./App.css";
import { useEffect, useState } from "react";
import WeatherBox from "./WeatherBox";
import WeatherButton from "./WeatherButton";
import "bootstrap/dist/css/bootstrap.min.css";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");

  const [loading, setLoading] = useState(false);
  let cities = ["paris", "new york", "tokyo", "seoul"];

  const handleCityChange = (city) => {
    if (city === "current") {
      setCity("");
    } else {
      setCity(city);
    }
  };

  useEffect(() => {
    if (city === "") {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4db6019a82116d24c6cb37cdfa2db1a5&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();

    setWeather(data);
    setLoading(false);
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;

      getWeatherByCurrentLocation(latitude, longitude);
    });
  };

  const getWeatherByCurrentLocation = async (latitude, longitude) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=4db6019a82116d24c6cb37cdfa2db1a5&units=metric `;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  return (
    <div>
      {loading ? (
        <div className="container">
          <ClipLoader color="#f88c6b" loading={loading} size={150} />
        </div>
      ) : (
        <div className="container">
          <WeatherBox weather={weather} onClick={getCurrentLocation} />
          <WeatherButton
            handleCityChange={handleCityChange}
            cities={cities}
            setCity={setCity}
          />
        </div>
      )}
    </div>
  );
}

export default App;
