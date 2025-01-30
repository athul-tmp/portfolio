import React, { useRef } from 'react';
import musicappImage from "../images/Music_App.png";
import vacuumcleanerImage from "../images/Vacuum_Cleaner.png";
import mcvillageImage from "../images/Minecraft_Village.png";
import closinggapImage from "../images/Closing_The_Gap.png";
import rpcImage from "../images/Rock_Paper_Scissors.png"
import fbmetricsImage from "../images/FB_metrics.png"

function Projects() {
  const projectsRef = useRef(null);

  // Scroll by width of 3 items (300px per item + 20px gap)
  const scrollProjects = (direction) => {
    const container = projectsRef.current;
    const scrollAmount = 3 * (300 + 20); // 3 items, each 300px + 20px gap

    if (direction === 'left') {
      container.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth',
      });
    } else {
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="projects-section" id="projects">
      <div className="about-projects">
        <h2>Projects</h2>
        <p>The code repository for my portfolio website can be accessed <a href="https://github.com/athul-tmp/portfolio" target="_blank" rel="noreferrer">here</a>.</p>
        <p>The following are the projects that I've been involved in over the years:</p>
      </div>

      <div className="projects-container">
        <button className="scroll-btn left-btn" onClick={() => scrollProjects('left')}>&#8249;</button>
        <div className="projects-list" ref={projectsRef}>
          {/* Project 1 */}
          <div className="project-card">
            <h3>Music Subscription App</h3>
            <div className="project-content">
              <img src={musicappImage} alt="Image of Music App's the main page after login" />
              <div className="project-info">
                <p>A web app built with HTML, CSS, JavaScript, and PHP, hosted on AWS EC2. It uses DynamoDB for user authentication and AWS S3 for image storage.</p>
                <p><b>Tech used: HTML, CSS, Javascript, PHP, AWS (S3, DynamoDB, EC2)</b></p>
                <div class="btn-container">
                  <a className="btn" href="https://drive.google.com/file/d/1yiK10mySCjGmvhRxm1KdEPc5Br41N_mn/view?usp=sharing" target="_blank" rel="noreferrer">Video Demo</a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="project-card">
            <h3>Vacuum Cleaner Game</h3>
            <div className="project-content">
              <img src={vacuumcleanerImage} alt="Image of the vacuum cleaner game board" />
              <div className="project-info">
                <p>Created a vacuum cleaner game in C++ using OOP principles with a command-line interface. Players navigate a 10x10 grid with text-based commands.</p>
                <p><b>Tech used: C++</b></p>
                <div class="btn-container">
                  <a className="btn" href="https://drive.google.com/file/d/1ZJcLrHsDaiwb9Wh05ghvfdG1gYi3tXLq/view?usp=sharing" target="_blank" rel="noreferrer">Video Demo</a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="project-card">
            <h3>Minecraft Village Generator</h3>
            <div className="project-content">
              <img src={mcvillageImage} alt="Image of the generated minecraft village" />
              <div className="project-info">
                <p>A procedural Minecraft village generator in Python using MCPI. It dynamically generates villages with varying room sizes and pathways, adding trees for realism.</p>
                <p><b>Tech used: Python</b></p>
                <div class="btn-container">
                  <a className="btn" href="https://github.com/athul-tmp/Minecraft-Village-Generator" target="_blank" rel="noreferrer">GitHub Repo</a>
                  <a className="btn" href="https://www.youtube.com/watch?v=raSy0x0HETk" target="_blank" rel="noreferrer">Video Demo</a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="project-card">
            <h3>Closing The Gap</h3>
            <div className="project-content">
              <img src={closinggapImage} alt="Image of closing the gap web app" />
              <div className="project-info">
                <p>Developed a web app to highlight socio-economic disparities between Indigenous and non-Indigenous Australians, using Java, Javalin, SQLite, and tabular data visualisations.</p>
                <p><b>Tech used: Java, HTML, CSS, SQL</b></p>
                <div class="btn-container">
                  <a className="btn" href="https://drive.google.com/file/d/1EULJZOG9AyldtHaeqRjcMYZicBthZEHC/view?usp=sharing" target="_blank" rel="noreferrer">Video Demo</a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 5 */}
          <div className="project-card">
            <h3>Rock-Paper-Scissors</h3>
            <div className="project-content">
              <img src={rpcImage} alt="Image of Rock Paper Scissors app" />
              <div className="project-info">
                <p>Built an interactive rock-paper-scissors game with HTML, CSS, and JavaScript, where users play against a computer opponent.</p>
                <p><b>Tech used: JavaScript, HTML, CSS</b></p>
                <div class="btn-container">
                  <a className="btn" href="https://github.com/athul-tmp/rock-paper-scissors" target="_blank" rel="noreferrer">Github Repo</a>
                  <a className="btn" href="https://athul-tmp.github.io/rock-paper-scissors/" target="_blank" rel="noreferrer">App</a>
                </div>
              </div>
            </div>
          </div>

          {/* Project 6 */}
          <div className="project-card">
            <h3>Facebook Metrics Analysis</h3>
            <div className="project-content">
              <img src={fbmetricsImage} alt="Image of the FB metrics report" />
              <div className="project-info">
                <p>Analysed a 2014 Facebook dataset of posts from a cosmetics brand using Python, Pandas, and Matplotlib for data cleaning and visualisation.</p>
                <p><b>Tech used: Python, NumPy, Matplotlib, Pandas, Jupyter Notebook</b></p>
                <div class="btn-container">
                  <a className="btn" href="https://github.com/athul-tmp/Facebook-Metrics-Analysis" target="_blank" rel="noreferrer">GitHub Repo</a>
                  <a className="btn" href="https://github.com/athul-tmp/Facebook-Metrics-Analysis/blob/main/Phase1_Project.ipynb" target="_blank" rel="noreferrer">Report</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="scroll-btn right-btn" onClick={() => scrollProjects('right')}>&#8250;</button>
      </div>
    </section>
  );
}

export default Projects;
