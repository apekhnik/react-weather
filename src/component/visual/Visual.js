import React from 'react'
import SkyState from '../planet/skyState/SkyState'
import Title from '../Title/Title'
import Text from '../../component/Text/Text'
const Visual = ({time, sky, temp, sunrise, sunset}) => {     

const translate=(weather)=>{
        
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
            return 'new type of weather'
    }
}
    return(
    <div className="box-container__item">
        <SkyState
                sky={sky}
                time={time}
        />
        <Title>
            {translate(sky)},{temp.toFixed(0)}C
        </Title>

    </div>
    )
}
export default Visual