import React from 'react'
import classnames from 'classnames'
import './SkyState.css'
const SkyState = ({sky, time}) => {
    const classes = classnames(
        'sky'
    )
    const iconPicker = (sky) => {
      
            switch(sky){
                case 'Snow':
                    return 'https://i.gifer.com/3klb.gif'
                case 'Rain':
                    return 'https://media.giphy.com/media/gGrEYlSniuiJMlfuR6/giphy.gif'
                case 'Clear':
                    if(time > 19 || time < 7){
                        return 'http://pngimg.com/uploads/moon/moon_PNG40.png'
                    }else {
                        return 'https://i.gifer.com/6HhP.gif'
                    }
                    
                case 'Clouds':
                    return 'https://i.gifer.com/ODkn.gif'
                case 'Mist':
                    return 'http://pngimg.com/uploads/moon/moon_PNG40.png'
                case 'Smoke':
                    return 'http://pngimg.com/uploads/moon/moon_PNG40.png'
            }
        }
  
    return(
     <div className={classes}>
         <img src={iconPicker(sky)} alt=""/>
     </div>
 )
}
export default SkyState
