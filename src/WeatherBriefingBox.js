import "./WeatherBriefingBox.css";

export function WeatherBriefingBox({ icon, temperature, description }) {

    const iconURL = `http://openweathermap.org/img/w/${icon}.png`

    return (
        <div className="briefing-box">
            <img className="weather-icon" src={iconURL} alt="icon"></img>
            <p className="temperature">{temperature ? `${temperature} \u00b0C` : "--"}</p>
            <p className="weather-condition-title">{description ? description : "--"}</p>
        </div>
    );
}