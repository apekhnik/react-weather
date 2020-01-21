import React from 'react'
import {TO_FIXED} from '../../constants'
import Text from '../Text/Text'
import Indicators from '../Indicators/Indicators'
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
    const temperature = temp.toFixed(TO_FIXED);
    const minTemperature = temp_min.toFixed(TO_FIXED);
    const maxTemperature = temp_max.toFixed(TO_FIXED);
    const feelsLikeTemperature = feelsLike.toFixed(TO_FIXED);

    return (
        <>
 
            <Text text="за окном">
                <Indicators value={temperature}/>
            </Text>
            <Text text="по ощущениям">
                <Indicators value={feelsLikeTemperature}/>
            </Text>
            <Text text="min/max">
                <Indicators value={minTemperature} />
                <Indicators value={maxTemperature} />
            </Text>
            <Text text="ветер m/s ">
                <Indicators value={windSpeed}/>
                <Indicators value={windDirection}/>
            </Text>

        </>
    )
}
export default Numeric