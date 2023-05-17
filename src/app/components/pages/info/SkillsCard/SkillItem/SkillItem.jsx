import React from 'react'
import './SkillItem.css';

const SkillItem = (props) => {
  return (
    <div className='skill__item'>
        {props.name}
    </div>
  )
}

export default SkillItem