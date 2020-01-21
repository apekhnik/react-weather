import React from 'react'
import './Indicator.css'
import classnames from 'classnames'

const Indicators = ({value, className}) => {
    
    const classes = classnames ('indicator',  className )
    return(
        <span className={classes}>{value}</span>
    )
}
export default Indicators