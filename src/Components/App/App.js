import './App.css';
import React from 'react';
import { WeatherDisplay } from '../WeatherDisplay/WeatherDisplay';
import Weather from "../../util/OpenWeather";
import { SearchBar } from '../SearchBar/SearchBar';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentWeather: {},
      weatherForecast: [],
    }

    this.getWeather = this.getWeather.bind(this);

    this.getWeather("London");
  }

  getWeather = async (city) => {
    const newWeather = await Weather.search(city);
    this.setState( {currentWeather: newWeather.currentWeather, weatherForecast: newWeather.forecast} );
  }


  render() {
    return (
    <div className="App">
      <div className="weatherPanel">
        <header>Weather.IO</header>
        <SearchBar getWeather={this.getWeather} />
        <WeatherDisplay currentWeather={this.state.currentWeather} weatherForecast={this.state.weatherForecast}/>
      </div>
    </div>
  )
    }

}



export default App;
