import React from "react";
import approach from "../../assets/approach/approach.png";
import "./Style.css"; // Ensure this CSS file is imported
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect,useState } from "react";
import Tabs from "../Blogs/Tabs"

const Approach = () => {

  useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);




  return (
    <>
    
    <div className="section-bg ">
      <div className="container">
        <div className="row align-items-center">
          {/* Text Content */}
          <div
            className="col-lg-7"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="approach-text px-3 px-lg-4">
              <h1 className="approach-heading mb-4">
                Our Approach to Digital Marketing
              </h1>
              <h3 className="approach-subheading mb-3">
                We build digital experiences that grow the relationship between
                you and your audience.
              </h3>
              <p className="approach-description">
                We turn ideas into reality with our multidisciplinary team of
                specialists. Our approach realizes the importance of listening
                to and understanding your audience — a process that helps you
                craft the best possible user experience. We build delightful
                brands and products that resonate with your customers.
              </p>
            </div>
          </div>

          {/* Image */}
          <div
            className="col-lg-5 "
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <img
              src={approach}
              alt="Our Approach"
              className="img-fluid approach-image "
            />
          </div>
        </div>
      </div>
    </div>

    {/* tabs section */}


<Tabs></Tabs>

    </>
  );
};

export default Approach;
