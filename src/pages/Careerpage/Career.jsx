import React, { useRef, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Career.css"; // Custom CSS for background & extras

const Career = () => {
  const [showToast, setShowToast] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState("");
  const formRef = useRef();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    try {
      const response = await fetch("https://formsubmit.co/shrutiguptabhu@gmail.com", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setShowToast(true);
        formRef.current.reset();
        setSelectedPosition("");
        setTimeout(() => setShowToast(false), 3000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error submitting form. Please try again.");
    }
  };

  const benefits = [
    { title: "Growth Opportunities", icon: "bi bi-bar-chart-line" },
    { title: "Flexible Hours", icon: "bi bi-clock-history" },
    { title: "Innovative Culture", icon: "bi bi-lightbulb" },
    { title: "Remote Friendly", icon: "bi bi-house-door" },
  ];

  const perks = [
    { title: "Health Insurance", icon: "bi bi-heart-pulse" },
    { title: "Learning Budget", icon: "bi bi-journal-richtext" },
    { title: "Paid Time Off", icon: "bi bi-calendar-check" },
    { title: "Performance Bonuses", icon: "bi bi-graph-up-arrow" },
    { title: "Team Retreats", icon: "bi bi-people" },
    { title: "Modern Workspace", icon: "bi bi-display" },
  ];

  const openings = [
    {
      title: "Frontend Developer",
      location: "Remote",
      description: "Build intuitive UIs using React. Collaborate with designers and backend developers.",
    },
    {
      title: "Digital Marketing Specialist",
      location: "Bangalore, India",
      description: "Plan and execute digital campaigns. Optimize SEO and social media engagement.",
    },
    {
      title: "UI/UX Designer",
      location: "Hybrid - Pune",
      description: "Create visually stunning and user-friendly designs for web and mobile platforms.",
    },
  ];

  return (
    <div className="career-wrapper text-dark">

      {/* Hero */}
      <section className="career-section text-white text-center py-5">
        <div className="container">
          <h1 className="display-4 fw-bold" data-aos="fade-up">Join Our Mission</h1>
          <p className="lead mt-3 mb-4" data-aos="fade-up" data-aos-delay="200">
            Work with passionate people. Build impactful solutions.
          </p>
          <a href="#openings" className="btn btn-light px-4 py-2 rounded-pill fw-semibold shadow-sm" data-aos="zoom-in" data-aos-delay="400">
            View Open Positions
          </a>
        </div>
      </section>

      {/* Benefits */}
      <section className="container-fluid py-5 bg-light">
        <h2 className="text-center fw-bold mb-5">Why Work With Us?</h2>
        <div className="row text-center g-4">
          {benefits.map((item, i) => (
            <div key={i} className="col-md-3" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="card-glass p-4 rounded-4 h-100">
                <i className={`${item.icon} fs-1 text-primary mb-3`}></i>
                <h6 className="fw-semibold">{item.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Perks */}
      <section className="bg-light py-5 border-top ">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Perks & Benefits</h2>
          <div className="row g-4">
            {perks.map((perk, i) => (
              <div key={i} className="col-md-4" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="card-glass text-center p-4 rounded-4 h-100">
                  <i className={`${perk.icon} fs-1 text-primary`}></i>
                  <h6 className="mt-3 fw-semibold">{perk.title}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="container py-5">
        <h2 className="text-center fw-bold mb-5">Open Positions</h2>
        <div className="accordion" id="jobAccordion">
          {openings.map((job, index) => (
            <div className="accordion-item mb-3" key={index} data-aos="fade-up">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed fw-semibold" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`}>
                  {job.title} <span className="ms-auto text-muted fs-6">{job.location}</span>
                </button>
              </h2>
              <div id={`collapse${index}`} className="accordion-collapse collapse" data-bs-parent="#jobAccordion">
                <div className="accordion-body">
                  <p>{job.description}</p>
                  <button className="btn btn-outline-primary btn-sm rounded-pill px-4 mt-2" onClick={() => {
                    setSelectedPosition(job.title);
                    document.getElementById("career-form").scrollIntoView({ behavior: "smooth" });
                  }}>
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <section className="py-5 gradient-form" id="career-form">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Didn’t Find Your Role?</h2>
          <p className="text-center text-muted mb-4">We’re always looking for great talent. Drop us a message!</p>
          <div className="p-4 bg-white rounded-4 shadow-lg" style={{ maxWidth: "800px", margin: "0 auto" }}>
            <form ref={formRef} onSubmit={handleSubmit} className="row g-3" data-aos="fade-up">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="Career Page Application" />
              <div className="col-md-6"><input type="text" className="form-control" placeholder="Your Name" name="name" required /></div>
              <div className="col-md-6"><input type="email" className="form-control" placeholder="Your Email" name="email" required /></div>
              <div className="col-md-6"><input type="tel" className="form-control" placeholder="Phone Number" name="phone" required /></div>
              <div className="col-md-6"><input type="text" className="form-control" placeholder="Position You're Applying For" name="position" value={selectedPosition} onChange={(e) => setSelectedPosition(e.target.value)} required /></div>
              <div className="col-12"><textarea className="form-control" rows="4" placeholder="Why should we hire you?" name="message" required /></div>
              <div className="col-12"><label className="form-label">Upload Resume (PDF)</label><input type="file" className="form-control" name="attachment" accept=".pdf" required /></div>
              <div className="col-12 text-center mt-3"><button type="submit" className="btn btn-primary px-4 py-2 rounded-pill">Submit Application</button></div>
            </form>
          </div>
        </div>

        {showToast && (
          <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 9999 }}>
            <div className="toast show text-white bg-success border-0">
              <div className="d-flex">
                <div className="toast-body">🎉 Application submitted successfully!</div>
                <button type="button" className="btn-close btn-close-white me-2 m-auto" onClick={() => setShowToast(false)}></button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Career;
