import React from 'react';
import './About.css';

const About = () => {

    const openResume=()=>{
        window.open('./STEPHEN S DHARMDAS.pdf');
    }

    return (
        <section id='about'>
        <div className='about'>
            <div className='image'>
                <img src="../Images/Stephen.jpeg" alt="Stephen S Dharmdas" />
            </div>
            <div className='about-contents'>
                <h2 className='para-heading'>About Me</h2>
                <p className='para-about'>
                    My name is Stephen S Dharmdas. I’m a graduate of 2017 from KLE College - Hubli
                    with a degree in Information Science Engineering. I'm most passionate about giving back to the community, 
                    and my goal is to pursue this passion within the field of software engineering. 
                    In my free time, I like working on open source projects.
                </p>
                <button className="resume" onClick={openResume}>Resume</button>
            </div>
        </div>
        </section>
    );
}

export default About;
