import Tiltcard from "../../TiltCardHome/Tiltcard";
import { Link } from "react-router-dom";

const Adspackage = () => {
  const cardItems = [
    {
      title: "Audience Targeting & Segmentation",
      icon: "🎯",
    },
    {
      title: "Ad Creative & Copywriting",
      icon: "✍️",
    },
    {
      title: "Campaign Setup & Launch",
      icon: "🚀",
    },
    {
      title: "Performance Tracking & Analytics",
      icon: "📊",
    },
    {
      title: "A/B Testing & Optimization",
      icon: "🔁",
    },
    {
      title: "Monthly Reporting & Insights",
      icon: "📈",
    },
  ];

  const pointer = [
    "Google Ads Platform",
    "Google Analytics",
    "Google Tag Manager",
    "Landing Page Building ",
    "Call Tracking Tools  ",
    "Google Data Studio ",
    "Google keyword planner ",
    "Semrush / Ahrefs / Spyfu",
    "Google Merchant Center",
    "1 Reels Posting Per Week",
    "Page Monitoring",
    "Competitors Analysis",
  ];

  return (
    <>
      <Tiltcard
        heading={`Ads Management Packages in India
Maximize ROI with Targeted Facebook & Instagram Ad Campaigns
`}
        paragraph={`Looking to generate high-quality leads and boost conversions through digital ads? Promozione Branding provides expert ads management services across Facebook, Instagram, and Google.

From audience research to A/B testing, performance tracking, and real-time optimization — we handle everything to help you scale faster.

`}
        cardItems={cardItems}
      />

      <div className="container mb-4">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h1 className="text-black fw-bold my-4">
              ADS Management Package in India
            </h1>
          </div>

          <div className="col-lg-6">
            <div
              className="p-4 rounded-4 shadow-lg bg-white"
              style={{ borderTop: "5px solid #0D6EFD" }}
            >
              <div className="text-center bg-primary text-white rounded-3 py-3 mb-4">
                <h3 className="fw-bold mb-1">ADS Management</h3>
                <p className="mb-0">
                  Tools that we use to Run highly Successful ADS Campaign
                </p>
              </div>

              <ul className="p-0 list-unstyled">
                {pointer.map((point, index) => (
                  <li
                    key={index}
                    className="d-flex align-items-start py-2 px-2 border-bottom"
                  >
                    <span className="me-2 px-3">
                      <i
                        className="bi bi-check-circle-fill"
                        style={{ fontSize: "1.3rem", color: "#0D6EFD" }}
                      ></i>
                    </span>
                    <span
                      style={{
                        fontSize: "1.1rem",
                      }}
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              {/* ✅ PRICE SECTION */}
              <div className="text-center my-4">
                <h4
                  className="fw-bold text-danger mb-1"
                  style={{ fontSize: "1.8rem" }}
                >
                  ₹60,000<sup>*</sup>
                  <span className="text-muted fs-6">+ GST For 6 Months</span>
                </h4>
              </div>

              <div className="text-center mt-3">
                <Link to="/Contact">
                  <button
                    className="btn btn-primary px-4 py-2 fw-semibold rounded-pill"
                    style={{
                      fontSize: "1rem",
                      transition: "0.3s",
                    }}
                  >
                    Get Started Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5 ">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark">In Google Ads, We Do</h2>
          <p className="text-muted fs-5">
            From strategy to optimization — everything your business needs to
            win on Google.
          </p>
        </div>

        <div className="row g-4">
          {[
            {
              title: "Keyword Targeting",
              icon: "🔑",
            },
            {
              title: "Search Network Campaigns",
              icon: "🔍",
            },
            {
              title: "Dynamic Search Ads",
              icon: "♻️",
            },
            {
              title: "Shopping Campaigns",
              icon: "🛒",
            },
            {
              title: "Display Network Campaigns",
              icon: "🖼️",
            },
            {
              title: "Video Campaigns",
              icon: "🎥",
            },
            {
              title: "Ad Auction and Bidding",
              icon: "🏷️",
            },
            {
              title: "Ad Creation",
              icon: "✍️",
            },
            {
              title: "Audience & Location Targeting",
              icon: "🎯",
            },
            {
              title: "Performance Tracking & Optimization",
              icon: "📈",
            },
            {
              title: "Types of Google Ads Campaign",
              icon: "🗂️",
            },
            {
              title: "Ad Budget and Bidding Strategies",
              icon: "💰",
            },
          ].map((item, index) => (
            <div key={index} className="col-6 col-md-3">
              <div className="border rounded-4 shadow-sm h-100 p-2 bg-white text-center hover-shadow">
                <div className="display-6 mb-3">{item.icon}</div>
                <h5 className="fw-semibold fs-5 text-dark">{item.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>

<div className="container my-5">
  <div className="text-center mb-5">
    <h2 className="fw-bold text-dark pt-4">
      Benefits of Google Ads Marketing?
    </h2>
    <p className="text-muted">
      Google Ads helps your business appear at the right place, at the right time, to the right people.
    </p>
  </div>

  <div className="row g-4">
    {[
      {
        title: "Instant Visibility on Google",
        desc: "Get your business in front of customers the moment they search.",
      },
      {
        title: "Pay only for results",
        desc: "Target by location, interest, device, or intent for better ROI.",
      },
      {
        title: "Highly Targeted Advertising",
        desc: "Monitor ad performance, conversions, and optimize in real-time.",
      },
      {
        title: "Detailed Performance Tracking",
        desc: "Flexible spending—adjust your daily or monthly ad budget anytime.",
      },
      {
        title: "Control Your Marketing Spend",
        desc: "Launch targeted campaigns and generate leads while your SEO builds long-term value.",
      },
      {
        title: "OutRank Competitors",
        desc: "Reconnect with users who’ve already shown interest in your brand.",
      },
      {
        title: "Remarketing Option",
        desc: "Drive high-intent traffic to landing pages for better and efficient conversions.",
      },
      {
        title: "Flexible Ad Forms",
        desc: "Google’s machine learning helps you get the most out of your ad spend.",
      },
      {
        title: "Scalable Growth Oriented",
        desc: "Scale campaigns efficiently as your business grows.",
      },
      {
        title: "Great for Local & Global Reach",
        desc: "Expand your visibility from local customers to international markets.",
      },
    ].map((item, i) => (
      <div key={i} className="col-md-6">
        <div className="d-flex align-items-start">
          <i
            className="bi bi-check-circle-fill text-success me-3"
            style={{ fontSize: "1.3rem", flexShrink: 0 }}
          ></i>
          <div>
            <h5 className="fw-semibold mb-1">{item.title}</h5>
            <p className="text-muted mb-0">{item.desc}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    </>
  );
};

export default Adspackage;


