import { useEffect, useState } from "react";
import { assets, dashboard_data } from "../../assets/blogs/assets";
import BlogTable from "./BlogTable";
import { toast } from "react-toastify";
import axios from "axios";

const Dashboard = () => {




  
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    drafts: 0,
    recentBlogs: [],
  });



  const fetchDashboardData = async () => {
    
    try {
      const {data}= await axios.get('http://localhost:5000/api/admin/dashboard')
      data.success ? setDashboardData(data.dashboardData): toast.error(data.message)
    } catch (error) {
      toast.error(error.message)
    }
   

  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <>
      <div className="container">
        {/* Recent Blogs Table (Full Width) */}
        <div className="card shadow-sm p-4 mt-5">
          <div className="d-flex align-items-center gap-3 mb-3">
            <div
              className="bg-light rounded-circle d-flex justify-content-center align-items-center"
              style={{ width: "50px", height: "50px" }}
            >
              <img
                src={assets.dashboard_icon_4}
                alt="Recent Blogs Icon"
                style={{ width: "30px", height: "30px" }}
              />
            </div>
            <h5 className="m-0 fs-4 text-primary">Recent Blogs</h5>
          </div>

          <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>#</th>
                  <th>Blog Title</th>
                  <th className="d-none d-md-table-cell">Date</th>
                  <th className="d-none d-md-table-cell">Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {dashboardData.recentBlogs.map((blog, index) => (
                  <BlogTable
                    key={blog._id || index}
                    blog={blog}
                    fetchDashboardData={fetchDashboardData}
                    index={index + 1}
                  />
                ))}
                {dashboardData.recentBlogs.length === 0 && (
                  <tr>
                    <td colSpan="5" className="text-center text-muted py-4">
                      No recent blogs found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Cards Row */}
        <div className="d-flex flex-wrap flex-md-nowrap gap-4 mt-4 align-items-stretch">
          {/* Blogs Card */}
          <div className="shadow-sm pb-5 d-flex flex-column align-items-center gap-3 flex-grow-1">
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
              <p className="fs-2 text-black m-0">Total Number of Blogs Added</p>
            </div>
          </div>

          {/* Drafts Card */}
          {/* <div className="card shadow-sm p-4 d-flex flex-column align-items-center gap-3 flex-grow-1">
            <div
              className="bg-warning rounded-circle d-flex justify-content-center align-items-center"
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
              <p className="fs-2 text-black m-0">Total Blogs</p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
