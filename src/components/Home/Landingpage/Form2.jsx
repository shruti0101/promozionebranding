import React from 'react';
import '../../../styles/Form2.css';
import { Link } from 'react-router-dom';

const Form2 = ({ heading, price, buttonText, image }) => {


  return (
    <section className="cta-section py-5">
      <div className="container">
        <div className="row align-items-center gx-5 gy-4">
          <div className="col-lg-6 text-white text-center text-lg-start">
            <h2 className="fw-bold mb-3">
              {heading}<br />
            <span className="highlight-price">{price}</span> 
            </h2>
           <Link to="/Contact"><button className="btn btn-success px-4 py-2 rounded-pill fw-semibold mt-2">
              {buttonText}
            </button>
            </Link>
          </div>
          <div className="col-lg-6 text-center">
            <img 
              src={image} 
              alt="Business" 
              className="img-fluid rounded cta-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form2;
