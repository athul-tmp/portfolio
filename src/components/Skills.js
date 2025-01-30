import React from 'react';
import pythonImage from '../images/python.png';
import javaImage from '../images/java.png'; 
import cppImage from '../images/cplusplus.png';
import cssImage from '../images/css.png';
import htmlImage from '../images/html.png';
import jsImage from '../images/js.png';
import sqlImage from '../images/sql.png';
import gitImage from '../images/git.png';
import awsImage from '../images/aws.png';
import figmaImage from '../images/figma.png';
import dockerImage from '../images/docker.png';
import macOSImage from '../images/macos.png';
import linuxImage from '../images/linux.png';
import windowsImage from '../images/windows.png';

function Skills() {
  return (
    <section className="skills-section">
      <h2>Technical Skills</h2>
      <div className="skills-container">
        {/* Skill Category 1 */}
        <div className="skill-category">
          <h3>Languages</h3>
          <div className="skills-list">
            <div className="skill-item">
              <img src={pythonImage} alt="Python" className="skill-icon" />
              <span className="skill-text">Python</span>
            </div>
            <div className="skill-item">
              <img src={javaImage} alt="Java" className="skill-icon" />
              <span className="skill-text">Java</span>
            </div>
            <div className="skill-item">
              <img src={cppImage} alt="C++" className="skill-icon" />
              <span className="skill-text">C++</span>
            </div>
            <div className="skill-item">
              <img src={htmlImage} alt="HTML" className="skill-icon" />
              <span className="skill-text">HTML</span>
            </div>
            <div className="skill-item">
              <img src={cssImage} alt="CSS" className="skill-icon" />
              <span className="skill-text">CSS</span>
            </div>
            <div className="skill-item">
              <img src={jsImage} alt="JavaScript" className="skill-icon" />
              <span className="skill-text">JavaScript</span>
            </div>
            <div className="skill-item">
              <img src={sqlImage} alt="SQL" className="skill-icon" />
              <span className="skill-text">SQL</span>
            </div>
          </div>
        </div>

        {/* Skill Category 2 */}
        <div className="skill-category">
          <h3>Developer Tools</h3>
          <div className="skills-list">
            <div className="skill-item">
              <img src={gitImage} alt="Git" className="skill-icon" />
              <span className="skill-text">Git</span>
            </div>
            <div className="skill-item">
              <img src={awsImage} alt="AWS" className="skill-icon" />
              <span className="skill-text">AWS</span>
            </div>
            <div className="skill-item">
              <img src={figmaImage} alt="Figma" className="skill-icon" />
              <span className="skill-text">Figma</span>
            </div>
            <div className="skill-item">
              <img src={dockerImage} alt="Docker" className="skill-icon" />
              <span className="skill-text">Docker</span>
            </div>
          </div>
        </div>

        {/* Skill Category 3 */}
        <div className="skill-category">
          <h3>Operating Systems</h3>
          <div className="skills-list">
            <div className="skill-item">
              <img src={macOSImage} alt="macOS" className="skill-icon" />
              <span className="skill-text">macOS</span>
            </div>
            <div className="skill-item">
              <img src={linuxImage} alt="Linux" className="skill-icon" />
              <span className="skill-text">Linux</span>
            </div>
            <div className="skill-item">
              <img src={windowsImage} alt="Windows" className="skill-icon" />
              <span className="skill-text">Windows</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
