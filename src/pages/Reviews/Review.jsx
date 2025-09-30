import "./Style.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Form2 from "../../components/Home/Landingpage/Form2";
import ctaImage from "../../assets/ctaweb.webp";
import icon1 from "../../assets/reviews/seo.webp";
import icon2 from "../../assets/reviews/ppc.webp";
import icon3 from "../../assets/reviews/design.webp";
import icon4 from "../../assets/reviews/social.webp";
import icon5 from "../../assets/reviews/customer-service.webp";
import icon6 from "../../assets/reviews/results.webp";
import icon7 from "../../assets/reviews/technology.webp";
import icon8 from "../../assets/reviews/expertise.webp";
import { Helmet } from "react-helmet";

const Review = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once
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
    text: `I have been collaborating with Promozione Branding for the past few months, and the transformation in our online visibility is incredible. Their SEO strategies helped our website rank on the first page of Google for high-volume keywords. Their team also provided excellent insights on content optimization and backlink strategies. Overall, they’ve driven more quality leads than we’ve ever seen before.`,
    author: "Rahul Mehra",
  },
  {
    text: "I have experimented with a couple of digital marketing agencies but Promozione Branding has proven to be the best. Their approach to SEO is data-driven, and I saw my organic traffic double within three months. They continuously monitor progress and adjust strategy. I appreciate their transparency and dedication to getting results.",
    author: "Sneha Kapoor",
  },
  {
    text: "I could go on for days extolling the virtues of Promozione Branding Pvt. Ltd. Their SEO work is not just about rankings — it's about real business impact. They helped us rank in a highly competitive niche and improved our overall site health. The team is responsive, friendly, and really understands what small businesses need to grow online.",
    author: "Amit Bansal",
  },
  {
    text: `Promozione Branding’s performance marketing strategies really helped elevate my brand’s presence. Their on-page and off-page SEO tactics were effective, and we began seeing results faster than expected. Their monthly reports are easy to understand and always packed with actionable insights. I’m very satisfied with their services.`,
    author: "Ananya Sharma",
  },
  {
    text: "It made a huge difference in the way our website performed. We were stuck on page three and barely got any organic traffic. Promozione Branding revamped our technical SEO, optimized our site speed, and helped us climb up to page one. Our enquiries have significantly increased since then.",
    author: "Deepak Khurana",
  },
  {
    text: `I recently partnered with Promozione Branding PVT. LTD. and I’m genuinely impressed with their SEO expertise. They built a tailored strategy for our startup, conducted deep keyword research, and helped us write content that ranks. Their team is consistent, communicates regularly, and is always proactive with suggestions.`,
    author: "Priya Nair",
  },
  {
    text: `Promozione Branding has demonstrated its expertise and value many times over during our time with them. From improving our local SEO to fixing broken links and outdated meta tags, they handled it all. Our website traffic has increased by over 60%, and lead quality is much better than before.`,
    author: "Rajesh Verma",
  },
  {
    text: "Promozione Branding helps us expand our digital footprint every day. Their SEO, SEM, and content strategies have helped us outrank our competitors. They offer monthly updates, are extremely responsive, and make complicated things easy to understand. A very professional and committed team.",
    author: "Neha Reddy",
  },
  {
    text: "From the beginning, Promozione Branding demonstrated they were the right choice for our digital needs. They audited our entire site, fixed core issues, and built an SEO plan that aligned with our goals. I noticed a significant increase in qualified traffic, especially from mobile devices, and we now rank for multiple competitive keywords.",
    author: "Karan Joshi",
  },
  {
    text: "Promozione Branding provided and continues to provide the personal touch, expertise, and guidance that made our SEO project successful. They’re great at identifying low-hanging opportunities and long-term growth strategies. Their content optimization work alone brought a 45% increase in search traffic.",
    author: "Meenal Shah",
  },
  {
    text: "Promozione Branding delivered real, measurable results for our business. We saw a 3x increase in organic traffic and steady improvements in our keyword rankings. Their team is not only skilled but also dedicated to our success. Their analytics reports help us track ROI clearly — highly recommended!",
    author: "Vikram Desai",
  },
],


