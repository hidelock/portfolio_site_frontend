import React from 'react'
import { API_ENDPOINT_PROJECTS, API_ROOT_URL } from '@config/api';
import Pagination from '@components/shared/Pagination/Pagination';


const ProjectsPagination = ({currentPage, setCurrentPage, totalPages}) => {
    return (
        <div className='projects__pagination'>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} endpoint={`${API_ROOT_URL + API_ENDPOINT_PROJECTS + '/page/'}`} />
        </div>
    )
}

export default ProjectsPagination