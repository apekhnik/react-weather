import React, {useState, useEffect} from 'react'

const Clock = ({lat, lon}) => {
    const [time, setTime] = useState('00:00')
    const [min, setMin] = useState('00')
    const [hour, setHour] = useState('00')
    
    useEffect(()=>{
        ticktack(lat,lon)
        let  timerId =  setInterval(async() => {
            ticktack(lat,lon)
         }, 60000);
    },[])
    
    
    const  ticktack = async (lat, lon) => {

        const timezone = await fetch(`http://api.geonames.org/timezoneJSON?lat=${lat}&lng=${lon}&username=napasponiki`)
                                    .then(timezone=>timezone.json())
        

        setTime(timezone.time)
        setMin(timezone.time.substr(14))
        setHour(timezone.time.substr(11,2))
    }
    const whatdayIs =()=>{
        let date = new Date()
        switch(date.getDay()){
            case 1:
                return <h4>{hour}<span className="double_dots">:</span>{min} Понедельник</h4>
            case 2:
                return <h4>{hour}<span className="double_dots">:</span>{min} Вторник</h4>
            case 3:
                return <h4>{hour}<span className="double_dots">:</span>{min} Среда</h4>
            case 4:
                return <h4>{hour}<span className="double_dots">:</span>{min} Четверг</h4>
            case 5:
                return <h4>{hour}<span className="double_dots">:</span>{min} Пятница</h4>
            case 6:
                return <h4>{hour}<span className="double_dots">:</span>{min} Суббота</h4>
            case 0:
                return <h4>{hour}<span className="double_dots">:</span>{min} Воскресенье</h4>
            default:
                return <h4>{hour}<span className="double_dots">:</span>{min} Unknown</h4>
        }
    }

    return (
        whatdayIs()
    )
}
export default Clock