import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Hero.css";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

export default function HeroSection() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle submission
  };

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 500,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="container-fluid m-0 p-0">
      <section className="hero-section pt-0 d-flex align-items-center justify-content-center">
        <div className="hero-overlay" />
        <div className=" hero-content position-relative py-5">
          <div className="row align-items-center">
            {/* Left: Text */}
            <div className="col-lg-6 text-white" data-aos="fade-right">
              <h1 className="hero-title pt-3 pt-md-3">
                Digital Marketing Agency That Drives Revenue
              </h1>
              <p className="hero-subtitle">
                Not every digital marketing agency can seamlessly connect
                marketing activities to your bottom line. Request your
                personalized strategy proposal today to start driving ROI from
                digital marketing!
              </p>
              <Link to="/Contact" className="text-decoration-none d-none d-md-block">
                <button className="nav-btn2 mt-3">Let's get started!</button>
              </Link>
            </div>

            {/* Right: Stylish Form */}
            <div className="col-lg-6 mt-5 mt-lg-0 " data-aos="fade-left">
              <div className="form-glass p-3 p-md-5 rounded-4 shadow-lg">
                <h3 className="text-white fw-semibold mb-4">
               Coffee or Beer? It's on us!
                </h3>
             
                <form className="row g-3" ref={formRef} onSubmit={handleSubmit}>
                  <div className="col-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="form-control input-fill"
                      required
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="form-control input-fill"
                      required
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      maxLength="10"
                      className="form-control input-fill"
                      required
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      className="form-control input-fill"
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      placeholder="Tell us about your project"
                      className="form-control input-fill"
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      className="btn btn-light px-4  fw-semibold rounded-pill"
                    >
                      Get Started Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
