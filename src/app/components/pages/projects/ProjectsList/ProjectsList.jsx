import React from 'react'
import ProjectCard from '@components/pages/projects/ProjectCard/ProjectCard';
import './ProjectsList.css'
const ProjectsList = ({projects}) => {
    return (
        <div className='projects__items'>
            {projects.map((item) =>
                <ProjectCard key={item.id} data={item} />
            )}
        </div>
    )
}

export default ProjectsList