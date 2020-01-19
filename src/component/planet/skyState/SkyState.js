import React from 'react'
import classnames from 'classnames'
import './SkyState.css'
const SkyState = ({sky, time}) => {
    const classes = classnames(
        'sky'
    )
    const iconPicker = (sky) => {
      const hour = time.substr(11,2)
            switch(sky){
                case 'Snow':
                    return hour > 19 || hour < 6 ? 'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_36-512.png':'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_37-512.png'
                case 'Rain':
                    return hour > 19 || hour < 6 ? 'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_8-512.png':'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_33-512.png'
                case 'Clear':
                   return hour > 19 || hour < 6 ? 'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_4-512.png':'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_3-512.png' 
                case 'Clouds':
                    return hour > 19 || hour < 6 ? 'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_5-512.png':'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_2-512.png'
                case 'Mist':
                    return hour > 19 || hour < 6 ? 'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_50-512.png':'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_49-512.png'
                case 'Smoke':
                    return hour > 19 || hour < 6 ? 'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_50-512.png':'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_49-512.png'
                case 'Fog':
                    return hour > 19 || hour < 6 ? 'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_50-512.png':'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_49-512.png'
            }
        }
  
    return(
     <div className={classes}>
         <img src={iconPicker(sky)} alt=""/>
     </div>
 )
}
export default SkyState
