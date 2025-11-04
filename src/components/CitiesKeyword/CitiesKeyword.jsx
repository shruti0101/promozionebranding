import { serviceLocations } from "../../citydata/Citydata";
import { Link } from "react-router-dom";
import "./CitiesKeyword.css";

const CitiesKeyword = () => {
  return (
    <div className="container-fluid px-4 py-5 bg-light">
      <h2 className="fw-bold display-6 mb-4 text-center">
        Our <span className="text-primary">Services</span>
      </h2>

      <div className="row g-3 justify-content-center">
        {serviceLocations.map(({ link, label, id }) => (
          <div key={id} className="col-6 col-sm-4 col-md-3 ">
            <Link to={link} className="text-decoration-none">
              <div className="city-box text-center">
                <span className="city-label">{label}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CitiesKeyword;
