import  { useEffect, useState } from "react";
import { assets, dashboard_data } from "../../assets/blogs/assets";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    drafts: 0,
    recentBlogs: [],
  });

  const fetchDashboardData = async () => {
    setDashboardData(dashboard_data);
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="d-flex flex-wrap mx-5 flex-md-nowrap gap-4 mt-4 align-items-stretch">
          {/* Blogs Card */}
          <div className="card shadow-sm p-5 d-flex flex-column align-items-center gap-3 flex-grow-1">
            <div
              className="bg-primary rounded-circle d-flex justify-content-center align-items-center"
              style={{ width: "60px", height: "60px" }}
            >
              <img
                src={assets.dashboard_icon_1}
                alt="Blogs Icon"
                style={{ width: "40px", height: "40px" }}
              />
            </div>
            <div className="d-flex pt-3 align-items-center justify-content-center flex-column">
              <p className="fs-2 fw-bold m-0">{dashboardData.blogs}</p>
              <p className="fs-2 text-black m-0">Blogs</p>
            </div>
          </div>

          {/* Drafts Card */}
          <div className="card shadow-sm p-5 d-flex flex-column align-items-center gap-3 flex-grow-1">
            <div
              className="bg-warning rounded-circle  d-flex justify-content-center align-items-center"
              style={{ width: "60px", height: "60px" }}
            >
              <img
                src={assets.dashboard_icon_2}
                alt="Drafts Icon"
                style={{ width: "40px", height: "40px" }}
              />
            </div>
            <div className="d-flex pt-3 align-items-center justify-content-center flex-column">
              <p className="fs-2 fw-bold m-0">{dashboardData.drafts}</p>
              <p className="fs-2 text-black m-0">Drafts</p>
            </div>
          </div>

          {/* recent blogs */}
          <div className="card shadow-sm p-5 d-flex flex-column align-items-center gap-3 flex-grow-1">
            <div
              className="bg-white rounded-circle  d-flex justify-content-center align-items-center"
              style={{ width: "60px", height: "60px" }}
            >
              <img
                src={assets.dashboard_icon_4}
                alt="Drafts Icon"
                style={{ width: "40px", height: "40px" }}
              />
            </div>
            <div className="d-flex pt-3 align-items-center justify-content-center flex-column">
              <p className="fs-2 fw-bold m-0">{dashboardData.drafts}</p>
              <p className="fs-2 text-black m-0">
                Recent <br></br> Blogs
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
