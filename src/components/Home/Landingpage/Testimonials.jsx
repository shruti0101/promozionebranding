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
    name: ' Tisha Nagarwal',
    title: 'Client',
    quote: "Promoizone branding Pvt Ltd gave our website a facelift, making it an extremely user-friendly site and more visually appealing to its customers. The professionals here worked tirelessly on improving the navigation, load speed, and mobile responsiveness of the site. The really easy and fabulous design improved our online presence and customer participation.",
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
    {
    name: 'Dia',
    title: 'Client',
    quote:"I have partnered with Promozione Branding Pvt.Ltd for my company....the team is very knowledgeable,supportive they listen to each and every feedback you provide also very dutiful.Must try their services.....👍😊"
  },

  {
    name:"vikas kumar",
    title:"Client",
    quote:"I am so glad we partnered with Promozione Branding for our digital marketing needs. Their performance marketing team was outstanding at analyzing our previous campaigns and optimizing them for better results. Their proactive approach and consistent communication made the whole process smooth and productive. The results have been fantastic, and I will continue to work with them for future campaigns!"
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
