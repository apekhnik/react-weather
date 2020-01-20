import React from 'react'
import SkyState from '../planet/skyState/SkyState'
import Title from '../Title/Title'
import { WEATHER } from '../../constants';

const Visual = ({ time, sky, temp }) => {
    const title = `${WEATHER[sky]}, ${temp.toFixed(0)}C`;

    return (
        <div className="box-container__item">
            <SkyState
                sky={sky}
                time={time}
            />
            <Title>
                {title}
            </Title>
        </div>
    )
}
export default Visual