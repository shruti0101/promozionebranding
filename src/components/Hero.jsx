import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "../styles/Hero.css";

import im1 from "../../src/assets/bg/boll1.webp";
import im2 from "../assets/bg/boll2.webp";

import Services from "./Home/Landingpage/Services";
import WhyChoose from "./Home/Landingpage/WhyChoose";
import Form1 from "./Home/Landingpage/Form1";
import Form2 from "./Home/Landingpage/Form2";
import SectorServe from "./Home/Landingpage/SectorServe";
import Specialized from "./Home/Landingpage/Specialized";
import Faq from "./Home/Landingpage/Faq";
import Orbit from "./Home/Landingpage/Orbit";
import Testimonials from "./Home/Landingpage/Testimonials";
import Project from "./Home/Landingpage/Project";

export default function HeroSection() {
  const ball1Ref = useRef(null);
  const ball2Ref = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
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
    <>
      <div className="container-fluid m-0 p-0">
        <section className="hero-section d-flex align-items-center justify-content-center">
          <div className="hero-overlay" />
          <div className="hero-content">
            <h1
              className="hero-title text-start w-75 mt-0"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              AI Artificial Intelligence & AI Technology
            </h1>

            <button
              className="btn btn-dark text-start ms-3 text-capitalize"
              data-aos="fade-up"
              data-aos-delay="100"
              
            >
              Let's get started!
            </button>

            <img
              src={im1}
              alt="glow1"
              className="glow-ball ball1"
              ref={ball1Ref}
            />
            <img
              src={im2}
              alt="glow2"
              className="glow-ball ball2"
              ref={ball2Ref}
            />
          </div>
        </section>
      </div>

      <Services />
      <WhyChoose />
      <Form2 />
      <Project></Project>
      <Form1 />
      <SectorServe />
      <Specialized />
      <Orbit />
      <Testimonials />
      <Faq />
    </>
  );
}
