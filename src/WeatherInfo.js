import { WeatherInfoBox } from "./WeatherInfoBox";
import { WeatherInput } from "./WeatherInput";
import './WeatherInfo.css';

const currDate = new Date();
const currentDate = currDate.getDate();
const weekDay = currDate.toLocaleString('en-us', { weekday: 'long' })
const currentMonth = currDate.toLocaleString('en-us', { month: 'long' })

const dateStr = `${weekDay}, ${currentDate}${ordinalNumberPrefix(currentDate)} ${currentMonth} ${currDate.getFullYear()}`

function ordinalNumberPrefix(date) {
    if (date > 3 && date < 21) return 'th';
    switch (date % 10) {
        case 1:
            return 'st';
        case 2:
            return 'nd';
        case 3:
            return 'rd';
        default:
            return 'th';
    }
}

export function WeatherInfo({ fetch, weatherData }) {

    const feelsLike = `${weatherData.feelsLike} \u00b0C`
    const wind = `${weatherData.wind} m/s`
    const humidity = `${weatherData.humidity}%`
    return (
        <div>
            <h2>{dateStr}</h2>
            <WeatherInput fetch={fetch}></WeatherInput>
            <div className="flex-container">
                <WeatherInfoBox label="Feels Like" value={feelsLike} icon='/feelslike.png'></WeatherInfoBox>
                <WeatherInfoBox label="Wind" value={wind} icon='/wind.png'></WeatherInfoBox>
                <WeatherInfoBox label="Humidity" value={humidity} icon='/humidity.png'></WeatherInfoBox>
                <WeatherInfoBox label="Rain" value="N/A" icon='/rain.png'></WeatherInfoBox>
                <WeatherInfoBox label="Sunrise" value={weatherData.sunrise} icon='/sunrise.png'></WeatherInfoBox>
                <WeatherInfoBox label="Sunset" value={weatherData.sunset} icon='/sunset.png'></WeatherInfoBox>
            </div>
        </div>
    );
}