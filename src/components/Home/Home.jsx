import Services from "./Landingpage/Services";
import WhyChoose from "./Landingpage/WhyChoose";
import Form1 from "./Landingpage/Form1";

import SectorServe from "./Landingpage/SectorServe";
import Specialized from "./Landingpage/Specialized";
import Faq from "./Landingpage/Faq";
import Orbit from "./Landingpage/Orbit";
import Testimonials from "./Landingpage/Testimonials";
import Project from "./Landingpage/Project";

import Leadgen from "./Landingpage/Leadgen";
import Form2 from "./Landingpage/Form2";
import ctaImage from "../../assets/ctaweb.webp";

import Hero from "../Hero";

const Home = () => {
  return (
    <div>
      <Hero></Hero>

      <Services />

      {/* <Leadgen></Leadgen> */}
      <WhyChoose />
     <Specialized />
    
      <Form1 />
 
        <SectorServe />
      <Orbit />
      <Project></Project>
      <Testimonials />
      <Faq />
      <Form2
        heading="Get your Brands Ranked With Us"
        price="Your Growth is Our Guarantee."
        buttonText="Chalo Shuru Karaein"
        image={ctaImage}
      ></Form2>
    </div>
  );
};

export default Home;
