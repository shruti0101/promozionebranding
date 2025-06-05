import React, { useEffect } from 'react';
import "../../../styles/Testimonials.css";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    name: 'Shivam Thakur',
    title: 'Client',
    quote: 'Had a amazing experience their innovative startegies have taken my online presence to the next level driven real growth good team to work with'
  },
  {
    name: 'John Smith',
    title: 'Founder, TechStart',
    quote: 'Highly skilled, transparent, and always ahead of the curve. A game changer for us.',
  },
  {
    name: 'Anjali Sharma',
    title: 'Client',
    quote: 'Excellent experience with Promozione Branding their teams expertise in digital marketing has increased my visibility highly recommended! ',
  },
  {
    name: 'Neeraj Goyal',
    title: 'Client',
    quote:"Great experience working with Promozione Branding thier team is creative,innovative and hardworking their digital marketing strategies have increased my digital visibility"
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
        <h2 className="mt-1 fw-bold fs-2 text-center mb-sm-0 text-capitalize" style={{ color: "#2548BD" }}>
          what our clients say
        </h2>
        <div
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
                  <strong>{t.name}</strong>
                  <span>{t.title}</span>
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
