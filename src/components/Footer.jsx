import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";
import "../styles/Footer.css";

const FooterContent = () => {
  return (

    <section className="footer">


    <div className="container-fluid footer-bg">
      <footer className="footer">
        <div className="footer-top">
          {/* Company Profile */}
          <div className="footer-column">
            <h3>Company Profile</h3>
            <ul>
              <li>
                <Link to="/profile/OurApproach">Our Approach</Link>
              </li>
              <li>
                <Link to="/profile/whoweare">Who We Are</Link>
              </li>
              <li>
                <Link to="/profile/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/profile/reviews">Client Reviews</Link>
              </li>
              <li>
                <Link to="/profile/career">Career</Link>
              </li>
            </ul>
          </div>

          {/* Website Development */}
          <div className="footer-column">
            <h3>Website Development</h3>
            <ul>
              <li>
                <Link to="/services/design">WordPress Website</Link>
              </li>
              <li>
                <Link to="/services/custom">Custom Web Development</Link>
              </li>
              <li>
                <Link to="/services/development">PHP Website Development</Link>
              </li>
              <li>
                <Link to="/services/marketing">CMS Web Development</Link>
              </li>
              <li>
                <Link to="/services/mern">React Web Development</Link>
              </li>
              <li>
                <Link to="/services/ecommerce">Shopify Web Designing</Link>
              </li>
              <li>
                <Link to="/services/seo">SEO Web Designing</Link>
              </li>
             
            
            </ul>
          </div>

          {/* Revenue Marketing & CRO */}
          <div className="footer-column">
            <h3>Revenue Marketing</h3>
            <ul>
              <li>
                <Link to="/services/performance">Performance Marketing</Link>
              </li>
              <li>
                <Link to="/services/b2b">B2B Marketing</Link>
              </li>
              <li>
                <Link to="/services/leads">Lead Generations</Link>
              </li>
              <li>
                <Link to="/services/ai-performance">AI Performance Marketing</Link>
              </li>
              <li>
                <Link to="/services/ads">Ads Management</Link>
              </li>
              <li>
                <Link to="/services/internet">Internet Marketing</Link>
              </li>
              <li>
                <Link to="/services/demand">Demand Generation</Link>
              </li>
             
            
            </ul>
          </div>

          {/* Digital Marketing */}
          <div className="footer-column">
            <h3>Digital Marketing</h3>
            <ul>
              <li>
                <Link to="/services/content">Content Marketing</Link>
              </li>
              <li>
                <Link to="/services/crm">CRM Optimizations</Link>
              </li>
              <li>
                <Link to="/services/email">Email Marketing</Link>
              </li>
              <li>
                <Link to="/services/video">Video Marketing</Link>
              </li>
              <li>
                <Link to="/services/social">Social Media Ads</Link>
              </li>
              <li>
                <Link to="/services/google">Google Ads</Link>
              </li>
              <li>
                <Link to="/services/google-ads">Google AdWords/PPC</Link>
              </li>
             
            </ul>
          </div>

          {/* Guaranteed SEO */}
          <div className="footer-column">
            <h3>Guaranteed SEO</h3>
            <ul>
              <li>
                <Link to="/services/ai-digital">AI Digital Marketing Services</Link>
              </li>
              <li>
                <Link to="/services/digital-seo">Digital Marketing Services</Link>
              </li>
              <li>
                <Link to="/services/enterprise-seo">Enterprise SEO Services</Link>
              </li>
              <li>
                <Link to="/services/ai-seo">AI SEO Services</Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
       {/* Get in Touch (Redesigned to match screenshot) */}
<div className="footer-column get-in-touch w-100 d-flex justify-content-between flex-wrap text-center text-lg-start">
 
 
  <div className="contact-box">
    <FaPhone className="contact-icon" />
    <div>
      <h5 className="contact-title mb-1">011 42603232</h5>
      <p className="contact-subtitle">Mon–Sat 9:30AM–6:30PM</p>
    </div>
  </div>
  <div className="contact-box">
    <FaEnvelope className="contact-icon" />
    <div>
      <h5 className="contact-title mb-1">info@promozionebranding.com</h5>
      <p className="contact-subtitle">online support</p>
    </div>
  </div>
  <div className="contact-box">
    <FaMapMarkerAlt className="contact-icon" />
    <div>
      <h5 className="contact-title mb-1">PromozioneBranding</h5>
      <p className="contact-subtitle">Vardhman Plaza, Sector-3, Rohini, New Delhi

</p>
    </div>
  </div>
</div>


        </div>

        <div className="footer-bottom text-center">
          <p className="m-0">Promozione Branding © 2025 All rights reserved</p>
        </div>
      </footer>
    </div>
    </section>
  );
};

export default FooterContent;
            