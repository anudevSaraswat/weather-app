import './App.css';
import { WeatherBriefingBox } from './WeatherBriefingBox';
import { WeatherInfo } from './WeatherInfo';

function App() {
  return (
    <div>
      <h1 className="heading">Weather Forecast</h1>
      <div className="container">
        <WeatherBriefingBox></WeatherBriefingBox>
        <WeatherInfo></WeatherInfo>
      </div>
    </div>
  );
}

export default App;
