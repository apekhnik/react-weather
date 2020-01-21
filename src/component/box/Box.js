import React, { useState } from 'react'
import './Box.css'
import classnames from 'classnames'
import Clock from '../Clock/Clock'
import Title from '../Title/Title'
import Input from '../Input/Input'
import Text from '../Text/Text'
import ContainerItem from '../ContainerItem/ContainerItem'
import Numeric from '../Numeric/Numeric'
import {CONTAINER_ITEM_CLASSNAME,
        CONTAINER_CLASSNAME,
        SUBSTR_FOR_HOUR,
        NIGHT_BEGIN_TIME,
        DAY_BEGIN_TIME,
        SUBSTR_FOR_HOUR_LENGTH } from '../../constants'
import Visual from '../visual/Visual'
import Container from '../container/Container'
import PropTypes from 'prop-types'
import Badge from '../Badge/Badge'
const Box = ({
    sky = 'Clear',
    country = 'Zimbabve',
    city = 'Chita',
    temp = '12',
    feelsLike = '12',
    temp_min = '12',
    temp_max = '12',
    windDeg = 250,
    windSpeed = 5,
    sunrise = 11,
    sunset = 11,
    onKeyPress = () => { },
    onChange = () => { },
    value = '',
    error,
    lat,
    lon,
    time,
    timezoneID
}) => {
    const whatTime = (time) => {

        return time > NIGHT_BEGIN_TIME || time < DAY_BEGIN_TIME ? 'night' : 'day'

    }

    
    const night = whatTime(time.substr(SUBSTR_FOR_HOUR, SUBSTR_FOR_HOUR_LENGTH))
    const classes = classnames(
        'box',
        night
    );
    return (
        <Container className={classes}>
            <Clock
                lat={lat}
                lon={lon}
            />
            <Title>
                {error ? `${error}` : `${city},${country}`}
            </Title>
            <Badge>
                <Text text='рассвет: '>
                    {sunrise.substr(SUBSTR_FOR_HOUR)}
                </Text>
                <Text text='закат: '>
                    {sunset.substr(SUBSTR_FOR_HOUR)}
                </Text>
                <Text>
                    {timezoneID}
                </Text>
            </Badge>
            <Input
                onKeyPress={onKeyPress}
                onChange={onChange}
                value={value}
            />
            <Container className={CONTAINER_CLASSNAME}>
                <ContainerItem className={CONTAINER_ITEM_CLASSNAME}>
                    <Numeric
                        temp={temp}
                        feelsLike={feelsLike}
                        temp_min={temp_min}
                        temp_max={temp_max}
                        windSpeed={windSpeed}
                        windDeg={windDeg}
                    />
                </ContainerItem>
                
                <ContainerItem className={CONTAINER_ITEM_CLASSNAME}>
                    <Visual
                        time={time}
                        sky={sky}
                        temp={temp}
                    />
                </ContainerItem>
            </Container>
        </Container>
    )

}
export default Box
Box.propTypes = {
    sky: PropTypes.string,
    country: PropTypes.string,
    city: PropTypes.string,
    temp: PropTypes.number,
    feelsLike: PropTypes.number,
    temp_min: PropTypes.number,
    temp_max: PropTypes.number,
    windDeg: PropTypes.number,
    windSpeed: PropTypes.number,
    sunrise: PropTypes.string,
    sunset: PropTypes.string,
    onKeyPress: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.string
}