import React, {Component} from 'react'

export default class Clock extends Component {
    state={
        time: '00:00',
        min: '00',
        hour: '00'
    }
    async componentDidMount(){
        let date = new Date()
        this.ticktack()
         let  timerId =  setInterval(async() => {
           this.ticktack()
        }, 60000);
    }
    async ticktack(){
        var date = new Date();
        const timezone = await fetch(`http://api.geonames.org/timezoneJSON?lat=${this.props.lat}&lng=${this.props.lon}&username=napas`)
                                    .then(timezone=>timezone.json())
        
         this.setState({   
            time: timezone.time,
            min:  timezone.time.substr(14),
            hour: timezone.time.substr(11,2)
        })
    }
    whatdayIs(){
        let date = new Date()
        const {time, min, hour} = this.state
        switch(date.getDay()){
            case 1:
                  return <h4>{hour}<span className="double_dots">:</span>{min} Понедельник</h4>
            case 2:
                return<h4>{hour}<span className="double_dots">:</span>{min} Вторник</h4>
            case 3:
                return <h4>{hour}<span className="double_dots">:</span>{min} Среда</h4>
            case 4:
                return <h4>{hour}<span className="double_dots">:</span>{min} Четверг</h4>
            case 5:
                return <h4>{hour}<span className="double_dots">:</span>{min} Пятница</h4>
            case 6:
                return <h4>{hour}<span className="double_dots">:</span>{min} Суббота</h4>
            case 7:
                return <h4>{hour}<span className="double_dots">:</span>{min} Воскресенье</h4>
        }
    }
    render(){
        return(
    this.whatdayIs()
        )
    }
}