import Services from "./Landingpage/Services";
import WhyChoose from "./Landingpage/WhyChoose";
import Form1 from "./Landingpage/Form1";

import SectorServe from "./Landingpage/SectorServe";
import Specialized from "./Landingpage/Specialized";
import Faq from "./Landingpage/Faq";
import Orbit from "./Landingpage/Orbit";
import Testimonials from "./Landingpage/Testimonials";
import Project from "./Landingpage/Project";


import Form2 from "./Landingpage/Form2";
import ctaImage from "../../assets/formimg.webp"

import Hero from "../Hero";

const Home = () => {
  return (
    <div>

        <Hero></Hero>

<Services />
      <WhyChoose />

<Form2
 heading="Get your Brands Ranked With Us"
  price="₹499"
  buttonText="Chalo Shuru Karaein"
  image={ctaImage}

></Form2>

      <Project></Project>
      <Form1 />
      <SectorServe />
      <Specialized />
      <Orbit />
      <Testimonials />
      <Faq />

    </div>
  )
}

export default Home