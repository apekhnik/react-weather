import React from 'react'

const Badge = ({children}) => {
    return(
        <div className="box-badge">
            {children.map((item)=>{
            return <div key={Math.random(5)}>{item}</div>
            })}
        </div>
    )
}
export default Badge