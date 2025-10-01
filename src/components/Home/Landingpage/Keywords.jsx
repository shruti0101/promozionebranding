import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ServicesSection() {
  const services = [
    { title: "B2B Website Development Services in Delhi ", link: "/services/b2b-web-development-services" },

    { title: "B2B Website Development Services in Delhi NCR", link: "/services/b2b-web-development-services" },


    { title: "B2B Website Development Company in Delhi", link: "/services/b2b-web-development-services" },
    { title: "B2B Website Development Company ", link: "/services/b2b-web-development-services" },


    // second row

    { title: "PHP Website Development Services in Delhi", link: "/services/custom-web-development-services" },

    { title: "Custom Web Development & Design Services in Delhi NCR", link: "/services/custom-web-development-services" },

    { title: "Custom Web Development & Design Company in Delhi", link: "/services/custom-web-development-services" },

    { title: "Custom Web Development & Design Company in Delhi NCR", link: "/services/custom-web-development-services" },

// third row

    { title: "CMS Website Development Services in Delhi", link: "/services/php-website-development-services" },

    { title: "PHP Website Development Services in Delhi NCR", link: "/services/php-website-development-services" },

    { title: "PHP Website Development Company in Delhi", link: "/services/php-website-development-services" },

    { title: "PHP Website Development Company in Delhi NCR", link: "/services/php-website-development-services" },

// fourth row

    { title: "React Web Development Services Delhi", link: "/services/cms-web-development-services" },
    { title: "CMS Website Development Services in Delhi NCR", link: "/services/cms-web-development-services" },
    { title: "CMS Website Development Company in Delhi", link: "/services/cms-web-development-services" },
    { title: "CMS Website Development Company in Delhi NCR", link: "/services/cms-web-development-services" },

// fifth row

    { title: "Shopify Web Designing Services in Delhi", link: "/services/react-web-development-services" },



    { title: "React Web Development Services Delhi NCR", link: "/services/react-web-development-services" },


    { title: "React Web Development Company Delhi", link: "/services/react-web-development-services" },
    { title: "React Web Development Company Delhi NCR", link: "/services/react-web-development-services" },


    // six row

    { title: "SEO Web Design Services in Delhi", link: "/services/shopify-web-designing-services" },

    { title: "Shopify Web Designing Services in Delhi NCR", link: "/services/shopify-web-designing-services" },

    { title: "Shopify Web Designing Company in Delhi", link: "/services/shopify-web-designing-services" },

       { title: "Shopify Web Designing Company in Delhi NCR", link: "/services/shopify-web-designing-services" },

    //    7 row

      { title: "Website Redesigning Services in Delhi", link: "/services/seo-web-designing-services" },

    { title: "SEO Web Design Services in Delhi NCR", link: "/services/seo-web-designing-services" },

    { title: "SEO Web Design Company in Delhi", link: "/services/seo-web-designing-services" },

       { title: "SEO Web Design Company in Delhi NCR", link: "/services/seo-web-designing-services" },

        //    8 row

      { title: "Landing Page Design Services in Delhi", link: "/services/website-redesigning-services" },

    { title: "Website Redesigning Services in Delhi NCR", link: "/services/website-redesigning-services" },

    { title: "Website Redesigning Company in Delhi", link: "/services/website-redesigning-services" },

       { title: "Website Redesigning Company in Delhi NCR", link: "/services/website-redesigning-services" },

// 9 row

       { title: "WordPress Website Designing Services in Delhi", link: "/services/web-application-development-services" },

    { title: "Web Application Development Services in Delhi NCR", link: "/services/web-application-development-services" },

    { title: "Web Application Development Company in Delhi", link: "/services/web-application-development-services" },

       { title: "Web Application Development Company in Delhi NCR", link: "/services/web-application-development-services" },


       // 10 row

       { title: "Content Marketing Services in Delhi", link: "/services/wordpress-website-services" },

    { title: "WordPress Website Designing Services in Delhi NCR", link: "/services/wordpress-website-services" },

    { title: "WordPress Website Designing Company in Delhi", link: "/services/wordpress-website-services" },

       { title: "WordPress Website Designing Company in Delhi NCR", link: "/services/wordpress-website-services" },


       // 11 row (revenue)

       { title: "B2B Marketing Services in Delhi ", link: "/services/b2b-marketing-services" },

    { title: "B2B Marketing Services in Delhi NCR ", link: "/services/b2b-marketing-services" },

    { title: "B2B Marketing Company in Delhi ", link: "/services/b2b-marketing-services" },

       { title: "B2B Marketing Company in Delhi NCR ", link: "/services/b2b-marketing-services" },


  // 12 row (revenue)

       { title: "B2C Marketing Services in Delhi ", link: "/services/b2c-marketing-services" },

    { title: "B2C Marketing Services in Delhi NCR ", link: "/services/b2c-marketing-services" },

    { title: "B2C Marketing Company in Delhi  ", link: "/services/b2c-marketing-services" },

       { title: "B2C Marketing Company in Delhi NCR  ", link: "/services/b2c-marketing-services" },


        // 13 row (revenue)

       { title: "D2C Marketing Services in Delhi ", link: "/services/d2c-marketing-services" },

    { title: "D2C Marketing Services in Delhi NCR ", link: "/services/d2c-marketing-services" },

    { title: "D2C Marketing Company in Delhi   ", link: "/services/d2c-marketing-services" },

       { title: "D2C Marketing Company in Delhi NCR   ", link: "/services/d2c-marketing-services" },



          // 14 row (revenue)

       { title: "AI Performance Services in Delhi  ", link: "/services/ai-performance-marketing-services" },

    { title: "AI Performance Marketing Services in Delhi NCR ", link: "/services/ai-performance-marketing-services" },

    { title: "AI Performance Marketing Company in Delhi ", link: "/services/ai-performance-marketing-services" },

       { title: "AI Performance Marketing Company in Delhi NCR  ", link: "/services/ai-performance-marketing-services" },


        // 15 row (revenue)

       { title: "Ads Management Services in Delhi  ", link: "/services/ads-management-services" },

    { title: "Ads Management Services in Delhi NCR ", link: "/services/ads-management-services" },

    { title: "Ads Management Company in Delhi  ", link: "/services/ads-management-services" },

       { title: "Ads Management Company in Delhi NCR  ", link: "/services/ads-management-services" },


        // 16 row (revenue)

       { title: "Internet Marketing Services in Delhi   ", link: "/services/internet-marketing-services" },

    { title: "Internet Marketing Services in Delhi NCR ", link: "/services/internet-marketing-services" },

    { title: "Internet Marketing Company in Delhi ", link: "/services/internet-marketing-services" },

       { title: "Internet Marketing Company in Delhi NCR  ", link: "/services/internet-marketing-services" },


       
        // 17 row (revenue)

       { title: "Demand Generation Services in Delhi     ", link: "/services/demand-generation-services" },

    { title: "Demand Generation Services in Delhi NCR   ", link: "/services/demand-generation-services" },

    { title: "Demand Generation Company in Delhi   ", link: "/services/demand-generation-services" },

       { title: "Demand Generation Company in Delhi NCR  ", link: "/services/demand-generation-services" },


       
        // 18 row (revenue)

       { title: "Performance Marketing Services in Delhi  ", link: "/services/performance-marketing-services" },

    { title: "Performance Marketing Services in Delhi NCR ", link: "/services/performance-marketing-services" },

    { title: "Performance Marketing Company in Delhi", link: "/services/performance-marketing-services" },

       { title: "Performance Marketing Company in Delhi NCR ", link: "/services/performance-marketing-services" },


        // 19 row (digital)

       { title: "Content Marketing Services in Delhi  ", link: "/services/content-marketing-services" },

    { title: "Content Marketing Services in Delhi NCR ", link: "/services/content-marketing-services" },

    { title: "Content Marketing Company in Delhi", link: "/services/content-marketing-services" },

       { title: "Content Marketing Company in Delhi NCR", link: "/services/content-marketing-services" },


  // 20 row (digital)

       { title: "CRM Optimization Services  ", link: "/services/crm-optimizations-services" },

    { title: "Content Marketing Services in Delhi NCR", link: "/services/crm-optimizations-services" },

    { title: "Content Marketing Company in Delhi", link: "/services/crm-optimizations-services" },

       { title: "Content Marketing Company in Delhi NCR", link: "/services/crm-optimizations-services" },


        // 21 row (digital)

       { title: "Email Marketing Services  ", link: "/services/email-marketing-services" },

    { title: "Email Marketing Services", link: "/services/email-marketing-services" },

    { title: "Email Marketing Company in Delhi", link: "/services/email-marketing-services" },

       { title: "Email Marketing Company in Delhi NCR", link: "/services/email-marketing-services" },



         // 22 row (digital)

       { title: "Video Marketing Services in Delhi   ", link: "/services/video-marketing-services" },

    { title: "Video Marketing Services in Delhi NCR ", link: "/services/video-marketing-services" },

    { title: "Video Marketing Company in Delhi ", link: "/services/video-marketing-services" },

       { title: "Video Marketing Company in Delhi NCR ", link: "/services/video-marketing-services" },

 // 23 row (digital)

       { title: "Micosoft/Bing Ads Services in Delhi   ", link: "/services/microsoft-bing-ads-services" },

    { title: "Micosoft/Bing Ads Services in Delhi NCR ", link: "/services/microsoft-bing-ads-services" },

    { title: "Micosoft/Bing Ads Company in Delhi ", link: "/services/microsoft-bing-ads-services" },

       { title: "Micosoft/Bing Ads Company in Delhi NCR ", link: "/services/microsoft-bing-ads-services" },

          // 24 row (digital)

       { title: "Google Ads / PPC Services in Delhi  ", link: "/services/google-adword-ppc-services" },

    { title: "Google Ads / PPC Services in Delhi NCR", link: "/services/google-adword-ppc-services" },

    { title: "Google Ads / PPC Company in Delhi ", link: "/services/google-adword-ppc-services" },

       { title: "Google Ads / PPC Company in Delhi NCR ", link: "/services/google-adword-ppc-services" },

   // 25 row (digital)

       { title: "SMO Services in Delhi ", link: "/services/social-media-optimization" },

    { title: "SMO Services in Delhi NCR", link: "/services/social-media-optimization" },

    { title: "SMO Company in Delhi ", link: "/services/social-media-optimization" },

       { title: "SMO Company in Delhi NCR", link: "/services/social-media-optimization" },


        // 26 row (digital)

       { title: "Social Media Management Services in Delhi ", link: "/services/social-media-marketing" },
    
    { title: "Social Media Management Services in Delhi NCR", link: "/services/social-media-marketing" },

    { title: "Social Media Management Company in Delhi ", link: "/services/social-media-marketing" },

       { title: "Social Media Management Company in Delhi NCR", link: "/services/social-media-marketing" },

  ];    



  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row">
          {services.map((service, index) => (
            <div className="col-12 col-sm-6 col-lg-3 mb-3" key={index}>
              <a
                href={service.link}
                className="text-decoration-none"
              >
                <div
                  className="d-flex align-items-center p-3"
                  style={{ backgroundColor: "#ECF4FF" }}
                >
                  {/* Number */}
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: "bold",
                      color: "#0D6DFB",
                      marginRight: "10px",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {/* Text */}
                  <p
                    className="mb-0"
                    style={{ fontSize: "14px", color: "#000" }}
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
