import React from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {


  const get_pagination_items = () => {

    let pages = [];

    for (let index = 1; index <= totalPages; index++) {
      pages.push(
        <button
          key={index}
          onClick={() => setCurrentPage(index)}
          className={index === currentPage ? 'pagination__item active' : 'pagination__item'}>{index}
        </button>
      )
    }

    return pages;
  }

  return (

    <>
      {totalPages >= 0 &&
        <div className='pagination__container'>
          <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1 && true} className='pagination__item pagination__first'>First</button>

          {get_pagination_items()}

          <button onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages && true} className='pagination__item pagination__last'>Last</button>
        </div>
      }
    </>

  )
}

export default Pagination