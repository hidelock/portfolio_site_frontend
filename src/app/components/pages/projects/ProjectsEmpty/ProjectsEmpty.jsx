import React from 'react'
import { RiMicrosoftFill, } from "react-icons/ri";


const ProjectsEmpty = () => {
    return (
        <div className="container__empty">
            <p><RiMicrosoftFill /> Projects</p>
            <p>Проектов не найдено!</p>
        </div>
    )
}

export default ProjectsEmpty