import { useState } from 'react';
import './WeatherInput.css';

export function WeatherInput({ fetch }) {

    const [location, setLocation] = useState('');

    function setLocationValue(value) {
        setLocation(value);
    }

    return (
        <div>
            <input className="location-input" onKeyUp={(e) => {
                setLocationValue(e.target.value)
            }}></input>
            <button className="fetch-button" onClick={(e) => fetch(location)}>Fetch</button>
        </div>
    )
}