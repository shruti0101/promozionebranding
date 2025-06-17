import React, { useRef, useEffect } from "react";
import bg from "../assets/approach/wrapper-bg.png";
import "./Tilt.css";
import AOS from "aos";
import "aos/dist/aos.css";

/* ── Single Card ───────────────────────────── */
const TiltCard = ({ title, description, icon }) => {
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    cardRef.current.classList.add("card-hovered");
    document.querySelector(".tilt-container")?.classList.add("bg-tilt");
  };
  const handleMouseLeave = () => {
    cardRef.current.classList.remove("card-hovered");
    document.querySelector(".tilt-container")?.classList.remove("bg-tilt");
    cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  };
  const handleMouseMove = e => {
    const card   = cardRef.current;
    const rect   = card.getBoundingClientRect();
    const x      = e.clientX - rect.left;
    const y      = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / 10).toFixed(2);
    const rotateY = ((x - rect.width / 2) / 10).toFixed(2);
    card.style.transform = `translateY(-4px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  };

  return (
    <div
      className="col-12 col-sm-6 mb-4 d-flex justify-content-center"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="custom-card text-center p-3 w-100 h-100" ref={cardRef}>
        <div className="fs-4 mb-2">{icon}</div>
        <h5 className="fw-semibold">{title}</h5>
        <p className="card-desc mb-0">{description}</p>
      </div>
    </div>
  );
};

/* ── Main Section ──────────────────────────── */
const Tiltcard = ({ heading, paragraph, cardItems }) => {
  const wrapperRef = useRef(null);

  const handleWrapperMove = e => {
    if (window.innerWidth < 992) return;          // run only on desktops
    const wrapper = wrapperRef.current;
    const rect    = wrapper.getBoundingClientRect();
    const x       = e.clientX - rect.left;
    const y       = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / 20).toFixed(2);
    const rotateY = ((x - rect.width / 2) / 20).toFixed(2);
    wrapper.style.transform = `perspective(1000px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleWrapperLeave = () => {
    if (window.innerWidth < 992) return;
    wrapperRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
 <section className="svg-section position-relative overflow-hidden py-5">
  <svg
    className="pathfinder-svg d-none d-lg-block"
    style={{ top: "83%" }}
    // width="1658"
    // height="2062"
    viewBox="0 0 1458 1362"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="path-animate color-svg"
      d="M146.963 34C68.8835 119.852 -35.7659 309.427 170.27 380.906C376.305 452.385 577.757 309.427 652.728 229.013L445.056 655.556C680.718 473.621 940.183 270.58 1161.6 433.738C1413.69 619.498 1151.24 937.204 940.183 919.717C738.576 903.012 761.883 668.375 940.183 628.751C1173.6 576.878 1569.6 809.302 1337.57 1160.18C1225.31 1329.94 977.475 1345.09 838.797 1265.85"
      stroke="#CDE9DE"
      strokeWidth="100"
      strokeLinejoin="round"
    />
  </svg>

  <div className="container content-overlay position-relative z-2">
    <div className="row align-items-center gy-5">
      {/* Left Column - Text Section */}
      <div className="col-12 col-lg-6 text-lg-start text-center pt-4" data-aos="fade-up">
        <h1 className="fw-bold mb-3 responsive-heading">{heading}</h1>
        <p className="text-black mb-4 responsive-para">{paragraph}</p>
        <button className="nav-btn">Let’s Get Started</button>
      </div>

      {/* Right Column - Card Section (hidden below 992px) */}
      <div
        className="col-lg-6 d-none d-lg-flex justify-content-center"
        onMouseMove={handleWrapperMove}
        onMouseLeave={handleWrapperLeave}
        data-aos="fade-up"
      >
        <div className="tilt-skew-wrapper">
          <div
            className="tilt-container position-relative"
            ref={wrapperRef}
            style={{ backgroundImage: `url(${bg})` }}
          >
            <div className="container-fluid p-4">
              <h2 className="services-heading">Promozione Branding</h2>
              <div className="row">
                {cardItems.map((item, index) => (
                  <TiltCard key={index} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Tiltcard;
