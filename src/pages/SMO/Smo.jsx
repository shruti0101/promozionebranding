import Service from "../Servicecomponent/Service";
import funnel from "../../assets/services/funnel.webp";
import Story from "../Story/Story";
import Form2 from "../../components/Home/Landingpage/Form2";
import ctaImage from "../../assets/ctaweb.webp";
import Process from "../Process/Process";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Tiltcard from "../../TiltCardHome/Tiltcard";
import crm2 from "../../assets/services/smo3.webp";
import VanillaTilt from "vanilla-tilt";
import WhyChoose from "../WHYCHOOSE/WhyChoose";
import crm from "../../assets/services/smo4.webp";
import smo2 from "../../assets/services/smo2.webp";



const Smo = () => {
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
    title: "Profile Optimization",
    icon: "👤", // Profile/User icon — best match for optimization
  },
  {
    title: "Content Planning & Strategy",
    icon: "🗓️", // Calendar — perfect for content planning
  },
  {
    title: "Hashtag & Trend Research",
    icon: "🏷️", // Tag — clearly represents hashtags
  },
  {
    title: "Community Engagement",
    icon: "💬", // Speech bubble — symbol of interaction/conversation
  },
  {
    title: "Performance Tracking",
    icon: "📊", // Bar chart — ideal for tracking analytics
  },
  {
    title: "Branded Posts & Creative Design",
    icon: "🎨", // Paint palette — represents creative and visual design
  },
];


const funnelData = [
  {
    title: "Step 1: Business Audit & Strategy Planning",
    services: [
      "Sabse pehle, aapka brand, audience aur business goals samajhte hain.",
      "Profile audit ke zariye identify karte hain kya improve karna hai: bio, handle, images, links.",
    ],
    color: "#2563eb", // Blue
  },
  {
    title: "Step 2: Content Planning & Strategy",
    services: [
      "Har platform ke liye monthly content calendar banaya jata hai.",
      "Reels, stories, carousels — har format ke liye engaging & educational ideas tayar kiye jate hain.",
    ],
    color: "#16a34a", // Green
  },
  {
    title: "Step 3: Creative Design & Hashtag Research",
    services: [
      "Visually stunning posts banaye jate hain jo brand ke saath match karte ho.",
      "Trending hashtags aur relevant topics ka research karke maximum reach ensure kiya jata hai.",
    ],
    color: "#f59e0b", // Amber
  },
  {
    title: "Step 4: Posting & Community Engagement",
    services: [
      "Scheduled posts across Instagram, LinkedIn, Facebook, etc. with optimal timing.",
      "Comments, DMs, reviews – sabka timely response for better follower engagement.",
    ],
    color: "#ec4899", // Pink
  },
  {
    title: "Step 5: Performance Monitoring & Optimization",
    services: [
      "Engagement metrics jaise likes, shares, reach & saves ka regular analysis hota hai.",
      "Low-performing content ko tweak karke better performance ke liye optimize kiya jata hai.",
    ],
    color: "#0ea5e9", // Sky blue
  },
  {
    title: "Step 6: Reporting & Strategy Update",
    services: [
      "Weekly ya monthly reports milti hain with growth summary, engagement & ROI analysis.",
      "Strategy ko continuously refine kiya jata hai based on what's working best.",
    ],
    color: "#222", // Dark
  },
];

