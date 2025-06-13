import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import Layout from "./Layout";

import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange";
import ScrollToTop from "./components/ScrollToTop";

import Whoweare from "./pages/who we are/Whoweare";
import Review from "./pages/Reviews/Review";
import Approach from "./pages/Ourapproach.jsx/Approach";
import BlogList from "./pages/Blog/BlogList";
import BlogPage from "./pages/Blog/BlogPage";
import AllBlogs from "./pages/Blog/AllBlog";
import Home from "./components/Home/Home";
import Wordpress from "./pages/wordpress/Wordpress";
import Performance from "./pages/performancemarket/Performance";
import Lead from "./pages/lead/Lead";
import Email from "./pages/email/Email";
import Socialmedia from "./pages/Socialmediamanagement/Socialmedia";
import Content from "./pages/content/Content";
import Seoservices from "./pages/SeoServices/Seoservices";
import Demand from "./pages/DemandGenerate/Demand";
import B2b from "./pages/B2Bmarket/B2b"
import CustomWeb from "./pages/CustomWeb/CustomWeb";
import Php from "./pages/PHP/Php";
import Cms from "./pages/Cms/Cms";
import Reactt from "./pages/React/Reactt";
import Enterpriseseo from "./pages/EnterpriseSEO/Enterpriseseo"
import Shopify from "./pages/shopify/Shopify";
import SeoWeb from "./pages/SEOwebdesing/SeoWeb";
import GoogleAds from "./pages/Googleads/GoogleAds";
import Crm from "./pages/CrmOptimization/Crm"
import GoogleAdword from "./pages/GoogleAdword/GoogleAdword";
import Video from "./pages/Video/Video";
import AiPerformance from "./pages/AI performance market/AiPerformance";
import Internet from "./pages/InternetMarketing/Internet"






const WebsiteRedesigning = () => <div>Website Redesigning</div>;



const AdsManagement = () => <div>Ads Management</div>;





const SMO = () => <div>SMO</div>;
const Socialads = () => <div>socialads</div>;
const AIDigitalMarketingServices = () => (
  <div>AI Digital Marketing Services</div>
);
const ECommerceSEOServices = () => <div>E-Commerce SEO Services</div>;
const DigitalMarketingServices = () => <div>Digital Marketing Services</div>;


const FreeSEOAudit = () => <div>Free SEO Audit</div>;

function App() {
  return (
    <div>
      <ScrollToTopOnRouteChange />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          {/* Company Profile */}
          <Route path="profile/OurApproach" element={<Approach />} />
          <Route path="profile/whoweare" element={<Whoweare />} />
          <Route path="profile/blogs" element={<BlogList />} />
          <Route path="profile/blogs/all" element={<AllBlogs />} />
          <Route path="profile/blogs/:id" element={<BlogPage />} />

          <Route path="profile/reviews" element={<Review />} />

          {/* Website Development */}
          <Route path="services/design" element={<Wordpress />} />
          <Route path="services/custom" element={<CustomWeb/>}> </Route>
          <Route
            path="services/development"
            element={<Php />}
          />
          <Route path="services/marketing" element={<Cms />} />
          {/* Add more specific routes as needed */}
          <Route path="services/mern" element={<Reactt />} />
          <Route
            path="services/ecommerce"
            element={< Shopify />}
          />
          <Route path="services/seo" element={<SeoWeb />} />
          <Route path="services/redesign" element={<WebsiteRedesigning />} />

          {/* Revenue Marketing & CRO */}
          <Route path="services/performance" element={<Performance />} />
          <Route path="services/b2b" element={<B2b />} />
          <Route path="services/leads" element={<Lead />} />
          <Route
            path="services/ai-performance"
            element={<AiPerformance />}
          />
          <Route path="services/demand" element={<Demand />} />
          <Route path="services/ads" element={<AdsManagement />} />
          <Route path="services/internet" element={<Internet />} />

          {/* Digital Marketing */}
          <Route path="services/content" element={<Content />} />
          <Route path="services/crm" element={<Crm />} />
          <Route path="services/email" element={<Email />} />
          <Route path="services/video" element={<Video />} />
          <Route path="services/social" element={<Socialads />} />
          <Route path="services/smo" element={<SMO />} />
          <Route path="services/smm" element={<Socialmedia />} />
           <Route path="/services/google" element={<GoogleAds />} />
          <Route path="/services/google-ads" element={<GoogleAdword />} />




          {/* Guaranteed SEO */}
          <Route
            path="services/ai-digital"
            element={<AIDigitalMarketingServices />}
          />
          <Route
            path="services/ecommerce-seo"
            element={<ECommerceSEOServices />}
          />
          <Route
            path="services/digital-seo"
            element={<DigitalMarketingServices />}
          />
          <Route
            path="services/enterprise-seo"
            element={<Enterpriseseo />}
          />
          <Route path="services/ai-seo" element={<Seoservices />} />

          {/* Free SEO Audit */}
          <Route path="boost" element={<FreeSEOAudit />} />
        </Route>
      </Routes>

      <ScrollToTop></ScrollToTop>
    </div>
  );
}

export default App;
