import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Style.css";

import imgf1 from "../../assets/about/img1.webp";
import imgf2 from "../../assets/about/img2.jpg";

const founders = [
  {
    name: "Ananya Kapoor",
    role: "Co-Founder & CEO",
    image: imgf1,
    quote:
      "At Promozione Branding, we don’t just deliver results — we build long-term digital success stories.",
  },
  {
    name: "Rahul Verma",
    role: "Co-Founder & Head of Strategy",
    image: imgf2,
    quote:
      "Our mission has always been clear: empower SMEs to scale fast through performance-driven digital marketing.",
  },
  {
    name: "Priya Mehta",
    role: "Co-Founder & Creative Director",
    image: imgf1,
    quote:
      "Creativity with purpose is what drives engagement. We ensure every campaign speaks the brand’s truth.",
  },
];

const FounderTalk = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
    });
  }, []);

  return (
    <section className="founder-talk-section">
      <h2 data-aos="fade-up">Founder Talk</h2>
      <div className="underline" data-aos="zoom-in"></div>

      <div className="founder-talk-wrapper">
        {founders.map((founder, idx) => (
          <div
            className={`founder-talk-block ${idx % 2 === 0 ? "left" : "right"}`}
            data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
            key={idx}
          >
            <div className="founder-img">
              <img src={founder.image} alt={founder.name} />
            </div>
            <div className="founder-text">
              <h3>{founder.name}</h3>
              <p className="role">{founder.role}</p>
              <p className="quote">“{founder.quote}”</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FounderTalk;
