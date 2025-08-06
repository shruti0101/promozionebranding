import { useEffect, useState } from "react";
import { blog_data } from "../../assets/blogs/assets";
import BlogTable from "./BlogTable";
import axios from "axios";
import { toast } from "react-toastify";

const ListBlog = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {

    try {

         const {data}= await axios.get("http://localhost:5000/api/admin/all-blogs")
      if(data.success){
        setBlogs(data.blogs)
      }

      else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <div className=" container flex-1 pt-5 px-5 bg-light">
        <h1>All Blogs</h1>

     <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead className="table-light ">
                <tr >
                  <th>#</th>
                  <th>Blog Title</th>
                  <th className="d-none d-md-table-cell ">Date</th>
                  <th className="d-none d-md-table-cell">Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog, index) => (
                  <BlogTable
                    key={blog._id || index}
                    blog={blog}
                    fetchDashboardData={fetchBlogs}
                    index={index + 1}
                  />
                ))}
                {blogs.length === 0 && (
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
    </>
  );
};

export default ListBlog;
