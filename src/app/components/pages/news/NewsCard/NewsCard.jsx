import React from 'react'
import { BiCalendarAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import { API_UPLOADS_URL } from '@config/api';
import { ROUTE_NEWS } from '@config/routes';
import './NewsCard.css';

const NewsCard = ({data}) => {
    return (
        <div className='news-card card-container'>
            <div className='news-card__header'>
                <Link to={ROUTE_NEWS + '/' + data.id} className='news-card__img'>
                    <img src={API_UPLOADS_URL + data.image} alt="preview news" />
                </Link>
            </div>
            <div className='news-card__main'>
                <Link to={ROUTE_NEWS + '/' + data.id} className='news-card__title'>
                    {data.title}
                </Link>
            </div>
            <div className='news-card__footer'>
                <div className='news-card__category' categories={data.categories}>
                    {data.categories}
                </div>
                <div className='news-card__views'>
                    <BiCalendarAlt />
                    {data.createdAt}
                </div>
            </div>
        </div>
    )
}

export default NewsCard