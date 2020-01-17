import React,{Component} from 'react'
import './Box.css'
import Sun from '../planet/sun/Sun'
import Moon from '../planet/moon/Moon'
import Cloud from '../planet/cloud/Cloud'
import Snow from '../planet/Snow/Snow'
import classnames from 'classnames'
import Clock from '../Clock/Clock'
import Mist from '../planet/mist/Mist'
import RainDay from '../planet/Rain/Rain-day'
export default class Box extends Component {
    state ={
        currentTime: '',
        actualTime: ''
    }
    componentDidMount(){
        var date = new Date();
       
       this.setState({
        currentTime: date.getHours()
       })
    }
    
    whatTime(time){

       return  time> 19 || time < 6 ? 'night' : 'day'
       
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
    translate(weather){
        
        switch(weather){
            case 'Clear':
                return 'Ясно'
            case 'Clouds':
                return 'Облачно'
            case 'Snow':
                return 'Снег'
            case 'Rain':
                return 'Дождь'
            case 'Mist':
                return 'Туман'
            case 'Smoke':
                return 'Смог'
            default:
                return 'goob'
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
            if(weather === 'Snow'){
                return <Snow/>
            }
            if(weather === 'Rain'){
                return <RainDay/>
            }
        }else{
            //day
            if(weather === 'Snow'){
                return <Snow/>
            }
            if(weather === 'Rain'){
                return <RainDay/>
            }
            if(weather === 'Clear'){
                return <Sun/>
            }
            if(weather === 'Clouds'){
                return <Cloud/>
            }
            if(weather === 'Mist'){
                return <Mist/>
            }
            if(weather === 'Smoke'){
                return <Mist/>
            }
        }
   
        
    
        
    }

    render(){
        const {currentTime} = this.state
        const {sky, country, city, temp, feelsLike, temp_min, temp_max, windDeg, windSpeed, sunrise, sunset} = this.props

        const wind = this.wind(windDeg)
        const night = this.whatTime(currentTime)
        const classes = classnames(
            'box',
            night
        );
        return(
            <div className={classes}>
                <Clock/>
                <h3>{city}, {country}</h3>
                {this.props.children}
                <div className="box-container">
                    <div className="box-container__item">
                        <p>за окном <span>{temp.toFixed(0)}</span></p>
                        <p>по ощущениям <span>{feelsLike.toFixed(0)}</span></p>
                        <p>min <span>{temp_min.toFixed(0)}</span>max <span>{temp_max.toFixed(0)}</span></p>
                        <p></p>
                        <p>ветер <span>{windSpeed}</span> m/s направление <span>{wind||'Южный'}</span></p>
                    </div>
                    <div className="box-container__item">
                        {this.renderPNG(sky, this.state.currentTime)}
                        <h5>{this.translate(sky)}<span>, {temp.toFixed(0)}C</span></h5>
                    </div>
                </div>
            </div>
        )
    }
}