import { Outlet } from "react-router-dom";
// import Topbar from "./components/topbar/Topbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const Layout = () => {
  return (
    <div>

    
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
