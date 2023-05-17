import React from 'react'
import SkillItem from './SkillItem/SkillItem';
import './SkillsCard.css';

const SkillsCard = () => {

    const skills = ['React.js', 'Node.js', 'PHP', 'JS', 'C#', 'WPF', 'SQL', 'Linux', 'Docker', 'Git', 'Apache', 'Nginx', 'API', 'WS'];

  return (
    <div className='skills-card'>
        <div className="skills-card__items">
            {skills.map (item => <SkillItem key={item} name={item}/>)}            
        </div>
    </div>
  )
}

export default SkillsCard