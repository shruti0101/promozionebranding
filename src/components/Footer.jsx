import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
  const [openMenus, setOpenMenus] = useState({});

  const toggleMenu = (menuKey) => {
    // Enable toggle only on mobile
    if (window.innerWidth < 992) {
      setOpenMenus((prev) => ({
        ...prev,
        [menuKey]: !prev[menuKey],
      }));
    }
  };

  const renderDropdown = (key, title, links) => (
    <div className="footer-column">
      <div className="dropdown-header" onClick={() => toggleMenu(key)}>
        <h3>{title}</h3>
        <span className="dropdown-icon">
          {openMenus[key] ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>
      <ul className={`dropdown-links ${openMenus[key] ? "open" : ""}`}>
        {links.map(({ label, to }) => (
          <li key={to}>
            <Link to={to}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="footer">
      <div className="container-fluid">
        <div className="footer-top">


       {renderDropdown("web", "Website Development", [
            { label: "Custom Web Development", to: "/services/custom" },
            { label: "PHP Website", to: "/services/development" },
            { label: "CMS Development", to: "/services/marketing" },
            { label: "React Development", to: "/services/mern" },
            { label: "Shopify Design", to: "/services/ecommerce" },
            { label: "SEO Web Design", to: "/services/seo" },
            { label: "Website Redesigning", to: "/services/redesign" },
            { label: "Landing Page Design", to: "/services/landing" },

            { label: "Web Application Development ", to: "/services/webapp" },
            { label: "B2B Website Development ", to: "/services/b2bdev" },

            { label: "WordPress Website", to: "/services/design" },
          ])}


    {renderDropdown("revenue", "Revenue Marketing", [
            { label: "Performance Marketing", to: "/services/performance" },
            { label: "B2B Marketing", to: "/services/b2b" },
              { label: "AI Performance Marketing", to: "/services/ai-performance" },
            { label: "Lead Generation", to: "/services/leads" },
             { label: "Ads Management", to: "/services/ads" },
            { label: "B2B Lead Generation", to: "/services/b2b-leads" },
            { label: "B2C Marketing ", to: "/services/b2c-marketing" },
            { label: "D2C Marketing ", to: "/services/d2c" },
            { label: "Internet Marketing", to: "/services/internet" },
            { label: "Demand Generation", to: "/services/demand" },
          ])}



   
          {renderDropdown("digital", "Digital Marketing", [
            { label: "Content Marketing", to: "/services/content" },
            { label: "CRM Optimization", to: "/services/crm" },
            { label: "Email Marketing", to: "/services/email" },
            { label: "Video Marketing", to: "/services/video" },
            { label: "Micosoft/Bing Ads", to: "/services/Bing-ads" },
                  { label: "Google AdWords", to: "/services/google-ads" },
            { label: "SMM", to: "/services/smm" },
       
             { label: "SMO", to: "/services/smo" },
            
          ])}

          {renderDropdown("company", "Company Profile", [
            { label: "Our Approach", to: "/profile/OurApproach" },
            { label: "Who We Are", to: "/profile/whoweare" },
            { label: "Blogs", to: "/profile/blogs" },
            { label: "Client Reviews", to: "/profile/reviews" },
            { label: "Career", to: "/profile/career" },
            { label: "Contact", to: "/Contact" },
          ])}

   

     

          {renderDropdown("seo", "Guaranteed SEO", [
            { label: "AI Digital Marketing", to: "/services/ai-digital" },
            { label: "Digital Marketing Services", to: "/services/digital-seo" },
            { label: "Enterprise SEO", to: "/services/enterprise-seo" },
            { label: "AI SEO Services", to: "/services/ai-seo" },
          ])}
        </div>

        {/* Contact Info */}
        <div className="get-in-touch footer-bottom1">
          <div className="contact-box">
            <FaPhone className="contact-icon" />
            <div>
              <h5 className="contact-title">011 42603232</h5>
              <p className="contact-subtitle">Mon–Sat 9:30AM–6:30PM</p>
            </div>
          </div>
          <div className="contact-box">
            <FaEnvelope className="contact-icon" />
            <div>
              <h5 className="contact-title">info@promozionebranding.com</h5>
              <p className="contact-subtitle">Online support</p>
            </div>
          </div>
          <div className="contact-box">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h5 className="contact-title">Promozione Branding</h5>
              <p className="contact-subtitle">
                Vardhman Plaza, Sector-3, Rohini, New Delhi
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© 2025 Promozione Branding. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
