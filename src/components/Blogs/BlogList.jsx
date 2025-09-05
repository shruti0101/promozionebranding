import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import axios from "axios";
import "./blog.css";

const BlogList = () => {
  const [data, setData] = useState([]); // always an array
  const [visibleBlogs, setVisibleBlogs] = useState(6);
  const [loading, setLoading] = useState(true); // start as true
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/admin/all-blogs`);
      setData(res.data.blogs || []); // fallback to empty array
    } catch (error) {
      console.error("Failed to fetch blogs", error);
      setError("Failed to load blogs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLoadMore = () => {
    setVisibleBlogs((prev) => prev + 6);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="blog-hero-section text-center py-5 text-white">
        <div className="container">
          <h1 className="fw-bold text-white display-5 mb-3 mt-3">Welcome to the Blog Page</h1>
          <p className="lead">Explore insights, tips, and updates from our team</p>
        </div>
      </div>

      {/* Blog List */}
      <div className="container py-5">
        <div className="row">
          {loading ? (
            <div className="text-center py-5 w-100">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3 fw-semibold">Loading blogs...</p>
            </div>
          ) : error ? (
            <p className="text-center text-danger w-100">{error}</p>
          ) : data.length === 0 ? (
            <p className="text-center fw-semibold fs-5 text-muted w-100">No Blogs Found</p>
          ) : (
            data.slice(0, visibleBlogs).map((blog, index) => (
              <div
                className="col-md-6 col-lg-4 col-12 mb-4 animate__animated animate__fadeInUp"
                key={blog._id}
                style={{ animationDelay: `${index * 0.1}s`, animationDuration: "0.5s" }}
              >
                <BlogCard blog={blog} />
              </div>
            ))
          )}
        </div>

        {/* Load More Button */}
        {!loading && data.length > visibleBlogs && (
          <div className="text-center mt-5">
            <button className="btn btn-primary px-4 py-2 fw-semibold" onClick={handleLoadMore}>
              Load More
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogList;
