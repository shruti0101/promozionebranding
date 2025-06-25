import React, { useRef, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Career.css";

const Career = () => {
  const [showToast, setShowToast] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    const formData = new FormData(form);

    const file = formData.get("attachment");
    if (file && file.size > 2 * 1024 * 1024) {
      alert("Please upload a PDF smaller than 2MB.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/info@promozionebranding.com",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setShowToast(true);
        form.reset();
        setSelectedPosition("");
        setTimeout(() => setShowToast(false), 3000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error submitting form. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const perks = [
    { title: "Growth Opportunities", icon: "bi bi-bar-chart-line" },
    { title: "Innovative Culture", icon: "bi bi-journal-richtext" },
    { title: "Paid Time Off", icon: "bi bi-calendar-check" },
    { title: "Performance Bonuses", icon: "bi bi-graph-up-arrow" },
    { title: "Team Retreats", icon: "bi bi-people" },
    { title: "Modern Workspace", icon: "bi bi-display" },
  ];

  const openings = [
    {
      title: "Fullstack Developer",
      location: "Delhi, India",
      description:
        "Develop scalable web applications using React and Node.js. Work closely with UI/UX designers and integrate APIs efficiently.",
    },
    {
      title: "Business Development",
      location: "Delhi, India",
      description:
        "Identify and engage potential clients, craft effective outreach strategies, and drive lead generation for digital marketing services.",
    },
    {
      title: "Marketing Intern",
      location: "Delhi, India",
      description:
        "Support campaign planning, content creation, and social media execution while learning hands-on digital marketing tools and strategies.",
    },
    {
      title: "Graphic Designer",
      location: "Delhi, India",
      description:
        "Design engaging visuals for digital platforms, including ads, social media creatives, website assets, and branding materials.",
    },
    {
      title: "Social Media Intern",
      location: "Delhi, India",
      description:
        "Assist in content creation, manage posting schedules, and monitor engagement across platforms like Instagram, Facebook, and LinkedIn.",
    },
  ];

  return (
    <div className="career-wrapper text-dark">
      <section className="career-section text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold text-white" data-aos="fade-up">
            Join Our Mission
          </h1>
          <p className="lead mt-3 mb-4" data-aos="fade-up" data-aos-delay="200">
            Work with passionate people. Build impactful solutions.
          </p>
          <a
            href="#openings"
            className="btn btn-light px-4 py-2 rounded-pill fw-semibold shadow-sm"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            View Open Positions
          </a>
        </div>
      </section>

      <section className="bg-light py-5 border-top ">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Perks & Benefits</h2>
          <div className="row g-4">
            {perks.map((perk, i) => (
              <div
                key={i}
                className="col-md-4"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="card-glass text-center p-4 rounded-4 h-100">
                  <i className={`${perk.icon} fs-1 text-primary`}></i>
                  <h6 className="mt-3 fw-semibold">{perk.title}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="openings" className="container py-5">
        <h2 className="text-center fw-bold mb-5">Open Positions</h2>
        <div className="accordion" id="jobAccordion">
          {openings.map((job, index) => (
            <div className="accordion-item mb-3" key={index} data-aos="fade-up">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed fw-semibold"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                >
                  {job.title}{" "}
                  <span className="ms-auto text-muted fs-6">
                    {job.location}
                  </span>
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                data-bs-parent="#jobAccordion"
              >
                <div className="accordion-body">
                  <p>{job.description}</p>
                  <button
                    className="btn btn-outline-primary btn-sm rounded-pill px-4 mt-2"
                    onClick={() => {
                      setSelectedPosition(job.title);
                      document
                        .getElementById("submit-application")
                        .scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* form */}

      <section className="bg-light py-5 " id="submit-application">
        <div className="container">
          <h2 className="text-center fw-bold mb-3" data-aos="fade-up">
            Apply for a Role at Promozione Branding
          </h2>
          <p className="text-capitalize text-center fw-bold text-primary ">shape your future with us</p>

          <p
            className="text-center text-muted mb-4 col-8 mx-auto"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Upload your resume and details through the form below. Our team will
            get in touch if your profile is shortlisted.
          </p>

          {/* Replace the link below with your own Google Form share link */}
          <div className="text-center" data-aos="zoom-in" data-aos-delay="400">
            <a
              href="https://forms.gle/vf99nXFzPjHegZmv8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary px-4 py-2 rounded-pill"
            >
              Submit Your Application
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
