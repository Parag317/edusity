import React from 'react'
import './Hero.css'
import darkArrow from '../../assets/arrow.png'

const Hero = () => {
  return (
    <div className='hero container' id='hero'>
        <div className="heroText">
            <h1>We ensure better education for a better world.</h1>
            <p>Our cutting-edge curriculum is designed to empower students with knowledge, skills and experiences needed to excel in the dynamic field of education</p>
            <button className='btn'>Explore more <img src={darkArrow} alt="" /></button>
        </div>
    </div>
  )
}

export default Hero