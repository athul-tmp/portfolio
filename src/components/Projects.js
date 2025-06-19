import React from 'react';
import musicappImage from "../images/Music_App.png";
import vacuumcleanerImage from "../images/Vacuum_Cleaner.png";
import mcvillageImage from "../images/Minecraft_Village.png";
import closinggapImage from "../images/Closing_The_Gap.png";
import rpcImage from "../images/Rock_Paper_Scissors.png";
import fbmetricsImage from "../images/FB_metrics.png";
import vetcareImage from "../images/VetCare.png";
import airbnbImage from "../images/airbnb.png";
import { FaGithub } from 'react-icons/fa';
import { FaPlayCircle } from 'react-icons/fa';
import { FaFileAlt } from 'react-icons/fa';

const projectsData = [
  {
    title: "Airbnb Booking Website",
    image: airbnbImage,
    description:
      "A full-stack web app simulating an Airbnb booking system using MongoDB, React, TypeScript, Node.js, Express, and Chakra UI. Users can browse listings from MongoDB's sample_airbnb database and create new bookings for those listings, showcasing core CRUD functionality with a focus on booking creation and listing retrieval.",
    tech: ["MongoDB", "React", "TypeScript", "Node.js", "Express", "Chakra UI"],
    repo: "https://github.com/athul-tmp/airbnb-booking-app",
    demo: "https://drive.google.com/file/d/1FDB2GqPM9NOIhKNOLXevuM2lqU1h35yw/view?usp=sharing",
  },
  {
    title: "VetCare - Online Vet Clinic Management System",
    image: vetcareImage,
    description:
      "A full-stack web app for managing veterinary clinic operations, including appointment scheduling/rescheduling, medical record management, and prescription tracking, integrated with authentication. Built with Spring Boot and MySQL, containerized using Docker.",
    tech: ["Java", "Spring Boot", "MySQL", "Docker"],
    demo: "https://drive.google.com/file/d/1F08xx3LhwmULGUv1ZK2bf_tGriwy8y5H/view?usp=sharing",
  },
  {
    title: "Music Subscription App",
    image: musicappImage,
    description:
      "A web app built with HTML, CSS, JavaScript, and PHP, hosted on AWS EC2. It uses DynamoDB for user authentication and AWS S3 for image storage.",
    tech: ["HTML", "CSS", "JavaScript", "PHP", "AWS (S3, DynamoDB, EC2)"],
    demo: "https://drive.google.com/file/d/1yiK10mySCjGmvhRxm1KdEPc5Br41N_mn/view?usp=sharing",
  },
  {
    title: "Vacuum Cleaner Game",
    image: vacuumcleanerImage,
    description:
      "Created a vacuum cleaner game in C++ using OOP principles with a command-line interface. Players navigate a 10x10 grid with text-based commands.",
    tech: ["C++"],
    demo: "https://drive.google.com/file/d/1ZJcLrHsDaiwb9Wh05ghvfdG1gYi3tXLq/view?usp=sharing",
  },
  {
    title: "Minecraft Village Generator",
    image: mcvillageImage,
    description:
      "A procedural Minecraft village generator in Python using MCPI. It dynamically generates villages with varying room sizes and pathways, adding trees for realism.",
    tech: ["Python"],
    repo: "https://github.com/athul-tmp/Minecraft-Village-Generator",
    demo: "https://www.youtube.com/watch?v=raSy0x0HETk",
  },
  {
    title: "Closing The Gap",
    image: closinggapImage,
    description:
      "Developed a web app to highlight socio-economic disparities between Indigenous and non-Indigenous Australians, using Java, Javalin, SQLite, and tabular data visualisations.",
    tech: ["Java", "HTML", "CSS", "SQL"],
    demo: "https://drive.google.com/file/d/1EULJZOG9AyldtHaeqRjcMYZicBthZEHC/view?usp=sharing",
  },
  {
    title: "Rock-Paper-Scissors",
    image: rpcImage,
    description:
      "Built an interactive rock-paper-scissors game with HTML, CSS, and JavaScript, where users play against a computer opponent.",
    tech: ["JavaScript", "HTML", "CSS"],
    repo: "https://github.com/athul-tmp/rock-paper-scissors",
    demo: "https://athul-tmp.github.io/rock-paper-scissors/",
  },
  {
    title: "Facebook Metrics Analysis",
    image: fbmetricsImage,
    description:
      "Analysed a 2014 Facebook dataset of posts from a cosmetics brand using Python, Pandas, and Matplotlib for data cleaning and visualisation.",
    tech: ["Python", "NumPy", "Matplotlib", "Pandas", "Jupyter Notebook"],
    repo: "https://github.com/athul-tmp/Facebook-Metrics-Analysis",
    report: "https://github.com/athul-tmp/Facebook-Metrics-Analysis/blob/main/Phase1_Project.ipynb",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <h2>My Projects</h2>
        <p>The code repository for my portfolio website can be accessed <a href="https://github.com/athul-tmp/portfolio" target="_blank" rel="noreferrer">here</a>.</p>
        <p>The following are some of the projects that I've been involved in over the years:</p>
      </div>

      <div className="projects-grid">
        {projectsData.map((project, idx) => (
          <article key={idx} className="project-card" tabIndex={0}>
            <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((techItem, i) => (
                  <span key={i} className="tech-badge">{techItem}</span>
                ))}
              </div>
              <div className="project-links">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline"
                    aria-label={`View ${project.title} GitHub repository`}
                  > 
                  <FaGithub style={{ marginRight: '6px' }} />
                    Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline"
                    aria-label={`View ${project.title} demo`}
                  >
                   <FaPlayCircle style={{ marginRight: '6px' }} />
                    Demo
                  </a>
                )}
                {project.report && (
                  <a
                    href={project.report}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline"
                    aria-label={`View ${project.title} report`}
                  >
                  <FaFileAlt style={{ marginRight: '6px' }} />
                    Report
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
