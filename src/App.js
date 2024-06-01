import './App.css';
import { WeatherBriefingBox } from './WeatherBriefingBox';
import { WeatherInfo } from './WeatherInfo';
import axios from 'axios';

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

console.log(apiKey);

async function fetchWeatherData(location) {
  return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`);
}

function fetch(location) {
  fetchWeatherData(location).then(response => {
    console.log("response:", response);
  }).catch(err => {
    console.log("error:", err);
  })
}

function App() {
  return (
    <div>
      <h1 className="heading">Weather Forecast</h1>
      <div className="container">
        <WeatherBriefingBox></WeatherBriefingBox>
        <WeatherInfo fetch={fetch}></WeatherInfo>
      </div>
    </div>
  );
}

export default App;
