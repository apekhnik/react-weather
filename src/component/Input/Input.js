import React, {Component} from 'react'

export default class Input extends Component {
    componentDidMount(){
        this.inputRefs.current.focus()
    }
    inputRefs  = React.createRef();
    render(){
        const {onChange,className,onKeyPress,value} = this.props
        return(
            <input 
            onChange={onChange}
            className='box-input'
            onKeyPress={onKeyPress}
            value={value}
            ref={this.inputRefs}
            type="text"/>
        )
    }
}