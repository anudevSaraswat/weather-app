import { WeatherInfoBox } from "./WeatherInfoBox";
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

export function WeatherInfo() {
    return (
        <div>
            <h2>{dateStr}</h2>
            <input className="location-input"></input>
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