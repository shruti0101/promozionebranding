import "../../../styles/Specialised.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

// Import images
import digitalMarketingImage from "../../../assets/specialized/digital-marketing.png";
import linkedin from "../../../assets/specialized/linkedin.png";
import blog from "../../../assets/specialized/blogging.png";
import wordpress from "../../../assets/services/web-design.png";
import smo from "../../../assets/specialized/smo.png";
import ppc from "../../../assets/specialized/ppc.png";
import ppc2 from "../../../assets/specialized/ppc2.png";
import googleAdsense from "../../../assets/specialized/google-analytics-new-logo.png";
import googleAdsense2 from "../../../assets/specialized/Google-AdWord-Course.png";
import lead from "../../../assets/specialized/lead-generation.png";
import emailMarketing from "../../../assets/specialized/email-marketing.png";
import goodlead from "../../../assets/specialized/lead-generation1.png";
import localBusiness from "../../../assets/specialized/local-businesses.png";
import affiliate from "../../../assets/specialized/affiliate-marketing-1.png";
import mobile from "../../../assets/specialized/Mobile-Marketing-icon.png";
import analytics from "../../../assets/specialized/youtube.png";
import ecom from "../../../assets/specialized/ecommerce-shopping.png";
import icon2 from "../../../assets/specialized/icon-2.png";
import insta from "../../../assets/specialized/instagram-icon-1.png";
import seo from "../../../assets/specialized/seo-1.png";

// Data
const specializedCards = [
  { img: digitalMarketingImage, alt: "Digital Marketing", title: "Digital Marketing Services" },
  { img: seo, alt: "SEO", title: "Search Engine Optimization Services" },
  { img: linkedin, alt: "LinkedIn Marketing", title: "LinkedIn Marketing Services" },

  { img: ppc, alt: "Pay Per Click", title: "Pay Per Click Services" },
  { img: lead, alt: "Website Designing", title: "Website Designing Services" },
  { img: smo, alt: "Social Media Optimization", title: "Social Media Services" },
  { img: ppc2, alt: "Google Adsense", title: "Google Adsense Services" },
  { img: affiliate, alt: "Affiliate Marketing", title: "Affiliate Marketing Services" },
  { img: mobile, alt: "Mobile App Marketing", title: "Mobile App Marketing Services" },
  { img: emailMarketing, alt: "Email Marketing", title: "Email Marketing Services" },
  { img: goodlead, alt: "Google AdWord", title: "Lead Generation Services" },
  { img: ecom, alt: "E-commerce Marketing", title: "E-commerce Marketing Services" },
  { img: localBusiness, alt: "Local Business Listing", title: "Local Business Listing Services" },
  { img: blog, alt: "Blogging", title: "Blogging Services" },
  { img: insta, alt: "Instagram Marketing", title: "Instagram Marketing Services" },
  { img: googleAdsense, alt: "Analytics & Reporting", title: "Google Analytics Services" },
  { img: analytics, alt: "Youtube Marketing Services", title: "Youtube Marketing Services" },
  { img: googleAdsense2, alt: "Google AdWord Services", title: "Google AdWord Services" },
    { img: wordpress, alt: "WordPress Website Design", title: "Small Business Website Designing" },
  { img: icon2, alt: "Facebook Marketing Services", title: "Facebook Marketing Services" },
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
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-5 g-4">
          {specializedCards.map((card, idx) => (
            <div
              className="col card-hover"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialized;
