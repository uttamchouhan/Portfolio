import React from 'react'
import './Contact.css'
import profiel_image from '../../assets/profile-photo.jfif'
const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contact-container">
          <form action="" className="form-content">
            <div className="content-contactus">
              <div className="contact-profile">
                <img src={profiel_image} alt="Profile" />
                <p>Let's Content With me.</p>
              </div>
            </div>
            <p>Help me get to know you.</p>
            <div className="two-input">
              <input className='from-field name' type="text" placeholder='First name' required />
              <input className='from-field name' type="text" placeholder='Last name' required />
            </div>
            <div className="single-input">
              <input className='from-field remain-input' type="email" placeholder='Email' required />
            </div>
            <div className="single-input">
              <input className='from-field remain-input' type="tel" placeholder='Phone nuber (Option)' required />
            </div>

            <p>Tell me more about the project.</p>
            <div className="single-input">
              <textarea className='from-field remain-input from-textarea' placeholder='Contact Me' name="" id="" required></textarea>
            </div>
            <p>I promise to never sell your personal information or give it to anyone, for any reason.</p>
            <button type='submit'>Submit</button>
          </form>

        </div>
        <div className='footer-line'></div>
        <div className="footer">
          <div className="footer-container">
            <p>Copyright {new Date().getFullYear()}. Designed and built by Uttam Chouhan.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
