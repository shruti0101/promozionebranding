import underline from "../../assets/contact/underline-effect.webp";
import "./Contact.css"
export default function ContactSection() {
  return (
    <>
      <section className="py-3 custom-bg-blue">
        {/* HEADING WITH UNDERLINE */}
        <div className="text-center pt-5 px-3 position-relative mb-5">
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
          <div className="row align-items-stretch">
            {/* LEFT FORM */}
            <div className="col-lg-6 mb-5">
              <h2 className="fw-bold mb-4">Request a FREE Proposal Now!</h2>

              <form
                action="https://formsubmit.co/your@email.com" // Replace with your actual email
                method="POST"
                encType="multipart/form-data"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_next"
                  value="https://yourdomain.com/thank-you"
                />

                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">First and Last Name *</label>
                    <input
                      type="text"
                      name="Name"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Work Email Address *</label>
                    <input
                      type="email"
                      name="Email"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <label className="form-label">Website *</label>
                    <input
                      type="url"
                      name="Website"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="form-label">Company *</label>
                    <input
                      type="text"
                      name="Company"
                      className="form-control"
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      name="Phone"
                      className="form-control"
                      placeholder="(000) 000-0000"
                      required
                    />
                  </div>
                

                  <div className="col-12">
                    <label className="form-label">Comments or Questions</label>
                    <textarea
                      name="Message"
                      rows="4"
                      className="form-control"
                    />
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-primary py-2 w-100 fw-bold"
                    >
                      Get My Free Proposal
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {/* RIGHT INFO SECTION */}
            <div className="col-lg-6 ">
              <div className="bg-dark text-white p-5 rounded-4 shadow h-100 d-flex flex-column justify-content-center">
                <h1 className="fw-bold mb-3" style={{color:"#84B9F5"}}>Want to drive more revenue?</h1>
                <p>
                  Just <strong>fill in the form</strong>, and let our experts
                  handle the rest. Here’s what will happen next:
                </p>

                <ul className="list-unstyled mt-4">
                  <li className="mb-4 d-flex align-items-start">
                    <span className="me-2 text-success">✅</span>
                    <div>
                      <strong>Get to know your business</strong>
                      <br />
                      From our first conversation, we begin researching your
                      business, competitors, and industry. We’ll audit your site
                      to craft a fully customized proposal.
                    </div>
                  </li>

                  <li className="mb-4 d-flex align-items-start">
                    <span className="me-2 text-success">✅</span>
                    <div>
                      <strong>Put together your flight plan</strong>
                      <br />
                      Based on their research, your strategist will compile
                      personalized recommendations for how your business can
                      drive more revenue online.
                    </div>
                  </li>

                  <li className="d-flex align-items-start">
                    <span className="me-2 text-success">✅</span>
                    <div>
                      <strong>Prepare for takeoff</strong>
                      <br />
                      Your flight plan will include pricing, timelines, and a
                      detailed view of what a partnership with us would look
                      like, and how we’ll help your business grow.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
