import React,{Component} from 'react'
import './Box.css'
import classnames from 'classnames'
export default class Box extends Component {
    state ={
        currentTime: ''
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
            let sit  =`${weather}+ ${time}`
        
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
                // case 'Clouds':
                //   console.log( 'Clouds' );
                //   break;
              }
        }else{
            return false
        }
       
       
    }
    wind =(deg)=>{
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
    render(){
        const {time} = this.state
        const {sky, country, city, temp, feelsLike, temp_min, temp_max, windDeg, windSpeed} = this.props
  
        const wind = this.wind(windDeg)
       
        
        const night = this.whatTimeWeather(23, sky)
        console.log(wind);
        
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
                <p>За окном {temp.toFixed(0)}</p>
                <p>по ощущениям {feelsLike.toFixed(0)}</p>
                <span>(min/max {temp_min.toFixed(0)}/{temp_max.toFixed(0)})</span>
                <span>ветер {windSpeed}m/s направление {wind}</span>
            </div>
        )
    }
}