import Tiltcard from "../../TiltCardHome/Tiltcard";
import { Link } from "react-router-dom";

const Socialpackage = () => {
const cardItems = [
  {
    title: "Social Media Page Setup",
    icon: "🛠️", // Represents initial setup and configuration
  },
  {
    title: "Profile Optimization",
    icon: "⚙️", // Indicates fine-tuning profile settings for visibility
  },
  {
    title: "Engaging Post Creation",
    icon: "🖼️", // Represents content like reels, posts, graphics
  },
  {
    title: "Reel & Story Management",
    icon: "🎬", // Suited for short-form video content
  },
  {
    title: "Hashtag & Trend Research",
    icon: "🔍", // Indicates discovery and strategic planning
  },
  {
    title: "Comment & DM Response",
    icon: "💬", // Engaging with followers and handling inquiries
  },
];


  const pointer = [
    "Facebook/Instagram/LinkedIn Page/Account Creation",
    "Facebook/Instagram/LinkedIn Profile Page Creation",
    "Facebook/Instagram/LinkedIn Page /Account Optimization ",
    "Creation of Facebook Reels/Quiz",
    "Sharing Post in groups/ Market place ",
    "Responding to Comments ",
    "Call to Action Button Creation ",
    "Hashtag Research in 21 Days",
    "Influencer Research",
    "1 Reels Posting Per Week",
    "Page Monitoring",
    "Competitors Analysis",
  ];

  return (
    <>
    <Tiltcard
  heading={`Social Media Management Packages in India
Boost Your Brand Visibility on Instagram, Facebook & LinkedIn
`}
  paragraph={`Looking for affordable and result-driven social media marketing packages in India? Promozione Branding offers professional social media management services tailored for startups, small businesses, and growing brands.

From content creation to profile optimization and engagement strategies—we handle it all. 

`}
  cardItems={cardItems}
/>


      <div className="container mb-4">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h1 className="text-black fw-bold my-4">
            Social Media Management Packages in India
            </h1>
          </div>

          <div className="col-lg-6">
            <div
              className="p-4 rounded-4 shadow-lg bg-white"
              style={{ borderTop: "5px solid #28a745" }}
            >
              <div className="text-center bg-success text-white rounded-3 py-3 mb-4">
                <h3 className="fw-bold mb-1">Social Media Management</h3>
                <p className="mb-0">Instagram Facebook</p>
              </div>

              <ul className="p-0 list-unstyled">
                {pointer.map((point, index) => (
                  <li
                    key={index}
                    className="d-flex align-items-start py-3 px-2 border-bottom"
                  >
                    <span className="me-2 px-3">
                      <i
                        className="bi bi-check-circle-fill"
                        style={{ fontSize: "1.3rem", color: "#28a745" }}
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
                  ₹22,000 <span className="text-muted fs-6">+ GST / month</span>
                </h4>
              </div>

              <div className="text-center mt-3">
                <Link to="/Contact">
                  <button
                    className="btn btn-success px-4 py-2 fw-semibold rounded-pill"
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

export default Socialpackage;
