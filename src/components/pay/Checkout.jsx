import React from 'react';
import checkout from "../../assets/bg/checkout.jpg";

const Checkout = () => {
  return (
    <div>

      {/* Background Section */}
      <section
        style={{
          backgroundImage: `url(${checkout})`,
          minHeight: "83vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "50px 0"
        }}
        className="container-fluid"
      >
        
      </section>

      {/* Form Section */}
      <div className="container py-5">
        <form
          className="p-4 shadow-lg rounded"
          style={{ background: "#ffffff", maxWidth: "800px", margin: "auto" }}
        >

          <h3 className="mb-4 fw-bold text-center">Billing Details</h3>

          {/* First Row */}
          <div className="row mb-4">
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label className="fw-semibold">First Name</label>
                <input type="text" className="form-control form-control-lg" required />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-3">
                <label className="fw-semibold">Phone Number</label>
                <input
                  type="tel"
                  minLength={10}
                  maxLength={10}
                  pattern="[0-9]{10}"
                  className="form-control form-control-lg"
                  required
                />
              </div>
            </div>
          </div>

          {/* Payment Item Checkboxes */}
          <h4 className="fw-bold mb-3">Select Payment Items</h4>

          <div className="row mb-4">

            {/* Item 1 */}
            <div className="col-md-4">
              <div
                className="p-3 rounded border shadow-sm mb-3"
                style={{ cursor: "pointer", transition: "0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="visibility" />
                  <label className="form-check-label fw-semibold" htmlFor="visibility">
                    Visibility Tool Kit
                  </label>
                </div>
                <p className="mt-2 fw-bold text-primary">₹160,000</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="col-md-4">
              <div
                className="p-3 rounded border shadow-sm mb-3"
                style={{ cursor: "pointer", transition: "0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="brandBoost" />
                  <label className="form-check-label fw-semibold" htmlFor="brandBoost">
                    Brand Boost
                  </label>
                </div>
                <p className="mt-2 fw-bold text-primary">₹165,000</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="col-md-4">
              <div
                className="p-3 rounded border shadow-sm mb-3"
                style={{ cursor: "pointer", transition: "0.3s" }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="webAwareness" />
                  <label className="form-check-label fw-semibold" htmlFor="webAwareness">
                    Web Awareness
                  </label>
                </div>
                <p className="mt-2 fw-bold text-primary">₹79,500</p>
              </div>
            </div>

          </div>

          {/* Service Name */}
          <div className="form-group mb-3">
            <label className="fw-semibold">Enter Service Name</label>
            <input type="text" className="form-control form-control-lg" placeholder="Service Name" required />
          </div>

          {/* Payment Amount */}
          <div className="form-group mb-3">
            <label className="fw-semibold">Payment Amount</label>
            <input type="number" className="form-control form-control-lg" placeholder="Enter Amount" required />
          </div>

          {/* Button */}
          <button className="btn btn-primary btn-lg w-100 mt-3 fw-bold">
            Proceed to Pay
          </button>
        </form>
      </div>

    </div>
  );
};

export default Checkout;
