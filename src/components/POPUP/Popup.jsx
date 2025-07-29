// components/GrowthPopup.js
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import "./Popup.css";
import gmb from "../../assets/bg/gmb.webp"

const GrowthPopup = () => {
  const [show, setShow] = useState(false);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
      setStartCount(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="popup-overlay d-flex justify-content-center mt-5 align-items-center">
      <div className="popup-box row w-100 mx-2" style={{ maxWidth: "750px", }}>
        {/* LEFT SIDE */}
        <div className="col-md-6 left-section text-white p-4 d-flex flex-column justify-content-between">
          <div>
            <h6 className="fw-bold mb-3 text-justify-custom">
              Thank you to our amazing clients and dedicated team—these reviews are a reflection of your trust and unwavering dedication!
            </h6>

            
            <img
              src={gmb}
              alt="google review"
              width={250}
              height={200}
              className="img-fluid rounded d-block mx-auto mb-2"

            />
            <p className="text-center small mb-0">
              We have been recognized for our ability to deliver exceptional
              services in 2024!
            </p>
          </div>
          <div className="d-flex gap-2 justify-content-between text-center mt-3">
            <div className="stat-box bg-black text-white">
              <div className="fw-bold fs-5">
                <CountUp end={1000} duration={4} suffix=" +" start={startCount ? 0 : null} />
              </div>
              <small>Successful Projects</small>
            </div>
            <div className="stat-box bg-success text-white">
              <div className="fw-bold fs-5">
                <CountUp end={99} duration={4} suffix=" %" start={startCount ? 0 : null} />
              </div>
              <small>Job Success Score</small>
            </div>
            <div className="stat-box bg-danger text-white">
              <div className="fw-bold fs-5">
                <CountUp end={500} duration={4} suffix=" +" start={startCount ? 0 : null} />
              </div>
              <small>Trusted Clients Globally</small>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-6 right-section bg-warning p-4 position-relative">
          <button
            className="btn-close position-absolute top-0 end-0 m-3"
            onClick={() => setShow(false)}
          ></button>

          <h3 className="fw-bold text-center text-white mb-1">Let's Grow Together!</h3>
          <p className="text-center fw-semibold text-white mb-4">Request a FREE Call!</p>

          <form >
            <div className="mb-3">
              <input
                type="text"
                className="form-control input-yellow"
                placeholder="Name"
              />
            </div>
            <div className="d-flex gap-2 mb-3">
              <input
                type="email"
                className="form-control input-yellow"
                placeholder="Email ID"
              />
              <input
                type="tel"
                className="form-control input-yellow"
                placeholder="Mobile No."
              />
            </div>
            <div className="mb-3">
              <textarea
                rows="3"
                className="form-control input-yellow"
                placeholder="Explain your requirements (minimum 50 characters)"
              ></textarea>
            </div>
            <div className="d-flex align-items-center gap-2 mb-3">
              <input type="checkbox" className="form-check-input" id="robotCheck" />
              <label htmlFor="robotCheck" className="form-check-label text-white small">I'm not a robot</label>
              <div className="ms-auto">
                <div className="recaptcha-placeholder">reCAPTCHA</div>
              </div>
            </div>
            <button type="submit" className="btn btn-success w-100 fw-semibold rounded-pill">
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GrowthPopup;
