import "../../../styles/Specialised.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// Import images
import digitalMarketingImage from "../../../assets/specialized/DIGITAL-MARKETING.webp";
import linkedin from "../../../assets/specialized/linkedIn.webp";
import blog from "../../../assets/specialized/blogging.webp";
import wordpress from "../../../assets/services/web-design.webp";
import smo from "../../../assets/specialized/smo.webp";
import ppc from "../../../assets/specialized/ppc.webp";
import ppc2 from "../../../assets/specialized/ppc2.webp";
import googleAdsense from "../../../assets/specialized/google-analytics-new-logo.webp";
import googleAdsense2 from "../../../assets/specialized/Google-AdWord-Course.webp";
import lead from "../../../assets/specialized/lead-generation.webp";
import emailMarketing from "../../../assets/specialized/email-marketing.webp";
import goodlead from "../../../assets/specialized/lead-generation1.webp";
import localBusiness from "../../../assets/specialized/local-businesses.webp";
import affiliate from "../../../assets/specialized/affiliate-marketing-1.webp";
import mobile from "../../../assets/specialized/Mobile-Marketing-icon.webp";
import analytics from "../../../assets/specialized/youtube.webp";
import ecom from "../../../assets/specialized/ecommerce-shopping.webp";
import icon2 from "../../../assets/specialized/icon-2.webp";
import insta from "../../../assets/specialized/instagram-icon-1.webp";
import seo from "../../../assets/specialized/seo-1.webp";
import { Link } from "react-router-dom";
// Data
const specializedCards = [
  { img: digitalMarketingImage, alt: "Digital Marketing", title: "Digital Marketing Services", link:"/services/digital-marketing-services" },

  { img: seo, alt: "SEO", title: "Search Engine Optimization Services" ,link:"/services/enterprise-seo-services"},

  { img: linkedin, alt: "LinkedIn Marketing", title: "LinkedIn Marketing Services" ,link:"/services/social-media-marketing" },

  { img: ppc, alt: "Pay Per Click", title: "Pay Per Click Services",link:"/services/google-adword-ppc-services" },

  { img: lead, alt: "Website Designing", title: "Website Designing Services" ,link:"/services/custom-web-development-services"},

  { img: smo, alt: "Social Media Optimization", title: "Social Media Services" ,link:"/services/social-media-marketing"},

  { img: ppc2, alt: "Google Adsense", title: "Meta Ads", link:"/services/social-media-marketing" },
  { img: affiliate, alt: "Affiliate Marketing", title: "Affiliate Marketing Services" ,link:"/services/digital-marketing-services" },

  { img: mobile, alt: "Mobile App Marketing", title: "Mobile App Development Services" ,link:"/services/web-application-development-services" },

  { img: emailMarketing, alt: "Email Marketing", title: "Email Marketing Services" ,link:"/services/email-marketing-services"},
  { img: goodlead, alt: "Google AdWord", title: "Content Optimization" ,link:"/services/content-marketing-services" },
  { img: ecom, alt: "E-commerce Marketing", title: "E-commerce Marketing Services",link:"/services/shopify-web-designing-services" },
  { img: localBusiness, alt: "Local Business Listing", title: "Local Business Listing Services" ,link:"/services/ai-digital-marketing-services"},

  { img: blog, alt: "Blogging", title: "Blogging Services" ,link:"/services/content-marketing-services"},

  { img: insta, alt: "Instagram Marketing", title: "Instagram Marketing Services",link:"/services/social-media-optimization" },
  { img: googleAdsense, alt: "Analytics & Reporting", title: "Ads Management Services" ,link:"/services/google-adword-ppc-services" },

  { img: analytics, alt: "Youtube Marketing Services", title: "Youtube Marketing Services" ,link:"/services/social-media-optimization" },
  { img: googleAdsense2, alt: "Google AdWord Services", title: "Google AdWord Services" ,link:"/services/google-adword-ppc-services" },
    { img: wordpress, alt: "WordPress Website Design", title: "Small Business Website Designing" ,link:"/services/wordpress-website-services" },
  { img: icon2, alt: "Facebook Marketing Services", title: "Facebook Marketing Services" ,link:"/services/social-media-marketing"},
];

const Specialized = () => {
  useEffect(() => {
    AOS.init({
      duration: 100,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="py-5 bg-white text-center">
      
      <div className="container">
        <h2 className="mb-3 fw-bold" style={{ color: "#2548BD" }}>
          Our Specialized Services
        </h2>
        <div
          className="mx-auto mb-4"
          style={{ width: "60px", height: "4px", backgroundColor: "#0d6efd" }}
        ></div>

        {/* RESPONSIVE CARD GRID */}
        <div className="row row-cols-2 ro w-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4 ">
          {specializedCards.map((card, idx) => (
            <Link to={card.link}
              className="col card-hover text-decoration-none  "
              key={idx}
              data-aos="fade-up"
              data-aos-duration="500"
               
            >
              <div className="specialized-card h-100 border-light shadow-sm rounded-3">
                <img
                  src={card.img}
                  className="p-4 img-fluid mx-auto d-block specialized-card-img"
                  alt={card.alt}
                  // style={{ maxHeight: "120px", objectFit: "contain" }}
                  loading="lazy"
                />
                <div className="px-3 pb-3">
                  <h6 className="fw-semibold text-dark">{card.title}</h6>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
       
    </section>
    
  );
};

export default Specialized;
