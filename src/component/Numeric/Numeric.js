import React from 'react'


const Numeric = ({temp, feelsLike,temp_min, temp_max,windDeg, windSpeed, className}) =>{
const wind =(deg = 150)=>{
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

    return(
        <div className='box-container__item'>
            <p>за окном <span>{temp.toFixed(0)}</span></p>
            <p>по ощущениям <span>{feelsLike.toFixed(0)}</span></p>
            <p>min <span>{temp_min.toFixed(0)}</span>max <span>{temp_max.toFixed(0)}</span></p>
            <p>ветер <span>{windSpeed}</span> m/s направление <span>{wind(windDeg)||'Южный'}</span></p>
        </div>
    )
}
export default Numeric