import "./style.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Form2 from "../../components/Home/Landingpage/Form2"
import ctaImage from "../../assets/Formimg.webp"
import icon1 from "../../assets/reviews/seo.webp";
import icon2 from "../../assets/reviews/ppc.webp";
import icon3 from "../../assets/reviews/design.webp";
import icon4 from "../../assets/reviews/social.webp";
import icon5 from "../../assets/reviews/customer-service.webp";
import icon6 from "../../assets/reviews/results.webp";
import icon7 from "../../assets/reviews/technology.webp";
import icon8 from "../../assets/reviews/expertise.webp";
import right from "../../assets/reviews/right.jpg"

const Review = () => {

  useEffect(() => {
  AOS.init({
    duration: 1000, // animation duration in ms
    once: true,     // whether animation should happen only once
  });
}, []);
  const tabs = [
    { id: "seo", label: "SEO", icon: icon1 },
    { id: "ppc", label: "PPC", icon: icon2 },
    { id: "social", label: "Social", icon: icon4 },
    { id: "design", label: "Design", icon: icon3 },
    { id: "results", label: "Results", icon: icon6 },
    { id: "support", label: "Customer Service", icon: icon5 },
    { id: "expertise", label: "Expertise", icon: icon8 },
    { id: "tech", label: "Technology", icon: icon7 },
  ];

  const reviews = {
    seo: [
      {
        text: `I have been collaborating with Promozione Branding for the past few months;, and the online presence transformation of my business is incredible. The effectiveness of their SEO strategies on my ranking improvement is remarkable; I must say, their hyper-targeted PPC campaigns surpassed my expectations for lead quality Their expertise and professionalism are appreciated, complemented by their availability to address questions. If you need the best digital marketing services in Delhi NCR, be sure to trust them!
.`,
        author: "Client",
      },

      {
        text: "I have experimented with a couple of digital marketing agencies but Promozione Branding has proven to be the best. They are truly efficient in SEO; I could see my search engine ranking improve due to this. Their social media marketing approach contributes to my audience association. They are very proactive, very considerate, and result-oriented. They exceed my expectations and I hope to continue working with them.",
        author: "Client",
      },

      {
        text: "I could go on for days extolling the virtues of Promozione Branding Pvt. Ltd.. The benefits have been multiple for my organization SEO to social media management. It's amazing to see what they can do to propel your business forward online. You can really tell that the team dedicates the time to understanding your goals and coming up with specific strategies just for you. All thanks to this site my website visits and social media engagements have gone way up. That's really a work well done!",
        author: "Client",
      },

      {
        text: `Promozione Branding’s performance marketing strategies really helped to elevate my brand’s presence online. Their data-driven approach ensured we targeted the right audience and maximized our ad spend. The team’s attention to detail and dedication to achieving the best results has made them a go-to resource for my future marketing needs. I’m already seeing better engagement and conversions—highly recommend.`,
        author: " client",
      },

      {
        text: "It made a huge difference in the way our website performed. We were nearly at the bottom of the rankings and were getting hardly any traffic. The team identified issues like poor SEO and slow load times and tailor-fitted strategies for improvement. Within the next few months, our rankings improved, as did organic traffic. Their proactive approach with crystal clear communication made all the difference. Our online presence is stronger now than ever before, thanks to Promozione. We highly recommend Promozione Branding Pvt Ltd if you want to grow your business then Contact Them..",
        author: "Client",
      },
      {
        text: `I recently partnered with Promozione Branding PVT. LTD.
From the very first consultation, their team was incredibly knowledgeable and attentive to my business needs. They crafted a tailored strategy that aligned perfectly with my goals.
There regular feedbacks and follows helps us in achieving our desired organizational objectives. They have good lead generation techniques.
I apricate there work and suggests my colleges to connect with them.
Thank You Promozione Branding and team`,
        author: "Personal Trainer",
      },

      {
        text: ` 
Promozione Branding has demonstrated its expertise and value many times over during our time with them Our keywords have improved positions significantly, traceable to their efforts. Our unsolicited lead quality has also improved. We receive regular recommendations for our site and topics to expand upon to generate new opportunities for customer engagement and favor from search engines.`,
        author: "manufacturer",
      },

      {
        text: "Promozione Branding helps us expand our digital footprint everyday through strong SEO, SEM and Social expertise, caring as if our company would be theirs. Not only skilled and professional team, also super responsive, reliable and fun to work with. Thank you so much! Only logical to witness that different teams within our company are willing to partner with you to get a similar reach, strong online results and enjoyment!",
        author: "Heavy Equipment Company",
      },

      {
        text: "From the beginning, Promozione Branding demonstrated they were the right choice for our Marketing Partner. It has been a seamless process with fantastic communication, from onboarding to website creation, driving SEO results, and starting up and maintaining our Google Ads Program. As our company continues to grow into new territories, we must have the right strategic partners to help us maintain our high standards and to drive new leads. Promozione Branding has been instrumental in our efforts to break into new Geographic locations with proven strategies for growth.",
        author: "Technology Company",
      },

      {
        text: "Promozione Branding provided and continues to provide the personal touch, expertise and guidance to execute our web development project while also providing our team with a great experience. From the start Promozione Branding has taken the time to understand the two divisions of our company and help guide and build our vision of website into reality. They have helped us take an old, outdated website, to our digital marketing site launch 1 month ago. We couldn’t be happier as receive daily compliments of our new site, receive new industry leads and helping show us as an industry leader. We are excited in our continued work with Promozione Branding as we work together on the next phase.",
        author: "Heavy Equipment Company",
      },

      {
        text: "Promozione Branding delivered real, measurable results for our business. Their focus on high-quality leads and increasing revenue through SEO, PPC, and social media was impressive.Highly recommend them for any business looking for digital marketing success!",
        author: "client",
      },
    ],
    ppc: [
      {
        text: "PPC campaigns helped us increase sales 2x during peak season. A+ strategy and execution.",
        author: "E-commerce Owner",
      },

      {
        text: "Promoizone branding Pvt Ltd gave our website a facelift, making it an extremely user-friendly site and more visually appealing to its customers. The professionals here worked tirelessly on improving the navigation, load speed, and mobile responsiveness of the site. The really easy and fabulous design improved our online presence and customer participation.",
        author: "Client",
      },

      {
        text: "I am very satisfied with the work Promozione Branding has done for me. Their personalized approach and attention to detail have made a real difference in my online marketing efforts. I’ve seen a marked increase in traffic to my website and a higher level of engagement on my social media channels. The team is both professional and friendly, making the whole process smooth and enjoyable.",
        author: "Client",
      },

      {
        text: "Promoizone branding Pvt Ltd gave our website a facelift, making it an extremely user-friendly site and more visually appealing to its customers. The professionals here worked tirelessly on improving the navigation, load speed, and mobile responsiveness of the site. The really easy and fabulous design improved our online presence and customer participation.",
        author: "Client",
      },

      {
        text: "I have partnered with Promozione Branding Pvt.Ltd for my company....the team is very knowledgeable,supportive they listen to each and every feedback you provide also very dutiful.Must try their services.....👍😊",
        author: "Client",
      },

      {
        text: "Very nice and patient. easy to connect with and felt comfortable. Very happy!",
        author: "Client",
      },

      {
        text: "They give more insight to your business than you ever thought existed. The reporting is next level",
        author: "Client",
      },

      {
        text: "Good service provider",
        author: "Client",
      },

      {
        text: "I choose Promozione Branding Pvt Ltd considering that they understand the digital world. The team prepared a customized strategy for national SEO optimization and also boosted my social media presence to drive more traffic. Within transparent communication, affordable prices, and results-oriented work, Promozione stands for those businesses looking to expand online in Delhi NCR.",
        author: "Client",
      },
    ],
    social: [
      {
        text: " Promozione Branding Best Digital Marketing Agency!!!",
        author: "Client",
      },

      {
        text: "Promozione Branding has always been professional and responsive, and has demonstrated advanced knowledge in all aspects of web development, social media and internet marketing.",
        author: "Client",
      },

      {
        text: "I could go on for days extolling the virtues of Promozione Branding Pvt. Ltd.. The benefits have been multiple for my organization SEO to social media management. It's amazing to see what they can do to propel your business forward online. You can really tell that the team dedicates the time to understanding your goals and coming up with specific strategies just for you. All thanks to this site my website visits and social media engagements have gone way up. That's really a work well done!",
        author: "Client",
      },

      {
        text: "I've had multiple marketing companies in the past 4 years. All didn't last longer than 6-12 months. They were all filling my head with the dream and always failed to deliver results for a reasonable price. I can safely say Promozione Branding is what I have been searching for all this time. Reasonable price, but more importantly, the results are real, my target audience has been met, and our lead generation is fantastic and high quality. We are booked two weeks out during our slowest months of the year! The communication their team gives you along the whole way is incredible. Only 2-3 months in with them and I’m beyond satisfied with Promozione Branding.",
        author: "Client",
      },

      {
        text: "We’ve worked with a few agencies before, but Promozione Branding is by far the most reliable and proactive. Their ideas for reels and campaigns have really helped boost engagement",
        author: "Client",
      },

      {
        text: `The team at Promozione Branding has truly transformed our brand’s presence on Instagram and LinkedIn. Their content strategy is creative, consistent, and it actually drives engagement. Super happy with the results!`,
        author: "Client",
      },

      {
        text: "We saw a noticeable improvement in our follower growth and post reach within just a month of working with Promozione. They really understand what works on social platforms and keep us involved at every step.",
        author: "Client",
      },

      {
        text: "Excellent experience with their social media team. They took time to understand our brand voice and created content that speaks to our audience. Highly professional and always on time with deliveries.",
        author: "Client",
      },

      {
        text: "As a startup, we struggled to build a strong digital presence—until we found Promozione Branding. Their social media marketing is top-notch. We now get consistent inquiries from Instagram alone!",
        author: "Client",
      },
    ],

    design: [
      {
        text: "The strategy, creativity, and dedication shown by Promozione Branding has been incredible. Our Facebook and LinkedIn pages now look and perform better than ever before. Highly recommend them.",
        author: "Client",
      },

        {
        text: " Promozione’s social team goes beyond just posting – they plan, design, track results, and optimize regularly. You can tell they genuinely care about growing your brand.",
        author: "Client",
      },

        {
        text: "Promozione Branding built our website from the ground up, and we couldn’t be happier. It's fast, modern, and exactly what we envisioned. They were responsive, professional, and technically sharp.",
        author: "Client",
      },

        {
        text: "The UI/UX of our new website is fantastic — clean, mobile-friendly, and highly functional. The team nailed the design and delivered on time with zero hassles.",
        author: "Client",
      },

        {
        text: "Our e-commerce site went live last month, and it’s already performing better than our last one. Promozione’s dev team knew exactly how to combine form and function.",
        author: "Client",
      },

         {
        text: " They revamped our outdated site into something sleek, responsive, and aligned with our brand. Plus, they took care of SEO basics so we could launch with confidence.",
        author: "Client",
      },

         {
        text: "Loved working with Promozione on our website redesign. Their attention to detail and creative input made a huge difference in how our brand is now perceived online Promozione helped us rank on page one for our most competitive keywords. Their SEO game is strong, and they’re transparent with progress reports.",
        author: "Client",
      },
         {
        text: " Their Google Ads campaign brought in qualified leads within the first week. Smart targeting, great reporting, and real results. Definitely recommend their PPC team It’s rare to find a digital agency that handles design and marketing with equal strength. From ad creatives to landing page optimization, Promozione delivered!",
        author: "Client",
      },

    
      
    ],

    results:[
      {
        text:"game-changer for our business. Their SEO expertise has significantly boosted our online visibility and helped us reach new customers. Highly recommended for anyone looking to take their digital marketing to the next level!",
        author:"Client",

      },

        {
        text:"Promozione Branding has made running a business fun again, and also increased our customer base by 100%. Best dollars spent by far. Our internet marketer has made all the difference to our company and our bottom line.",
        author:"Client",

      },

        {
        text:"As a marketing executive with many years and experiences with agencies I can say that Promozione Branding is by far the best digital group I have ever had the opportunity to work with. I’ve led multiple projects with 3 different companies utilizing the services at Promozione Branding and we always see ROI. Beyond that, the education, responsiveness, professionalism and closed loop reporting make Promozione Brandingmy go to for digital marketing services. They are an extension of my lean internal marketing team.",
        author:"Client",

      },

        {
        text:"Promozione Branding just get it. They take time to understand what you want to accomplish and why. Then they provide multiply options to get the job done. They are also willing to change quickly to adapt with changes in the business plan. Great service and wicked fast response times.",
        author:"Client",

      },

        {
        text:"Promozione Branding has been a great partner to our organization for years now. They are constantly improving our digital footprint and helping our organization grow and succeed. Our year over year growth has been incredible and our investment with Promozione Branding has proven very financially effective.",
        author:"Client",

      },

        {
        text:"Promozione Branding has been a great addition to our marketing efforts. Our account manager is top notch, understands my needs and always responds quickly with answers to my questions. She updates me constantly about what the team is doing, I am not worried that things are not being done when not asked, I am a data driven person so for me to be able to go in and see it for myself has been a great way for me to always know what's going on and get insights.",
        author:"Client",

      },

        {
        text:"'ve been thoroughly pleased with Promozione Branding's services. Their team's dedication, expertise, and innovative approach have significantly boosted our online presence and overall performance. Highly recommended!",
        author:"Client",

      },

        {
        text:"From our start with Promozione Branding to the present, we have had nothing but a positive experience with a great ROI!",
        author:"Client",

      },
        {
        text:" Promozione Branding is the first SEO provider that has met all of our organizational objectives and then some.",
        author:"Client",

      }, 
       {
        text:"Fantastic company to work with. I've continually seen an improvement in our website exposure and our continued increase in sales speaks for itself.",
        author:"Client",

      },

    ],

     support:[

      {

        text:"Promozione Branding provides top notch service with a team of friendly and professional experts. I am continuously impressed with their communication, unique technology and personalized strategies for fine-tuning results. ",
        author:"Client",
      },

        {

        text:"I usually don't look forward to meetings - unless these are meetings with Promozione Branding. The team is very responsive and always knowledgeable. It feels like they are less of a vendor, and more of an extension of our own team working towards the same goals. ",
        author:"Client",
      },
        {

        text:"If you're looking for a digital marketing agency that truly cares about YOUR business and understands YOUR unique needs- look no further than Promozione Branding. Our company provides very niche services and the Promozione Branding team has gone above and beyond to understand our unique business and our company's tone-of-voice. Their communication is top-notch, we are always informed of what has been completed and what is next to come. They are always willing to help support in any task I throw their way and they consistently deliver innovative strategies and recommendations. ",
        author:"Client",
      },

        {

        text:" Promozione Branding just get it. They take time to understand what you want to accomplish and why. Then they provide multiply options to get the job done. They are also willing to change quickly to adapt with changes in the business plan. Great service and wicked fast response times.",
        author:"Client",
      },

        {

        text:"The Promozione Branding team is extremely professional, friendly and provides personalized service. They take the time to understand your business' needs and are consistently implementing new strategies to improve results. ",
        author:"Client",
      },

        {

        text:" Our team is always forward thinking about helping us reach our marketing goals - introducing new concepts and ways to accomplish our objectives. They are proactive about issues that could negatively impact us and stay ahead of technology changes, they help us increase our reach while respecting our budget. They are smart and responsive, and we feel like they truly are part of our team, working with us to achieve our goals and increase sales.",
        author:"Client",
      },

        {

        text:" We are extremely satisfied with the level of service and results we continue to receive from Promozione Branding over the years and we expect to be with them for many more years to come!",
        author:"Client",
      },

        {

        text:"Promozione Branding goes above and beyond to understand the ins and outs of your business. Their customer service is top notch and they take the time to explain their processes. ",
        author:"Client",
      },

     ],

     expertise:[

      {
        text:"Promozione Brandingprovides top notch service with a team of friendly and professional experts. I am continuously impressed with their communication, unique technology and personalized strategies for fine-tuning results.",
        author:"Client",
      },

       {
        text:"The collection of bright and talented experts in all facets of digital marketing and advertising has allowed us to expand our reach well beyond what would have been possible with our small internal team.",
        author:"Client",
      },

       {
        text:"The Promozione Branding team are a group of truly caring SEO and SEM specialists that offer helpful services that yield results at affordable price points.",
        author:"Client",
      },

       {
        text:"The Promozione Branding team is extremely professional, friendly and provides personalized service. They take the time to understand your business' needs and are consistently implementing new strategies to improve results.",
        author:"Client",
      },

       {
        text:"From our start with Promozione Branding to the present, we have had nothing but a positive experience with a great ROI!",
        author:"Client",
      },

       {
        text:"Promozione Branding has given us the ability to reach customers that we never could previously.",
        author:"Client",
      },

       {
        text:"We have been a Promozione Branding customer for many months and continue to be pleased with the high level of service that we receive.",
        author:"Client",
      },


     ],

     tech:[
      {
        text:"We hired Promozione to develop an AI chatbot for our website, and the results have been fantastic. It handles 80% of queries automatically and has improved our customer support efficiency drastically, What impressed us most was how Promozione balances design with functionality. Our site not only looks great — it actually converts better now.",
        author:"Client",
      },

       {
        text:"Promozione redesigned our website with a modern, mobile-first approach. The UI is clean, fast, and user-friendly. We’ve received amazing feedback from our customers,Their AI-based analytics dashboard gives us real-time insights we never had before. Now we can make faster, data-driven decisions.",
        author:"Client",
      },

        {
        text:"Their AI-powered content suggestions and email targeting features helped increase our engagement significantly. A very knowledgeable and supportive team!",
        author:"Client",
      },

        {
        text:"The SEO and PPC services we received were top-notch. Our Google rankings improved in just 2 months, and the paid campaigns brought in high-converting leads.",
        author:"Client",
      },

        {
        text:"Promozione helped us integrate AI into our CRM to predict customer behavior. It’s made a big difference in how we prioritize leads. Worth every penny.",
        author:"Client",
      },

        {
        text:"They built us a fully responsive, scalable web platform from scratch. Excellent communication, clear timelines, and great post-launch support",
        author:"Client",
      },

        {
        text:"We ran our first AI-personalized email campaign with Promozione and saw a 35% increase in click-throughs. Their content and targeting were spot on.",
        author:"Client",
      },

        {
        text:"What impressed us most was how Promozione balances design with functionality. Our site not only looks great — it actually converts better now.",
        author:"Client",
      },

      
     ]

  };

  const [activeTab, setActiveTab] = useState("seo");

  return (
    <div>
      {/* Header Section */}
  <div className="container-fluid m-0 mb-0 section-bg">
  <div className="row align-items-center">
    {/* Image on the left */}
    <div className="col-md-5" data-aos="fade-right">
      <img src={right} alt="Client Testimonials" className="img-fluid" />
    </div>

    {/* Text on the right */}
    <div className="col-md-7 review px-5 mb-0 responsive-font" data-aos="fade-left">
      <h2>Learn What It’s Like to Work With Promozione Branding</h2>
      <p>
        Curious about what it’s like to work with Promozione Branding?
        Explore our more than 1,100 client testimonials and experience the
        impact of Digital Marketing That Drives Revenue. Hear from clients
        that partnered with WebFX for search engine optimization (SEO)
        services, pay-per-click (PPC) advertising services, web design
        services, social media services, and other digital marketing
        services to learn what it’s like to have our team on yours. Join
        our raving fanbase! Experience what it’s like to have an
        award-winning digital marketing partner helping to drive real
        revenue for your business.
      </p>
    </div>
  </div>
</div>



      {/* Tabs Section */}
      <div className="container py-5">
        <h2 className="text-center  fw-bold  "  style={{color:"#00448F"}} data-aos="zoom-in">Hear from our happy customers</h2>
        <div
        className="mx-auto mb-5 " data-aos="zoom-in"

        style={{ width: "60px", height: "4px", backgroundColor: "#0d6efd" }}
      ></div>

        <div className="d-flex  flex-wrap justify-content-center gap-4 mb-4 border-bottom position-relative" data-aos="zoom-up">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button btn d-flex flex-column align-items-center rounded-0 border-0 ${
                activeTab === tab.id ? "active-tab" : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              <div>
                <img
                  src={tab.icon}
                  alt={tab.label}
                  style={{
                    width: "36px",
                    height: "36px",
                    objectFit: "contain",
                    filter: activeTab === tab.id ? "none" : "",
                    transition: "filter 0.3s, transform 0.3s",
                  }}
                />
              </div>
              <small className="mt-1">{tab.label}</small>
            </button>
          ))}
        </div>

        {/* Reviews */}
        <div className="row justify-content-center" data-aos="zoom-in">
          {(reviews[activeTab] || []).map((review, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div
                className="card border-0 shadow rounded-4 h-100"
                style={{
                  maxHeight: "250px",
                  overflowY: "auto",
                  backgroundColor: "#fefefe",
                }}
              >
                <div className="card-body" data-aos="zoom-up">
                  <div className="text-warning mb-2">{"★".repeat(5)}</div>
                  <p className="card-text text-secondary">{review.text}</p>
                </div>
                <div className="card-footer bg-white border-top-0 text-end">
                  <strong className="text-muted">{review.author}</strong>
                </div>
              </div>
            </div>
          ))}

          {(!reviews[activeTab] || reviews[activeTab].length === 0) && (
            <div className="text-center text-muted">
              No reviews available yet.
            </div>
          )}
        </div>
      </div>

    <Form2
        heading="Do you want to be our next happy client? "
        price="Get your Brand up."
        buttonText=" Free Consultation Now!"
        image={ctaImage}
      ></Form2>
    </div>
  );
};

export default Review;
