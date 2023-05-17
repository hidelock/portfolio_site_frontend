import React from 'react'
import {AiOutlineExclamationCircle} from 'react-icons/ai';
import './InfoDiv.css';

const InfoDiv = ({children}) => {
  return (
    <div className='info_div'>
        <div className="info_div__icon">
            <AiOutlineExclamationCircle/>
        </div>
        <div className="info_div__content">
            {children}
        </div>
    </div>
  )
}

export default InfoDiv