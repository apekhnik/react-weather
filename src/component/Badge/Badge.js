import React from 'react'

const Badge = ({children}) => {
    return(
        <div className="box-badge">
            {children.map((item)=>{
            return <p key={item}>{item}</p>
            })}
        </div>
    )
}
export default Badge