import React from 'react';
import './Programs.css';
import program1 from '../../assets/one.png';
import program2 from '../../assets/two.png';
import program3 from '../../assets/three.png';
import programIcon1 from '../../assets/programIcon1.png'
import programIcon2 from '../../assets/programIcon2.png'
import programIcon3 from '../../assets/programIcon3.png'

const Programs = () => {
  return (
    <div className='programs' id='programs'>
        <div className="program">
          <img src={program1} alt="" />
          <div className="caption">
            <img src={programIcon1} alt="" />
            <p>Graduation Degree</p>
          </div>
        </div>
        <div className="program">
          <img src={program2} alt="" />
          <div className="caption">
            <img src={programIcon2} alt="" />
            <p>Master Degree</p>
          </div>
        </div>
        <div className="program">
          <img src={program3} alt="" />
          <div className="caption">
            <img src={programIcon3} alt="" />
            <p>Post Graduation Degree</p>
          </div>
        </div>
    </div>
  )
}

export default Programs