import { useEffect, useState } from "react";
import { blog_data } from "../../assets/blogs/assets";
import BlogTable from "./BlogTable";

const ListBlog = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    setBlogs(blog_data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <div className="flex-1 pt-5 px-5 bg-light">
        <h1>All Blogs</h1>

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
