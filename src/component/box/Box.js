import React,{Component} from 'react'
import './Box.css'
import classnames from 'classnames'
import Clock from '../Clock/Clock'
import Title from '../Title/Title'
import Input from '../Input/Input'
import Numeric from '../Numeric/Numeric'
import Visual from '../visual/Visual'
import Container from '../container/Container'
import PropTypes from 'prop-types'
import Badge from '../Badge/Badge'
const Box = ({sky, country, city, temp, feelsLike, temp_min, temp_max, windDeg, windSpeed, sunrise, sunset,onKeyPress,onChange,value, error, lat, lon, time}) => {
    const whatTime=(time)=>{

       return  time> 19 || time < 6 ? 'night' : 'day'
       
    }   

        var date = new Date();
        const night = whatTime(time.substr(11,2))
        const classes = classnames(
            'box',
            night
        );
        return(
            <Container className={classes}>
                <Clock
                    lat={lat}
                    lon={lon}
                />
                <Title>
                    {error?`${error}`:`${city},${country}`}
                </Title>
                <Badge>
                {`рассвет: ${sunrise.substr(11)}`}
                {`закат: ${sunset.substr(11)}`}

                </Badge>
                <Input
                    onKeyPress={onKeyPress}
                    onChange={onChange}
                    value={value}
                />
                <Container className='box-container'>
                        <Numeric
                            temp={temp}
                            feelsLike={feelsLike}
                            temp_min={temp_min}
                            temp_max={temp_max}
                            windSpeed={windSpeed}
                            windDeg={windDeg}
                        />
                        <Visual
                            time={time}
                            sky={sky}
                            temp={temp}
                        />
                </Container>
            </Container>
        )
    
}
export default Box
Box.propTypes={
    sky: PropTypes.string, 
    country: PropTypes.string, 
    city: PropTypes.string, 
    temp: PropTypes.number, 
    feelsLike: PropTypes.number, 
    temp_min: PropTypes.number, 
    temp_max: PropTypes.number, 
    windDeg: PropTypes.number, 
    windSpeed: PropTypes.number, 
    sunrise: PropTypes.number, 
    sunset: PropTypes.number, 
    onKeyPress: PropTypes.func,
    onChange: PropTypes.func,
    value: PropTypes.string
}
Box.defaultProps={
    sky: 'Clear', 
    country: 'Zimbabve', 
    city: 'Chita', 
    temp: '12', 
    feelsLike: '12',
    temp_min: '12', 
    temp_max: '12', 
    windDeg: 250, 
    windSpeed: 5, 
    sunrise: 11, 
    sunset: 11, 
    onKeyPress: ()=>{},
    onChange: ()=>{},
    value: ''
}