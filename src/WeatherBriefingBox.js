import "./WeatherBriefingBox.css";

export function WeatherBriefingBox({ temperature, description }) {
    return (
        <div className="briefing-box">
            <i></i>
            <p className="temperature">{temperature ? `${temperature} \u00b0C` : "--"}</p>
            <p className="weather-condition-title">{description ? description : "--"}</p>
        </div>
    );
}