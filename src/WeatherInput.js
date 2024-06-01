import './WeatherInput.css';

export function WeatherInput({ fetch }) {
    return (
        <div>
            <input className="location-input"></input>
            <button className="fetch-button" onClick={() => fetch()}>Fetch</button>
        </div>
    )
}