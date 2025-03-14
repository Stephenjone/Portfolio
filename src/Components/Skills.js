import React, { useState, useEffect } from 'react';
import './Skills.css';

const technicalSkills = [
  { name: 'HTML', level: 80 },
  { name: 'CSS', level: 80 },
  { name: 'JavaScript', level: 70 },
  { name: 'React', level: 70 },
  { name: 'Adobe Photoshop', level: 90 },
  { name: 'Adobe Illustrator', level: 90 },
  { name: 'Adobe After effects', level: 90 },
  { name: 'Adobe Premier pro', level: 90 }
];

const softSkills = [
  { name: 'Goal-Oriented', level: 80 },
  { name: 'Collaboration', level: 80 },
  { name: 'Positivity', level: 80 },
  { name: 'Adaptability', level: 80 },
  { name: 'Problem solving', level: 80 },
  { name: 'Creativity', level: 80 }
];

function App() {
  const [showTechnicalSkills, setShowTechnicalSkills] = useState(true);
  const [showSoftSkills, setShowSoftSkills] = useState(false);

  const handleTechnicalSkillsClick = () => {
    setShowTechnicalSkills(!showTechnicalSkills);
    setShowSoftSkills(false);
  };

  const handleSoftSkillsClick = () => {
    setShowSoftSkills(!showSoftSkills);
    setShowTechnicalSkills(false);
  };

  useEffect(() => {
    // Reset the progress bar animation whenever a new section is shown
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach((bar) => {
      // Reset animation and trigger reflow
      bar.style.animation = 'none';
      
      // Trigger a reflow by reading the bounding client rect
      bar.getBoundingClientRect(); 

      // Reapply the animation after reflow
      bar.style.animation = 'progress-animation 5s ease-in forwards';
    });
  }, [showTechnicalSkills, showSoftSkills]);

  return (
    <div className="skills-section">
      <h2>My Skills</h2>

      <div className="button-container">
        <button className='technical-btn' onClick={handleTechnicalSkillsClick}>Technical Skills</button>
        <button className='softskills-btn' onClick={handleSoftSkillsClick}>Soft Skills</button>
      </div>

      {showTechnicalSkills && (
        <div className="skills-list">
          {technicalSkills.map((skill, index) => (
            <div key={index} className="skill">
              <span className="skill-name">{skill.name}</span>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )}

      {showSoftSkills && (
        <div className="skills-list">
          {softSkills.map((skill, index) => (
            <div key={index} className="skill">
              <span className="skill-name">{skill.name}</span>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
