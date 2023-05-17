import React from 'react'
import './CustomButton.css';

const CustomButton = (props) => {
  return (
    <button disabled={props.disabled} onClick={(e) => props.onClick(e)} className='custom_button'>
      {props.children}
    </button>
  )
}

export default CustomButton