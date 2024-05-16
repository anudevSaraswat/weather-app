import "./WeatherInfoBox.css";

export function WeatherInfoBox() {
    return (
        <div className="info-box">
            <h3 className="weather-info-heading">Feels like</h3>
            <p className="temperature">23 degree</p>
            <i className="icon">icon</i>
        </div>
    );
}