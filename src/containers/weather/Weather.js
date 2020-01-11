import React, {Component} from 'react'

export default class Weather extends Component {
    state={
        data: [],
        weather: [],
        coord: [],
    }
    async componentDidMount(){
        try{
            const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=349083c430ac053a45a0745df28c1425')
                                        .then(response=>response.json())
            this.setState({
                data: response,
                coord: response.coord,
                weather: {
                    main: response.weather[0].main,
                    description: response.weather[0].description,
                    temp: response.main.temp,
                    feelsLike: response.main.feels_like,
                    temp_min: response.main.temp_min,
                    temp_max: response.main.temp_max,
                    pressure: response.main.pressure,
                    humidity: response.main.humidity,
                    windSpeed: response.wind.speed,
                    windDeg: response.wind.deg,
                    country: response.sys.country,
                    sunrise: response.sys.synrise,
                    sunset: response.sys.sunset
                }
            })
            
            console.log(response);
            console.log(this.state.weather.main);
            
        }catch(e){
            console.log(e);
        }
    }
    render(){
        const {name, weather} = this.state
        console.log(this.state.weather.country);
        
        return(
            <div>
            <p>{name}</p>
              <p>LON {this.state.coord.lon}</p>
              <p>LAT {this.state.coord.lat}</p>
                <h1>{weather.windSpeed}</h1>
                <h2>{weather.description}</h2>
    <h3>pressure => {}</h3>
            </div>
        )
    }
}