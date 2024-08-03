import "./Weather.css";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    fetch(`http://localhost:5000/weather?q=${search}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>

        <div>
          <input
            type="text"
            placeholder="Enter city/town"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchPressed}>Search</button>
        </div>

        {typeof weather.main !== "undefined" ? (
          <div>
            <p>{weather.name}</p>

            <p>{weather.main.temp}°C</p>

            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        ) : (
          " "
        )}
      </header>
    </div>
  );
}

export default App;
