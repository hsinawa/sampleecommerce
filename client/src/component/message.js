import React from 'react'
import style from './loader.css'

const  Message = ({message}) => {
    return (
        <div>
            <div className="message"  >
              {message}
                
            </div>
        </div>
    )
}


export default  Message;