ppc: [
  {
    text: "PPC campaigns helped us increase sales 2x during peak season. A+ strategy and execution.",
    author: "Arjun Malhotra",
  },
  {
    text: "Promoizone branding Pvt Ltd gave our website a facelift, making it an extremely user-friendly site and more visually appealing to its customers...",
    author: "Nikita Rao",
  },
  {
    text: "I am very satisfied with the work Promozione Branding has done for me. Their personalized approach and attention to detail have made a real difference...",
    author: "Saurabh Sinha",
  },
  {
    text: "Promoizone branding Pvt Ltd gave our website a facelift, making it an extremely user-friendly site and more visually appealing to its customers...",
    author: "Kavita Iyer",
  },
  {
    text: "I have partnered with Promozione Branding Pvt.Ltd for my company.... the team is very knowledgeable, supportive...",
    author: "Vishal Thakur",
  },
  {
    text: "Very nice and patient. Easy to connect with and felt comfortable. Very happy!",
    author: "Tanvi Arora",
  },
  {
    text: "They give more insight to your business than you ever thought existed. The reporting is next level.",
    author: "Manish Kapoor",
  },
  {
    text: "Good service provider",
    author: "Ayesha Siddiqui",
  },
  {
    text: "I choose Promozione Branding Pvt Ltd considering that they understand the digital world. The team prepared a customized strategy...",
    author: "Devansh Shah",
  },
],
social: [
  {
    text: "Promozione Branding Best Digital Marketing Agency!!!",
    author: "Mehul Verma",
  },
  {
    text: "Promozione Branding has always been professional and responsive, and has demonstrated advanced knowledge in all aspects of web development, social media and internet marketing.",
    author: "Shruti Narang",
  },
  {
    text: "I could go on for days extolling the virtues of Promozione Branding Pvt. Ltd... All thanks to this site my website visits and social media engagements have gone way up. That's really a work well done!",
    author: "Karan Deshmukh",
  },
  {
    text: "I've had multiple marketing companies in the past 4 years... Only 2-3 months in with them and I’m beyond satisfied with Promozione Branding.",
    author: "Neha Tandon",
  },
  {
    text: "We’ve worked with a few agencies before, but Promozione Branding is by far the most reliable and proactive. Their ideas for reels and campaigns have really helped boost engagement.",
    author: "Vikram Mehta",
  },
  {
    text: "The team at Promozione Branding has truly transformed our brand’s presence on Instagram and LinkedIn. Their content strategy is creative, consistent, and it actually drives engagement. Super happy with the results!",
    author: "Ananya Roy",
  },
  {
    text: "We saw a noticeable improvement in our follower growth and post reach within just a month of working with Promozione. They really understand what works on social platforms and keep us involved at every step.",
    author: "Aditya Bhattacharya",
  },
  {
    text: "Excellent experience with their social media team. They took time to understand our brand voice and created content that speaks to our audience. Highly professional and always on time with deliveries.",
    author: "Ritika Sharma",
  },
  {
    text: "As a startup, we struggled to build a strong digital presence—until we found Promozione Branding. Their social media marketing is top-notch. We now get consistent inquiries from Instagram alone!",
    author: "Siddharth Nair",
  },
],


  design: [
  {
    text: "The strategy, creativity, and dedication shown by Promozione Branding has been incredible. Our Facebook and LinkedIn pages now look and perform better than ever before. Highly recommend them.",
    author: "Tanvi Rathi",
  },
  {
    text: "Promozione’s social team goes beyond just posting – they plan, design, track results, and optimize regularly. You can tell they genuinely care about growing your brand.",
    author: "Rajeev Malhotra",
  },
  {
    text: "Promozione Branding built our website from the ground up, and we couldn’t be happier. It's fast, modern, and exactly what we envisioned. They were responsive, professional, and technically sharp.",
    author: "Avni Sharma",
  },
  {
    text: "The UI/UX of our new website is fantastic — clean, mobile-friendly, and highly functional. The team nailed the design and delivered on time with zero hassles.",
    author: "Devansh Kapoor",
  },
  {
    text: "Our e-commerce site went live last month, and it’s already performing better than our last one. Promozione’s dev team knew exactly how to combine form and function.",
    author: "Ishita Mehra",
  },
  {
    text: "They revamped our outdated site into something sleek, responsive, and aligned with our brand. Plus, they took care of SEO basics so we could launch with confidence.",
    author: "Nikhil Agrawal",
  },
  {
    text: "Loved working with Promozione on our website redesign. Their attention to detail and creative input made a huge difference in how our brand is now perceived online. Promozione helped us rank on page one for our most competitive keywords. Their SEO game is strong, and they’re transparent with progress reports.",
    author: "Rekha Vaidya",
  },
  {
    text: "Their Google Ads campaign brought in qualified leads within the first week. Smart targeting, great reporting, and real results. Definitely recommend their PPC team. It’s rare to find a digital agency that handles design and marketing with equal strength. From ad creatives to landing page optimization, Promozione delivered!",
    author: "Yashwanth Rao",
  },
],


  results: [
  {
    text: "Game-changer for our business. Their SEO expertise has significantly boosted our online visibility and helped us reach new customers. Highly recommended for anyone looking to take their digital marketing to the next level!",
    author: "Ravi Bansal",
  },
  {
    text: "Promozione Branding has made running a business fun again, and also increased our customer base by 100%. Best dollars spent by far. Our internet marketer has made all the difference to our company and our bottom line.",
    author: "Ananya Iyer",
  },
  {
    text: "As a marketing executive with many years and experiences with agencies I can say that Promozione Branding is by far the best digital group I have ever had the opportunity to work with. I’ve led multiple projects with 3 different companies utilizing the services at Promozione Branding and we always see ROI. Beyond that, the education, responsiveness, professionalism and closed loop reporting make Promozione Branding my go to for digital marketing services. They are an extension of my lean internal marketing team.",
    author: "Siddharth Khurana",
  },
  {
    text: "Promozione Branding just get it. They take time to understand what you want to accomplish and why. Then they provide multiple options to get the job done. They are also willing to change quickly to adapt with changes in the business plan. Great service and wicked fast response times.",
    author: "Neha Varma",
  },
  {
    text: "Promozione Branding has been a great partner to our organization for years now. They are constantly improving our digital footprint and helping our organization grow and succeed. Our year over year growth has been incredible and our investment with Promozione Branding has proven very financially effective.",
    author: "Manoj Deshmukh",
  },
  {
    text: "Promozione Branding has been a great addition to our marketing efforts. Our account manager is top notch, understands my needs and always responds quickly with answers to my questions. She updates me constantly about what the team is doing, I am not worried that things are not being done when not asked, I am a data driven person so for me to be able to go in and see it for myself has been a great way for me to always know what's going on and get insights.",
    author: "Shurbhi Bhandari",
  },
  {
    text: "I've been thoroughly pleased with Promozione Branding's services. Their team's dedication, expertise, and innovative approach have significantly boosted our online presence and overall performance. Highly recommended!",
    author: "Aman Chawla",
  },
  {
    text: "From our start with Promozione Branding to the present, we have had nothing but a positive experience with a great ROI!",
    author: "Nidhi Patel",
  },
  {
    text: "Promozione Branding is the first SEO provider that has met all of our organizational objectives and then some.",
    author: "Vikram Singh",
  },
  {
    text: "Fantastic company to work with. I've continually seen an improvement in our website exposure and our continued increase in sales speaks for itself.",
    author: "Deepika Nair",
  },
],

