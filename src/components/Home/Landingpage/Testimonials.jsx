import React, { useEffect } from 'react';
import "../../../styles/Testimonials.css";
import AOS from "aos";
import "aos/dist/aos.css";
const testimonials = [
  {
    name: "Shivam Thakur",
    title: "Client",
    quote:
      "Had an amazing experience — their innovative strategies have taken my online presence to the next level. The team drove real growth and always responded quickly. A great company to work with!",
  },
  {
    name: "Tisha Nagarwal",
    title: "Client",
    quote:
      "Promoizone Branding Pvt Ltd gave our website a facelift, making it extremely user-friendly and visually appealing. Their dedication to improving navigation, load speed, and mobile responsiveness truly stood out.",
  },
  {
    name: "Anjali Sharma",
    title: "Client",
    quote:
      "Excellent experience with Promozione Branding. Their team's digital expertise significantly boosted my brand visibility. Highly recommended for anyone looking to grow online effectively!",
  },
  {
    name: "Neeraj Goyal",
    title: "Client",
    quote:
      "Great experience working with Promozione Branding. Their team is creative, innovative, and dedicated to results. We’ve seen a big jump in online visibility since we started working with them.",
  },
  {
    name: "Priya Sharma",
    title: "Client",
    quote:
      "I partnered with Promozione Branding Pvt. Ltd. for my business, and I’m really impressed. They’re knowledgeable, supportive, and genuinely care about your feedback. Must try their services!",
  },
  {
    name: "Vikas Kumar",
    title: "Client",
    quote:
      "So glad we partnered with Promozione Branding for digital marketing. Their team revamped our past campaigns and delivered outstanding results. Professional, proactive, and easy to collaborate with!",
  },
];


const duplicated = [...testimonials, ...testimonials]; // Seamless loop

const TestimonialSlider = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <>
      <section className="testimonial-marquee-section">
        <h2 className="mt-1 fw-bold fs-2 text-center mb-sm-0 text-capitalize" style={{ color:" #00448F"}}>
          what our clients say
        </h2>
        <div  data-aos="zoom-in"
          className="mx-auto mb-4 mt-3"
          style={{ width: "60px", height: "4px", backgroundColor: "#0d6efd" }}
        ></div>

        <div
          className="testimonial-marquee-wrapper mt-5 pt-3"
          data-aos="fade-right"
          data-aos-delay="10"
        >
          <div className="testimonial-marquee-track">
            {duplicated.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <p className="quote">“{t.quote}”</p>
                <div className="author">
                  <strong className='text-capitalize'>{t.name}</strong>
                  <span className='text-capitalize'>{t.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialSlider;
