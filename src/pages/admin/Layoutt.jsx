import { Link, useNavigate, Outlet } from "react-router-dom";
import logoo from "../../assets/logoo.webp";
import Sidebar from "../../components/SIDEBAR/Sidebar";

const Layoutt = () => {
  const navigate = useNavigate();  // ✅ Small 'n'

  return (
    <>
      {/* Top Navbar */}
      <div className="d-flex border-bottom border-dark p-3 justify-content-between align-items-center" >
        <Link to="/">
          <img
            src={logoo}
            alt="logo"
            width="70"
            height="70"
            className="rounded-circle d-inline-block align-text-top"
          />
        </Link>

        <p className="fw-bold fs-1 text-capitalize m-0">Welcome to Admin Panel</p>

        <button className="btn btn-primary" onClick={() => navigate("/")}>
          Logout
        </button>
      </div>

      {/* Sidebar + Main Content */}
      <div className="d-flex">
        <Sidebar />

        {/* Main Content Area */}
        <div >
          <Outlet /> {/* This will render Dashboard, AddBlog, ListBlog */}
        </div>
      </div>
    </>
  );
};

export default Layoutt;