const services = [
  {
    icon: "bi-person-lines-fill", // Better for bio/profile optimization
    title: "Profile Optimization",
    description:
      "We fine-tune your bios, handles, images & links across all major platforms.",
  },
  {
    icon: "bi-calendar-event", // Represents content scheduling
    title: "Content Planning & Strategy",
    description:
      "Monthly content calendar designed to engage & educate your audience.",
  },
  {
    icon: "bi-palette", // Stronger visual for creative work
    title: "Branded Posts & Creative Design",
    description:
      "Visually stunning graphics, reels, stories, carousels — sab kuch included!",
  },
  {
    icon: "bi-hash", // Hashtag icon is perfect as-is
    title: "Hashtag & Trend Research",
    description:
      "Right hashtags = more reach. We make sure your posts are always on-point.",
  },
  {
    icon: "bi-chat-dots", // More dynamic for community conversations
    title: "Community Engagement",
    description:
      "We reply to DMs, comments, reviews, and keep your followers feeling valued.",
  },
  {
    icon: "bi-bar-chart-line", // Cleaner analytics icon
    title: "Performance Tracking",
    description:
      "Weekly & monthly reports to track growth, engagement, and ROI.",
  },
];


  const points = [
    "Increases organic reach & visibility",
    "Boosts social engagement & shares",
    "Builds brand authority & trust",
    "Drives website traffic from social platforms",
    "Improves local & online presence",
    "Creates meaningful interactions with your audience",
  ];
  const note = [
    "If you're not optimizing your social media, you're leaving money on the table.",
  ];

  const features = [
    " 360° Social Strategy + Execution",
    "Creative, catchy, and culturally relevant content",
    "In-house design, writing & engagement team",
    " Affordable plans for Indian startups, SMEs & solopreneurs",
    "100% transparency with measurable results",
    "Affordable packages for startups, SMEs & D2C brands",
  ];



  return (
    <>


<Helmet>
  <title>SMO Services | Best Social Media Optimization Company</title>
  <meta
    name="description"
    content="SMO stands for social media optimization. SMO services cover all the social media platforms and use them to promote your business via various tactics"
  />
</Helmet>

      <Tiltcard
        heading="SMO Services – Get Noticed. Get Talked About. Get Results 



"
        paragraph="Tired of posting and getting no response?
 With our SMO (Social Media Optimization) Services, your brand doesn't just exist online — it becomes visible, engaging, and share-worthy across platforms.
At Promozione Branding Pvt. Ltd., we help you create a social media presence that builds community, trust, and traffic — organically.



"
        cardItems={cardItems}
      />

      {/* what is section */}

      <section className=" py-5 position-relative overflow-hidden">
        {/* Background Blob */}
        <div className="blob-bg"></div>

        <div className="container">
          <div className="row align-items-center flex-wrap-reverse">
            {/* Text Content */}
            <div className="col-md-6" data-aos="fade-right">
              <h2 className="php-heading">
                What is <span style={{ color: "#2548BD" }}>Social Media Optimization ?</span>{" "}
              </h2>
              <p className="php-desc">
                <strong>Social Media Optimization (SMO) </strong> is all about{" "}
                <strong>
                  strategically improving your social media profiles, posts, and
                  engagement
                </strong>
                to build brand awareness, connect with your audience, and drive
                results — without relying entirely on paid ads. Think of it as
                SEO's cool, creative cousin — but for Instagram, Facebook,
                LinkedIn, Twitter, and more.
                <strong>
                  get leads, drive sales, or grow brand awareness
                </strong>{" "}
                — we make sure your ads do the heavy lifting.
              </p>
           
            </div>

            {/* Tilted SVG */}
            <div
              className="col-md-6 text-center mb-4 mb-md-0"
              data-aos="zoom-in"
            >
              <div className="php-illustration tilt">
                <img src={crm2} alt="google adword" className="svg-float" />
              </div>
            </div>
          </div>
        </div>
      </section>

  

      {/* objective */}
      <section className="">
        <div className="container" >
          <div className="row"data-aos="fade-up">
            <img src={smo2} className="img-fluid" alt="" />
          </div>
        </div>
      </section>


      {/* our process */}
      <Process
        title="Our SMO  Process"
        image={funnel}
        data={funnelData}
      ></Process>


          {/* why choose */}

      <WhyChoose
        title="Why Choose
"
        highlightedText="Promozione for Social Media Optimization ?
"
        features={features}
        para="No bots. No fake followers. Just real engagement.
    With our SMO services, we help you build a community that cares about your brand.

"
        ctaTitle="Ready to Take Your Social Media from Basic to Buzz-Worthy?


"
        ctaSubtext="Real CTAs for Real Growth "
        ctaParagraph="Stop posting in the dark. Let’s optimize your social presence and make your brand a conversation starter.


 "
        ctaButtonText="Let’s Get Started"
      />

      {/* our services */}

      <Service
        title="What’s Included in Our SMO Services:?
"
        subtitle="Why Your Business Needs SMO
"
        points={points}
        note={note}
        services={services}
        image={crm}
      />

      {/*  other parts*/}
      <Story></Story>
      <Form2
        heading="Let's Build Your Success Story Together"
        price="Your Growth is Our Guarantee."
        buttonText="Click Now, Thank Us Later."
        image={ctaImage}
      ></Form2>
    </>
  );
};

export default Smo;
