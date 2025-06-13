import Tiltcard from "../../TiltCardHome/Tiltcard"
import Process from "../Process/Process"
import Service from "../Servicecomponent/Service"
import WhyChoose from "../WHYCHOOSE/WhyChoose"

const SeoWeb = () => {
      const cardItems = [
    {
      title: "Custom Shopify Store Design",
      icon: "🧪", // Lab flask — symbolizes analysis/testing
    },
    {
      title: "Product Page Design",
      icon: "🛠️", // Tools — perfect for tech/configuration
    },
    {
      title: "Mobile-Responsive Design",
      icon: "🎯", // Target — keyword precision and strategy
    },
    {
      title: "Theme Setup & Customization",
      icon: "📊", // Bar chart — content strategy and performance
    },
    {
      title: "Payment & Shipping Integration",
      icon: "🌍", // Globe — perfect for geographic/multi-location SEO
    },
    {
      title: "SEO Optimization",
      icon: "🔗", // Link — directly represents link building
    },
  ];
  return (
    <div>
   <Tiltcard
        heading="Shopify Web Designing Services in India – Launch Your Online Store with Style

"
        paragraph="Chahti hai aapki online store bhi ekdum premium dikhe aur sales laaye?
 Welcome to Promozione Branding Pvt. Ltd., where we turn your eCommerce dreams into high-converting, beautiful Shopify stores 
Whether you're starting fresh or revamping your old store, our Shopify Web Designing Services in India are built to impress both Google aur customers.
"
        cardItems={cardItems}
        services="Social Media Management Services "
      />


    </div>
  )
}

export default SeoWeb