support: [
  {
    text: "Promozione Branding provides top notch service with a team of friendly and professional experts. I am continuously impressed with their communication, unique technology and personalized strategies for fine-tuning results.",
    author: "Rahul Malhotra",
  },
  {
    text: "I usually don't look forward to meetings - unless these are meetings with Promozione Branding. The team is very responsive and always knowledgeable. It feels like they are less of a vendor, and more of an extension of our own team working towards the same goals.",
    author: "Pooja Mehra",
  },
  {
    text: "If you're looking for a digital marketing agency that truly cares about YOUR business and understands YOUR unique needs- look no further than Promozione Branding. Our company provides very niche services and the Promozione Branding team has gone above and beyond to understand our unique business and our company's tone-of-voice. Their communication is top-notch, we are always informed of what has been completed and what is next to come. They are always willing to help support in any task I throw their way and they consistently deliver innovative strategies and recommendations.",
    author: "Karan Desai",
  },
  {
    text: "Promozione Branding just get it. They take time to understand what you want to accomplish and why. Then they provide multiple options to get the job done. They are also willing to change quickly to adapt with changes in the business plan. Great service and wicked fast response times.",
    author: "Ritika Sharma",
  },
  {
    text: "The Promozione Branding team is extremely professional, friendly and provides personalized service. They take the time to understand your business' needs and are consistently implementing new strategies to improve results.",
    author: "Arjun Sethi",
  },
  {
    text: "Our team is always forward thinking about helping us reach our marketing goals - introducing new concepts and ways to accomplish our objectives. They are proactive about issues that could negatively impact us and stay ahead of technology changes, they help us increase our reach while respecting our budget. They are smart and responsive, and we feel like they truly are part of our team, working with us to achieve our goals and increase sales.",
    author: "Megha Chatterjee",
  },
  {
    text: "We are extremely satisfied with the level of service and results we continue to receive from Promozione Branding over the years and we expect to be with them for many more years to come!",
    author: "Rajeev Kapoor",
  },
  {
    text: "Promozione Branding goes above and beyond to understand the ins and outs of your business. Their customer service is top notch and they take the time to explain their processes.",
    author: "Nisha Jain",
  },
],


