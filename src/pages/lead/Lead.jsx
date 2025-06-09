import React from "react";
import "./Style.css"
import ctaImage from "../../assets/Formimg.webp"
import Form2 from "../../components/Home/Landingpage/Form2"
const Lead = () => {
  return (
    <div>
      <section className="section-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h1>
                {" "}
                Best Lead Generation Services in India – 100% Guaranteed Leads
                with Promozione Branding Pvt. Ltd.
              </h1>
              <p className="text-black  p-2 fw-semibold fs-6">
                Struggling to find high-quality leads for your business? At
                Promozione Branding Pvt. Ltd., we provide 100% Guaranteed Lead
                Generation Services in India to help you attract, nurture, and
                convert potential customers into paying clients. With our
                strategic lead generation campaigns, we don't just bring traffic
                – we deliver qualified leads that are ready to buy!
              </p>

              <button className="nav-btn">
                Start Your Lead Generation Campaign
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h2  className="mb-3 fw-bold fs-1 pt-5"> What Are Lead Generation Services?</h2>
              <p className="fw-semibold fs-6 ">
                Lead Generation is the process of attracting potential customers
                and converting them into leads through various digital marketing
                strategies. Our lead generation services help businesses
                generate high-quality leads through paid campaigns, content
                marketing, SEO, and social media marketing. At Promozione, we
                specialize in delivering B2B and B2C lead generation services in
                Delhi NCR, Gurgaon, Noida, and across India – guaranteed to
                increase your sales pipeline.
              </p>
            </div>

            <div className="col-md-5">
                <img src="" alt="ej" />
            </div>
          </div>
        </div>
      </section>



      <section className="py-5 bg-light">
  <div className="container">
    <div className="text-center mb-5" >
      <h2 className="fw-bold" style={{ color: "#2548BD" }}>
        Why Choose Our Lead Generation Services in India?
      </h2>
      <p className="lead mt-3">
        With Promozione, you're not just getting leads – you're getting <strong>sales-ready leads</strong> that convert!
      </p>
    </div>

    <div className="row g-4">
      {[
        {
          title: "100% Guaranteed Qualified Leads in 7 Days",
          icon: "https://cdn-icons-png.flaticon.com/512/484/484662.png",
        },
        {
          title: "Custom Strategy Based on Your Industry",
          icon: "https://cdn-icons-png.flaticon.com/512/924/924915.png",
        },
        {
          title: "Dedicated Lead Generation Manager",
          icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
        },
        {
          title: "Real-Time Lead Tracking Dashboard",
          icon: "https://cdn-icons-png.flaticon.com/512/2602/2602375.png",
        },
        {
          title: "Transparent Reporting & Communication",
          icon: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
        },
        {
          title: "Affordable Packages for SMEs",
          icon: "https://cdn-icons-png.flaticon.com/512/1170/1170627.png",
        },
      ].map((item, idx) => (
        <div className="col-md-4" key={idx}  data-aos-delay={`${idx * 100}`}>
          <div className="p-4 bg-white rounded shadow-sm h-100 text-center">
            <img
              src={item.icon}
              alt={item.title}
              className="mb-3"
              style={{ width: "50px", height: "50px" }}
            />
            <h6 className="fw-bold">{item.title}</h6>
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mt-5" data-aos="zoom-in">
      <button className="nav-btn px-4 py-2 fw-semibold">
        Book Free Consultation
      </button>
    </div>
  </div>
</section>



<section className="py-5 bg-white">
  <div className="container">
    <h2 className="text-center fw-bold mb-5" style={{ color: "#2548BD" }}>
      Our Lead Generation Services Include
    </h2>

    <div className="row g-4">
      {[
        { title: "B2B Lead Generation", icon: "https://cdn-icons-png.flaticon.com/512/6216/6216373.png" },
        { title: "B2C Lead Generation", icon: "https://cdn-icons-png.flaticon.com/512/2972/2972554.png" },
        { title: "Paid Ads Lead Gen (Google & Meta)", icon: "https://cdn-icons-png.flaticon.com/512/2702/2702602.png" },
        { title: "LinkedIn Lead Generation", icon: "https://cdn-icons-png.flaticon.com/512/145/145807.png" },
        { title: "Local Business Lead Gen", icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png" },
        { title: "eCommerce Lead Generation", icon: "https://cdn-icons-png.flaticon.com/512/891/891419.png" },
        { title: "Lead Nurturing Campaigns", icon: "https://cdn-icons-png.flaticon.com/512/9407/9407723.png" },
        { title: "Cold Email & WhatsApp Marketing", icon: "https://cdn-icons-png.flaticon.com/512/684/684908.png" },
      ].map((item, idx) => (
        <div className="col-md-3 col-sm-6 text-center" key={idx}  data-aos-delay={`${idx * 100}`}>
          <div className="d-flex flex-column align-items-center px-3">
            <img
              src={item.icon}
              alt={item.title}
              className="mb-3"
              style={{ width: "60px", height: "60px" }}
            />
            <h6 className="fw-semibold">{item.title}</h6>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


<section class="container py-5">
  <h1 class="text-center mb-5 fw-bold"  >How Our Lead Generation Process Works</h1>
  <div class="leadgen-timeline position-relative">
    <div class="leadgen-step leadgen-left">
      <div class="leadgen-box">
        <div class="leadgen-icon">1</div>
        <h5>Business Analysis & Target Audience Research</h5>
        <p>We understand your business goals and define your ideal customer profile (ICP) to target the right audience.</p>
      </div>
    </div>
    <div class="leadgen-step leadgen-right">
      <div class="leadgen-box">
        <div class="leadgen-icon">2</div>
        <h5>Custom Lead Generation Strategy</h5>
        <p>Our experts craft a custom lead generation strategy based on your industry, target location, and business goals.</p>
      </div>
    </div>
    <div class="leadgen-step leadgen-left">
      <div class="leadgen-box">
        <div class="leadgen-icon">3</div>
        <h5>Campaign Setup & Execution</h5>
        <p>We set up and launch lead generation campaigns through Google Ads, Meta Ads, LinkedIn Ads, and Cold Email Marketing.</p>
      </div>
    </div>
    <div class="leadgen-step leadgen-right">
      <div class="leadgen-box">
        <div class="leadgen-icon">4</div>
        <h5>Lead Filtering & Qualification</h5>
        <p>We filter out spam leads and deliver only qualified leads that have the potential to convert.</p>
      </div>
    </div>
    <div class="leadgen-step leadgen-left">
      <div class="leadgen-box">
        <div class="leadgen-icon">5</div>
        <h5>Real-Time Lead Tracking & Reporting</h5>
        <p>Track every lead with our real-time dashboard and weekly performance reports.</p>
      </div>
    </div>
    <div class="leadgen-step leadgen-right">
      <div class="leadgen-box">
        <div class="leadgen-icon">6</div>
        <h5>Guaranteed Results in 7 Days</h5>
        <p>We guarantee 100% qualified leads in 7 days – or your money back!</p>
      </div>
    </div>
  </div>
  <div class="text-center mt-5">
    <button class="nav-btn">Start Your Lead Generation Campaign</button>
  </div>
</section>



<section class="container py-5">
  <h1 class="text-center  mb-4">Why Lead Generation is Important for Your Business</h1>
  <p class="text-center text-muted mb-5 fs-5">
    Unlock growth opportunities and connect with your ideal customers through a focused lead generation strategy.
  </p>
  <div class="row g-4">
    <div class="col-md-6 col-lg-4">
      <div class="leadgen-card">
        <div class="leadgen-icon-box bg-primary">
          <i class="bi bi-bar-chart-line"></i>
        </div>
        <h5>Boosts Sales Pipeline</h5>
        <p>Fuel your sales funnel with a steady stream of potential customers ready to convert.</p>
      </div>
    </div>
    <div class="col-md-6 col-lg-4">
      <div class="leadgen-card">
        <div class="leadgen-icon-box bg-success">
          <i class="bi bi-graph-up-arrow"></i>
        </div>
        <h5>Increases Conversion Rates</h5>
        <p>Reach prospects who are genuinely interested, resulting in better conversion performance.</p>
      </div>
    </div>
    <div class="col-md-6 col-lg-4">
      <div class="leadgen-card">
        <div class="leadgen-icon-box bg-warning">
          <i class="bi bi-clock-history"></i>
        </div>
        <h5>Saves Time & Resources</h5>
        <p>Focus your efforts on leads that matter while we handle the heavy lifting.</p>
      </div>
    </div>
    <div class="col-md-6 col-lg-4">
      <div class="leadgen-card">
        <div class="leadgen-icon-box bg-danger">
          <i class="bi bi-person-check"></i>
        </div>
        <h5>Generates High-Quality Leads</h5>
        <p>Filter out noise and get connected to decision-makers ready to buy.</p>
      </div>
    </div>
    <div class="col-md-6 col-lg-4">
      <div class="leadgen-card">
        <div class="leadgen-icon-box bg-info">
          <i class="bi bi-rocket-takeoff"></i>
        </div>
        <h5>Helps Businesses Scale Faster</h5>
        <p>Accelerate growth by continuously acquiring customers who match your ideal profile.</p>
      </div>
    </div>
    <div class="col-md-6 col-lg-4">
      <div class="leadgen-card">
        <div class="leadgen-icon-box bg-secondary">
          <i class="bi bi-wallet2"></i>
        </div>
        <h5>Cost-Effective Marketing Strategy</h5>
        <p>Maximize ROI with targeted lead generation instead of expensive, broad marketing campaigns.</p>
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

    </div>
  );
};

export default Lead;
