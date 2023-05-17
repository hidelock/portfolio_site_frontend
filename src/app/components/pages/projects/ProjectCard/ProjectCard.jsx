import React from 'react'
import { RiGithubFill } from 'react-icons/ri';
import { BiCalendarAlt } from 'react-icons/bi'
import { API_UPLOADS_URL } from '@config/api';
import './ProjectCard.css';

const ProjectCard = ({ data }) => {
    return (
        <div className='project-card card-container'>
            <div className='project-card__header'>
                <div className='project-card__img'>
                    <img src={API_UPLOADS_URL + data.image} alt="preview project" />
                </div>
                {
                    data.github &&
                    <a href={data.github} className='project-card__link' title="github" target="_blank" rel="noreferrer">
                        <RiGithubFill />
                    </a>
                }
                <div className='project-card__stack'>
                    {data.stack}
                </div>
            </div>
            <div className='project-card__main'>
                <a href={data.github} className='project-card__title' target="_blank" rel="noreferrer">
                    {data.title}
                </a>
                <div className='project-card__description'>
                    {data.body}
                </div>
            </div>
            <div className='project-card__footer'>
                <div className='project-card__category' categories={data.categories}>
                    {data.categories}
                </div>
                <div className='project-card__views'>
                    <BiCalendarAlt />
                    {data.createdAt}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard