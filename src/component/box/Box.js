import React,{Component} from 'react'
import './Box.css'
import Sun from '../planet/sun/Sun'
import Moon from '../planet/moon/Moon'
import Cloud from '../planet/cloud/Cloud'
import classnames from 'classnames'
let w = null
export default class Box extends Component {
    state ={
        currentTime: '',
        dayisNow: ''
    }
    componentDidMount(){
        var date = new Date();
        this.setState({
            currentTime:date.getHours()
        })
        this.loadWeather()
    }
    loadWeather (){
        const {sky, country, city, temp, feelsLike, temp_min, temp_max} = this.props
        console.log(sky,'sassss');
    }
    whatTimeWeather(time, weather){
        if(time> 19 || time < 6){
            switch (weather) {
                case 'Clouds':
                    return 'cloudDay'
                    break;
                case 'Rain':
                    return 'rainDay'
                    break;
                case 'Snow':
                    return 'snowDay'
                    break;
                case 'Clear':
                    return 'clearDay'
                    break;
                case 'Mist':
                    return 'mistDay'
                    break;
                case 'Fog':
                    return 'fogDay'
                    break;
                // case 'Clouds':
                //   console.log( 'Clouds' );
                //   break;
              }
        }else{

            switch (weather) {
                case 'Clouds':
                    return 'cloudDay'
                    break;
                case 'Rain':
                    return 'rainDay'
                    break;
                case 'Snow':
                    return 'snowDay'
                    break;
                case 'Clear':
                    return 'clearDay'
                    break;
                case 'Mist':
                    return 'mistDay'
                    break;
                case 'Fog':
                    return 'fogDay'
                    break;
                // case 'Clouds':
                //   console.log( 'Clouds' );
                //   break;
              }
        }
       
       
    }
    wind =(deg = 150)=>{
        if(deg > 180 && deg < 270 ){
            return 'Юго-Запад'
        }
        if(deg > 270 && deg < 360 ){
            return 'Северо-Запад'
        }
        if(deg > 0 && deg < 90 ){
            return 'Северо-Восток'
        }
        if(deg > 180 && deg < 270 ){
            return 'Юго-Восток'
        }
        
    }
    renderPNG =(weather, time)=>{
        if(time > 19 || time < 7 ){
            //nightttttt
            if(weather === 'Clear'){
                return <Moon/>
            }
            if(weather === 'Clouds'){
                return <Cloud/>
            }
        }else{
            //day
            if(weather === 'Clear'){
                return <Sun/>
            }
            if(weather === 'Clouds'){
                return <Cloud/>
            }
        }
   
        
    
        
    }
    render(){
        const {currentTime} = this.state
        const {sky, country, city, temp, feelsLike, temp_min, temp_max, windDeg, windSpeed} = this.props
  
        const wind = this.wind(windDeg)
       console.log(this.state.currentTime);
        const night = this.whatTimeWeather(currentTime, sky)

        
        const classes = classnames(
            'box',
            night
        );
        return(
            <div className={classes}>
                <span>10.10.2010</span>
                <span>Tuesday</span>
                <h3>{city}, {country}</h3>
                <h3>{sky}</h3>
                <div className="box-container">
                    <div className="box-container__item">
                        <p>За окном {temp.toFixed(0)}</p>
                        <p>по ощущениям {feelsLike.toFixed(0)}</p>
                        <span>(min/max {temp_min.toFixed(0)}/{temp_max.toFixed(0)})</span>
                        <span>ветер {windSpeed}m/s направление {wind}</span>
                    </div>
                    <div className="box-container__item">
                        {this.renderPNG(sky, this.state.currentTime)}
                    </div>
                </div>
            </div>
        )
    }
}