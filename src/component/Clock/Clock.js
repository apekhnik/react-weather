import React, { useState, useEffect } from 'react';
import {DAY_NAMES} from '../../constants';

const Clock = ({ lat, lon }) => {
    const [min, setMin] = useState('00')
    const [hour, setHour] = useState('00')

    useEffect(() => {
        ticktack(lat, lon)
        let timerId = setInterval(async () => {
            ticktack(lat, lon)
        }, 60000);
    }, [])


    const ticktack = async (lat, lon) => {

        const timezone = await fetch(`http://api.geonames.org/timezoneJSON?lat=${lat}&lng=${lon}&username=napasponiki`)
            .then(timezone => timezone.json())


        setMin(timezone.time.substr(14))
        setHour(timezone.time.substr(11, 2))
    }

    let day = new Date().getDay()
    const currentDayName = DAY_NAMES[day]

    return (
        <h4>{hour}<span className="double_dots">:</span>{min} {currentDayName}</h4>
    )
}
export default Clock