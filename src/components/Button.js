import React from 'react'

const Button = ({handleClick,color, text}) => {
        
    
  return (
    <div>
        <button className='btn' onClick={handleClick}  style={{backgroundColor:color}} >{text}</button>
    </div>
  )
}

export default Button