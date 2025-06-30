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



{/* Company Offices Section */}
<section className="py-5 bg-light office-locations">
  <div className="container">
    <div className="text-center mb-5">
      <h2 className="fw-bold text-dark">📍 Our Office Locations</h2>
      <p className="text-muted">Visit us at any of our branches for a personalized consultation.</p>
    </div>
    <div className="row g-4">
      {/* Gurugram Office */}
      <div className="col-md-4">
        <div className="address-card p-4 bg-white shadow-sm rounded-4 h-100 border-start border-4 border-primary">
          <h5 className="fw-bold text-primary mb-3">
            <i className="bi bi-geo-alt-fill me-2"></i> Gurugram Office
          </h5>
          <p className="mb-2 text-muted">Huda Market, Sector-56<br />Gurugram, Haryana - 122002</p>
          <p className="mb-1"><i className="bi bi-telephone me-2 text-success"></i> +011 42603232</p>
          <p className="mb-0"><i className="bi bi-envelope me-2 text-danger"></i> info@promozionebranding.com</p>
        </div>
      </div>

      {/* Noida Office */}
      <div className="col-md-4">
        <div className="address-card p-4 bg-white shadow-sm rounded-4 h-100 border-start border-4 border-primary">
          <h5 className="fw-bold text-primary mb-3">
            <i className="bi bi-geo-alt-fill me-2"></i> Noida Office
          </h5>
          <p className="mb-2 text-muted">Tower C, Bhutani Alphatum<br />Sector 90, Noida (U.P.)</p>
          <p className="mb-1"><i className="bi bi-telephone me-2 text-success"></i> +011 42603232</p>
          <p className="mb-0"><i className="bi bi-envelope me-2 text-danger"></i> info@promozionebranding.com</p>
        </div>
      </div>


{/* delhi office */}
         <div className="col-md-4">
        <div className="address-card p-4 bg-white shadow-sm rounded-4 h-100 border-start border-4 border-primary">
          <h5 className="fw-bold text-primary mb-3">
            <i className="bi bi-geo-alt-fill me-2"></i> Delhi Office
          </h5>
          <p className="mb-2 text-muted">Vardhman Plaza, <br />Sector-3, Rohini, New Delhi</p>
          <p className="mb-1"><i className="bi bi-telephone me-2 text-success"></i> +011 42603232</p>
          <p className="mb-0"><i className="bi bi-envelope me-2 text-danger"></i> info@promozionebranding.com</p>
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
        title="Promozione Branding Pvt. Ltd. – Delhi NCR"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.68863877533!2d77.1115529090143!3d28.698959175526813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa31cc1ea81ac353%3A0x219b4593ea52037f!2sPromozione%20Branding%20Pvt.%20Ltd%20%7C%20Best%20Digital%20Marketing%20Agency%20In%20Delhi%20NCR%20%7C%20Web%20Development%2CSEO%2C%20PPC%2C%20SMM%20Agency!5e0!3m2!1sen!2sin!4v1750832801634!5m2!1sen!2sin"
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
