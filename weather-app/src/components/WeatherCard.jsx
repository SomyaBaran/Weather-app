export default function WeatherCard({weatherData}) {
    if(!weatherData){
        return null;
    }
    return (
        <div className="container">
        <div className="small-container">
            <div className="top">
             <div className="temp">
                    <h1>{Math.round(weatherData.main.temp)}°C</h1>
                </div>
                <div className="location">
                    <p>{weatherData.name}</p>
                </div>
                <div className="description">
                    <p>{weatherData.weather[0].main}</p>
                </div>
            </div>
            <div className="bottom">
                <div className="feels">
                    <h2>Feels like: {Math.round(weatherData.main.feels_like)}</h2>
                </div>
                <div className="humidity">
                    <h2>Humidity: {weatherData.main.humidity}%</h2>
                </div>
                <div className="wind">
                    <h2>Wind: {weatherData.wind.speed} m/s</h2>
                </div>
            </div>
        </div>
      </div>
        // </div>
    )
}