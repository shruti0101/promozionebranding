

import "./Service.css";               // make sure the path is correct

const Service = ({ title, subtitle, points, note, services, image }) => {

  return (
    <section className="revenue-section bg-white">
      <div className="container-fluid">
        <div className="row align-items-start">
          {/* ─────── Text / Checklist Column ─────── */}
          <div
            className="col-lg-4 mb-4 mt-3"
          
          >
            <h1 className="fw-bold mb-3 pt-4 text-center text-lg-start">
              {title}
            </h1>
            <h5 className="text-primary mb-3 text-center text-lg-start">
              {subtitle}
            </h5>

            <ul className="list-unstyled px-3">
              {points.map((point, index) => (
                <li className="d-flex align-items-start mb-2" key={index}>
                  <span className="check-icon me-2 mt-1">
                    <i className="bi bi-check-circle-fill"></i>
                  </span>
                  <span className="text-muted">{point}</span>
                </li>
              ))}
            </ul>

            {note && (
              <p className="text-muted 
              small fst-italic px-3 mt-3">{note}</p>
            )}

            {/* Image */}
            <img
              src={image}
              alt="service"
              className="service-img mt-4"
           
            />
          </div>

          {/* ─────── Services Column ─────── */}
          <div className="col-lg-8 pt-md-5" >
            <div className="service-stack">
              {services.map((service, index) => (
                <div key={index} className="service-item d-flex mb-4">
                  <div className="service-icon text-primary fs-3">
                    <i className={`bi ${service.icon}`}></i>
                  </div>
                  <div className="service-text">
                    <h5 className="fw-semibold">{service.title}</h5>
                    <p className="text-muted mb-0">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
