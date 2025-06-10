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
import Email from "./pages/email/Email"
import Socialmedia from "./pages/Socialmediamanagement/Socialmedia"

const PHPWebsiteDevelopment = () => <div>PHP Website Development</div>;
const CMSWebDevelopment = () => <div>CMS Web Development</div>;
const MernWebDevelopment = () => <div>Mern Web Development</div>;
const EcommerceWebDesigning = () => <div>Ecommerce Web Designing</div>;
const SEOWebDesigning = () => <div>SEO Web Designing</div>;
const WebsiteRedesigning = () => <div>Website Redesigning</div>;

const B2BMarketing = () => <div>B2B Marketing</div>;

const AIPerformanceMarketingServices = () => (
  <div>AI Performance Marketing Services</div>
);
const AdsManagement = () => <div>Ads Management</div>;
const InternetMarketing = () => <div>Internet Marketing</div>;
const ContentMarketing = () => <div>Content Marketing</div>;
const CRMOptimizations = () => <div>CRM Optimizations</div>;

const VideoMarketing = () => <div>Video Marketing</div>;

const SMO = () => <div>SMO</div>;
const SMM = () => <div>SMM</div>;
const AIDigitalMarketingServices = () => (
  <div>AI Digital Marketing Services</div>
);
const ECommerceSEOServices = () => <div>E-Commerce SEO Services</div>;
const DigitalMarketingServices = () => <div>Digital Marketing Services</div>;
const EnterpriseSEOServices = () => <div>Enterprise SEO Services</div>;
const AISEOServices = () => <div>AI SEO Services</div>;
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
          <Route
            path="services/development"
            element={<PHPWebsiteDevelopment />}
          />
          <Route path="services/marketing" element={<CMSWebDevelopment />} />
          {/* Add more specific routes as needed */}
          <Route path="services/mern" element={<MernWebDevelopment />} />
          <Route
            path="services/ecommerce"
            element={<EcommerceWebDesigning />}
          />
          <Route path="services/seo" element={<SEOWebDesigning />} />
          <Route path="services/redesign" element={<WebsiteRedesigning />} />

          {/* Revenue Marketing & CRO */}
          <Route
            path="services/performance"
            element={<Performance/>}
          />
          <Route path="services/b2b" element={<B2BMarketing />} />
          <Route path="services/leads" element={<Lead />} />
          <Route
            path="services/ai-performance"
            element={<AIPerformanceMarketingServices />}
          />
          <Route path="services/ads" element={<AdsManagement />} />
          <Route path="services/internet" element={<InternetMarketing />} />

          {/* Digital Marketing */}
          <Route path="services/content" element={<ContentMarketing />} />
          <Route path="services/crm" element={<CRMOptimizations />} />
          <Route path="services/email" element={<Email />} />
          <Route path="services/video" element={<VideoMarketing />} />
          <Route path="services/social" element={<Socialmedia />} />
          <Route path="services/smo" element={<SMO />} />
          <Route path="services/smm" element={<SMM />} />

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
            element={<EnterpriseSEOServices />}
          />
          <Route path="services/ai-seo" element={<AISEOServices />} />

          {/* Free SEO Audit */}
          <Route path="boost" element={<FreeSEOAudit />} />
        </Route>
      </Routes>

      <ScrollToTop></ScrollToTop>
    </div>
  );
}

export default App;
