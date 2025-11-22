import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ServicesSection() {
  const services = [
    {
      title: "B2B Website Development Services in Delhi ",
      link: "/Web-Development-Services-In-Delhi",
    },

    {
      title: "B2B Website Development Services in Delhi NCR",
      link: "/Web-Development-Services-In-Delhi-Ncr",
    },

    {
      title: "B2B Website Development Company in Delhi",
      link: "/Web-Development-Services-In-Delhi",
    },
    {
      title: "B2B Website Development Company in Delhi NCR",
      link: "/Web-Development-Services-In-Delhi-Ncr",
    },

    // 27 row (digital)

    {
      title: "B2C Website Development Services in Delhi ",
      link: "/Web-Development-Services-In-Delhi",
    },

    {
      title: "B2C Website Development Services in Delhi NCR",
      link: "/Web-Development-Services-In-Delhi-Ncr",
    },

    {
      title: "B2C Website Development Company in Delhi",
      link: "/Web-Development-Services-In-Delhi",
    },

    {
      title: "B2C Website Development Company ",
      link: "/Web-Development-Services-In-Delhi",
    },

    // 28 row (digital)

    {
      title: "D2C Website Development Services in Delhi ",
      link: "/Web-Development-Services-In-Delhi",
    },

    {
      title: "D2C Website Development Services in Delhi NCR",
      link: "/Web-Development-Services-In-Delhi-Ncr",
    },

    {
      title: "D2C Website Development Company in Delhi ",
      link: "/Web-Development-Services-In-Delhi",
    },

    {
      title: "D2C Website Development Company",
      link: "/Web-Development-Services-In-Delhi-Ncr",
    },

    // second row

    {
      title: "PHP Website Development Services in Delhi",
      link: "/Web-Development-Services-In-Delhi",
    },

    {
      title: "Custom Web Development & Design Services in Delhi NCR",
      link: "/Web-Development-Services-In-Delhi-Ncr",
    },

    {
      title: "Custom Web Development & Design Company in Delhi",
      link: "/Web-Development-Services-In-Delhi",
    },

    {
      title: "Custom Web Development & Design Company in Delhi NCR",
      link: "/Web-Development-Services-In-Delhi-Ncr",
    },

    // third row

    {
      title: "CMS Website Development Services in Delhi",
      link: "/Web-Development-Services-In-Delhi",
    },

    {
      title: "PHP Website Development Services in Delhi NCR",
      link: "/Web-Development-Services-In-Delhi-Ncr",
    },

    {
      title: "PHP Website Development Company in Delhi",
      link: "/Web-Development-Services-In-Delhi",
    },

    {
      title: "PHP Website Development Company in Delhi NCR",
      link: "/Web-Development-Services-In-Delhi-Ncr",
    },

    // fourth row

    {
      title: "React Web Development Services Delhi",
      link: "/Web-Development-Services-In-Delhi",
    },
    {
      title: "CMS Website Development Services in Delhi NCR",
      link: "/Web-Development-Services-In-Delhi-Ncr",
    },
    {
      title: "CMS Website Development Company in Delhi",
      link: "/Web-Development-Services-In-Delhi",
    },
    {
      title: "CMS Website Development Company in Delhi NCR",
      link: "/Web-Development-Services-In-Delhi-Ncr",
    },

    // fifth row

    {
      title: "Shopify Web Designing Services in Delhi",
      link: "/Web-Development-Services-In-Delhi",
    },

    {
      title: "React Web Development Services Delhi NCR",
      link: "/Web-Development-Services-In-Delhi-Ncr",
    },

    {
      title: "React Web Development Company Delhi",
      link: "/Web-Development-Services-In-Delhi",
    },
    {
      title: "React Web Development Company Delhi NCR",
      link: "/Web-Development-Services-In-Delhi-Ncr",
    },

    // six row

    {
      title: "SEO Web Design Services in Delhi",
      link: "/Web-Development-Services-In-Delhi",
    },

    {
      title: "Shopify Web Designing Services in Delhi NCR",
      link: "/Web-Development-Services-In-Delhi-Ncr",
    },

    {
      title: "Shopify Web Designing Company in Delhi",
      link: "/Web-Development-Services-In-Delhi",
    },

    {
      title: "Shopify Web Designing Company in Delhi NCR",
      link: "/Web-Development-Services-In-Delhi-Ncr",
    },

    //    7 row

    {
      title: "Website Redesigning Services in Delhi",
      link: "/Web-Development-Services-In-Delhi",
    },

    {
      title: "SEO Web Design Services in Delhi NCR",
      link: "/Web-Development-Services-In-Delhi-Ncr",
    },

    {
      title: "SEO Web Design Company in Delhi",
      link: "/Web-Development-Services-In-Delhi",
    },

    {
      title: "SEO Web Design Company in Delhi NCR",
      link: "/Web-Development-Services-In-Delhi-Ncr",
    },

    //    8 row

    {
      title: "Landing Page Design Services in Delhi",
      link: "/Web-Development-Services-In-Delhi",
    },

    {
      title: "Website Redesigning Services in Delhi NCR",
      link: "/Web-Development-Services-In-Delhi-Ncr",
    },

    {
      title: "Website Redesigning Company in Delhi",
      link: "/Web-Development-Services-In-Delhi",
    },

    {
      title: "Website Redesigning Company in Delhi NCR",
      link: "/Web-Development-Services-In-Delhi-Ncr",
    },

    // 9 row

    {
      title: "WordPress Website Designing Services in Delhi",
      link: "/Web-Development-Services-In-Delhi",
    },

    {
      title: "Web Application Development Services in Delhi NCR",
      link: "/Web-Development-Services-In-Delhi-Ncr",
    },

    {
      title: "Web Application Development Company in Delhi",
      link: "/Web-Development-Services-In-Delhi",
    },

    {
      title: "Web Application Development Company in Delhi NCR",
      link: "/Web-Development-Services-In-Delhi-Ncr",
    },

    // 10 row

    {
      title: "Content Marketing Services in Delhi",
      link: "/Web-Development-Services-In-Delhi",
    },

    {
      title: "WordPress Website Designing Services in Delhi NCR",
      link: "/Web-Development-Services-In-Delhi-Ncr",
    },

    {
      title: "WordPress Website Designing Company in Delhi",
      link: "/Web-Development-Services-In-Delhi",
    },

    {
      title: "WordPress Website Designing Company in Delhi NCR",
      link: "/Web-Development-Services-In-Delhi-Ncr",
    },

    // 11 row (revenue)

    {
      title: "B2B Marketing Services in Delhi ",
      link: "/Digital-Marketing-Services-In-Delhi",
    },

    {
      title: "B2B Marketing Services in Delhi NCR ",
      link: "/Digital-Marketing-Services-In-Delhi-Ncr",
    },

    {
      title: "B2B Marketing Company in Delhi ",
      link: "/Digital-Marketing-Services-In-Delhi",
    },

    {
      title: "B2B Marketing Company in Delhi NCR ",
      link: "/Digital-Marketing-Services-In-Delhi-Ncr",
    },

    // 12 row (revenue)

    {
      title: "B2C Marketing Services in Delhi ",
      link: "/Digital-Marketing-Services-In-Delhi",
    },

    {
      title: "B2C Marketing Services in Delhi NCR ",
      link: "/Digital-Marketing-Services-In-Delhi-Ncr",
    },

    {
      title: "B2C Marketing Company in Delhi  ",
      link: "/Digital-Marketing-Services-In-Delhi",
    },

    {
      title: "B2C Marketing Company in Delhi NCR  ",
      link: "/Digital-Marketing-Services-In-Delhi-Ncr",
    },

    // 13 row (revenue)

    {
      title: "D2C Marketing Services in Delhi ",
      link: "/Digital-Marketing-Services-In-Delhi",
    },

    {
      title: "D2C Marketing Services in Delhi NCR ",
      link: "/Digital-Marketing-Services-In-Delhi-Ncr",
    },

    {
      title: "D2C Marketing Company in Delhi   ",
      link: "/Digital-Marketing-Services-In-Delhi",
    },

    {
      title: "D2C Marketing Company in Delhi NCR   ",
      link: "/Digital-Marketing-Services-In-Delhi-Ncr",
    },

    // 14 row (revenue)

    {
      title: "AI Performance Services in Delhi  ",
      link: "/Digital-Marketing-Services-In-Delhi",
    },

    {
      title: "AI Performance Marketing Services in Delhi NCR ",
      link: "/Digital-Marketing-Services-In-Delhi-Ncr",
    },

    {
      title: "AI Performance Marketing Company in Delhi ",
      link: "/Digital-Marketing-Services-In-Delhi",
    },

    {
      title: "AI Performance Marketing Company in Delhi NCR  ",
      link: "/Digital-Marketing-Services-In-Delhi-Ncr",
    },

    // 15 row (revenue)

    {
      title: "Ads Management Services in Delhi  ",
      link: "/Digital-Marketing-Services-In-Delhi",
    },

    {
      title: "Ads Management Services in Delhi NCR ",
      link: "/Digital-Marketing-Services-In-Delhi-Ncr",
    },

    {
      title: "Ads Management Company in Delhi  ",
      link: "/Digital-Marketing-Services-In-Delhi",
    },

    {
      title: "Ads Management Company in Delhi NCR  ",
      link: "/Digital-Marketing-Services-In-Delhi-Ncr",
    },

    // 16 row (revenue)

    {
      title: "Internet Marketing Services in Delhi   ",
      link: "/Digital-Marketing-Services-In-Delhi",
    },

    {
      title: "Internet Marketing Services in Delhi NCR ",
      link: "/Digital-Marketing-Services-In-Delhi-Ncr",
    },

    {
      title: "Internet Marketing Company in Delhi ",
      link: "/Digital-Marketing-Services-In-Delhi",
    },

    {
      title: "Internet Marketing Company in Delhi NCR  ",
      link: "/Digital-Marketing-Services-In-Delhi-Ncr",
    },

    // 17 row (revenue)

    {
      title: "Demand Generation Services in Delhi     ",
      link: "/Digital-Marketing-Services-In-Delhi",
    },

    {
      title: "Demand Generation Services in Delhi NCR   ",
      link: "/Digital-Marketing-Services-In-Delhi-Ncr",
    },

    {
      title: "Demand Generation Company in Delhi   ",
      link: "/Digital-Marketing-Services-In-Delhi",
    },

    {
      title: "Demand Generation Company in Delhi NCR  ",
      link: "/Digital-Marketing-Services-In-Delhi-Ncr",
    },

    // 18 row (revenue)

    {
      title: "Performance Marketing Services in Delhi  ",
      link: "/Digital-Marketing-Services-In-Delhi",
    },

    {
      title: "Performance Marketing Services in Delhi NCR ",
      link: "/Digital-Marketing-Services-In-Delhi-Ncr",
    },

    {
      title: "Performance Marketing Company in Delhi",
      link: "/Digital-Marketing-Services-In-Delhi",
    },

    {
      title: "Performance Marketing Company in Delhi NCR ",
      link: "/Digital-Marketing-Services-In-Delhi-Ncr",
    },

    // 19 row (digital)

    {
      title: "Content Marketing Services in Delhi  ",
      link: "/Digital-Marketing-Services-In-Delhi",
    },

    {
      title: "Content Marketing Services in Delhi NCR ",
      link: "/Digital-Marketing-Services-In-Delhi-Ncr",
    },

    {
      title: "Content Marketing Company in Delhi",
      link: "/Digital-Marketing-Services-In-Delhi",
    },

    {
      title: "Content Marketing Company in Delhi NCR",
      link: "/Digital-Marketing-Services-In-Delhi-Ncr",
    },

    // 20 row (digital)

    {
      title: "CRM Optimization Services  ",
      link: "/Digital-Marketing-Services-In-Delhi",
    },

    {
      title: "Content Marketing Services in Delhi NCR",
      link: "/Digital-Marketing-Services-In-Delhi-Ncr",
    },

    {
      title: "Content Marketing Company in Delhi",
      link: "/Digital-Marketing-Services-In-Delhi",
    },

    {
      title: "Content Marketing Company in Delhi NCR",
      link: "/Digital-Marketing-Services-In-Delhi-Ncr",
    },

    // 21 row (digital)

    {
      title: "Email Marketing Services  ",
      link: "/Digital-Marketing-Services-In-Delhi",
    },

    {
      title: "Email Marketing Services",
      link: "/Digital-Marketing-Services-In-Delhi",
    },

    {
      title: "Email Marketing Company in Delhi",
      link: "/Digital-Marketing-Services-In-Delhi",
    },

    {
      title: "Email Marketing Company in Delhi NCR",
      link: "/Digital-Marketing-Services-In-Delhi-Ncr",
    },

    // 22 row (digital)

    {
      title: "Video Marketing Services in Delhi   ",
      link: "/Digital-Marketing-Services-In-Delhi",
    },

    {
      title: "Video Marketing Services in Delhi NCR ",
      link: "/Digital-Marketing-Services-In-Delhi-Ncr",
    },

    {
      title: "Video Marketing Company in Delhi ",
      link: "/Digital-Marketing-Services-In-Delhi",
    },

    {
      title: "Video Marketing Company in Delhi NCR ",
      link: "/Digital-Marketing-Services-In-Delhi-Ncr",
    },

    // 23 row (digital)

    {
      title: "Micosoft/Bing Ads Services in Delhi   ",
      link: "/Digital-Marketing-Services-In-Delhi",
    },

    {
      title: "Micosoft/Bing Ads Services in Delhi NCR ",
      link: "/Digital-Marketing-Services-In-Delhi-Ncr",
    },

    {
      title: "Micosoft/Bing Ads Company in Delhi ",
      link: "/Digital-Marketing-Services-In-Delhi",
    },

    {
      title: "Micosoft/Bing Ads Company in Delhi NCR ",
      link: "/Digital-Marketing-Services-In-Delhi-Ncr",
    },

    // 24 row (digital)

    {
      title: "Google Ads / PPC Services in Delhi  ",
      link: "/Digital-Marketing-Services-In-Delhi",
    },

    {
      title: "Google Ads / PPC Services in Delhi NCR",
      link: "/Digital-Marketing-Services-In-Delhi-Ncr",
    },

    {
      title: "Google Ads / PPC Company in Delhi ",
      link: "/Digital-Marketing-Services-In-Delhi",
    },

    {
      title: "Google Ads / PPC Company in Delhi NCR ",
      link: "/Digital-Marketing-Services-In-Delhi-Ncr",
    },

    // 25 row (digital)

    {
      title: "SMO Services in Delhi ",
      link: "/Digital-Marketing-Services-In-Delhi",
    },

    {
      title: "SMO Services in Delhi NCR",
      link: "/Digital-Marketing-Services-In-Delhi-Ncr",
    },

    {
      title: "SMO Company in Delhi ",
      link: "/Digital-Marketing-Services-In-Delhi",
    },

    {
      title: "SMO Company in Delhi NCR",
      link: "/Digital-Marketing-Services-In-Delhi-Ncr",
    },

    // 26 row (digital)

    {
      title: "Social Media Management Services in Delhi ",
      link: "/Digital-Marketing-Services-In-Delhi",
    },

    {
      title: "Social Media Management Services in Delhi NCR",
      link: "/Digital-Marketing-Services-In-Delhi-Ncr",
    },

    {
      title: "Social Media Management Company in Delhi ",
      link: "/Digital-Marketing-Services-In-Delhi",
    },

  
  ];

  return (
<section className="py-5 bg-white">
  <div className="container">
    <div className="row g-3 g-md-4 justify-content-center">
      {services.map((service, index) => (
        <div className="col-4 col-md-4 col-lg-2" key={index}>
          <a
            href={service.link}
            className="text-decoration-none d-block h-100"
          >
            <div
              className="p-2 p-md-3 text-center rounded-4 h-100 d-flex align-items-center justify-content-center flex-column shadow-sm service-card"
              style={{
                backgroundColor: "#ECF4FF",
                transition: "all 0.3s ease",
              }}
            >
              <p
                className="mb-0 fw-semibold"
                style={{ fontSize: "12px", color: "#0A1A44" }}
              >
                {service.title}
              </p>
            </div>
          </a>
        </div>
      ))}
    </div>
  </div>
</section>


  );
}
