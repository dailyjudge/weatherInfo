import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;

      getWeatherByCurrentLocation(latitude, longitude);
    });
  };

  const getWeatherByCurrentLocation = async (latitude, longitude) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=4db6019a82116d24c6cb37cdfa2db1a5`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data:", data);
  };

  return <div>hello</div>;
}

export default App;
