import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>About Us</h3>
        <p>
          EduSite is a modern educational platform providing quality courses to
          help you grow your skills.
        </p>
      </div>

      <div className="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/courses">Courses</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Contact</h3>
        <p>Email: badal@gmail.com</p>
        <p>Phone: +91 62052 77717</p>
      </div>
    </footer>
  );
}
