import React from 'react';
import { assets } from '../../assets/blogs/assets';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <>
      <section 
        className="bg-primary d-flex flex-column align-items-start pt-4 gap-4"
        style={{ height: '100vh', width: '260px' }}
      >
        {/* Dashboard Link */}
        <NavLink 
          end={true}
          to="/admin/dashboard"
          className={({ isActive }) =>
            `d-flex align-items-center gap-3 py-3 px-3 w-100 rounded border cursor-pointer ${
              isActive ? "bg-white text-black shadow-sm" : "text-white"
            }`
          }
          style={{ textDecoration: 'none', transition: 'all 0.3s ease' }}
        >
          <img 
          className='text-white'
            src={assets.home_icon} 
            alt="Dashboard Icon" 
            style={{ width: '24px', height: '25px',color:"white" }} 
          />
          <p className="mb-0 fs-5 fw-semibold">Dashboard</p>
        </NavLink>

        {/* Add Blog Link */}
        <NavLink 
          to="/admin/addblog"
          className={({ isActive }) =>
            `d-flex align-items-center gap-3 py-3 border px-3 w-100 rounded cursor-pointer ${
              isActive ? "bg-white text-black shadow-sm" : "text-white"
            }`
          }
          style={{ textDecoration: 'none', transition: 'all 0.3s ease' }}
        >
          <img 
            src={assets.add_icon} 
            alt="Add Blog Icon" 
            style={{ width: '24px', height: '25px' }} 
          />
          <p className="mb-0 fs-5 fw-semibold">Add Blog</p>
        </NavLink>

        {/* Add more NavLinks below as needed */}

             <NavLink 
          to="/admin/listblog"
          className={({ isActive }) =>
            `d-flex align-items-center gap-3 py-3 border px-3 w-100 rounded cursor-pointer ${
              isActive ? "bg-white text-black shadow-sm" : "text-white"
            }`
          }
          style={{ textDecoration: 'none', transition: 'all 0.3s ease' }}
        >
          <img 
            src={assets.list_icon} 
            alt="Add Blog Icon" 
            style={{ width: '24px', height: '25px' }} 
          />
          <p className="mb-0 fs-5 fw-semibold">Blog List</p>
        </NavLink>
      </section>
    </>
  );
};

export default Sidebar;
