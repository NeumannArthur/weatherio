const ApiKey = "ace2d2fde6184702bc775331222405";
const Base = "https://api.weatherapi.com/v1";

const Weather = {

    search: async(city) => {
        try {
            const forecastResponse = await fetch(`${Base}/forecast.json?key=${ApiKey}&q=${city}&days=7`);
            if (forecastResponse.ok) {
                console.log(forecastResponse);
                const jsonResponseForecast = await forecastResponse.json();
                if (jsonResponseForecast.forecast) {
                    console.log("Full response!");
                    console.log(jsonResponseForecast);
                    const weatherInfo = {
                        currentWeather: {

                            tempC: jsonResponseForecast.current.temp_c,
                            tempF: jsonResponseForecast.current.temp_f,
                            feelslikeC: jsonResponseForecast.current.feelslike_c,
                            feelslikef: jsonResponseForecast.current.feelslike_f,
    
                            windDirection: jsonResponseForecast.current.wind_dir,
                            windKph: jsonResponseForecast.current.wind_kph,
                            windMph: jsonResponseForecast.current.wind_mph,
    
                            cityName: jsonResponseForecast.location.name,
                            cityTime: jsonResponseForecast.location.localtime,
                            country: jsonResponseForecast.location.country,

                            key: 1
                        },
                        forecast : [
                        {

                            AvgTempC: jsonResponseForecast.forecast.forecastday[0].day.avgtemp_c,
                            AvgTempF: jsonResponseForecast.forecast.forecastday[0].day.avgtemp_f,
                            MinTempC: jsonResponseForecast.forecast.forecastday[0].day.mintemp_c,
                            MinTempF: jsonResponseForecast.forecast.forecastday[0].day.mintemp_f,
                            MaxTempC: jsonResponseForecast.forecast.forecastday[0].day.maxtemp_c,
                            MaxTempF: jsonResponseForecast.forecast.forecastday[0].day.maxtemp_f,
    
                            rainProb: jsonResponseForecast.forecast.forecastday[0].day.daily_chance_of_rain,
                            avgHumidity: jsonResponseForecast.forecast.forecastday[0].day.avghumidity,

                            key: 2,
                            icon: jsonResponseForecast.forecast.forecastday[0].day.condition.icon,
                            day: "Today"
                        },

                        {

                            AvgTempC: jsonResponseForecast.forecast.forecastday[1].day.avgtemp_c,
                            AvgTempF: jsonResponseForecast.forecast.forecastday[1].day.avgtemp_f,
                            MinTempC: jsonResponseForecast.forecast.forecastday[1].day.mintemp_c,
                            MinTempF: jsonResponseForecast.forecast.forecastday[1].day.mintemp_f,
                            MaxTempC: jsonResponseForecast.forecast.forecastday[1].day.maxtemp_c,
                            MaxTempF: jsonResponseForecast.forecast.forecastday[1].day.maxtemp_f,
    
                            rainProb: jsonResponseForecast.forecast.forecastday[1].day.daily_chance_of_rain,
                            avgHumidity: jsonResponseForecast.forecast.forecastday[1].day.avghumidity,
                            
                            key: 3,
                            icon: jsonResponseForecast.forecast.forecastday[1].day.condition.icon,
                            day: "Tomorrow"
                        },

                        {

                            AvgTempC: jsonResponseForecast.forecast.forecastday[2].day.avgtemp_c,
                            AvgTempF: jsonResponseForecast.forecast.forecastday[2].day.avgtemp_f,
                            MinTempC: jsonResponseForecast.forecast.forecastday[2].day.mintemp_c,
                            MinTempF: jsonResponseForecast.forecast.forecastday[2].day.mintemp_f,
                            MaxTempC: jsonResponseForecast.forecast.forecastday[2].day.maxtemp_c,
                            MaxTempF: jsonResponseForecast.forecast.forecastday[2].day.maxtemp_f,
    
                            rainProb: jsonResponseForecast.forecast.forecastday[2].day.daily_chance_of_rain,
                            avgHumidity: jsonResponseForecast.forecast.forecastday[2].day.avghumidity,

                            key: 4,
                            icon: jsonResponseForecast.forecast.forecastday[2].day.condition.icon,
                            day: "In 2 Days"

                        }]

                    };

                    console.log(weatherInfo);
                    return (weatherInfo);
                }
            } else {
            throw new Error('Request failed!');
            }
        }
        catch (error) {
            console.log(error);
        }
    }
};

export default Weather;