import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./Popup.css";

export default function Popup() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://sheetdb.io/api/v1/0sl1jasb6zeal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: formData }),
      });
      toast.success("Submitted successfully! 🎉");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setShowPopup(false), 3000);
    } catch (error) {
      toast.error("Submission failed. Please try again.");
    }
  };

  if (!showPopup) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-box shadow">
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          pauseOnHover
          draggable
          toastStyle={{ zIndex: 2 }}
          containerStyle={{
            position: "absolute",
            top: "10px",
            left: 0,
            right: 0,
            margin: "0 auto",
            width: "100%",
            maxWidth: "400px",
          }}
        />
        <button className="close-btn" onClick={() => setShowPopup(false)}>×</button>
        <h2 className="text-center mb-3">Get Your Free Proposal</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            required
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            required
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Contact Number"
            value={formData.phone}
            required
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}
