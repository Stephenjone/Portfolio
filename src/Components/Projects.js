import React from 'react'
import './Projects.css';

const Projects = () => {

    const repo1 = () => {
        window.open("https://github.com/Stephenjone/Redux/tree/main");
    }

    const repo2 = () => {
        window.open("https://github.com/Stephenjone/Calculator");
    }

    const repo3 = () => {
        window.open("https://github.com/Stephenjone/Signup-Signin");
    }
    return (
        <section id='project'>
            <h2>Projects</h2>
            <div className='project-section'>
                <div className='project-card'>
                    <h5>Shopping site</h5>
                    <p className='project-description'>The ecommerce shopping website. Built using React and Redux.</p>
                    <button className='btn' onClick={() => repo1()}>Repo</button>
                    <p className='project-skills'><b>Languages:</b> React, redux, HTML and Bootstrap</p>
                </div>
                <div className='project-card'>
                    <h5>Portfolio</h5>
                    <p className='project-description'>"My portfolio highlights the projects I've worked on and the skills I bring to the table.
                                                        It provides an in-depth look at my experience, demonstrating my abilities in.
                                                        Each piece <br/>reflects my approach, creativity, and commitment to delivering high-quality results." </p>
                    <button className='btn' onClick={() => repo3()}>Repo</button>
                    <p className='project-skills'><b>Languages:</b> React, HTML and CSS</p>
                </div>  
                <div className='project-card'>
                    <h5>Signup & Signin</h5>
                    <p className='project-description'>This projects helps the user to signup and stores the user data in virtual database 
                                                       and helps the user to sign in with the <br/>proper authentication</p>
                    <button className='btn' onClick={() => repo3()}>Repo</button>
                    <p className='project-skills'><b>Languages:</b> React, HTML and CSS</p>
                </div>  
                <div className='project-card'>
                    <h5>Calculator</h5>
                    <p className='project-description'>The Calculator built by evaluation expressions.</p>
                    <button className='btn' onClick={() => repo2()}>Repo</button>
                    <p className='project-skills'><b>Languages:</b> React, HTML and CSS</p>
                </div>
            </div>
        </section>
    )
}

export default Projects;