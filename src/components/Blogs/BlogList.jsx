import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import axios from "axios";

const BlogList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      const res = await axios("http://localhost:5000/api/admin/all-blogs");
      setData(res.data.blogs);
    } catch (error) {
      console.error("Failed to fetch blogs", error);
    } finally {
      setLoading(true);  // Set loading to true after fetch completes
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container text-center p-4">
        <h1 className="fw-bold">Welcome to the Blog Page</h1>
        <p className="fw-semibold fs-4">Explore some of our blogs</p>
      </div>

      <div className="container">
        <div className="row">
          {!loading ? (
            <p className="text-center fw-bold p-5">Loading blogs...</p>
          ) : data.length === 0 ? (
            <p className="text-center fw-bold p-5">No Blogs Found</p>
          ) : (
            data.map((blog) => (
              <div className="col-md-4 col-12 mb-4" key={blog._id}>
                <BlogCard blog={blog} />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default BlogList;
