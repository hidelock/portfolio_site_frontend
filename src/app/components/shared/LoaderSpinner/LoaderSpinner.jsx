import React from 'react'
import './LoaderSpinner.css'

const LoaderCircle = () => {
    return (
        <div className='loader__container'>
            <div className="loader__spinner">
                <span className="loader__spinner-part-0"></span>
                <span className="loader__spinner-part-1"></span>
                <span className="loader__spinner-part-2"></span>
                <span className="loader__spinner-part-3"></span>
                <span className="loader__spinner-part-0"></span>
                <span className="loader__spinner-part-1"></span>
                <span className="loader__spinner-part-2"></span>
                <span className="loader__spinner-part-3"></span>
            </div>
        </div>
    )
}

export default LoaderCircle