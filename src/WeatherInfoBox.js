import "./WeatherInfoBox.css";

export function WeatherInfoBox({ label, value, icon }) {
    return (
        <div className="info-box">
            <h3 className="weather-info-heading">{label}</h3>
            <p className="temperature">{value}</p>
            <img className="element-icon" src={icon} alt="icon"></img>
        </div>
    );
}