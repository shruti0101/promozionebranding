import React from "react";
import "./Social.css"; // Import the custom CSS

const Social= () => {
  return (
    <div className="social-sidebar">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon twitter">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon youtube">
        <i className="fab fa-youtube"></i>
      </a>
    </div>
  );
};

export default Social;
