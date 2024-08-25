import React from 'react';
import '../Contact/Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <div className="contact-section">
          <div className="icon-text">
            <i className="fas fa-phone-alt"></i>
            <h3>Call To Us</h3>
          </div>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +91 8271593648</p>
        </div>
        <div className="contact-section">
          <div className="icon-text">
            <i className="fas fa-envelope"></i>
            <h3>Write To Us</h3>
          </div>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Emails: customer@exclusive.com</p>
          <p>Emails: support@exclusive.com</p>
        </div>
      </div>
      <div className="contact-form">
        <input type="text" placeholder="Your Name *" className="form-input" />
        <input type="email" placeholder="Your Email *" className="form-input" />
        <input type="text" placeholder="Your Phone *" className="form-input" />
        <textarea placeholder="Your Message" className="form-textarea"></textarea>
        <button className="submit-button">Send Message</button>
      </div>
    </div>
  );
}

export default Contact;
