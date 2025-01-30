import React from 'react';

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <p>Feel free to reach out via email or follow me on social media.</p>
      <div className="social-links">
        <a href="mailto:athul.tmp@gmail.com" className="contact-link">Email</a>
        <a href="https://www.linkedin.com/in/athul-thampan/" className="contact-link" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/athul-tmp" className="contact-link" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </section>
  );
}

export default Contact;
