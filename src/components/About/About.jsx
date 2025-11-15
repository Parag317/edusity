import React from 'react'
import './About.css'
import aboutImg from '../../assets/about.png'
import playIcon from '../../assets/playIcon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about' id='about'>
        <div className="aboutLeft">
            <img src={aboutImg} alt="" className='aboutImg'/>
            <img src={playIcon} alt="" className='playIcon' onClick={() => {
              setPlayState(true);
            }}/>
        </div>
        <div className="aboutRight">
            <h3>About University</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Embark on a transformative educational journey with our University's comprehensive education programs. Our cutting edge curriculum is designed to empower students with the knowledge, skills and experiences needed to excel in the dynamic field of education.</p>
            <p>With a focus on innovation, hands-on learning, and personalized mentorship, our prorams prepare aspiring educators to make a  meaningful impact in classrooms, schools and communitites.</p>
            <p>Whether you aspire to become a teacher, administrator, cunselor, or educational leader, our dieverse range of programs offets the perfect pathway to achieve your goals and unlock your full potential in shaping the future of eduacation.</p>
        </div>
    </div>
  )
}

export default About