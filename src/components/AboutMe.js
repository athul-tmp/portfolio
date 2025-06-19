import React from 'react';
import myImage from '../images/personal_image.jpg';

function AboutMe() {
  return (
    <section className="about-me" id="aboutme">
      <div className="about-me-text">
        <h1>Who am I?</h1>
        {/* Mobile image */}
        <img src={myImage} alt="This is me" className="about-me-img mobile-only" />
        <p>My name is <b>Athul</b>. I'm a recent Computer Science graduate from RMIT University, passionate about computers and technology. Beyond coding, I enjoy exploring new tech, gaming, NBA, F1, and all things nerdy.</p>
        <p>Check out some of my projects!</p>
      </div>
      {/* Desktop image */}
      <img src={myImage} alt="This is me" className="about-me-img desktop-only" />
    </section>
  );
}

export default AboutMe;
