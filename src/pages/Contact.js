import tyson from '../assets/taking-on-tyson-animal-planet_320-b5d01a0c8aec462aad27008f585bad4c.jpg';

import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p className="contact-intro">

        Reach out to me using the info below!
      </p>

      <div className="contact-info">
        <p><strong>Email:</strong> <a href="mailto:ni479616@ucf.edu">ni479616@ucf.edu</a></p>
        <p><strong>Phone:</strong> <a href="tel:4076200040">(407) 620-0040</a></p>
        <p className="pigeon-note">note: I am a little old school, I prefer to be contacted by messenger pigeon. Expect a response within 3-5 business days.</p>
      </div>
      <img src={tyson} alt="Mike Tyson with pigeons" className="contact-img" />

    </div>
  );
}

export default Contact;
