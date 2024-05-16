import "./WeatherBriefingBox.css";

export function WeatherBriefingBox() {
    return (
        <div className="briefing-box">
            <i></i>
            <p className="temperature">23 C</p>
            <p className="weather-condition-title">light rain</p>
        </div>
    );
}