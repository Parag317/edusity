import React, { useRef } from 'react'
import './Testimonials.css'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import user1 from '../../assets/user1.png'
import user2 from '../../assets/user2.png'
import user3 from '../../assets/user3.png'
import user4 from '../../assets/user4.png'


const Testimonials = () => {
  const ul = useRef();
  let transX = 0;

  const slideForward = () => {
    if(transX > -50) {
      transX -= 25;
    }
    ul.current.style.transform = `translateX(${transX}%)`;
  }

  const slideBackward = () => {
    if(transX < 0) {
      transX += 25;
    }
    ul.current.style.transform = `translateX(${transX}%)`;
  }


  return (
    <div className='testimonials' id='testimonials'>
        <img src={leftArrow} alt="" className='backBtn' onClick={slideBackward}/>
        <img src={rightArrow} alt="" className='nextBtn' onClick={slideForward}/>
        <div className="try"></div>
        <div className="slider">
          <ul ref={ul}>
            <li>
              <div className="slide">
                <div className="userInfo">
                  <img src={user1} alt="" />
                  <div className="info">
                    <h3>William Jackson</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've made. The supportive community, state-of-the-art facilities and commitement to academic excellence have truly exceeded my expectations.</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="userInfo">
                  <img src={user2} alt="" />
                  <div className="info">
                    <h3>William Jackson</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've made. The supportive community, state-of-the-art facilities and commitement to academic excellence have truly exceeded my expectations.</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="userInfo">
                  <img src={user3} alt="" />
                  <div className="info">
                    <h3>William Jackson</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've made. The supportive community, state-of-the-art facilities and commitement to academic excellence have truly exceeded my expectations.</p>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="userInfo">
                  <img src={user4} alt="" />
                  <div className="info">
                    <h3>William Jackson</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>Choosing to pursue my degree at Edusity was one of the best decisions I've made. The supportive community, state-of-the-art facilities and commitement to academic excellence have truly exceeded my expectations.</p>
              </div>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Testimonials