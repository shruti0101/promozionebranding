import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";

import Layout from "./Layout";

import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange";
import ScrollToTop from "./components/ScrollToTop";
import Whatsapp from "./components/Whatsapp";
import Social from "./components/SOCIALSLIDER/Social";
// import Popup from "./components/POPUP/Popup";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* — pages — */
import Home from "./components/Home/Home";

import Whoweare from "./pages/who we are/Whoweare";
import Review from "./pages/Reviews/Review";
import Approach from "./pages/Ourapproach.jsx/Approach";
import BlogList from "./pages/Blog/BlogList";
import BlogPage from "./pages/Blog/BlogPage";
import AllBlogs from "./pages/Blog/AllBlog";

import Wordpress from "./pages/wordpress/Wordpress";
import Performance from "./pages/performancemarket/Performance";
import Lead from "./pages/lead/Lead";
import Email from "./pages/email/Email";
import Socialmedia from "./pages/Socialmediamanagement/Socialmedia";
import Content from "./pages/content/Content";
import Seoservices from "./pages/SeoServices/Seoservices";
import Demand from "./pages/DemandGenerate/Demand";
import B2b from "./pages/B2Bmarket/B2b";
import CustomWeb from "./pages/CustomWeb/CustomWeb";
import Php from "./pages/PHP/Php";
import Cms from "./pages/Cms/Cms";
import Reactt from "./pages/React/Reactt";
import Enterpriseseo from "./pages/EnterpriseSEO/Enterpriseseo";
import Shopify from "./pages/shopify/Shopify";
import SeoWeb from "./pages/SEOwebdesing/SeoWeb";
import GoogleAds from "./pages/Googleads/GoogleAds";
import Crm from "./pages/CrmOptimization/Crm";
import GoogleAdword from "./pages/GoogleAdword/GoogleAdword";
import Video from "./pages/Video/Video";
import AiPerformance from "./pages/AI performance market/AiPerformance";
import Internet from "./pages/InternetMarketing/Internet";
import Contact from "./components/contact-us/Contact";
import Career from "./pages/Careerpage/Career";
import B2c from "./pages/B2c Market/B2c";
import D2c from "./pages/D2C/D2c";
import Ads from "./pages/ADS management/Ads";
import Smo from "./pages/SMO/Smo";
import Webredesign from "./pages/WEB REDESIGN/Webredesign";
import Landing from "./pages/Landingpage/Landing";
import Aidigital from "./pages/AIdigital/Aidigital";
import Digital from "./pages/Digitalmarket/Digital";
import Webapp from "./pages/Webapp/Webapp";
import B2bweb from "./pages/B2Bwebdev/B2bweb";
import Web from "./pages/webawarenesspackage/Web";
import { Navigate } from "react-router-dom";

import Popup from "./components/POPUP/Popup";
import Socialpackage from "./pages/Socialpackage/Socialpackage";
import Seopackage from "./pages/Seopackage/Seopackage";
import Adspackage from "./pages/Adspackage/Adspackage";


function App() {
  return (
    <div>
      <ToastContainer />
      <ScrollToTopOnRouteChange />
      <Whatsapp />
      <Social />
      <Popup />

      <Routes>
        {/* ——— root layout route ——— */}
        <Route path="/" element={<Layout />}>
          {/* home ("/") */}
          <Route index element={<Home />} />

          {/* —— Company Profile —— */}
          <Route path="profile/OurApproach" element={<Approach />} />
          <Route path="profile/whoweare" element={<Whoweare />} />
          <Route path="profile/blogs" element={<BlogList />} />
          <Route path="profile/blogs/all" element={<AllBlogs />} />
          <Route path="profile/blogs/:id" element={<BlogPage />} />
          <Route path="profile/reviews" element={<Review />} />
          <Route path="profile/career" element={<Career />} />

          {/* —— Website Development —— */}
          <Route
            path="services/wordpress-website-services"
            element={<Wordpress />}
          />
          <Route
            path="services/custom-web-development-services"
            element={<CustomWeb />}
          />
          <Route
            path="services/php-website-development-services"
            element={<Php />}
          />
          <Route
            path="services/cms-web-development-services"
            element={<Cms />}
          />
          <Route
            path="services/react-web-development-services"
            element={<Reactt />}
          />
          <Route
            path="services/shopify-web-designing-services"
            element={<Shopify />}
          />
          <Route
            path="services/seo-web-designing-services"
            element={<SeoWeb />}
          />
          <Route
            path="services/website-redesigning-services"
            element={<Webredesign />}
          />
          <Route
            path="services/landing-page-design-services"
            element={<Landing />}
          />
          <Route
            path="services/web-application-development-services"
            element={<Webapp />}
          />
          <Route
            path="services/b2b-web-development-services"
            element={<B2bweb />}
          />

          {/* —— Revenue Marketing & CRO —— */}
          <Route
            path="services/performance-marketing-services"
            element={<Performance />}
          />
          <Route path="services/b2b-marketing-services" element={<B2b />} />
          <Route
            path="services/b2b-lead-generation-services"
            element={<Lead />}
          />
          <Route
            path="services/ai-performance-marketing-services"
            element={<AiPerformance />}
          />
          <Route
            path="services/demand-generation-services"
            element={<Demand />}
          />
          <Route path="services/ads-management-services" element={<Ads />} />
          <Route
            path="services/internet-marketing-services"
            element={<Internet />}
          />
          <Route path="services/b2c-marketing-services" element={<B2c />} />
          <Route path="services/d2c-marketing-services" element={<D2c />} />

          {/* —— Digital Marketing —— */}
          <Route
            path="services/content-marketing-services"
            element={<Content />}
          />
          <Route path="services/crm-optimizations-services" element={<Crm />} />
          <Route path="services/email-marketing-services" element={<Email />} />
          <Route path="services/video-marketing-services" element={<Video />} />
          <Route path="services/social-media-optimization" element={<Smo />} />
          <Route
            path="services/social-media-marketing"
            element={<Socialmedia />}
          />
          <Route
            path="services/microsoft-bing-ads-services"
            element={<GoogleAds />}
          />
          <Route
            path="services/google-adword-ppc-services"
            element={<GoogleAdword />}
          />
          <Route path="contact" element={<Contact />} />

          {/* —— Guaranteed SEO —— */}
          <Route
            path="services/ai-digital-marketing-services"
            element={<Aidigital />}
          />
          <Route
            path="services/digital-marketing-services"
            element={<Digital />}
          />
          <Route
            path="services/enterprise-seo-services"
            element={<Enterpriseseo />}
          />
          <Route path="services/ai-seo-services" element={<Seoservices />} />

          {/* packages */}

         <Route path="/packages/web-awareness" element={<Web></Web>}/>
<Route path="/packages/social-media-management" element={<Socialpackage></Socialpackage>}/>
<Route path="/packages/seo" element={<Seopackage></Seopackage>}/>
<Route path="/packages/Ads-management" element={<Adspackage></Adspackage>}/>


          {/* —— 404 catch‑all (keep LAST) —— */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>

      <ScrollToTop />
    </div>
  );
}

export default App;
