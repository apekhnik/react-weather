import React, { useState, useEffect } from 'react'
import Box from '../../component/box/Box'
import Loader from '../../component/Loader/Loader'

const getWeatherEndpoint = city => `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=349083c430ac053a45a0745df28c1425`;
const getTimezoneEndpoint = ({ lat, lon }) => `http://api.geonames.org/timezoneJSON?lat=${lat}&lng=${lon}&username=napas`;

const toJSON = response => response.json()

const Weather = () => {
    const [weather, setWeather] = useState({})
    const [coord, setCoord] = useState([])
    const [loading, setLoading] = useState(true)
    const [findPlace, setPlace] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        getData()
    }, []);
    const onChangeHandler = (e) => {

        setPlace(e.target.value)
    }
    const getData = async () => {
        setLoading(true)
        try {
            const searchedCity = findPlace || 'Лондон';

            const {
                weather,
                name,
                coord,
                main: {
                    temp,
                    feels_like: feelsLike,
                    temp_min,
                    temp_max,
                    pressure,
                    humidity
                },
                wind: {
                    speed: windSpeed,
                    deg: windDeg
                },
                sys: { country }
            } = await fetch(getWeatherEndpoint(searchedCity)).then(toJSON)

            const { sunrise, sunset, time } = await fetch(getTimezoneEndpoint(coord)).then(toJSON)

            const { main, description } = weather[0];

            setWeather({
                main,
                description,
                temp,
                feelsLike,
                temp_min,
                temp_max,
                pressure,
                humidity,
                windSpeed,
                windDeg,
                country,
                name,
                sunrise,
                sunset,
                time
            })
            setCoord(coord)
            setError(false)
            setPlace('')
            finishLoad()


        } catch (e) {

            setLoading(false)
            setError('Неверно набран номер')
            console.log(e);
        }
    }
    const searchHandler = ({ key }) => {
        if (key === 'Enter') {
            getData(findPlace)
            setPlace('')
        }
    }
    const finishLoad = () => {
        const load = setTimeout(() => {
            setLoading(false)
        }, 100)

    }

    if (loading) {
        return <Loader />
    }

    return (
        <div className="weather">
            <Box
                sky={weather.main}
                country={weather.country}
                city={weather.name}
                temp={weather.temp}
                temp_max={weather.temp_max}
                temp_min={weather.temp_min}
                feelsLike={weather.feelsLike}
                windSpeed={weather.windSpeed}
                windDeg={weather.windDeg}
                sunrise={weather.sunrise}
                sunset={weather.sunset}
                onKeyPress={searchHandler}
                onChange={onChangeHandler}
                value={findPlace}
                error={error}
                lat={coord.lat}
                lon={coord.lon}
                time={weather.time}
            />
        </div>
    )
}
export default Weather