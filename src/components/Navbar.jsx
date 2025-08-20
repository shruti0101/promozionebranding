import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoo from "../assets/logoo.webp";
import "../styles/Navbar.css";
import {
  LiaAngleDownSolid,
  LiaAngleUpSolid,
  LiaLongArrowAltRightSolid,
} from "react-icons/lia";

const Navbar = () => {
  const [dropdownStates, setDropdownStates] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (name) => {
    setDropdownStates((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
    setDropdownStates({});
  };

  const renderIcon = (name) => (
    <span className="dropdown-arrow">
      {dropdownStates[name] ? (
        <LiaAngleUpSolid className="ms-1" style={{ fontSize: "0.8rem" }} />
      ) : (
        <LiaAngleDownSolid className="ms-1" style={{ fontSize: "0.8rem" }} />
      )}
    </span>
  );

  const renderDropdownItem = (label, link) => (
    <Link
      className="dropdown-item d-flex justify-content-between align-items-center"
      to={link}
      onClick={closeNavbar}
    >
      {label}
      <LiaLongArrowAltRightSolid className="dropdown-hover-arrow" />
    </Link>
  );

  const menuItems = [
    {
      name: "company",
      label: "Company Profile",
      items: [
        ["Our Approach", "/profile/OurApproach"],
        ["Who We Are", "/profile/whoweare"],
        ["Blogs", "/profile/blogs"],
        ["Client Reviews", "/profile/reviews"],
        ["Career", "/profile/career"],
        ["Contact Us", "/Contact"],
      ],
    },
    {
      name: "website",
      label: "Website Development",
      items: [
        ["B2B Web Development", "/services/b2b-web-development-services"],
        ["Custom Web Development", "/services/custom-web-development-services"],
        [
          "PHP Website Development",
          "/services/php-website-development-services",
        ],
        ["CMS Web Development", "/services/cms-web-development-services"],
        ["React Web Development", "/services/react-web-development-services"],
        ["Shopify Web Designing", "/services/shopify-web-designing-services"],
        ["SEO Web Designing", "/services/seo-web-designing-services"],
        ["Website Redesigning", "/services/website-redesigning-services"],
        ["Landing Page Design", "/services/landing-page-design-services"],
        [
          "Web Application Development",
          "/services/web-application-development-services",
        ],

        ["WordPress Website", "/services/wordpress-website-services"],
      ],
    },

    {
      name: "revenue",
      label: "Revenue Marketing & CRO",
      items: [
        // ["B2B Lead Generation", "/services/b2b-lead-generation-services"],
        ["B2B Marketing", "/services/b2b-marketing-services"],

        ["B2C Marketing", "/services/b2c-marketing-services"],
        ["D2C Marketing", "/services/d2c-marketing-services"],

        [
          "AI Performance Marketing Services",
          "/services/ai-performance-marketing-services",
        ],
        ["Ads Management", "/services/ads-management-services"],
        ["Internet Marketing", "/services/internet-marketing-services"],
        ["Demand Generation", "/services/demand-generation-services"],
        ["Performance Marketing", "/services/performance-marketing-services"],
      ],
    },

    {
      name: "digital",
      label: "Digital Marketing",
      items: [
        ["Content Marketing", "/services/content-marketing-services"],
        ["CRM Optimizations", "/services/crm-optimizations-services"],
        ["Email Marketing", "/services/email-marketing-services"],
        ["Video Marketing", "/services/video-marketing-services"],
        // ["Social Media Ads", "/services/social"],
        ["Microsoft/Bing Ads", "/services/microsoft-bing-ads-services"],
        ["Google AdWords/PPC", "/services/google-adword-ppc-services"],
        ["SMO", "/services/social-media-optimization"],
        ["SMM", "/services/social-media-marketing"],
      ],
    },
    {
      name: "seo",
      label: "Guaranteed SEO",
      items: [
        [
          "AI Digital Marketing Services",
          "/services/ai-digital-marketing-services",
        ],
        // ["E-Commerce SEO Services", "/services/ecommerce-seo"],
        ["Digital Marketing Services", "/services/digital-marketing-services"],
        ["Enterprise SEO Services", "/services/enterprise-seo-services"],
        ["AI SEO Services", "/services/ai-seo-services"],
      ],
    },

    {
      name: "Packages",
      label: "Packages",
      items: [
        ["Web Awareness", "/packages/web-awareness"],
        ["Social Media Management", "/packages/social-media-management"],

        ["Ads Management ", "/packages/Ads-management"],
      ],
    },
  ];

  return (
    <nav className="navbar m-0 p-0  navbar-expand-lg px-3 shadow bg-white">
      <div className="container-fluid ">
        <Link
          className="navbar-brand d-flex align-items-center gap-2"
          to="/"
          onClick={closeNavbar}
        >
          <img
            src={logoo}
            alt="logo"
            width="70"
            height="70"
            className="rounded-circle d-inline-block align-text-top"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          aria-expanded={isNavbarOpen}
          onClick={() => setIsNavbarOpen((prev) => !prev)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse${isNavbarOpen ? " show" : ""}`}
        >
          <ul className="navbar-nav mx-auto mb-lg-0 d-flex flex-column flex-lg-row gap-2 shadow bg-white rounded-pill p-2 responsive-navbar">
            {menuItems.map((menu) => (
              <li
                className={`nav-item dropdown ${
                  dropdownStates[menu.name] ? "show" : ""
                }`}
                key={menu.name}
                onMouseEnter={() =>
                  !isMobile && setDropdownStates({ [menu.name]: true })
                }
                onMouseLeave={() =>
                  !isMobile && setDropdownStates({ [menu.name]: false })
                }
              >
                <span
                  className="nav-link d-flex align-items-center"
                  role="button"
                  onClick={() => isMobile && toggleDropdown(menu.name)}
                >
                  {menu.label}
                  {renderIcon(menu.name)}
                </span>
                {(dropdownStates[menu.name] ||
                  (!isMobile && dropdownStates[menu.name])) && (
                  <ul className="dropdown-menu show">
                    {menu.items.map(([label, link]) => (
                      <li key={label}>{renderDropdownItem(label, link)}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="nav-btn">
            <Link
              to="/Contact"
              className="text-white  text-decoration-none seo-audit-btn"
              onClick={closeNavbar}
            >
              free SEO audit!
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
