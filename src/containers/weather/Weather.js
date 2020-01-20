import React, {useState, useEffect} from 'react'
import Box from '../../component/box/Box'
import Loader from '../../component/Loader/Loader'


const Weather = () =>{
    const [weather, setWeather] = useState({})
    const [coord, setCoord] = useState([])
    const [loading, setLoading] = useState(true)
    const [findPlace, setPlace] = useState('')
    const [error, setError] = useState('')
    
    useEffect(() => {
        getData()
    }, []);
    const onChangeHandler = (e) =>{
      
        setPlace(e.target.value)
    }
    const getData  = async(url)  =>{
        setLoading(true)
        try{
            const FIND_CITY = findPlace || 'Лондон'
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${FIND_CITY}&units=metric&APPID=349083c430ac053a45a0745df28c1425`)
                                        .then(response=>response.json())
            console.log(response);
            const timezone = await fetch(`http://api.geonames.org/timezoneJSON?lat=${response.coord.lat}&lng=${response.coord.lon}&username=napas`)
                                        .then(timezone=>timezone.json())

            setWeather({
                main: response.weather[0].main,
                description: response.weather[0].description,
                temp: response.main.temp,
                feelsLike: response.main.feels_like,
                temp_min: response.main.temp_min,
                temp_max: response.main.temp_max,
                pressure: response.main.pressure,
                humidity: response.main.humidity,
                windSpeed: response.wind.speed,
                windDeg: response.wind.deg,
                country: response.sys.country,
                name: response.name,
                sunrise: timezone.sunrise,
                sunset: timezone.sunset, 
                time: timezone.time
        })
            setCoord(response.coord)
            setError(false)
            setPlace('')
            finishLoad()

            
        }catch(e){

            setLoading(false)
            setError('Неверно набран номер')
            console.log(e);
        }
    }
    const searchHandler = ({key}) => {
        if(key === 'Enter'){
           getData(findPlace)
           setPlace('')
        }
    }
    const finishLoad = () =>{
        const load = setTimeout(()=>{
            setLoading(false)
        },100)
 
    }

    return(
        <div className="weather">
            {!loading 
            ?
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
            />:<Loader/>
        }
        </div>
    )
}
export default Weather