expertise: [
  {
    text: "Promozione Branding provides top notch service with a team of friendly and professional experts. I am continuously impressed with their communication, unique technology and personalized strategies for fine-tuning results.",
    author: "Aman Gupta",
  },
  {
    text: "The collection of bright and talented experts in all facets of digital marketing and advertising has allowed us to expand our reach well beyond what would have been possible with our small internal team.",
    author: "Sneha Verma",
  },
  {
    text: "The Promozione Branding team are a group of truly caring SEO and SEM specialists that offer helpful services that yield results at affordable price points.",
    author: "Ravi Khanna",
  },
  {
    text: "The Promozione Branding team is extremely professional, friendly and provides personalized service. They take the time to understand your business' needs and are consistently implementing new strategies to improve results.",
    author: "Ishita Bansal",
  },
  {
    text: "From our start with Promozione Branding to the present, we have had nothing but a positive experience with a great ROI!",
    author: "Nikhil Mehra",
  },
  {
    text: "Promozione Branding has given us the ability to reach customers that we never could previously.",
    author: "Preeti Deshmukh",
  },
  {
    text: "We have been a Promozione Branding customer for many months and continue to be pleased with the high level of service that we receive.",
    author: "Abhishek Jha",
  },
],

tech: [
  {
    text: "We hired Promozione to develop an AI chatbot for our website, and the results have been fantastic. It handles 80% of queries automatically and has improved our customer support efficiency drastically. What impressed us most was how Promozione balances design with functionality. Our site not only looks great — it actually converts better now.",
    author: "Dr. Richa Patel",
  },
  {
    text: "Promozione redesigned our website with a modern, mobile-first approach. The UI is clean, fast, and user-friendly. We’ve received amazing feedback from our customers. Their AI-based analytics dashboard gives us real-time insights we never had before. Now we can make faster, data-driven decisions.",
    author: "Vikram Singh",
  },
  {
    text: "Their AI-powered content suggestions and email targeting features helped increase our engagement significantly. A very knowledgeable and supportive team!",
    author: "Anjali Joshi",
  },
  {
    text: "The SEO and PPC services we received were top-notch. Our Google rankings improved in just 2 months, and the paid campaigns brought in high-converting leads.",
    author: "Rohit Nanda",
  },
  {
    text: "Promozione helped us integrate AI into our CRM to predict customer behavior. It’s made a big difference in how we prioritize leads. Worth every penny.",
    author: "Sonal Kapoor",
  },
  {
    text: "They built us a fully responsive, scalable web platform from scratch. Excellent communication, clear timelines, and great post-launch support.",
    author: "Devendra Rathi",
  },
  {
    text: "We ran our first AI-personalized email campaign with Promozione and saw a 35% increase in click-throughs. Their content and targeting were spot on.",
    author: "Harshita Menon",
  },
  {
    text: "What impressed us most was how Promozione balances design with functionality. Our site not only looks great — it actually converts better now.",
    author: "Kunal Arora",
  },
],


  };

  const [activeTab, setActiveTab] = useState("seo");

  return (
    <div>


<Helmet>
  <title>Client Reviews & Testimonials | Trusted Digital Marketing Agency</title>
  <meta
    name="description"
    content="Read authentic client reviews showcasing Promozione Branding’s proven digital marketing success. Trusted strategies delivering measurable growth and satisfaction."
  />
</Helmet>

      {/* Header Section */}
      <section className="container-fluid section-marketing position-relative overflow-hidden">
        {/* SVG Background */}
        <svg
          className="svg-bg"
          viewBox="0 0 1458 1362"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            className="path-animate svg-color"
            d="M146.963 34C68.8835 119.852 -35.7659 309.427 170.27 380.906C376.305 452.385 577.757 309.427 652.728 229.013L445.056 655.556C680.718 473.621 940.183 270.58 1161.6 433.738C1413.69 619.498 1151.24 937.204 940.183 919.717C738.576 903.012 761.883 668.375 940.183 628.751C1173.6 576.878 1569.6 809.302 1337.57 1160.18C1225.31 1329.94 977.475 1345.09 838.797 1265.85"
            stroke="#CDE9DE"
            strokeWidth="100"
            fill="none"
            strokeLinejoin="round"
          />
        </svg>

        {/* Content */}
        <div className="container position-relative">
          <div className="row align-items-center text-center ">
            <div className="col-12" data-aos="fade-right">
              <h1 className="display-5 fw-bold mb-3 mx-auto">
                {" "}
                Learn What It’s Like to Work With Promozione Branding
              </h1>
              <p className="text-black p-2 mx-auto">
                Curious about what it’s like to work with Promozione Branding?
                Explore our more than 100+ client testimonials and experience
                the impact of Digital Marketing That Drives Revenue. Hear from
                clients that partnered with Promozione Branding for search engine optimization
                (SEO) services, pay-per-click (PPC) advertising services, web
                design services, social media services, and other digital
                marketing services to learn what it’s like to have our team on
                yours. Join our raving fanbase! 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <div className="container py-5">
        <h2
          className="text-center  fw-bold col-12  "
          style={{ color: "#0D6EFD" }}
          data-aos="zoom-in "
        >
          Hear from our happy customers
        </h2>
        <div
          className="mx-auto mb-5 "
          data-aos="zoom-in"
          style={{ width: "60px", height: "4px", backgroundColor: "#0d6efd" }}
        ></div>

     <div className="row row-cols-2 row-cols-sm-3 row-cols-md-6 g-3 justify-content-center mb-4 " data-aos="zoom-up">
  {tabs.map((tab) => (
    <div className="col text-center" key={tab.id}>
      <button
        className={`tab-button btn w-100 d-flex flex-column align-items-center rounded-0 border-0 ${
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
    </div>
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
