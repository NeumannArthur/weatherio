import React from "react";
import './WeatherDay.css';


export class WeatherDay extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="WeatherDay">
                <h1>{this.props.title}</h1>
                <div className="img-container">
                    <img src={this.props.rain} alt={this.props.rain}/>
                </div>
                <p>Temp: {this.props.Temp}</p>
                <p className="cityName">{this.props.name}</p>
            </div>
        )
    }
}