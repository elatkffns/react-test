import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="sky">
      <div className="wrap">
        <div className="formdiv">
          <h5 className="title">Send A Message</h5>
          <form>
            <input
              className="input"
              type="text"
              required
              placeholder="Your Name"
            />
            <input
              className="input"
              type="email"
              required
              placeholder="Your Email"
            />
            <input
              className="input"
              type="text"
              required
              placeholder="subject"
            />
            <textarea className="input" rows="5" placeholder="Message" />
            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
        <div className="formdiv">
          <h5 className="title">Get in Touch</h5>
          <p>
            Whether you want to get in touch, talk about a project
            collaboration, or just say hi, d love to hear from you. Simply fill
            the from and email.
          </p>
          <div className="git" />
        </div>
      </div>
    </div>
  );
}
