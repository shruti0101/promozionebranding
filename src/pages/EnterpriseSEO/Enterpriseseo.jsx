import Tiltcard from "../../TiltCardHome/Tiltcard";
import enterprise from "../../assets/services/enterprise.png"
const Enterpriseseo = () => {
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
At Promozione Branding Pvt. Ltd., we deliver Enterprise SEO Services in India that blend technical SEO mastery + content depth + automation + performance marketing for high-impact results.
Scale your search presence, not your stress.


"
        cardItems={cardItems}
      />

      {/* section 2 */}

      <div className="container p-5" >
         <div className="row">

   <div className="col-md-7 ">
             <h1 className="text-black">
               {" "}
                Why  <span className="" style={{color:"#2548BD"}}>
                Enterprise Brands 

               </span>{" "}Choose Us
             </h1>
 
             <p className=" pt-4 lh-lead fs-5">
              Proven track record with large websites
100% white-hat, Google-friendly practices
Cross-team collaboration (we work with your in-house team too)
 Seamless CMS + tech stack integration
 Tailored strategies for B2B, B2C, SaaS, eCom & Multi-location brands
 Dedicated SEO manager & regular strategy reviews
We’re not just an agency. We’re your 
               <strong>search strategy partner.</strong>
             </p>
           </div>



           <div className="col-md-5">
             <img
               src={ enterprise}
               className=" img-fluid mb-4"
               alt="content-marketing"
             />
           </div>
 
        
         </div>
       </div>
    </div>
  );
};

export default Enterpriseseo;
