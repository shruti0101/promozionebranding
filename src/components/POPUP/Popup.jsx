import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import "./Popup.css";
import gmb from "../../assets/bg/gmb.webp";

const GrowthPopup = () => {
  const [show, setShow] = useState(false);
  const [startCount, setStartCount] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
      setStartCount(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      await fetch("https://formsubmit.co/ajax/info@promozionebranding.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      form.reset();
      setSuccessMessage("Thanks! We'll contact you shortly.");
      setTimeout(() => setSuccessMessage(""), 5000);
    } catch (err) {
      setSuccessMessage("Something went wrong. Please try again.");
      setTimeout(() => setSuccessMessage(""), 5000);
    }
  };

  if (!show) return null;

  return (
    <div className="popup-overlay d-flex justify-content-center align-items-center mt-5">
      <div className="popup-box row w-100 mx-2" style={{ maxWidth: "750px" }}>
        {/* LEFT Section (visible on all screen sizes now) */}
        <div className="col-12 d-none d-md-block col-md-6 left-section text-white p-4 d-flex flex-column justify-content-between">
          <div>
            <h6 className="fw-bold mb-3 text-justify-custom" style={{ fontSize: "1rem" }}>
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
              We have been recognized for our ability to deliver exceptional services in 2024!
            </p>
          </div>
          <div className="d-flex gap-1 justify-content-between text-center mt-3 ">
            <div className="stat-box bg-black text-white flex-fill m-1">
              <div className="fw-bold fs-5">
                <CountUp end={150} duration={4} suffix=" +" start={startCount ? 0 : null} />
              </div>
              <small>Successful Projects</small>
            </div>
            <div className="stat-box bg-success text-white flex-fill m-1">
              <div className="fw-bold fs-5">
                <CountUp end={99} duration={4} suffix=" %" start={startCount ? 0 : null} />
              </div>
              <small>Project Success Score</small>
            </div>
            <div className="stat-box bg-danger text-white flex-fill m-1">
              <div className="fw-bold fs-5">
                <CountUp end={200} duration={4} suffix=" +" start={startCount ? 0 : null} />
              </div>
              <small>Trusted Clients Globally</small>
            </div>
          </div>
        </div>

        {/* RIGHT Section */}
        <div className="col-12  col-md-6 right-section bg-warning p-4 position-relative">
  <button
    className="btn-close position-absolute top-0 end-0 m-3"
    onClick={() => setShow(false)}
  ></button>

  <h3 className="fw-bold text-center text-white mb-1">Let's Grow Together!</h3>
  <p className="text-center fw-semibold text-white mb-3">Request a FREE Call!</p>

  {successMessage && (
    <div className="alert alert-success text-center fw-semibold py-2">
      {successMessage}
    </div>
  )}

  <form onSubmit={handleSubmit}>
    <input type="hidden" name="_captcha" value="false" />
    <input type="hidden" name="_template" value="table" />
    <input type="hidden" name="_subject" value="New Growth Popup Submission" />

    <div className="mb-3">
      <input
        type="text"
        className="form-control input-yellow"
        name="name"
        placeholder="Name"
        required
      />
    </div>

    <div className="mb-3">
      <input
        type="email"
        className="form-control input-yellow"
        name="email"
        placeholder="Email ID"
        required
      />
    </div>

    <div className="mb-3">
      <input
        type="tel"
        className="form-control input-yellow"
        name="phone"
        placeholder="Mobile No."
        minLength={10}
        maxLength={10}
        pattern="[0-9]{10}"
        required
      />
    </div>

    <div className="mb-3">
      <textarea
        rows="3"
        className="form-control input-yellow"
        name="message"
        placeholder="Explain your requirements (minimum 50 characters)"
        required
      ></textarea>
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
