import React from 'react'
import Navbar from '../Components/Navbar.js'
import './Home.css';
import About from '../Components/About.js'
import Projects from '../Components/Projects.js'
import Skills from '../Components/Skills.js'
import Footer from '../Components/Footer.js'

const Home = () => {
  return (
    <div className='home'>
      <div className='banner'>
      <Navbar />
        <div className='banner-img'>
          <img src="./Images/Banner.jpg" height="auto" width="100%" alt="" />
        </div>

        <div className='banner-content'>
          <h2 className='home-heading'>Stephen S D</h2>
          <p className='para-home'>Passionate about changing the world with technology</p>
        </div>
      </div>
      <About />
      <Projects />
      <br/> <br/> <br/> <br/> <br/>
      <Skills />
      <Footer />
    </div>

  )
}

export default Home