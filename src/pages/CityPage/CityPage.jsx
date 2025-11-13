import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import faq from "../../assets/citypages/faq.webp";
import Testimonials from "../../components/Home/Landingpage/Testimonials";

import {
  webDevServices,
  guaranteedSeoServices,
  digitalMarketingServices,
  revenueMarketingServices,
} from "../../servicesdata/ServicesData";
import { CityPageData } from "../../citydata/Citydata";
import "./CityPage.css";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";



const CityPage = () => {

 const supplycard = [

  // wd
  {
    id: 1,
    link: "/Web-Development-Services-In-Rajasthan",
    label: "Web Development Services in Rajasthan",
  },
  {
    id: 2,
    link: "/Web-Development-Services-In-Uttar-Pradesh",
    label: "Web Development Services in Uttar Pradesh",
  },
    {
    id: 3,
    link: "/Web-Development-Services-In-Gurgaon",
    label: "Web Development Services in Gurgaon",
  },


    {
    id: 4,
    link: "/Web-Development-Services-In-Delhi-NCR",
    label: "Web Development Services in Delhi NCR",
  },
// dm
  {
    id: 5,
    link: "/Digital-Marketing-Services-In-Delhi-NCR",
    label: "Digital Marketing Services in Delhi NCR",
  },
  {
    id: 6,
    link: "/Digital-Marketing-Services-In-Rajasthan",
    label: "Digital Marketing Services in Rajasthan",
  },
  {
    id: 7,
    link: "/Digital-Marketing-Services-In-Uttar-Pradesh",
    label: "Digital Marketing Services in Uttar Pradesh",
  },

    {
    id: 8,
    link: "/Digital-Marketing-Services-In-Gurgaon",
    label: "Digital Marketing Services in Gurgaon",
  },
];


const logos = [
 "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1763012515/client10_i1oz1g.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1763012515/client9_dnscbf.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1763012514/client8_itgctd.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1763012513/client7_rx3itv.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1763012511/client2_r6wne6.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1763012512/client5_zl3f4q.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1763012511/client4_ius5cr.webp",
  "https://res.cloudinary.com/dzbkxqqo9/image/upload/v1763012510/client1_uvcw9r.webp",
];



  const location = useLocation();
  const pathParts = location.pathname.split("-Services-In-");
  const serviceType = pathParts[0].replace("/", "");
  const slug = pathParts[1];

  const [activeIndex, setActiveIndex] = useState(null);
  const toggleAccordion = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const pageData = CityPageData[serviceType];
  if (!pageData) return <p>Service not found</p>;

  const servicesMap = {
    webDevServices,
    guaranteedSeoServices,
    digitalMarketingServices,
    revenueMarketingServices,
  };


  
  // Converts "digital-marketing-mumbai" or "mumbai" → "Mumbai"
function formatCityName(slug) {
  if (!slug) return "";
  return slug
    .split("-") // split by dash
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // capitalize each
    .join(" "); // join back with spaces
}


  const servicesData = servicesMap[pageData.servicesListKey] || [];

  // Build highlighted text safely
  const titleHtml = pageData.hero.title.replaceAll(
    "{slug}",
    `<span class='slug-highlight'>${slug}</span>`
  );

  const highlightHtml = pageData.hero.highlight.replaceAll(
    "{slug}",
    `<span class='slug-highlight'>${slug}</span>`
  );

  const descHtml = pageData.hero.description.replaceAll(
    "{slug}",
    `<span class='slug-highlight'>${slug}</span>`
  );



// Dynamic meta title & description
  const metaTitle = pageData?.metaTitle
    ? `${pageData.metaTitle.replaceAll("{slug}", formatCityName(slug))} `
    : `Promozione Branding | ${formatCityName(slug)}`;

  const metaDescription = pageData?.metaDescription
    ? pageData.metaDescription.replaceAll("{slug}", formatCityName(slug))
    : `Promozione Branding offers top digital marketing services in ${formatCityName(slug)}.`;


useEffect(() => {
  // Manually sync Helmet updates to actual <head>
  const head = document.querySelector("head");

  // Remove old meta if any
  const oldMeta = head.querySelector('meta[name="description"]');
  if (oldMeta) oldMeta.remove();

  // Create new meta
  const newMeta = document.createElement("meta");
  newMeta.name = "description";
  newMeta.content = metaDescription;
  head.appendChild(newMeta);

  // Update title as well
  document.title = metaTitle;
}, [metaTitle, metaDescription]);

  return (


<>
   <Helmet prioritizeSeoTags>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
      </Helmet>




      {/* HERO SECTION */}
      <section className="hero-section py-4 ">
        <div className="container-fluid px-2 px-md-5">
          <div className="row align-items-center text-center">
            <div className="col-12">
              <h1
                className="text-black hero-head  mb-4 fw-bold display-5 cinzel"
                dangerouslySetInnerHTML={{ __html: titleHtml }}
              />

              <p
                className="text-black hero-text lh-lg  "
                dangerouslySetInnerHTML={{ __html: descHtml }}
              />
            </div>
          </div>


     <div className="py-3 text-center">
        <h2 className="mb-3 mb-md-5 fw-bold cinzel">Our Premium Clients</h2>
        <div className="clientele-slider overflow-hidden">
          <div className="slide-track d-flex align-items-center">
            {/* Duplicate the logos twice to create continuous loop */}
            {[...logos, ...logos].map((logo, i) => (
              <div className="slide " key={i}>
                <img
                  src={logo}
                  alt={`client-${i}`}
                  className="img-fluid rounded"
                  style={{ maxHeight: "70px", objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
 
        </div>
      </section>


   




  


      {/* ABOUT SECTION */}
      <section className="about-section py-3 ">
        <div className="container-fluid px-2 px-md-5">
          <div className="row align-items-center gy-2">
            <div className="col-md-7   text-start lh-lg">
              <h2
                className="cinzel mt-4"
                dangerouslySetInnerHTML={{
                  __html: pageData.about.heading.replaceAll(
                    "{slug}",
                    `<span class='slug-highlight'>${slug}</span>`
                  ),
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: pageData.about.text.replaceAll(
                    "{slug}",
                    `<span class='slug-highlight'>${slug}</span>`
                  ),
                }}
              />
            </div>

            <div className="col-md-5">
              <img
                src={pageData.about.image}
                alt={pageData.about.heading}
                className="img-fluid "
              />
            </div>
          </div>
        </div>
      </section>



      {/* WHY CHOOSE US */}
 <section className="py-5 why-choose-section text-black text-center">
  <div className="container-fluid px-3 px-md-5">
    <h2
      className="cinzel mb-4 fw-bold"
      dangerouslySetInnerHTML={{
        __html:
          pageData?.whyChooseUs?.[0]?.heading?.replaceAll(
            "{slug}",
            `<span class='slug-highlight'>${slug}</span>`
          ) || "",
      }}
    />

    <div className="py-4">
      <div className="row justify-content-center">
        {Array.isArray(pageData?.whyChooseUs)
          ? pageData.whyChooseUs.slice(1).map((item, i) => (
              <div key={i} className="col-12 col-sm-6 col-md-4  mb-4">
                <div className="why-card  p-3 h-100">
                  <div className="icon-wrapper mx-auto mb-3">
                    <i className="bi bi-check-circle-fill text-primary fs-2"></i>
                  </div>
                  <h3 className="fw-semibold text-dark mb-3">{item?.text}</h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html:
                        item?.desc?.replaceAll(
                          "{slug}",
                          `<span class='slug-highlight'>${slug}</span>`
                        ) || "",
                    }}
                  />
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  </div>
</section>


      {/* advanced */}

    <section className="about-section py-4">
  <div className="container-fluid px-2 px-md-5">
    <h2
      className="cinzel fw-bold text-center mb-3 mx-auto advance-heading"
      dangerouslySetInnerHTML={{
        __html: pageData.advance.heading.replaceAll(
          "{slug}",
          `<span class='slug-highlight'>${slug}</span>`
        ),
      }}
    />

    <div className="row align-items-center gy-4 about-content">
      <div className="col-12 col-md-7 my-4 lh-lg ">
        <p
          className="about-text"
          dangerouslySetInnerHTML={{
            __html: pageData.advance.text.replaceAll(
              "{slug}",
              `<span class='slug-highlight'>${slug}</span>`
            ),
          }}
        />
      </div>

      <div className="col-12 col-md-5  text-center">
        <img
          src={pageData.advance.image}
          alt={pageData.advance.heading}
          className="img-fluid rounded about-img"
        />
      </div>
    </div>
  </div>
</section>


      {/* SERVICES SECTION */}
      <section className="services-section bg-white py-5 text-center">
        <div className="container">
          <h2 className="fw-bold text-dark mb-5 cinzel advance-heading">
            Our Top{" "}
            <span
              dangerouslySetInnerHTML={{ __html: pageData.hero.highlight }}
            />{" "}
            Services in{" "}
            <span
              className="slug-highlight text-capitalize"
              dangerouslySetInnerHTML={{ __html: slug }}
            />
          </h2>

          <div className="row justify-content-center g-4">
            {servicesData.map((service) => {
              const Icon = FaIcons[service.icon];
              return (
                <Link
                  to={service.link}
                  key={service.id}
                  className="text-decoration-none col-6 col-md-3 "
                >
                  <div className="service-card p-2 h-75 rounded-4 position-relative">
                    <div className="service-icon mx-auto mb-2">
                      <Icon size={30} />
                    </div>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: service.description.replaceAll(
                          "{slug}",
                          `<span class='slug-highlight'>${slug}</span>`
                        ),
                      }}
                    />
                    <h5 className="service-title fw-semibold">
                      <a
                        href={service.link}
                        className="text-decoration-none text-white"
                      >
                        {service.title}
                      </a>
                    </h5>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* did you know section */}

      <section className="did-you-know-section text-center bg-light text-dark">
        <div className="position-relative container-fluid overflow-hidden py-5">
          {/* Section Background Animation */}

          {/* Two Content Cards */}
          <div className="position-relative d-flex flex-column flex-md-row gap-5 justify-content-center align-items-stretch container">
            <div className="position-relative bg-white shadow-lg rounded-3 p-4 p-md-4 text-start content-card">
              <div className="text-center mb-4">
                <div className="d-inline-block bg-warning text-primary fw-bold px-4 py-2 rounded heading-label shadow-sm">
                  DID YOU KNOW?
                </div>
              </div>

              <p className="mb-3">
                <strong>At Promozione Branding Private Limited</strong>, we know
                that your online presence is your most powerful tool for
                success. Here’s why Website, SEO, Social Media Management, and
                Ads Management are crucial, surpassing traditional B2B
                marketplaces.
              </p>

              <p className="mb-2">
                <strong>Visibility is Vital:</strong> Over 70% of online
                experiences start with a search engine. If you’re not on the
                first page, you’re missing out!
              </p>

              <p className="mb-2">
                <strong>Organic Traffic Dominance:</strong> First-page websites
                capture 92% of search traffic. Invest in SEO for visibility.
              </p>

              <p className="mb-2">
                <strong>Cost-Effectiveness:</strong> SEO leads have a 14.6%
                close rate, compared to 1.7% for outbound leads — yielding
                higher-quality leads.
              </p>

              <p className="mb-2">
                <strong>Engagement Powerhouse:</strong> With over 4.7 billion
                social media users, your audience is ready to engage!
              </p>

              <p className="mb-2">
                <strong>Boost Brand Awareness:</strong> 54% of social browsers
                research products on social media, enhancing visibility and
                trust.
              </p>

              <p className="mb-0">
                <strong>Instant Feedback:</strong> Social media allows real-time
                interactions to build relationships and improve customer
                satisfaction.
              </p>
            </div>

            {/* content 2 */}

            <div className="position-relative bg-white shadow-lg rounded-3 p-4 p-md-4 text-start content-card">
              <div className="text-center mb-4">
                <div className="d-inline-block bg-warning text-primary fw-bold px-4 py-2 rounded heading-label shadow-sm">
                  OUR USP
                </div>
              </div>

              <p className="mb-3">
                <strong>Comprehensive 360° Solution:</strong> From{" "}
                <strong>logo design</strong> and{" "}
                <strong>brand identity creation</strong> to{" "}
                <strong>website and mobile app development</strong>,{" "}
                <strong>marketing campaigns</strong>,{" "}
                <strong>lead generation</strong>, and{" "}
                <strong>back-office support</strong> — we provide a complete,
                end-to-end ecosystem for your business growth. Our holistic
                approach ensures that every touchpoint, from your visual
                identity to digital performance, aligns perfectly with your
                business goals. Whether you’re a startup finding your voice or
                an established brand aiming to expand, we build strategies that
                drive measurable success and long-term impact.
              </p>

              <p className="mb-2">
                <strong>Every 72 hours:</strong> That’s right — we don’t just
                launch your website and leave it to stagnate. Our promise is a
                continuous evolution. Every 72 hours, our team refreshes and
                optimizes your website — updating content, fine-tuning SEO,
                improving speed, and refining design elements. This ensures your
                brand always looks fresh, performs better, and remains relevant
                in a fast-moving digital landscape. With our proactive approach,
                your online presence stays dynamic and competitive, giving you a
                lasting edge over your competitors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* other services */}
      <section className="other-services-section py-5">
        <div className="container text-center">
          <h2 className="fw-bold fs-1 mb-5 text-dark cinzel">
            Our Other Services
          </h2>

          <div className="row justify-content-center g-4">
            {[
              {
                title: "Website Development",
                desc: `Website Development Services in ${slug}`,
                icon: "bi-laptop",
                type: "web-development",
                link: `/Website-Development-Services-In-${slug}`,
              },
              {
                title: "Revenue Marketing",
                desc: `Revenue Marketing Services in ${slug}`,
                icon: "bi-graph-up-arrow",
                type: "revenue-marketing",
                link: `/Revenue-Marketing-Services-In-${slug}`,
              },
              {
                title: "Digital Marketing",
                desc: `Digital Marketing Services in ${slug}`,
                icon: "bi-bullseye",
                type: "digital-marketing",
                link: `/Digital-Marketing-Services-In-${slug}`,
              },
              {
                title: "Guaranteed SEO",
                desc: `Our GuaranteedSEO Services in ${slug}`,
                icon: "bi-rocket-takeoff",
                type: "guaranteed-seo",
                link: `/Guaranteed-SEO-Services-In-${slug}`,
              },
            ]
              // Normalize both to lowercase and strip unwanted characters before comparing
              .filter((service) => {
                const normalizedServiceType = serviceType
                  .toLowerCase()
                  .replace(/[^a-z]/g, ""); // removes non-letter chars
                const normalizedCurrent = service.type
                  .toLowerCase()
                  .replace(/[^a-z]/g, "");
                return normalizedServiceType !== normalizedCurrent;
              })
              .map((service, i) => (
                <Link key={i} className="col-6 col-md-3 text-decoration-none">
                  <div to={service.link} className=" text-dark">
                    <div className="service-box h-100 p-3 rounded-4 shadow-sm">
                      <div className="icon-circle mx-auto mb-3">
                        <i className={`bi ${service.icon}`}></i>
                      </div>
                      <h5 className="fw-bold mb-2">{service.title}</h5>
                      <p className="mb-0 text-black">{service.desc}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* form section */}

 <section style={{ backgroundColor: "#F7F7F7" }} className="py-4">
  <div className="container-fluid px-2 px-md-5">

     <h2
        className="cinzel w-75 text-center advance-heading mx-auto mb-4"
        dangerouslySetInnerHTML={{
          __html: pageData.form.heading.replaceAll(
            "{slug}",
            `<span class='slug-highlight'>${formatCityName(slug)}</span>`
          ),
        }}
      />
    <div className="row align-items-center">

      {/* Dynamic Heading */}
     

      {/* Left Content */}
      <div className="col-md-6">
        {pageData.form.points.map((item, i) => (
          <div key={i} className="choice-point mb-4">
            <h4
              className="fw-semibold text-primary mb-2"
              dangerouslySetInnerHTML={{
                __html: item.title.replaceAll(
                  "{slug}",
                  `<span class='slug-highlight'>${formatCityName(slug)}</span>`
                ),
              }}
            />
            <p
              className="text-black"
              dangerouslySetInnerHTML={{
                __html: item.desc.replaceAll(
                  "{slug}",
                  `<span class='slug-highlight'>${formatCityName(slug)}</span>`
                ),
              }}
            />
          </div>
        ))}
      </div>

      {/* Right Image */}
      <div className="col-md-6">
        <img
          src={pageData.form.image}
          alt={pageData.form.heading}
          className="img-fluid  mb-md-5"
        />
      </div>
    </div>
  </div>
</section>


      {/* testimonials */}

      <Testimonials></Testimonials>

{/* FAQ SECTION */}
<section className="faq-section py-5 bg-light">
  <div className="container-fluid">
    <div className="row  ">
      {/* Left Image */}
      <div className="col-md-5  d-none d-md-block">
        <img
          src={faq}
          alt="FAQ section illustration"
          className="img-fluid mt-5 pt-3"
        />
      </div>

      {/* Right Accordion */}
      <div className="col-md-7">
        <h2 className="fw-bold cinzel mb-4 text-center text-md-start faq-title">
          Frequently Asked Questions
        </h2>

        <div className="accordion" id="faqAccordion">
          {pageData.faq.map((item, index) => (
            <div
              className="accordion-item mb-3 border-0 shadow-sm"
              key={index}
            >
              <h2 className="accordion-header" id={`heading-${index}`}>
                <button
                  className={`accordion-button fw-semibold ${
                    activeIndex === index ? "" : "collapsed"
                  }`}
                  onClick={() => toggleAccordion(index)}
                  type="button"
                  dangerouslySetInnerHTML={{
                    __html: item.question.replaceAll(
                      "{slug}",
                      `<span class='slug-highlight'>${slug}</span>`
                    ),
                  }}
                />
              </h2>

              <div
                id={`collapse-${index}`}
                className={`accordion-collapse collapse ${
                  activeIndex === index ? "show" : ""
                }`}
              >
                <div
                  className="accordion-body text-black"
                  dangerouslySetInnerHTML={{
                    __html: item.answer.replaceAll(
                      "{slug}",
                      `<span class='slug-highlight'>${slug}</span>`
                    ),
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>


   <div className="container-fluid px-4 py-5 bg-light">
      <h2 className="fw-bold display-6 mb-4 text-center">
     Explore Our <span className="text-primary">Other Services</span>
      </h2>

      <div className="row g-3 justify-content-center">
        {supplycard.map(({ link, label, id }) => (
          <div key={id} className="col-6 col-sm-4 col-md-3 ">
            <Link to={link} className="text-decoration-none">
              <div className="city-box text-center">
                <span className="city-label">{label}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default CityPage;
