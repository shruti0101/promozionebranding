import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import axios from "axios";
import "./blog.css";

const BlogList = () => {
  const [data, setData] = useState([]);
  const [visibleBlogs, setVisibleBlogs] = useState(6);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/all`);
      setData(res.data.blogs || []);
    } catch (error) {
      console.error("Failed to fetch blogs", error);
      setError("Oops! Something went wrong while loading blogs.");
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
          <h1 className="fw-bold text-white display-5 mb-3 mt-3">Welcome to Blog Page</h1>
          <p className="lead">Explore insights, tips from our team</p>
        </div>
      </div>

      {/* Blog Section */}
      <div className="container py-5">
        <div className="row">
          {loading ? (
            // Skeleton Loader
            [...Array(6)].map((_, i) => (
              <div className="col-md-6 col-lg-4 col-12 mb-4" key={i}>
                <div className="skeleton-card"></div>
              </div>
            ))
          ) : error ? (
            <div className="text-center w-100">
              <p className="text-danger mb-3">{error}</p>
              <button className="btn btn-outline-danger" onClick={fetchData}>
                Retry
              </button>
            </div>
          ) : data.length === 0 ? (
            <div className="text-center w-100">
              <img src="/images/empty-state.svg" alt="No blogs" className="mb-3" style={{ maxWidth: "200px" }} />
              <p className="fw-semibold fs-5 text-muted">No Blogs Found. Stay tuned for upcoming stories!</p>
            </div>
          ) : (
            data.slice(0, visibleBlogs).map((blog, index) => (
              <div
                className="col-md-6 col-lg-4 col-12 mb-4 animate__animated animate__fadeInUp"
                key={blog._id}
                style={{ animationDelay: `${index * 0.1}s`, animationDuration: "0.6s" }}
              >
                <BlogCard blog={blog} />
              </div>
            ))
          )}
        </div>

        {/* Load More */}
        {!loading && data.length > 0 && (
          <div className="text-center mt-5">
            {data.length > visibleBlogs ? (
              <button className="btn btn-primary px-4 py-2 fw-semibold" onClick={handleLoadMore}>
                Load More
              </button>
            ) : (
              <p className="fw-semibold text-muted">🎉 You have reached the end of the blogs!</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default BlogList;
