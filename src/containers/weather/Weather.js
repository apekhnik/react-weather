import React, {Component} from 'react'
import Box from '../../component/box/Box'
import Loader from '../../component/Loader/Loader'
export default class Weather extends Component {
    state={
        data: [],
        weather: [],
        coord: [],
        loading: true
    }
    async componentDidMount(){
        this.getData()
    }
    onChangeHandler = (e) =>{
        this.setState({
            findPlace: e.target.value
        })
        console.log(this.state.findPlace);
    }
     getData  = async(url)  =>{
        try{
            const FIND_CITY = this.state.findPlace || 'Milan'
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${FIND_CITY}&units=metric&APPID=349083c430ac053a45a0745df28c1425`)
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
                    sunset: response.sys.sunset,
                    name: response.name
                },
                loading: false,
                findPlace: ''
            })
            
            console.log(response);
            console.log(this.state.weather.main);
            
        }catch(e){
            console.log(e);
        }
    }
    findPlace = ({key}) => {
        const {taskText} = this.state;
        if(key === 'Enter'){
           let find = this.state.findPlace
           this.getData(find)
           this.setState({
            findPlace: ''
           })
        }
    }
    render(){
        const { weather} = this.state
        
        return(
            <div>
                <input type='text'  onKeyPress={this.findPlace} onChange={this.onChangeHandler} value={this.state.findPlace}/>
                {!this.state.loading 
                ?
                <Box
                sky={weather.main}
                country={weather.country}
                city={weather.name}
                temp={weather.temp}
                temp_max={weather.temp_max}
                temp_min={weather.temp_min}
                feelsLike={weather.feelsLike}
                windSpeed={weather.windSpeed}
                windDeg={weather.windDeg}
                />:<Loader/>
            }
            </div>
        )
    }
}