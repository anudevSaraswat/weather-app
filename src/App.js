import './App.css';
import { WeatherBriefingBox } from './WeatherBriefingBox';
import { WeatherInfo } from './WeatherInfo';
import axios from 'axios';
import { useState } from 'react';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

function App() {

  const data = {
    temperature: "--",
    description: "--",
    feelsLike: "--",
    wind: "--",
    humidity: "--",
    rain: "--",
    sunrise: "--",
    sunset: "--",
  }

  const [weatherData, setWeatherData] = useState(data);

  async function fetchAndParseWeatherData(location) {
    if (location !== "") {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`);

      const weather = response.data.weather[0];
      const main = response.data.main;

      let description = weather.description;
      let temperature = main.temp;
      let feelsLike = main.feels_like;
      let wind = response.data.wind.speed;
      let humidity = main.humidity;

      setWeatherData({
        description: description,
        temperature: temperature,
        feelsLike: feelsLike,
        wind: wind,
        humidity: humidity,
      });
    } else {
      alert("Enter location to get weather information")
    }
  }

  return (
    <div>
      <h1 className="heading">Weather Forecast</h1>
      <div className="container">
        <WeatherBriefingBox description={weatherData.description} temperature={weatherData.temperature}>
        </WeatherBriefingBox>
        <WeatherInfo fetch={fetchAndParseWeatherData} weatherData={weatherData}></WeatherInfo>
      </div>
    </div>
  );
}

export default App;
