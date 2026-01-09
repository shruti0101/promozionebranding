const Tc = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        style={{ backgroundColor: "#153B4E", height: "60vh" }}
        className="d-flex justify-content-center align-items-center text-center"
      >
        <div className="container">
          <h1 className="text-white display-4 display-md-2 text-center">
            Refund & Return Policy
          </h1>
          <p className="text-white mt-3 fs-5">
            Understand the rules and policies that govern your use of our
            services.
          </p>
        </div>
      </section>

      <section className="bg-light">
        <div className="container">
          <div className="py-5">

            {/* WEBSITE DISCLAIMER */}
            <p className="fw-bold fs-4">WEBSITE DISCLAIMER</p>
            <p className="text-muted" style={{ fontSize: "1.1rem" }}>
              The information provided by Promozione Branding Private Limited
              (“Company”, “we”, “our”, “us”) on promozionebranding.com (the
              “Site”) is for general informational purposes only. All information
              on the Site is provided in good faith; however, we make no
              representation or warranty of any kind regarding the accuracy,
              adequacy, validity, reliability, availability, or completeness of
              any information on the Site.
            </p>

            <p>
              UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY
              LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE
              SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE
              OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS
              SOLELY AT YOUR OWN RISK.
            </p>

            {/* EXTERNAL LINKS DISCLAIMER */}
            <p className="fw-bold fs-4">EXTERNAL LINKS DISCLAIMER</p>
            <p className="text-muted" style={{ fontSize: "1.1rem" }}>
              The Site may contain links to other websites or content belonging
              to third parties. Such external links are not investigated,
              monitored, or checked for accuracy, adequacy, validity, or
              reliability by us.
            </p>

            <p>
              WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY
              FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY
              THIRD-PARTY WEBSITES LINKED THROUGH THE SITE.
            </p>

            {/* AFFILIATES DISCLAIMER */}
            <p className="fw-bold fs-4">AFFILIATES DISCLAIMER</p>
            <p className="text-muted" style={{ fontSize: "1.1rem" }}>
              The Site may contain affiliate links, and we may receive a
              commission for purchases made through such links.
            </p>

            {/* TESTIMONIAL DISCLAIMER */}
            <p className="fw-bold fs-4">TESTIMONIALS DISCLAIMER</p>
            <p className="text-muted" style={{ fontSize: "1.1rem" }}>
              Testimonials reflect real-life user experiences but may not be
              representative of all users. Individual results may vary.
            </p>

            <p className="fw-bold fs-4">YOUR INDIVIDUAL RESULTS MAY VARY.</p>
            <p className="text-muted" style={{ fontSize: "1.1rem" }}>
              Some testimonials may have been edited for clarity or shortened.
            </p>

            {/* ERRORS & OMISSIONS */}
            <p className="fw-bold fs-4">ERRORS AND OMISSIONS DISCLAIMER</p>
            <p className="text-muted" style={{ fontSize: "1.1rem" }}>
              All information is provided “as is” without warranty of
              completeness, accuracy, or results. We are not liable for any actions
              taken based on the content.
            </p>

            {/* GUEST CONTRIBUTORS */}
            <p className="fw-bold fs-4">GUEST CONTRIBUTORS DISCLAIMER</p>
            <p className="text-muted" style={{ fontSize: "1.1rem" }}>
              Guest contributor content reflects their personal views and not
              those of Promozione Branding Private Limited.
            </p>

            {/* LOGOS & TRADEMARKS */}
            <p className="fw-bold fs-4">LOGOS AND TRADEMARKS DISCLAIMER</p>
            <p className="text-muted" style={{ fontSize: "1.1rem" }}>
              Third-party trademarks appearing on the Site belong to their
              respective owners and do not imply endorsement.
            </p>

            {/* CONTACT */}
            <p className="fw-bold fs-4">CONTACT US</p>
            <p className="text-muted" style={{ fontSize: "1.1rem" }}>
              For any inquiries or technical support, contact us at:
              <span className="text-primary fw-semibold">
                {" "}info@promozionebranding.com
              </span>
            </p>

            {/* ================= REFUND & RETURN POLICY ================= */}
            <hr className="my-5" />
            <p className="fw-bold fs-4">REFUND & RETURN POLICY</p>

            <p className="text-muted" style={{ fontSize: "1.1rem" }}>
              Promozione Branding Private Limited provides digital and
              service-based solutions. As a result, no physical goods are sold,
              and returns are not applicable.
            </p>

            <p className="fw-semibold fs-5">1. No Return Policy</p>
            <p className="text-muted" style={{ fontSize: "1.1rem" }}>
              Since all services are digital or customized, no returns or
              exchanges are permitted.
            </p>

            <p className="fw-semibold fs-5">2. Refund Eligibility</p>
            <p className="text-muted" style={{ fontSize: "1.1rem" }}>
              Refunds may be approved under the following conditions:
            </p>

            <ul className="text-muted" style={{ fontSize: "1.1rem" }}>
              <li>Duplicate or accidental payment</li>
              <li>Service not initiated within 15 business days</li>
              <li>Service cannot be delivered due to internal limitations</li>
            </ul>

            <p className="fw-semibold fs-5">3. Non-Refundable Cases</p>
            <ul className="text-muted" style={{ fontSize: "1.1rem" }}>
              <li>Work has already started</li>
              <li>Delays caused by client in providing content/approvals</li>
              <li>Change of mind after purchase</li>
              <li>Completed or partially delivered services</li>
            </ul>

            <p className="fw-semibold fs-5">4. Cancellation Policy</p>
            <p className="text-muted" style={{ fontSize: "1.1rem" }}>
              Cancellation requests must be emailed. Approval depends on work
              progress.
            </p>

            <p className="fw-semibold fs-5">5. Refund Processing Time</p>
            <p className="text-muted" style={{ fontSize: "1.1rem" }}>
              Approved refunds will be processed within 7–14 working days.
            </p>

            <p className="fw-semibold fs-5">6. Contact for Refunds</p>
            <p className="text-muted" style={{ fontSize: "1.1rem" }}>
              For refund-related queries:
              <span className="text-primary fw-semibold">
                {" "}info@promozionebranding.com
              </span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Tc;
