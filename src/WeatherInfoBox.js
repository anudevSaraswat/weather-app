import "./WeatherInfoBox.css";

export function WeatherInfoBox({ label, value }) {
    return (
        <div className="info-box">
            <h3 className="weather-info-heading">{label}</h3>
            <p className="temperature">{value}</p>
            <i className="icon">--</i>
        </div>
    );
}