import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import WeatherBox from './component/WeatherBox';

function App() {
  const API_key = 'fbf5b024ed69611a2172331fb0ee0f07';
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  }

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    getCurrentLocation();
  }, []);
  return (
    <div>
      <WeatherBox />
      <WeatherButton />
    </div>
  );
}

export default App;
