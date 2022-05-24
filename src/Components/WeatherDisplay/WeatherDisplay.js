import React from "react";
import './WeatherDisplay.css';
import { WeatherDay } from "../WeatherDay/WeatherDay"; 
import DayRainImg from "../WeatherDay/308.png";
import DayImg from "../WeatherDay/113.png";

export class WeatherDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    checkImage(chance) {
        if(chance >= 50) {
            return DayRainImg;
        } else {
            return DayImg;
        }
    }

    render() {
        return (
            <div className="WeatherDisplay">
                {
                    this.props.weatherForecast.map(forecastDay => {
                        return <WeatherDay title={forecastDay.day} key={forecastDay.key} rain={this.checkImage(forecastDay.rainProb)} Temp={forecastDay.AvgTempC} name={this.props.currentWeather.cityName}/>
                    })
                }
            </div>
        )
    }
}

