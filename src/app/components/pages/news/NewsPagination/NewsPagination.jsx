import React from 'react'
import { API_ENDPOINT_NEWS, API_ROOT_URL } from '@config/api';
import Pagination from '@components/shared/Pagination/Pagination';


const NewsPagination = ({currentPage, setCurrentPage, totalPages,}) => {
    return (
        <div className='news__pagination'>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} endpoint={`${API_ROOT_URL + API_ENDPOINT_NEWS + '/page/'}`} />
        </div>
    )
}

export default NewsPagination