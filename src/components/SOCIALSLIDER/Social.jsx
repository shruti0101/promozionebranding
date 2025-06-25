import React from "react";
import "./Social.css"; // Import the custom CSS

const Social= () => {
  return (

    <>
    <section className="d-none d-lg-block">


    <div className="social-sidebar ">
      <a href="https://www.instagram.com/promozione.branding/" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.facebook.com/people/Promozione-Branding-Private-Limited/61564246253324/?rdid=EkzZ3eY00Yvg9QXI&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ATKsvCkfv%2F" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
        <i className="fab fa-facebook-f"></i>
      </a>
     
      <a href="https://www.linkedin.com/company/promozione-branding/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a href="https://www.youtube.com/@promozionebranding" target="_blank" rel="noopener noreferrer" className="social-icon youtube">
        <i className="fab fa-youtube"></i>
      </a>
    </div>
    </section>
    
    </>
  );
};

export default Social;
