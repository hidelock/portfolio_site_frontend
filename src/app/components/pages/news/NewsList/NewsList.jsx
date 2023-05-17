import React from 'react'
import NewsCard from '@components/pages/news/NewsCard/NewsCard';
import './NewsList.css'


const NewsList = ({news}) => {
    return (
        <div className='news__items'>
            {news.map(item =>
                <NewsCard key={item.id} data={item} />
            )}
        </div>
    )
}

export default NewsList