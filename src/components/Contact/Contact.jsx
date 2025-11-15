import React from 'react'
import './Contact.css'
import msgIcon from '../../assets/msgIcon.png';
import phone from '../../assets/phone.png';
import mail from '../../assets/mail.png';
import location from '../../assets/location.png';
import arrow from '../../assets/arrow2.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    console.log(event.target)
    const formData = new FormData(event.target);

    formData.append("access_key", "747589b3-0d10-4a30-82a0-8f75db68023f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
};
  return (
    <div className='contact' id='contact'>
        <div className="contactCol">
            <h3>Send us a message <img src={msgIcon} alt="" /></h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us  as we strive to provide exceptional service to our university community.</p>
            <ul>
                <li> <img src={mail} alt="" /> contact@edusity.dev</li>
                <li> <img src={phone} alt="" /> +1 123-4567-890</li>
                <li> <img src={location} alt="" /> Masachusetts Ave, Cambridge <br />MA 02139, United States</li>
            </ul>
        </div>
        <div className="contactCol">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                <label >Write your msg here</label>
                <textarea name="message" rows='6' placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn darkBtn'>Submit Now <img src={arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact