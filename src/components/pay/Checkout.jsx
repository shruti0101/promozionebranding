import React, { useState } from "react";
import checkout from "../../assets/bg/checkout.jpg";

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    phone: "",
    serviceName: "",
    amount: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

const handlePayment = async (e) => {
  e.preventDefault();

  const res = await fetch("http://localhost:5000/api/icici/create-payment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  const data = await res.json();

  if (data.success) {
    window.location.href = data.paymentUrl; // ✅ REAL ICICI Payment Panel
  } else {
    alert(data.message || "Payment initiation failed");
    console.log(data);
  }
};


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
          padding: "50px 0",
        }}
        className="container-fluid"
      ></section>

      {/* Form Section */}
      <div className="container py-5">
        <form
          onSubmit={handlePayment}
          className="p-4 shadow-lg rounded"
          style={{ background: "#ffffff", maxWidth: "800px", margin: "auto" }}
        >
          <h3 className="mb-4 fw-bold text-center">Billing Details</h3>

          <div className="row mb-4">
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label className="fw-semibold">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="form-control form-control-lg"
                  required
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="form-group mb-3">
                <label className="fw-semibold">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  minLength={10}
                  maxLength={10}
                  pattern="[0-9]{10}"
                  className="form-control form-control-lg"
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-group mb-3">
            <label className="fw-semibold">Enter Service Name</label>
            <input
              type="text"
              name="serviceName"
              value={formData.serviceName}
              onChange={handleChange}
              className="form-control form-control-lg"
              placeholder="Service Name"
              required
            />
          </div>

          <div className="form-group mb-3">
            <label className="fw-semibold">Payment Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="form-control form-control-lg"
              placeholder="Enter Amount"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary btn-lg w-100 mt-3 fw-bold">
            Proceed to Pay
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
