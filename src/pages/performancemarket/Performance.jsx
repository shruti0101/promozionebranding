import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Style.css";
import { FaArrowRight } from "react-icons/fa";
import ctaImage from "../../assets/Formimg.webp"
import Form2 from "../../components/Home/Landingpage/Form2"

const Performance = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className='section-bg'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-7' data-aos="fade-right">
              <h1 className='display-5 fw-bold mb-3'>Performance Marketing Services in India</h1>
              <p className='text-black p-2  fs-5'>
                Are you tired of investing in marketing campaigns without seeing tangible results? At <strong>Promozione Branding Pvt. Ltd.</strong>, we offer Performance Marketing Services in India with <strong>100% Guaranteed Results</strong>. We don’t just promise – we deliver measurable growth, leads, and revenue that takes your business to new heights.
              </p>
              <button className='nav-btn'>Get Started Now <FaArrowRight className='ms-1 mx-auto' /></button>
            </div>
            <div className='col-md-5 d-none d-md-block' data-aos="fade-left">
              {/* <img src={marketingImage} alt="Performance Marketing" className='img-fluid' /> */}
            </div>
          </div>
        </div>
      </section>

      {/* What is Performance Marketing */}
      <section className="py-5 bg-white text-dark">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-md-7" data-aos="fade-up">
              <h2 className="mb-3 fw-bold fs-1">What is Performance Marketing?</h2>
              <p className='fw-semibold fs-5'>Performance Marketing is not just about running ads – it’s about delivering measurable results. Unlike traditional marketing, it focuses on pay-for-performance campaigns where every rupee spent generates leads, sales, or desired actions.</p>
              <p className='fs-5'>Our strategies at Promozione are <strong className='text-primary'>data-driven</strong>, <strong className='text-primary'>result-oriented</strong>, and <strong className='text-primary'>ROI-focused</strong>, ensuring you only pay for what truly matters – growth.</p>
            </div>
            <div className="col-md-5 text-center" data-aos="zoom-in">
              <img src="https://cdn-icons-png.flaticon.com/512/4464/4464525.png" alt="What is Performance Marketing" className="img-fluid rounded shadow" style={{ maxWidth: '90%' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold fs-2 mb-5" style={{ color: "#2548BD" }}>Our Performance Marketing Services Include</h2>
          <div className="row g-4">
            {[
              {
                title: "Google Ads Management",
                desc: "Optimized PPC campaigns to drive traffic & conversions.",
                icon: "https://cdn-icons-png.flaticon.com/512/733/733609.png",
              },
              {
                title: "Facebook & Instagram Ads",
                desc: "Engaging creatives that target your ideal audience.",
                icon: "https://cdn-icons-png.flaticon.com/512/145/145802.png",
              },
              {
                title: "LinkedIn Ads",
                desc: "B2B lead generation by targeting decision-makers.",
                icon: "https://cdn-icons-png.flaticon.com/512/145/145807.png",
              },
              {
                title: "YouTube Ads",
                desc: "Boost visibility with video ad campaigns.",
                icon: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
              },
              {
                title: "Remarketing Campaigns",
                desc: "Re-engage potential customers effectively.",
                icon: "https://cdn-icons-png.flaticon.com/512/1042/1042455.png",
              },
              {
                title: "E-Commerce Marketing",
                desc: "Increase online sales with product-based strategies.",
                icon: "https://cdn-icons-png.flaticon.com/512/3144/3144456.png",
              },
              {
                title: "Conversion Rate Optimization",
                desc: "Enhance landing pages for higher conversions.",
                icon: "https://cdn-icons-png.flaticon.com/512/1256/1256650.png",
              },
            ].map((item, i) => (
              <div className="col-md-3" key={i} data-aos="fade-up" data-aos-delay={`${i * 100}`}>
                <div className="p-4 shadow-sm h-100 rounded service-box text-center">
                  <img src={item.icon} alt={item.title} className="mb-3" style={{ width: "50px", height: "50px" }} />
                  <h5 className="fw-bold mb-2">{item.title}</h5>
                  <p className="text-muted small">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5 my-3 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold" style={{ color: "#2548BD" }}>Why Choose Our Performance <span className='text-black'>Marketing Services?</span></h2>
          <div className="row text-center g-4">
            {[
              "100% Guaranteed ROI",
              "Transparent Campaign Reporting",
              "Dedicated Marketing Experts",
              "High-Quality Lead Generation",
              "Customized Campaign Strategies"
            ].map((item, index) => (
              <div className="col-md-4" key={index} data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                <div className="p-4 bg-light rounded shadow h-100">
                  <h5 className="fw-semibold">{item}</h5>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5" data-aos="zoom-in">
            <button className='nav-btn'>Talk to Our Experts</button>
          </div>
        </div>
      </section>

      {/* Execution Steps */}
      <section className="py-5 bg-light execution-section">
        <div className="container">
          <h2 className="text-center fw-bold mb-5" style={{ color: "#2548BD" }}>How We Execute Performance Marketing for Guaranteed Results</h2>
          <div className="row g-4">
            {[
              {
                step: "Step 1",
                title: "Understanding Your Business Goals",
                desc: "Our experts conduct in-depth research to understand your business objectives, target audience, and competitive landscape.",
                icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
              },
              {
                step: "Step 2",
                title: "Campaign Strategy Development",
                desc: "We design customized performance marketing campaigns tailored to your business goals.",
                icon: "https://cdn-icons-png.flaticon.com/512/4333/4333609.png",
              },
              {
                step: "Step 3",
                title: "Ad Creation & Setup",
                desc: "Our creative team designs high-converting ad creatives that grab attention and drive action.",
                icon: "https://cdn-icons-png.flaticon.com/512/11393/11393221.png",
              },
              {
                step: "Step 4",
                title: "Campaign Optimization",
                desc: "We continuously monitor, optimize, and adjust campaigns to maximize ROI.",
                icon: "https://cdn-icons-png.flaticon.com/512/992/992651.png",
              },
              {
                step: "Step 5",
                title: "Performance Reporting",
                desc: "Get detailed weekly and monthly reports with insights into campaign performance.",
                icon: "https://cdn-icons-png.flaticon.com/512/3601/3601030.png",
              },
              {
                step: "Step 6",
                title: "Result Delivery",
                desc: "We don’t just deliver clicks – we deliver leads, sales, and revenue growth.",
                icon: "https://cdn-icons-png.flaticon.com/512/753/753318.png",
              },
            ].map((item, i) => (
              <div className="col-md-6" key={i} data-aos="fade-up" data-aos-delay={`${i * 100}`}>
                <div className="d-flex p-4 shadow-sm rounded bg-white h-100 step-box">
                  <img src={item.icon} alt={item.title} className="me-3" style={{ width: "50px", height: "50px" }} />
                  <div>
                    <h6 className="fw-bold text-primary mb-1">{item.step}: {item.title}</h6>
                    <p className="text-muted small mb-0">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5" data-aos="zoom-in">
            <button className="nav-btn">Request Free Audit</button>
          </div>

          {/* Why It Matters */}
          <h2 className="text-center fw-bold mt-5 mb-4" style={{ color: "#2548BD" }}>Why Performance Marketing Matters for Your Business?</h2>
          <div className="row text-center g-4">
            {[
              "Instant Lead Generation",
              "Higher ROI Compared to Traditional Marketing",
              "Targeted Audience Reach",
              "Budget-Friendly Advertising",
              "Measurable Results in Real-Time",
              "Scalability and Flexibility",
            ].map((point, idx) => (
              <div className="col-md-4" key={idx} data-aos="zoom-in" data-aos-delay={`${idx * 100}`}>
                <div className="px-4 py-3 bg-white rounded shadow-sm h-100 matter-box">
                  <h6 className="fw-bold text-dark">{point}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
     <Form2
        heading="Let's Build Your Success Story Together"
        price="Your Growth is Our Guarantee."
        buttonText="Book Your Free Consultation Now!"
        image={ctaImage}
      ></Form2>
    </div>
  );
};

export default Performance;
