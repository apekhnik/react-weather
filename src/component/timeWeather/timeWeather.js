import React, {useState, useEffect} from 'react'

const TimeWeather = ({}) => {
    const [data, setData] = useState([])
    useEffect(()=>{
        getData()
    },[])
    
    const getData = async () =>{
        const {list} = await fetch('https://api.openweathermap.org/data/2.5/forecast?q=London,us&units=metric&mode=json&appid=349083c430ac053a45a0745df28c1425')
            .then(response=>response.json())
        
        
        setData(list)
        console.log(list)
    }
    const type = data.filter((item)=>{
        console.log(item.dt_txt.substr(8,2))
        return item.dt_txt.substr(8,2) == 28
    })
    return(
        <div className="daysafter">
            {type.map((item)=>{
            return <p>{item.dt_txt}</p>
            })}
        </div>
    )
}
export default TimeWeather