import React from 'react'
import './CircleAnimation.css'

const CircleAnimation = () => {
    return (
        <div className='circle-animation-card card-container'>
            <div className='circle-animation-div'></div>
            <div className='circle-animation-glass'>
                <div className='circle-animation-glass-layer'>A</div>
                <div className='circle-animation-glass-layer'>K</div>
                <div className='circle-animation-glass-layer'>E</div>
                <div className='circle-animation-glass-layer'>L</div>
                <div className='circle-animation-glass-layer'>L</div>
                <div className='circle-animation-glass-layer'>A</div>
            </div>
        </div>
    )
}

export default CircleAnimation