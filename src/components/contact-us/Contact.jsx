import React, {  useState } from "react";
import underline from "../../assets/contact/underline-effect.webp";
import "./Contact.css";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

import axios from "axios";


export default function ContactSection() {

  const [loading, setLoading] = useState(false);








const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  company: "",
  website: "",
  message: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};












const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.phone || !formData.email) {
    toast.error("Please fill all required fields.");
    return;
  }

  try {
    setLoading(true);

    const payload = {
      platform: "Promozione Branding Website contact form",
      platformEmail: "info@promozionebranding.com",

      name: formData.name,
      phone: formData.phone,
      email: formData.email,

      place: formData.company || "N/A",

      product: "Digital Marketing Proposal",

      message: `

Company : ${formData.company}

Website : ${formData.website || "N/A"}

Message :

${formData.message}

      `,
    };

    const { data } = await axios.post(
      "https://brandbnalo.com/api/form/add",
      payload
    );

    if (data.success) {
      toast.success("Proposal submitted successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        website: "",
        message: "",
      });
    } else {
      toast.error("Submission Failed");
    }
  } catch (err) {
    console.log(err);
    toast.error("Server Error");
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      <Helmet>
        <title>
          Contact Promozione Branding | Digital Marketing Experts Ready to Help
        </title>
        <meta
          name="description"
          content="Get in touch with Promozione Branding for expert digital marketing support. Quick response guaranteed. Connect via form, email, phone, or social media today."
        />
      </Helmet>

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

               <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-12">
                      <label className="form-label">First and Last Name *</label>
                    <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  className="form-control"
  required
/>
                    </div>

                    <div className="col-md-12">
                      <label className="form-label">Work Email Address *</label>
                   <input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
  className="form-control"
  required
/>
                    </div>

                        <div className="col-md-12">
                      <label className="form-label">Phone Number *</label>
                   <input
  type="tel"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  maxLength={10}
  pattern="[0-9]{10}"
  onChange={handleChange}
  className="form-control"
  required
/>
                    </div>


                    <div className="col-md-12">
                      <label className="form-label">Company *</label>
                    <input
  type="text"
  name="company"
  value={formData.company}
  onChange={handleChange}
  className="form-control"
  required
/>
                    </div>

                
                    <div className="col-md-12">
                      <label className="form-label">Website Link</label>
                    <input
  type="text"
  name="website"
  value={formData.website}
  onChange={handleChange}
  className="form-control"
/>
                    </div>

                    <div className="col-12">
                      <label className="form-label">Comments or Questions</label>
                    <textarea
  rows="4"
  name="message"
  value={formData.message}
  onChange={handleChange}
  className="form-control"
/>
                    </div>

                    <div className="col-12">
                  <button
  type="submit"
  disabled={loading}
  className="btn btn-primary py-2 w-100 fw-bold"
>
  {loading ? "Submitting..." : "Get My Free Proposal"}
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
                <p>
                  Just <strong>fill in the form</strong>, and let our experts
                  handle the rest.
                </p>
                <ul className="list-unstyled mt-4">
                  <li className="mb-4 d-flex align-items-start">
                    <span className="me-2 text-success fs-4">✅</span>
                    <div>
                      <strong>Get to know your business</strong>
                      <br />
                      From our first conversation, we begin researching your
                      business, competitors, and industry.
                    </div>
                  </li>
                  <li className="mb-4 d-flex align-items-start">
                    <span className="me-2 text-success fs-4">✅</span>
                    <div>
                      <strong>Put together your flight plan</strong>
                      <br />
                      Based on research, your strategist will compile tailored
                      recommendations.
                    </div>
                  </li>
                  <li className="d-flex align-items-start">
                    <span className="me-2 text-success fs-4">✅</span>
                    <div>
                      <strong>Prepare for takeoff</strong>
                      <br />
                      Your custom plan includes pricing, timelines, and growth
                      strategy.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Offices Section */}
      <section className="col-md-12   py-5 bg-light office-locations">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-dark">📍 Our Office Locations</h2>
            <p className="text-muted">
              Visit us at any of our branches for a personalized consultation.
            </p>
          </div>
          <div className="row g-4">

                
            {/* delhi office */}
            <div className="col-md-6 mx-auto">
              <div className="address-card p-4 bg-white shadow-sm rounded-4 h-100 border-start border-4 border-primary">
                <h5 className="fw-bold text-primary mb-3">
                  <i className="bi bi-geo-alt-fill me-2"></i> Registered Office
                </h5>
                <p className="mb-2 text-black">
              UNIT, NO 356 PLOT NO 7 3RD FLR, VARDHMAN PLAZA, SEC3 PRASHANT V,SEVEN SEAS,<br /> DELHI, INDIA, 110085
                </p>
                <p className="mb-1">
                  <i className="bi bi-telephone me-2 text-success"></i>  


                  <a href="tel:+919971700871" className="text-decoration-none text-dark">+91 9971700871</a>
                </p>
                <p className="mb-0">
                  <i className="bi bi-envelope  text-danger"></i>{" "}
                  info@promozionebranding.com
                </p>
              </div>
            </div>

            {/* Gurugram Office */}
            <div className="col-md-6">
              <div className="address-card p-4 bg-white shadow-sm rounded-4 h-100 border-start border-4 border-primary">
                <h5 className="fw-bold text-primary mb-3">
                  <i className="bi bi-geo-alt-fill me-2"></i> Head Office
                </h5>
                <p className="mb-2 text-black">
               605-606, Best Business Park, Netaji Subhash Place, <br /> DELHI, 110034, INDIA
                </p>
                <p className="mb-1">
                  <i className="bi bi-telephone me-2 text-success"></i>
                  
                   <a href="tel:+917303486777" className="text-decoration-none text-dark">+91 7303486777</a>
                </p>
                <p className="mb-0">
                  <i className="bi bi-envelope  text-danger"></i>{" "}
                  info@promozionebranding.com
                </p>
              </div>
            </div>

            {/* Noida Office */}
            {/* <div className="col-md-4">
              <div className="address-card p-4 bg-white shadow-sm rounded-4 h-100 border-start border-4 border-primary">
                <h5 className="fw-bold text-primary mb-3">
                  <i className="bi bi-geo-alt-fill me-2"></i> Noida Office
                </h5>
                <p className="mb-2 text-muted">
                  Tower C, Bhutani Alphatum
                  <br />
                  Sector 90, Noida (U.P.)
                </p>
                <p className="mb-1">
                  <i className="bi bi-telephone me-2 text-success"></i>
                   <a href="tel:011 42603232" className="text-decoration-none text-dark">011 42603232</a>
                  
                </p>
                <p className="mb-0">
                  <i className="bi bi-envelope  text-danger"></i>{" "}
                  info@promozionebranding.com
                </p>
              </div>
            </div> */}
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
