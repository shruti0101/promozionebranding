import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Hero.css";
import im1 from "../../src/assets/bg/boll1.webp";
import im2 from "../assets/bg/boll2.webp";
import { Link } from "react-router-dom";
export default function HeroSection() {
  const ball1Ref = useRef(null);
  const ball2Ref = useRef(null);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 500,           // ← default animation speed in ms
      easing: 'ease-out-cubic' // ← optional snappy easing
    });


    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sway = Math.sin(scrollY * 0.01) * 5;

      if (ball1Ref.current) {
        ball1Ref.current.style.transform = `translateY(${sway}px) rotate(360deg)`;
      }
      if (ball2Ref.current) {
        ball2Ref.current.style.transform = `translateY(${-sway}px) rotate(720deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container-fluid m-0 p-0">
      <section className="hero-section pt-0 pt-md-5 d-flex align-items-center justify-content-center">
        <div className="hero-overlay" />
        <div className="hero-content text-start ">
          <h1
            className="hero-title pt-3 pt-md-5"
            data-aos="fade-right"
            data-aos-duration="600"
          >
            Digital Marketing Agency That Drives Revenue
          </h1>
          <p
            className="hero-subtitle"
        
           
          
          >
            Not every digital marketing agency can seamlessly connect marketing
            activities to your bottom line. Request your personalized strategy
            proposal today to start driving ROI from digital marketing!
          </p>

          <Link to="/Contact" className="text-decoration-none">
 
 
          <button
            className="nav-btn1 "
         
      
         
          >
            Let's get started!
          </button>
          
          </Link>
          <img src={im1} alt="glow1" className="glow-ball ball1" ref={ball1Ref} />
          <img src={im2} alt="glow2" className="glow-ball ball2" ref={ball2Ref} />
        </div>
      </section>
    </div>
  );
}
