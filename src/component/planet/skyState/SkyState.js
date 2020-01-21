import React from 'react'
import classnames from 'classnames'
import './SkyState.css'
import { DAY_WEATHER_ICON,
        NIGHT_WEATHER_ICON,
        DAY_BEGIN_TIME,
        NIGHT_BEGIN_TIME,
        SUBSTR_FOR_HOUR,
        SUBSTR_FOR_HOUR_LENGTH
    } from '../../../constants';

const SkyState = ({ sky, time }) => {
    const classes = classnames('sky');

    const hour = time.substr(SUBSTR_FOR_HOUR, SUBSTR_FOR_HOUR_LENGTH);
    const isNight = hour > NIGHT_BEGIN_TIME || hour < DAY_BEGIN_TIME;

    const iconSrc = isNight ?
        NIGHT_WEATHER_ICON[sky] :
        DAY_WEATHER_ICON[sky]

    return (
        <div className={classes}>
            <img src={iconSrc} alt="" />
        </div>
    )
}
export default SkyState
