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
  { label: "B2B Web Development", to: "/services/b2b-web-development-services" },
  { label: "Custom Web Development", to: "/services/custom-web-development-services" },
  { label: "PHP Website Development", to: "/services/php-website-development-services" },
  { label: "CMS Web Development", to: "/services/cms-web-development-services" },
  { label: "React Web Development", to: "/services/react-web-development-services" },
  { label: "Shopify Web Designing", to: "/services/shopify-web-designing-services" },
  { label: "SEO Web Designing", to: "/services/seo-web-designing-services" },
  { label: "Website Redesigning", to: "/services/website-redesigning-services" },
  { label: "Landing Page Design", to: "/services/landing-page-design-services" },
  { label: "Web Application Development", to: "/services/web-application-development-services" },
  { label: "WordPress Website", to: "/services/wordpress-website-services" },
])}

{renderDropdown("revenue", "Revenue Marketing & CRO", [
  { label: "B2B Lead Generation", to: "/services/b2b-lead-generation-services" },
  { label: "B2B Marketing", to: "/services/b2b-marketing-services" },
  { label: "B2C Marketing", to: "/services/b2c-marketing-services" },
  { label: "D2C Marketing", to: "/services/d2c-marketing-services" },
  { label: "AI Performance Marketing Services", to: "/services/ai-performance-marketing-services" },
  { label: "Ads Management", to: "/services/ads-management-services" },
  { label: "Internet Marketing", to: "/services/internet-marketing-services" },
  { label: "Demand Generation", to: "/services/demand-generation-services" },
  { label: "Performance Marketing", to: "/services/performance-marketing-services" },
])}

{renderDropdown("digital", "Digital Marketing", [
  { label: "Content Marketing", to: "/services/content-marketing-services" },
  { label: "CRM Optimizations", to: "/services/crm-optimizations-services" },
  { label: "Email Marketing", to: "/services/email-marketing-services" },
  { label: "Video Marketing", to: "/services/video-marketing-services" },
  { label: "Microsoft/Bing Ads", to: "/services/microsoft-bing-ads-services" },
  { label: "Google AdWords/PPC", to: "/services/google-adword-ppc-services" },
  { label: "SMO", to: "/services/social-media-optimization" },
  { label: "SMM", to: "/services/social-media-marketing" },
])}

{renderDropdown("company", "Company Profile", [
  { label: "Our Approach", to: "/profile/OurApproach" },
  { label: "Who We Are", to: "/profile/whoweare" },
  { label: "Blogs", to: "/profile/blogs" },
  { label: "Client Reviews", to: "/profile/reviews" },
  { label: "Career", to: "/profile/career" },
  { label: "Contact Us", to: "/Contact" },
])}

{renderDropdown("seo", "Guaranteed SEO", [
  { label: "AI Digital Marketing Services", to: "/services/ai-digital-marketing-services" },
  { label: "Digital Marketing Services", to: "/services/digital-marketing-services" },
  { label: "Enterprise SEO Services", to: "/services/enterprise-seo-services" },
  { label: "AI SEO Services", to: "/services/ai-seo-services" },
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
