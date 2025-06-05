import "./Style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import Project from "../../components/Home/Landingpage/Project";
import star from "../../assets/about/star.svg";
import hello from "../../assets/about/hello.svg";
import line from "../../assets/about/line.svg";
import office from "../../assets/about/right-img.webp";
import video from "../../assets/about/playvideo.svg";

const Whoweare = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
   <div className="whoweare-section">
  <img src={star} className="star top-left" alt="star" data-aos="fade-down" />
  <img src={star} className="star top-right" alt="star" data-aos="fade-down-left" />
  <img src={hello} className="hello-img star" alt="hello" data-aos="zoom-in" />
  <img src={line} className="dashed-line" alt="dashed line" data-aos="fade-left" />
  <img src={video} className="video" alt="video" data-aos="fade-up" />

  <div className="text-section" data-aos="fade-right">
    <h1>
      <span className="text-white">Branding</span>
    </h1>
    <h1 className="agency-heading">Agency</h1>
    <p className="description">
      We are a dynamic motion, digital, and <strong>branding agency</strong>
      <br />
      based in <strong>Delhi</strong>, dedicated to crafting innovative
    </p>
  </div>

  <div className="image-section" data-aos="fade-left">
    <img src={office} className="office-img img-fluid" alt="Office" />
  </div>
</div>


<div className="container">
    <div className="about-text">
        <div className="col-md-10">
            <h1 className="fw-bold  mt-5 pt-3 fs-1 text-black ">We are one of the best revenue generating
digital marketing Agency in Delhi NCR</h1>
<p >Promozione Branding isn’t your typical digital marketing agency in Delhi NCR. Our award-winning team of marketers, designers, and developers creates custom strategies focused on measurable results. We prioritize generating high-quality leads, increasing revenue, and driving your success. Specializing in SEO, PPC, social media, and web development, we ensure your digital presence thrives in the competitive Delhi NCR market. At Promozione Branding, success is measured by real results that impact your bottom line—not vanity metrics. Your success drives ours, and that’s the benchmark we measure ourselves by.</p>
        </div>
    </div>
</div>

      <Project></Project>

      {/* slider */}

      <div className="marquee-wrapper">
        <div className="marquee-track">
          <div className="marquee-content">
            <span>Design your future with Promozione Branding!</span>
            <span>Design your future with Promozione Branding!</span>
            <span>Design your future with Promozione Branding!</span>
            <span>Design your future with Promozione Branding! </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whoweare;
