import React, { useEffect, useState } from "react";

import image1 from "../../assets/approach/image1.jpg";
import image2 from "../../assets/approach/image2.webp";
import image3 from "../../assets/approach/image3.webp";
import image4 from "../../assets/approach/image4.webp";
import image5 from "../../assets/approach/image5.webp";
import process1 from "../../assets/approach/process1.svg";
import process2 from "../../assets/approach/process2.webp";
import ctaImage from "../../assets/ctaweb.webp";
import Form2 from "../../components/Home/Landingpage/Form2";
import wheel from "../../assets/approach/service-wheel.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Style.css";
import roi from "../../assets/services/roi_1.webp";
import { Helmet } from "react-helmet";
const Approach = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const steps = [
    {
      image: image1,
      id: 1,
      title: "Research & Discovery",
      desc: "Before we jump into creating and executing strategies, we take the time to fully research and understand your business, along with your goals and requirements. We also learn about your audience – who they are, how they search and how they buy – in order to deliver the best strategy and results possible.",
    },
    {
      image: image2,
      id: 2,
      title: "Collaborative Planning",
      desc: "Once the strategy has been created and approved, we begin to create a prototype of the work to give you a realistic idea as to what the project may look like. This phase is very collaborative so we regularly ask for feedback from you in order to make sure we get it right.",
    },
    {
      image: image3,
      id: 3,
      title: "Design & Build",
      desc: "Once the prototype has been confirmed, we begin designing, building and executing the plan. During this phase, we like to liaise with you regularly to show new changes and receive feedback. The time scale will vary in length, depending on the size of the project.",
    },
    {
      image: image4,
      id: 4,
      title: "Live Reporting",
      desc: "Our bespoke dashboards are available 24 hours, 7 days a week for businesses to access at any given time. Overtime, businesses should begin to see a positive change in the relevant statistics to them. This could be bounce rate and sessions for websites, engagement and followers on social media, or overall more sales.",
    },
    {
      image: image5,
      id: 5,
      title: "Return on Investment",
      desc: "Once our strategy has been fully executed, businesses should begin to see an increase in sales, whether this is through a website, leads through social media, or through email. Through the increase in leads, businesses will begin to increase their return on investment.",
    },
  ];

  const [activeId, setActiveId] = useState(1);

  return (
    <>


<Helmet>
  <title>Our Approach to Digital Marketing Strategy & SEO | Promozione Branding</title>
  <meta
    name="description"
    content="Discover our proven digital marketing approach—data-driven strategies, SEO, and customized solutions to accelerate brand growth and maximize online results."
  />
</Helmet>

      <section className="container-fluid section-marketing position-relative overflow-hidden">
        {/* SVG Background */}
        <svg
          className="svg-bg"
          viewBox="0 0 1458 1362"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            className="path-animate svg-color"
            d="M146.963 34C68.8835 119.852 -35.7659 309.427 170.27 380.906C376.305 452.385 577.757 309.427 652.728 229.013L445.056 655.556C680.718 473.621 940.183 270.58 1161.6 433.738C1413.69 619.498 1151.24 937.204 940.183 919.717C738.576 903.012 761.883 668.375 940.183 628.751C1173.6 576.878 1569.6 809.302 1337.57 1160.18C1225.31 1329.94 977.475 1345.09 838.797 1265.85"
            stroke="#CDE9DE"
            strokeWidth="100"
            fill="none"
            strokeLinejoin="round"
          />
        </svg>

        {/* Content */}
        <div className="container position-relative">
          <div className="row align-items-center">
            <div className="col-12 col-md-7 mb-4 mb-md-0" data-aos="fade-right">
              <h1 className="display-5 fw-bold mb-3">
                {" "}
                Our Approach to Digital Marketing
              </h1>
              <p className="text-black p-2 fs-5">
                We turn ideas into reality with our multidisciplinary team of
                specialists. Our approach realizes the importance of listening
                to and understanding your audience — a process that helps you
                craft the best possible user experience.
              </p>
            </div>
            <div className="col-12 col-md-5 d-none d-md-block" data-aos="fade-left">
              <img src={wheel} className="img-fluid" width="100%" alt="Marketing Visual" />
            </div>
          </div>
        </div>
      </section>



        <div className="container timeline-wrapper">
          <h1 data-aos="zoom-in" className="text-center">
            Our Process
          </h1>
          <div className="underline"></div>
          <p className="fw-semibold text-center mx-auto description-text">
            We created a 5 step process that we follow to ensure we are providing
            an excellent service to all of the businesses we work with.
          </p>

          <div className="timeline-content container">
            <div className="content-box flex-column flex-md-row">
              <div className="content-text mb-4 mb-md-0 w-100">
                <h1 className="fw-bold fs-1">{steps[activeId - 1].title}</h1>
                <p className="text-muted">{steps[activeId - 1].desc}</p>
                <a
                  href={`#section-${activeId}`}
                  className="nav-btn mt-2"
                  style={{ scrollBehavior: "smooth" }}
                >
                  Read More
                </a>
              </div>
              <div className="content-image w-100">
                <img
                  src={steps[activeId - 1].image}
                  alt={steps[activeId - 1].title}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          <div className="timeline">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`timeline-step ${
                  activeId === step.id ? "active" : ""
                }`}
                onClick={() => setActiveId(step.id)}
              >
                <div className="circle">{step.id}</div>
                {index !== 0 && <div className="line" />}
                <p className="step-title">{step.title}</p>
              </div>
            ))}
          </div>
        </div>

