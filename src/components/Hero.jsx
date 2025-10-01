import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Hero.css";
import { Link } from "react-router-dom";

export default function HeroSection() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 500,
      easing: "ease-out-cubic",
    });

    if (!vantaEffect && window.VANTA) {
      setVantaEffect(
        window.VANTA.GLOBE({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xb33169, // Globe color
          backgroundColor: 0x23153c, // Background
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="container-fluid m-0 p-0">
      <section
        className="hero-section pt-0 d-flex align-items-center justify-content-center"
        ref={vantaRef}
      >
        <div className="hero-overlay" />
        <div className="hero-content position-relative py-4">
          <div className="row align-items-center">
            <div className="col-lg-6 text-white" data-aos="fade-right">
              <h1 className="hero-title pt-3 pt-md-3">
                Helping <span className="hero-high">Startups</span> and{" "}
                <span className="hero-high">SMEs</span> with Design & Development
              </h1>
              <p className="hero-subtitle">
                Not every digital marketing agency can seamlessly connect
                marketing activities to your bottom line. Request your
                personalized strategy proposal today to start driving ROI from
                digital marketing!
              </p>
              <Link to="/Contact" className="text-decoration-none">
                <button className="nav-btn2 mt-3">Let's get started!</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
