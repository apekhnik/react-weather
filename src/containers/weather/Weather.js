import React, {Component} from 'react'
import Box from '../../component/box/Box'
import Loader from '../../component/Loader/Loader'
import Input from '../../component/Input/Input'
export default class Weather extends Component {
    state={
        data: [],
        weather: [],
        coord: [],
        loading: true,
        findPlace: '',
        error: '', 
        sunrise:'',
        sunset:''
    }
    async componentDidMount(){
        this.getData()
    }
    onChangeHandler = (e) =>{
        this.setState({
            findPlace: e.target.value
        })
    }
     getData  = async(url)  =>{
        this.setState({
            loading: true
        })
        try{
            const FIND_CITY = this.state.findPlace || 'Лондон'
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${FIND_CITY}&units=metric&APPID=349083c430ac053a45a0745df28c1425`)
                                        .then(response=>response.json())
            
            const timezone = await fetch(`http://api.geonames.org/timezoneJSON?lat=${response.coord.lat}&lng=${response.coord.lon}&username=napasponiki`)
                                        .then(timezone=>timezone.json())
            console.log(timezone);
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
                    name: response.name,
                    sunrise: timezone.sunrise,
                    sunset: timezone.sunset, 
                    time: timezone.time
                },
                loading: false,
                findPlace: '',
                error: false
            })
            
            console.log(this.state.weather.sunrise);
            console.log(response);
            
        }catch(e){
            this.setState({
                loading: false,
                error: 'Неверно набран номер'
            })

        }
    }
    findPlace = ({key}) => {
        if(key === 'Enter'){
           let find = this.state.findPlace
           this.getData(find)
           this.setState({
            findPlace: ''
           })
        }
    }
    render(){
        const { weather, coord} = this.state
        console.log(this.state.sunrise);
        
        return(
            <div className="weather">
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
                sunrise={weather.sunrise}
                sunset={weather.sunset}
                onKeyPress={this.findPlace} 
                onChange={this.onChangeHandler}
                value={this.state.findPlace}
                error={this.state.error}
                lat={coord.lat}
                lon={coord.lon}
                time={weather.time}
                />:<Loader/>
            }
            </div>
        )
    }
}