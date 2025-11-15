import React from 'react'
import './Campus.css'
import img1 from '../../assets/campus1.png'
import img2 from '../../assets/campus2.png'
import img3 from '../../assets/campus3.png'
import img4 from '../../assets/campus4.png'
import arrow from '../../assets/arrow2.png'

const Campus = () => {
  return (
    <div className='campus' id='campus'>
        <div className="gallery">
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
        </div>
        <button className='btn darkBtn'>See More Here <img src={arrow} alt="" /></button>
        
    </div>
  )
}

export default Campus