import React from "react";
import './WeatherDisplay.css';
import { WeatherDay } from "../WeatherDay/WeatherDay"; 
import icon from "../../util/OpenWeather";

export class WeatherDisplay extends React.Component {


    render() {
        return (
            <div className="WeatherDisplay">
                {
                    this.props.weatherForecast.map(forecastDay => {
                        return <WeatherDay title={forecastDay.day} key={forecastDay.key} icon={forecastDay.icon} Temp={forecastDay.AvgTempC} name={this.props.currentWeather.cityName}/>
                    })
                }
            </div>
        )
    }
}

