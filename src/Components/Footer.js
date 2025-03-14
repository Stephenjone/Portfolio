import React from 'react'
import './Footer.css'; // Assuming your CSS is in this file

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-img'>
        <img src="./Images/3333.jpg" height="700px" width="100%" alt="" />
        <div className='footer-content'>
          <h2 className='footer-heading'>Get in Touch</h2>
          <p className='footer-para'>
            I'm currently looking for a full-time frontend development role!
            If you know of any positions available, if you have any questions, or if you just want to say hi,
            please feel free to email me at, <span>jones.stephen196@gmail.com</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
