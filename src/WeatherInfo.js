import { WeatherInfoBox } from "./WeatherInfoBox";
import './WeatherInfo.css';

export function WeatherInfo() {
    return (
        <div>
            <h2>Wednesday, 16th May 2024</h2>
            <input></input>
            <div className="flex-container">
                <WeatherInfoBox></WeatherInfoBox>                
                <WeatherInfoBox></WeatherInfoBox>                
                <WeatherInfoBox></WeatherInfoBox>                
                <WeatherInfoBox></WeatherInfoBox>                
                <WeatherInfoBox></WeatherInfoBox>                
                <WeatherInfoBox></WeatherInfoBox>                
            </div>
        </div>
    );
}