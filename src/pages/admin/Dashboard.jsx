import React, { useEffect, useState } from 'react';
import { assets, dashboard_data } from '../../assets/blogs/assets';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    drafs: 0,
    recentBlogs: []
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
        {/* Dashboard Cards */}
        <div className="row g-4 mt-2">
          {/* Blogs Card */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card shadow-sm p-3 d-flex flex-row align-items-center gap-3">
              <div className="bg-primary rounded-circle d-flex justify-content-center align-items-center" style={{ width: '60px', height: '60px' }}>
                <img src={assets.dashboard_icon_1} alt="Blogs Icon" style={{ width: '30px', height: '30px' }} />
              </div>
              <div>
                <p className="fs-4 fw-bold m-0">{dashboardData.blogs}</p>
                <p className="text-muted m-0">Blogs</p>
              </div>
            </div>
          </div>

          {/* Drafts Card */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card shadow-sm p-3 d-flex flex-row align-items-center gap-3">
              <div className="bg-warning rounded-circle d-flex justify-content-center align-items-center" style={{ width: '60px', height: '60px' }}>
                <img src={assets.dashboard_icon_2} alt="Drafts Icon" style={{ width: '30px', height: '30px' }} />
              </div>
              <div>
                <p className="fs-4 fw-bold m-0">{dashboardData.drafs}</p>
                <p className="text-muted m-0">Drafts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Blogs Section */}
   
      </div>
    </>
  );
};

export default Dashboard;