{/* summary of our approach */}
     <section
  id="section-1"
  className="p-5 mt-5 bg-white bg-md-primary  "
 
  
>
  <div className="container">
    <div className="row">
      {/* 🖼️ IMAGE: show after text on mobile (order-2), before on large screens (order-lg-1) */}
      <div className="col-12 col-lg-6 mb-4 mb-lg-0 order-2 order-lg-1">
        <img src={process1} alt="" className="img-fluid" />
      </div>

      {/* 📝 TEXT: show before image on mobile (order-1), after on large screens (order-lg-2) */}
      <div className="col-12 col-lg-6 order-1 order-lg-2">
        <p className="text-danger fw-bold">01. Research & Discovery</p>
        <h1 className="fw-bold text-black">Keyword Research & Strategy</h1>
        <p className="text-black  fs-6 lh-lg">
          Depending on the goals and requirements set, we will gather more
          information such as your current marketing activities, where you
          rank locally on search engines or your website design. This helps
          us when we are creating tailored strategies to make sure we get it
          right. Using your business’ website and tools such as Moz and Local
          Viking, we can see what keywords you currently rank for, and other
          long-tail keywords that you could rank for. The data collected is
          used to form the strategy.
        </p>
      </div>
    </div>
  </div>
</section>

      <section id="section-2" className="p-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <p className="text-danger  fw-bold">02. Collaborative Planning</p>
              <h1 className="fw-bold">
                Creating Interactive & Collaborative Prototypes
              </h1>
              <p className=" fs-6 lh-lg">
                During this stage, we create a functioning prototype using the
                approved strategy. The prototype is used to provide you with a
                realistic view of how the project may look once it is completed.
                Once the business has access to the prototype, we request
                feedback to ensure you are satisfied with the design and
                functionality of the project. The feedback given will be used
                when we create the final design.
              </p>
            </div>

            <div className="col-12 col-md-6">
              <img
                src={image2}
                alt=""
                className="img-fluid rounded"
                width={"100%"}
              />
            </div>
          </div>
        </div>
      </section>

      <section id="section-3" className="bg-light mt-3 p-5 py-5">
        <div className="container text-center">
          <div className="row">
            <div className="col-12">
              <p className="text-danger fw-bold">03. Design & Build</p>
              <h1>Build to Industry & Accessibility Standards</h1>
              <p className=" w-100 mx-auto lh-lead ">
                After finalising the prototype, we begin to build the final
                project. Our projects are built with the needs and goals of the
                business in mind to ensure we are providing the best ROI possible.
                We also build with accessibility in mind. Being accessible is
                essential, it helps your SEO, and makes your website open to
                everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="section-4" className="p-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7 mb-4 mb-md-0">
              <p className="text-danger  fw-bold">04. Live Reporting</p>
              <h1 className="fw-bold">Live Data & Personalised Reports</h1>
              <p className=" fs-6 lh-lg">
                Something which sets us apart from our competitors is our level
                of reporting. We don’t believe in 20 page reports, showing you
                numbers that you don’t really understand. So, we craft live
                reports for our clients that are unique to them. We combine data
                from different sources (Website, Google Ads, Organic, Social
                etc) and put them in one place. We then segment and tailor that
                data to give you exactly the information you need. It could be
                website bookings, revenue, profit, users, or usage data. The
                fact is we all have unique businesses, which is why you need a
                tailor made report.
              </p>
            </div>

            <div className="col-12 col-md-5">
              <img src={process2} alt="" className="img-fluid " />
            </div>
          </div>
        </div>
      </section>


        <section id="section-5" className="p-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7 mb-4 mb-md-0">
              <p className="text-danger  fw-bold">05. Return On Investment</p>
              <h1 className="fw-bold">Maximising Your ROI</h1>
              <p className=" fs-6 lh-lg">
                Our revenue-focused strategies are designed with one clear goal: to drive measurable business growth. Once the strategy is fully implemented, you can expect to see a noticeable uplift in performance — whether it’s increased website conversions, higher-quality leads from social media, or improved engagement through email campaigns.As the volume and quality of leads grow, so does your revenue. This natural progression leads to a significant improvement in your overall return on investment (ROI). Every marketing rupee spent works harder, delivering real value and driving sustainable business results.
              </p>
            </div>

            <div className="col-12 col-md-5">
              <img src={roi} alt="" className="img-fluid " />
            </div>
          </div>
        </div>
      </section>

      <Form2
        heading="Let's Build Your Success Story Together"
        price="Your Growth is Our Guarantee."
        buttonText="Book Your Free Consultation Now!"
        image={ctaImage}
      ></Form2>
    </>
  );
};

export default Approach;
