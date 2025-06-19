import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out via email or follow me on social media.</p>
      <div className="social-links">
        <a href="mailto:athul.tmp@gmail.com" className="contact-link" aria-label="Send email to Athul">
          <MdEmail style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          Email
        </a>
        <a href="https://www.linkedin.com/in/athul-thampan/" className="contact-link" target="_blank" rel="noreferrer" aria-label="Visit Athul's LinkedIn profile">
          <FaLinkedin style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          LinkedIn
        </a>
        <a href="https://github.com/athul-tmp" className="contact-link" target="_blank" rel="noreferrer" aria-label="Visit Athul's GitHub profile">
          <FaGithub style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Contact;
