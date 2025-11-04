import React, { useState } from "react";
import { useParams } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import faq from "../../assets/citypages/faq.webp";
import { Link } from "react-router-dom";
import {
  webDevServices,
  guaranteedSeoServices,
  digitalMarketingServices,
  revenueMarketingServices,
} from "../../servicesdata/ServicesData";
import { CityPageData } from "../../citydata/Citydata";
import "./Citypage.css";

const CityPage = () => {
  const { serviceType, slug } = useParams();
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

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section d-flex align-items-center">
        <div className="container px-4 px-md-5">
          <div className="row align-items-center text-center">
            <div className="col-12">
              <h1
                className="text-black mb-4 fw-bold display-5"
                dangerouslySetInnerHTML={{ __html: titleHtml }}
              />

              <p
                className="text-black lh-lg fs-5"
                dangerouslySetInnerHTML={{ __html: descHtml }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section py-2 ">
        <div className="container-fluid px-2 px-md-5">
          <div className="row align-items-center gy-4">
            <div className="col-md-7   text-start lh-lg">
              <h2
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
      <section className="py-5 why-choose-section  text-center">
        <div className="container-fluid">
          <h2 className="fw-bold mb-4 text-dark">
            Why Choose Website Development Services in {slug}
          </h2>

          <div className=" py-5">
            <div className="row justify-content-center">
              {pageData.whyChooseUs.map((item, i) => (
                <div key={i} className="col-6 col-md-3 mb-4">
                  <div className="why-card text-center p-3 h-100">
                    <div className="icon-wrapper mx-auto mb-3">
                      <i className="bi bi-check-circle-fill text-primary fs-2"></i>
                    </div>
                    <h3 className="fw-semibold text-dark mb-3">{item.text}</h3>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: pageData.whyChooseUs[i].desc.replaceAll(
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
      </section>

      {/* advanced */}

      <section className="about-section py-4 ">
        <div className="container-fluid px-2 px-md-5">
          <div className="row align-items-center gy-4">
            <div className="col-md-7 my-5   lh-lg">
              <h2 className="clinge"
                dangerouslySetInnerHTML={{
                  __html: pageData.advance.heading.replaceAll(
                    "{slug}",
                    `<span class='slug-highlight'>${slug}</span>`
                  ),
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: pageData.advance.text.replaceAll(
                    "{slug}",
                    `<span class='slug-highlight'>${slug}</span>`
                  ),
                }}
              />
            </div>

            <div className="col-md-5">
              <img
                src={pageData.advance.image}
                alt={pageData.advance.heading}
                className="img-fluid  rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-section bg-white py-5 text-center">
        <div className="container">
          <h2 className="fw-bold text-dark mb-5">
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
                <Link to={service.link} key={service.id} className="text-decoration-none col-6 col-md-3 ">
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
                  <strong>At Promozione Branding Private Limited</strong>, we
                  know that your online presence is your most powerful tool for
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
                  <strong>Instant Feedback:</strong> Social media allows
                  real-time interactions to build relationships and improve
                  customer satisfaction.
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
    <strong>Comprehensive 360° Solution:</strong> From <strong>logo design</strong> and <strong>brand identity creation</strong> to <strong>website and mobile app development</strong>, <strong>marketing campaigns</strong>, <strong>lead generation</strong>, and <strong>back-office support</strong> — we provide a complete, end-to-end ecosystem for your business growth. Our holistic approach ensures that every touchpoint, from your visual identity to digital performance, aligns perfectly with your business goals. Whether you’re a startup finding your voice or an established brand aiming to expand, we build strategies that drive measurable success and long-term impact.
  </p>

  <p className="mb-2">
    <strong>Every 72 hours:</strong> That’s right — we don’t just launch your website and leave it to stagnate. Our promise is a continuous evolution. Every 72 hours, our team refreshes and optimizes your website — updating content, fine-tuning SEO, improving speed, and refining design elements. This ensures your brand always looks fresh, performs better, and remains relevant in a fast-moving digital landscape. With our proactive approach, your online presence stays dynamic and competitive, giving you a lasting edge over your competitors.
  </p>

  


</div>



            </div>
      
        </div>
    
    </section>

      {/* other services */}

      <section className="other-services-section py-5">
        <div className="container text-center">
          <h2 className="fw-bold fs-1 mb-5 text-dark">Our Other Services</h2>

          <div className="row justify-content-center g-4">
            {[
              {
                title: "Website Development",
                desc: `Website Development Services in ${slug}`,
                icon: "bi-laptop",
              },
              {
                title: "Revenue Marketing",
                desc: `Revenue Marketing Services in ${slug}`,
                icon: "bi-graph-up-arrow",
              },
              {
                title: "Digital Marketing",
                desc: `Digital Marketing Services in ${slug}`,
                icon: "bi-bullseye",
              },
              {
                title: "Guaranteed SEO",
                desc: `SEO Services in ${slug}`,
                icon: "bi-rocket-takeoff",
              },
            ].map((service, i) => (
              <div key={i} className="col-6 col-md-3">
                <div className="service-box h-100 p-3 rounded-4 shadow-sm">
                  <div className="icon-circle mx-auto mb-3">
                    <i className={`bi ${service.icon}`}></i>
                  </div>
                  <h5 className="fw-bold mb-2 ">{service.title}</h5>
                  <p className="mb-0 text-black">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* form section */}

      <section className="choice-section py-5">
        <div className="container-fluid px-2 px-md-5">
          <div className="row align-items-center g-5">
            {/* Left Content */}
            <div className="col-md-7">
              <h2
                dangerouslySetInnerHTML={{
                  __html: pageData.form.heading.replaceAll(
                    "{slug}",
                    `<span class='slug-highlight'>${slug}</span>`
                  ),
                }}
              />
              {pageData.form.points.map((item, i) => (
                <div key={i} className="choice-point mb-4">
                  <h4 className="fw-semibold text-primary mb-2">
                    {item.title}
                  </h4>
                  <p className="text-muted">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Right Form */}
            <div className="col-md-5">
              {/* <div className="contact-form-card p-4 p-md-5 shadow-lg rounded-4 bg-white">
         <h3 className="text-center mb-4">Get In Touch With Us</h3>
       
          <form>
            <div className="mb-3 text-start">
              <input type="text" className="form-control" placeholder="Full Name" required />
            </div>
            <div className="mb-3 text-start">
              <input type="email" className="form-control" placeholder="Email Address" required />
            </div>
            <div className="mb-3 text-start">
              <input type="text" className="form-control" placeholder="Phone Number" required />
            </div>
            <div className="mb-3 text-start">
              <textarea className="form-control" rows="4" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn-gradient w-100 py-2 fw-semibold">
       Digital Duniya Mein Aayein! Submit Now!
            </button>
          </form>
        </div> */}

              <img
                src={pageData.form.image}
                alt={pageData.form.heading}
                className="img-fluid "
              />
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section py-5 bg-light">
        <div className="container">
          <div className="row align-items-start g-5">
            {/* Left Q&A Design */}

            <div className="col-md-5 ">
              <img
                src={faq}
                alt={pageData.faq.heading}
                className="img-fluid "
              />
            </div>

            {/* Right Accordion */}
            <div className="col-md-7">
              <h2 className="fw-bold mb-4 text-center text-md-start faq-title">
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
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse-${index}`}
                      className={`accordion-collapse collapse ${
                        activeIndex === index ? "show" : ""
                      }`}
                    >
                      <div className="accordion-body text-muted">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CityPage;
