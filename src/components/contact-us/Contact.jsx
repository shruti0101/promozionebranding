import React, { useRef } from "react";
import underline from "../../assets/contact/underline-effect.webp";
import "./Contact.css";
import { toast } from "react-toastify";

export default function ContactSection() {
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = formRef.current;
    const formData = new FormData(form);
    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    try {
      const response = await fetch("https://sheetdb.io/api/v1/egouqlsjl6c1a", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: jsonData }),
      });

      if (response.ok) {
        toast.success("Proposal submitted successfully!");
        form.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Failed to connect. Please check your internet.");
    }
  };

  return (
    <>
      <section className="py-5 custom-bg-blue">
        <div className="text-center px-3 position-relative mb-5">
          <h1 className="fw-bold fs-1 text-black">
            Discover how we can help your{" "}
            <span className="text-primary position-relative d-inline-block">
              business grow
              <img
                src={underline}
                alt="underline"
                className="position-absolute start-50 translate-middle-x"
                style={{
                  bottom: "-10px",
                  left: "50%",
                  transform: "translateX(-45%)",
                  width: "180px",
                  maxWidth: "100%",
                }}
              />
            </span>
          </h1>
        </div>

        <div className="container">
          <div className="row g-4">
            {/* Form Section */}
            <div className="col-lg-6">
              <div className="bg-white rounded-4 shadow p-4 p-md-5 h-100">
                <h2 className="fw-bold mb-4">Request a FREE Proposal Now!</h2>
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-12">
                      <label className="form-label">First and Last Name *</label>
                      <input type="text" name="Name" className="form-control" required />
                    </div>
                    <div className="col-md-12">
                      <label className="form-label">Work Email Address *</label>
                      <input type="email" name="Email" className="form-control" required />
                    </div>
                    <div className="col-md-12">
                      <label className="form-label">Company *</label>
                      <input type="text" name="Company" className="form-control" required />
                    </div>
                    <div className="col-md-12">
                      <label className="form-label">Phone Number *</label>
                      <input type="tel" name="Phone" className="form-control" required />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Comments or Questions</label>
                      <textarea name="Message" rows="4" className="form-control" />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary py-2 w-100 fw-bold">
                        Get My Free Proposal
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Info Section */}
            <div className="col-lg-6">
              <div className="bg-dark text-white p-4 p-md-5 rounded-4 shadow h-100 d-flex flex-column justify-content-center">
                <h1 className="fw-bold mb-3" style={{ color: "#84B9F5" }}>
                  Want to drive more revenue?
                </h1>
                <p>Just <strong>fill in the form</strong>, and let our experts handle the rest.</p>
                <ul className="list-unstyled mt-4">
                  <li className="mb-4 d-flex align-items-start">
                    <span className="me-2 text-success fs-4">✅</span>
                    <div>
                      <strong>Get to know your business</strong><br />
                      From our first conversation, we begin researching your business, competitors, and industry.
                      We’ll audit your site to craft a fully customized proposal.
                    </div>
                  </li>
                  <li className="mb-4 d-flex align-items-start">
                    <span className="me-2 text-success fs-4">✅</span>
                    <div>
                      <strong>Put together your flight plan</strong><br />
                      Based on research, your strategist will compile personalized recommendations
                      for how your business can drive more revenue online.
                    </div>
                  </li>
                  <li className="d-flex align-items-start">
                    <span className="me-2 text-success fs-4">✅</span>
                    <div>
                      <strong>Prepare for takeoff</strong><br />
                      Your plan includes pricing, timelines, partnership details, and growth strategies.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="card h-100 shadow rounded-4 p-4 border-0">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary text-white rounded-circle p-3 me-3">
                    <i className="bi bi-geo-alt-fill fs-4"></i>
                  </div>
                  <h5 className="mb-0">Company Address</h5>
                </div>
                <p className="mb-0">
                  Vardhman Plaza, Sector-3,
                  <br />
                  Rohini, New Delhi
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card h-100 shadow rounded-4 p-4 border-0">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-success text-white rounded-circle p-3 me-3">
                    <i className="bi bi-telephone-fill fs-4"></i>
                  </div>
                  <h5 className="mb-0">Contact Details</h5>
                </div>
                <p className="mb-2">
                  📞 <a href="tel:01142603232" className="text-dark">011 42603232</a>
                </p>
                <p className="mb-2">
                  📧 <a href="mailto:info@promozionebranding.com" className="text-black" target="_blank" rel="noreferrer">
                    info@promozionebranding.com
                  </a>
                </p>
                <p className="mb-0">
                  🌐 <a href="http://top10digitalmarketingagency.com" className="text-dark" target="_blank" rel="noreferrer">
                    www.promotionbranding.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="pb-5">
        <div className="container">
          <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow">
            <iframe
              title="Promotion Branding Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.240745375424!2d77.04630667534233!3d28.622655275667386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d189cb5ce7d2f%3A0x7d4d9c0489cce9a4!2sPromotion%20Viral%20Branding!5e0!3m2!1sen!2sin!4v1718615975086!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
