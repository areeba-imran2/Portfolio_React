import React, { useState } from "react";

export function Contact() {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
    // Hide success message after 3 seconds
    setTimeout(() => setMessageSent(false), 2000);
  };

  return (
    <section id="contact">
      <h2 className="contactHeading">Contact Me</h2>
      <div className="contactContainer">
        <form onSubmit={handleSubmit} className="contactForm">
          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="formGroup">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit" className="submitButton">
            Send Message
          </button>
          {messageSent && (
            <p className="successMessage">Message sent successfully!</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
