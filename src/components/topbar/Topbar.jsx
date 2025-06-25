
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="top-header d-flex justify-content-between align-items-center px-3 py-2 d-none d-md-block" >
      {/* Left side: Contact info */}
     <div className="contact-info d-flex align-items-center">
  <i className="fas fa-headset me-2"></i>
  <span className="me-4">+919717220321</span>
  <i className="fas fa-envelope me-2"></i>
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=customercare@promozionebranding.com"
    target="_blank"
    rel="noreferrer"
    className="text-white"
  >
   customercare@promozionebranding.com
  </a>
</div>


      {/* Right side: Social icons */}
      <div className="social-icons d-flex me-3">
        <a href="https://www.facebook.com/people/Promozione-Branding-Private-Limited/61564246253324/?rdid=EkzZ3eY00Yvg9QXI&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ATKsvCkfv%2F" target="_blank" rel="noreferrer" className="me-3">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/promozione.branding/" target="_blank" rel="noreferrer" className="me-3">
          <i className="fab fa-instagram"></i>
        </a>
      
        <a href="https://www.linkedin.com/company/promozione-branding/posts/?feedView=all" target="_blank" rel="noreferrer" className="me-3">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://www.youtube.com/@promozionebranding" target="_blank" rel="noreferrer" className="me-3">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="https://wa.me/918010019000" target="_blank" rel="noreferrer" className="me-3">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="https://in.pinterest.com/promozionebranding/?actingBusinessId=1045890850871277698" target="_blank" rel="noreferrer">
          <i className="fab fa-pinterest-p"></i>
        </a>

      
      </div>
    </div>
  );
};

export default Topbar;
