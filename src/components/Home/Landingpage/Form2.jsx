import '../../../styles/Form2.css';
import ctaImage from '../../../assets/formimg.webp'; 

const Form2 = () => {
  return (
    <section className="cta-section py-5">
      <div className="container">
        <div className="row align-items-center gx-5 gy-4">
          
          <div className="col-lg-6 text-white text-center text-lg-start">
            <h2 className="fw-bold mb-3">
              Get your Brands Ranked<br />
              Starting at <span className="highlight-price">xyz</span> per month.
            </h2>
            <button className="btn btn-success px-4 py-2 rounded-pill fw-semibold mt-2">
              Request a Free Proposal
            </button>
          </div>

          <div className="col-lg-6 text-center">
            <img 
              src={ctaImage} 
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
