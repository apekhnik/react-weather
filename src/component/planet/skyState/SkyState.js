import React from 'react'
import classnames from 'classnames'
import './SkyState.css'
import { DAY_WEATHER_ICON, NIGHT_WEATHER_ICON } from '../../../constants';

const SkyState = ({ sky, time }) => {
    const classes = classnames('sky');

    const hour = time.substr(11, 2);
    const isNight = hour > 19 || hour < 6;

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
