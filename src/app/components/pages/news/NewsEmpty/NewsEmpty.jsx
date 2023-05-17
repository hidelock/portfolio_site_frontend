import React from 'react'
import { BsFillLayersFill } from 'react-icons/bs';

const NewsEmpty = () => {
    return (
        <div className="container__empty">
            <p><BsFillLayersFill /> News</p>
            <p>Новостей не найдено!</p>
        </div>
    )
}

export default NewsEmpty