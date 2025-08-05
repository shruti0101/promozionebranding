import { Link, useNavigate, Outlet } from "react-router-dom";
import logoo from "../../assets/logoo.webp";
import Sidebar from "../../components/SIDEBAR/Sidebar";

const Layoutt = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 1. Remove token from localStorage
    localStorage.removeItem("token");

    // 2. Optional: Clear cookies if needed (token might be in cookie too)
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // 3. Navigate to login or home page
    navigate("/");
  };

  return (
    <>
      {/* Top Navbar */}
      <div className="d-flex border-bottom border-secondary p-3 justify-content-between align-items-center">
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

        <button className="btn btn-primary" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Sidebar + Main Content */}
      <div className="">
        <Sidebar />

        {/* Main Content Area */}
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layoutt;
