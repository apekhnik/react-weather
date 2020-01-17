import React, {Component} from 'react'

export default class Clock extends Component {
    state={
        time: '00:00',
        min: '00',
        hour: '00'
    }
    componentDidMount(){
        let date = new Date()
        let timerId = setInterval(() => {
            var date = new Date();
            this.setState({   
                time: `${date.getHours()}:${date.getMinutes()}`,
                min: `${date.getMinutes()}`,
                hour: date.getHours()
            })
        }, 1000);
        
    }
    whatdayIs(){
        let date = new Date()
        const {time, min, hour} = this.state
        switch(date.getDay()){
            case 1:
                  return <h4>{hour}<span className="double_dots">:</span>{min} Понедельник</h4>
            case 2:
                return <h4>{time}, Вторник</h4>
            case 3:
                return <h4>{time}, Среда</h4>
            case 4:
                return <h4>{time}, Четверг</h4>
            case 5:
                return <h4>{hour}<span className="double_dots">:</span>{min} Пятница</h4>
            case 6:
                return <h4>{time}, Суббота</h4>
            case 7:
                return <h4>{time}, Воскресенье</h4>
        }
    }
    render(){
        return(
    this.whatdayIs()
        )
    }
}