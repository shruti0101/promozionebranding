import  { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import { blog_data } from "../../assets/blogs/assets";

const BlogList = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulate loading delay (e.g., API call)
    const timer = setTimeout(() => {
      setLoading(true);
    }, 1000); // 1 second loading time

    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <>
      <div className="container text-center p-4">
        <h1 className="fw-bold">Welcome to the Blog Page</h1>
        <p className="fw-semibold">Explore some of our blogs</p>
      </div>

      <div className="container">
        <div className="row">
          {loading ? (
            blog_data.map((blog) => (
              <div className="col-md-4 col-12 mb-4" key={blog._id}>
                <BlogCard blog={blog} />
              </div>
            ))
          ) : (
            <p className="text-center fw-bold p-5">Loading blogs...</p>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogList;
