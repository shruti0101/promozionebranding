import React from 'react'
import { useRef } from 'react';
import email from "../../assets/services/email.png"
import Tiltcard from "../../TiltCardHome/Tiltcard"
import Process from "../Process/Process"
import Service from "../Servicecomponent/Service"
import WhyChoose from "../WHYCHOOSE/WhyChoose"
import { useEffect } from 'react';

const Email = () => {

     useEffect(() => {
          AOS.init({ duration: 800, once: true });
      
          const tiltElements = document.querySelectorAll(".tilt");
          VanillaTilt.init(tiltElements, {
            max: 15,
            speed: 400,
            scale: 1.05,
            glare: true,
            "max-glare": 0.3,
          });
        }, []);


    const cardItems = [
    {
      title: "Advanced SEO Audits",
      icon: "🧪", // Lab flask — symbolizes analysis/testing
    },
    {
      title: "Scalable Technical SEO",
      icon: "🛠️", // Tools — perfect for tech/configuration
    },
    {
      title: "Keyword Strategy for Scale",
      icon: "🎯", // Target — keyword precision and strategy
    },
    {
      title: "Enterprise Content Strategy",
      icon: "📊", // Bar chart — content strategy and performance
    },
    {
      title: "Multi-location SEO",
      icon: "🌍", // Globe — perfect for geographic/multi-location SEO
    },
    {
      title: "White Hat Link Building at Scale",
      icon: "🔗", // Link — directly represents link building
    },
  ];







  return (
  
 
    <div>
        <Tiltcard
        heading="Enterprise SEO Services in India – Dominate Search, Drive Conversions at Scale

"
        paragraph="When you're managing a large business, basic SEO just won’t cut it.
You need an Enterprise SEO Strategy that scales across hundreds (or thousands) of pages, boosts rankings across multiple locations or services, and brings in high-converting traffic—without breaking.


"
        cardItems={cardItems}
      />
       

           <section className="php-section py-5 position-relative overflow-hidden">
               {/* Background Blob */}
               <div className="blob-bg"></div>
       
               <div className="container-fluid">
                 <div className="row align-items-center flex-wrap-reverse">
                   {/* Text Content */}
                   <div className="col-md-6" data-aos="fade-right">
                     <h2 className="php-heading">
                       What is{" "}
                       <span style={{ color: "#2548BD" }}>
                       Email Marketing
                       </span>{" "}
                     </h2>
                     <p className="php-desc">
                       CRM Optimization means improving how your CRM works for your
                       business — from setup to workflows, automation, user adoption,
                       and integration with your marketing + sales. In simple terms:
                       Less chaos, more clarity Less data entry, more deals closed Less
                       manual work, more automation
                     </p>
                     <ul className="php-points">
                       {[
                         "No Coding Required – Manage products, orders & customers with zero tech stress",
                         "Mobile-First Design – 80% log phone se shopping karte hain, hum uska bhi dhyan rakhte hain",
                         "Built-In SEO Features – Better visibility = more organic traffic",
                         " Fast & Secure Checkout – Payment gateway se leke SSL tak – sab kuch included",
                         " Scalable Infrastructure – Grow from 10 to 10,000 products without breaking",
                       ].map((item, index) => (
                         <li
                           data-aos="fade-left"
                           data-aos-delay={index * 200}
                           key={index}
                         >
                           <span className="icon">✅</span>
                           {item}
                         </li>
                       ))}
                     </ul>
                   </div>
       
                   {/* Tilted SVG */}
                   <div
                     className="col-md-6 text-center mb-4 mb-md-0"
                     data-aos="zoom-in"
                   >
                     <div className="php-illustration tilt">
                       <img src={email} alt="google adword" className="svg-float img-fluid rounded" />
                     </div>
                   </div>
                 </div>
               </div>
             </section>
      
    </div>
  )
}

export default Email