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

// Data
const specializedCards = [
  { img: digitalMarketingImage, alt: "Digital Marketing", title: "Digital Marketing Services" },
  { img: seo, alt: "SEO", title: "Search Engine Optimization Services" },
  { img: linkedin, alt: "LinkedIn Marketing", title: "LinkedIn Marketing Services" },

  { img: ppc, alt: "Pay Per Click", title: "Pay Per Click Services" },
  { img: lead, alt: "Website Designing", title: "Website Designing Services" },
  { img: smo, alt: "Social Media Optimization", title: "Social Media Services" },
  { img: ppc2, alt: "Google Adsense", title: "Meta Ads" },
  { img: affiliate, alt: "Affiliate Marketing", title: "Affiliate Marketing Services" },
  { img: mobile, alt: "Mobile App Marketing", title: "Mobile App Marketing Services" },
  { img: emailMarketing, alt: "Email Marketing", title: "Email Marketing Services" },
  { img: goodlead, alt: "Google AdWord", title: "Content Optimization" },
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
