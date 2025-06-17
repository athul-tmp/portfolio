import React from 'react';
import myImage from '../images/personal_image.jpg';

function AboutMe() {
  return (
    <section className="about-me" id="aboutme">
      <div className="about-me-text">
        <h1>Who am I?</h1>
        <p>My name is <b>Athul</b>. I'm a recent Computer Science graduate from RMIT University, passionate about computers and technology. Beyond academics, I enjoy exploring new tech, gaming, NBA, F1, and all things nerdy.</p>
        <p>Check out some of my projects!</p>
      </div>
      <img src={myImage} alt="This is me" />
    </section>
  );
}

export default AboutMe;
