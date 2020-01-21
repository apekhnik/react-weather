import React, { useState, useEffect } from 'react';
import {DAY_NAMES,
     SUBSTR_FOR_MINUTES, 
     SUBSTR_FOR_HOUR,
     SUBSTR_FOR_HOUR_LENGTH,
     TIME_DATA_REFRESH
    } from '../../constants';
const toJSON = response => response.json()
const getTime_for_this_timezone = (lat, lon) => `http://api.geonames.org/timezoneJSON?lat=${lat}&lng=${lon}&username=napasponiki`

const Clock = ({ lat, lon }) => {
    const [min, setMin] = useState('00')
    const [hour, setHour] = useState('00')

    useEffect(() => {
        ticktack(lat, lon)
        let timerId = setInterval(async () => {
            ticktack(lat, lon)
        }, TIME_DATA_REFRESH);
    }, [])


    const ticktack = async (lat, lon) => {

        const {time} = await fetch(getTime_for_this_timezone(lat, lon)).then(toJSON)

            

        setMin(time.substr(SUBSTR_FOR_MINUTES))
        setHour(time.substr(SUBSTR_FOR_HOUR, SUBSTR_FOR_HOUR_LENGTH))
    }

    let day = new Date().getDay()
    const currentDayName = DAY_NAMES[day]

    return (
        <h4>{hour}<span className="double_dots">:</span>{min} {currentDayName}</h4>
    )
}
export default Clock