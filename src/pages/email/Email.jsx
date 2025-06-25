import React from 'react'
import { useRef } from 'react';
import email from "../../assets/services/email.png"
import Tiltcard from "../../TiltCardHome/Tiltcard"
import Process from "../Process/Process"
import Service from "../Servicecomponent/Service"
import WhyChoose from "../WHYCHOOSE/WhyChoose"
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import email1 from "../../assets/services/email1.png"
import Story from "../Story/Story";
import Form2 from "../../components/Home/Landingpage/Form2";
import ctaImage from "../../assets/formimg.webp";

const Email = () => {


  const features = [
  "Copy + Design + Tech under one roof",
  "Indian + Global audience experience",
  "Strategic automation setup",
  "Affordable pricing for SMEs & startups",
  "End-to-end service – so you chill, we send",
  "Business-first approach (not tech-first)",
  "Automation + Sales process experts",
  "Post-optimization support & troubleshooting",
  "Custom solutions – not one-size-fits-all",
 
];


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
    title: "Copywriting that Converts",
    icon: "✍️", // Writing Hand — directly symbolizes copy/content creation
  },
  {
    title: "Email Automation",
    icon: "📧", // Envelope — universally recognized for email
  },
  {
    title: "Campaign Design & Setup",
    icon: "🧩", // Puzzle Piece — represents setup, planning, assembling components
  },
  {
    title: "A/B Testing & Reporting",
    icon: "📈", // Chart increasing — data growth, testing results
  },
  {
    title: "List Segmentation",
    icon: "🗂️", // Card Index Dividers — perfect for categorizing lists
  },
  {
    title: "Campaign Management",
    icon: "🧑‍💼", // Office Worker — symbolizes oversight/management
  },
];

const services = [
  {
    icon: "bi-pencil-square",         // ✏️ Copywriting
    title: "Copywriting that Converts",
    description:
      "Engaging subject lines & persuasive copy that feels human and sells smartly.",
  },
  {
    icon: "bi-palette",               // 🎨 Design
    title: "Campaign Design & Setup",
    description:
      "Beautiful, mobile‑friendly email templates that reflect your brand.",
  },
  {
    icon: "bi-send",                  // 🚀 Automation / sending
    title: "Email Automation",
    description:
      "Welcome sequences, cart‑abandonment, lead nurturing, re‑engagement — all on autopilot.",
  },
  {
    icon: "bi-people",                // 👥 Segmentation
    title: "List Segmentation",
    description:
      "Right message to the right people = better results.",
  },
  {
    icon: "bi-kanban",                // 📊 Management workflow
    title: "Campaign Management",
    description:
      "From sending to tracking – we handle it all.",
  },
  {
    icon: "bi-bar-chart-line",        // 📈 A/B & reporting
    title: "A/B Testing & Reporting",
    description:
      "We test timing, headlines, CTAs — everything — to optimize performance.",
  },
];


const points=[
 " E-commerce: Offers, sales, restock alerts",
"B2B: Newsletters, case studies, whitepaper downloads",
"Coaching & Edu: Course launches, webinar invites",
"Healthcare: Appointment reminders, health tips",
"Real Estate: Property updates, new launches"

]
const note=[
  "If your business has an audience, email is your best friend."

] 







  return (
  
 
    <div>
        <Tiltcard
        heading="Email Marketing Services – Inbox Pe Impact Banao 


"
        paragraph="Emails aren’t dead — boring emails are.
At Promozione Branding Pvt. Ltd., we create email campaigns that people open, read, and click. Whether you're nurturing leads, promoting offers, or just staying top-of-mind
Chalo ab inbox ko revenue machine banate hain!



"
        cardItems={cardItems}
      />
       

           <section className="php-section py-5 position-relative overflow-hidden">
               {/* Background Blob */}
               <div className="blob-bg"></div>
       
               <div className="container">
                 <div className="row align-items-center flex-wrap-reverse">
                   {/* Text Content */}
                   <div className="col-md-6" data-aos="fade-right">
                     <h2 className="php-heading">
                      Why   {" "}
                       <span style={{ color: "#2548BD" }}>
                Email    Marketing
                       </span>{" "}
                       Still Works
                     </h2>
                     <p className="php-desc">
                  <strong>It’s not just a message — it’s a relationship tool.</strong>    

                   Email marketing gives you:

                     </p>
                     <ul className="php-points">
                       {[
                         "Direct access to your audience (no algorithm drama)",
                         "High ROI – up to 4200% returns",
                         "Nurture cold leads into warm customers",
                         " Ideal for B2B, B2C, D2C – sabke liye",
                         " Automated flows that work 24/7",
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

             
      {/* why choose */}

       <WhyChoose
        title="Why Choose
"
        highlightedText="Promozione for Email Marketing"
        features={features}
  
        ctaTitle="Let’s Write Emails Your Customers Want to Open


"
        ctaSubtext="We make sure every mail matters."

        ctaParagraph="From welcome emails to complex funnels, we create campaigns that deliver value and results.

 "
        ctaButtonText="Let’s Get Started"
      />


 <Service
      title="Our Email Marketing Services Include:"
      subtitle="Best Use Cases for Email Marketing:


      "
        points={points}
        note={note}
    
    
      services={services}
      image={email1 }
    />
      


      <Story></Story>
 <Form2
        heading="Let's Build Your Success Story Together"
        price="Your Growth is Our Guarantee."
        buttonText="Click Now, Thank Us Later."
        image={ctaImage}
      ></Form2>

      
    </div>


  )
}

export default Email