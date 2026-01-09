import Tiltcard from "../../TiltCardHome/Tiltcard";
import { Link } from "react-router-dom";
const Web = () => {
  const cardItems = [
    {
      title: "Custom Shopify Store Design",
      icon: "🧪", // Tailored designs to reflect your unique brand identity
    },
    {
      title: "Product Page Design",
      icon: "🛠️", // Optimized layouts that boost product visibility and sales
    },
    {
      title: "Mobile-Responsive Design",
      icon: "🎯", // Seamless experience across all devices f
      // or better engagement
    },
    {
      title: "Theme Setup & Customization",
      icon: "📊", // Personalized themes built to match your business goals
    },
    {
      title: "Payment & Shipping Integration",
      icon: "🌍", // Smooth checkout with secure payment and shipping options
    },
    {
      title: "SEO Optimization",
      icon: "🔗", // Boost your website’s visibility and search engine ranking
    },
  ];

  const pointer = [
    "Upto 100 Products",
    "Logo",
    "3 - Contact Forms ",
    "Whatsapp Chat Integration",
    "Social Profile Linking",
    "Gallery Sections",
    "Login Details will be given",
    "Delivery in 21 Days",
    "Mobile Responsive",
    "Testimonials Section",
    "Dynamic Website",
    "Click to Call/Email",
    "Free - Hosting ",
    "Free - Domain",
    "12 - Months Maintanance",
    "3 - Sliders/Banner",
    "Free SSL",
    "1 Keyword Ranking on Google 1st Page "
  ];

  return (
    <>
      <Tiltcard
        heading="Website Development Plans in India,
High-Quality Web Design & Development at Affordable Rates

"
        paragraph="Searching for budget-friendly website development solutions in India? Promozione Branding offers cost-effective web development packages designed specifically for small businesses.

Get a FREE consultation today and discover the best plans with Promozione Branding!
"
        cardItems={cardItems}
      />

<div className="container mb-4">
  <div className="row justify-content-center">
    <div className="col-12 text-center">
      <h1 className="text-black fw-bold py-4 mt-5">
        Website Development Packages in India
      </h1>
    </div>

    <div className="col-lg-6">
      <div
        className="p-4 rounded-4 shadow-lg bg-white"
        style={{ borderTop: "5px solid #0D6EFD" }}
      >
        <div className="text-center bg-primary text-white rounded-3 py-3 mb-4">
          <h3 className="fw-bold mb-1">WEB Awareness</h3>
          <p className="mb-0">Website Development Package</p>
        </div>

        <ul className="p-0 list-unstyled">
          {pointer.map((point, index) => (
            <li
              key={index}
              className="d-flex align-items-start py-2 px-2 border-bottom"
            >
              <span className="me-2 px-3 ">
                <i
                  className="bi bi-check-circle-fill"
                  style={{ fontSize: "1.3rem", color: "#0D6EFD" }}
                ></i>
              </span>
              <span
                style={{
                  fontSize: "1.1rem",
                  color: index === pointer.length - 1 ? "red" : "black",
                  fontWeight: index === pointer.length - 1 ? "bold" : "normal",
                }}
              >
                {point}
              </span>
            </li>
          ))}
        </ul>


            {/* ✅ PRICE SECTION */}
        <div className="text-center my-4">
          <h4 className="fw-bold text-danger mb-1" style={{ fontSize: "1.8rem" }}>
            ₹79,500<sup>*</sup> <span className="text-muted fs-6">+ GST / Year</span>
          </h4>
        </div>

        <div className="text-center mt-4">

          <Link to="/checkout">
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

    </>
  );
};

export default Web;
