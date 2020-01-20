import React from 'react'

const getWindDirection = (deg = 150) => {
    switch (true) {
        case (deg > 270):
            return 'Северо-Запад';
        case (deg > 180):
            return 'Юго-Запад';
        case (deg > 90):
            return 'Юго-Восток';
        default:
            return 'Северо-Восток';
    };
}

const Numeric = ({
    temp,
    feelsLike,
    temp_min,
    temp_max,
    windDeg,
    windSpeed
}) => {
    const windDirection = getWindDirection(windDeg);
    const temperature = temp.toFixed(0);
    const minTemperature = temp_min.toFixed(0);
    const maxTemperature = temp_max.toFixed(0);
    const feelsLikeTemperature = feelsLike.toFixed(0);

    return (
        <div className='box-container__item'>
            <p>за окном <span>{temperature}</span></p>
            <p>по ощущениям <span>{feelsLikeTemperature}</span></p>
            <p>min <span>{minTemperature}</span>max <span>{maxTemperature}</span></p>
            <p>ветер <span>{windSpeed}</span> m/s направление <span>{windDirection}</span></p>
        </div>
    )
}
export default Numeric