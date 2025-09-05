import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import axios from "axios";
import "./blog.css";

const BlogList = () => {
  const [data, setData] = useState([]);
  const [visibleBlogs, setVisibleBlogs] = useState(6); // Number of blogs initially visible
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      // ✅ Corrected: use /api instead of localhost:5000
      const res = await axios.get("/api/admin/all-blogs");
      setData(res.data.blogs);
    } catch (error) {
      console.error("Failed to fetch blogs", error);
    } finally {
      setLoading(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLoadMore = () => {
    setVisibleBlogs((prev) => prev + 6); // Load 6 more each time
  };

  return (
    <>
      {/* Hero Section */}
      <div className="blog-hero-section text-center py-5 text-white">
        <div className="container">
          <h1 className="fw-bold text-white display-5 mb-3 mt-3">
            Welcome to the Blog Page
          </h1>
          <p className="lead">Explore insights, tips, and updates from our team</p>
        </div>
      </div>

      {/* Blog List */}
      <div className="container py-5">
        <div className="row">
          {!loading ? (
            <div className="text-center py-5 w-100">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3 fw-semibold">Loading blogs...</p>
            </div>
          ) : data.length === 0 ? (
            <p className="text-center fw-semibold fs-5 text-muted w-100">
              No Blogs Found
            </p>
          ) : (
            data
              .slice(0, visibleBlogs)
              .map((blog, index) => (
                <div
                  className="col-md-6 col-lg-4 col-12 mb-4 animate__animated animate__fadeInUp"
                  key={blog._id}
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationDuration: "0.5s",
                  }}
                >
                  <BlogCard blog={blog} />
                </div>
              ))
          )}
        </div>

        {/* Load More Button */}
        {visibleBlogs < data.length && (
          <div className="text-center mt-5">
            <button
              className="btn btn-primary px-4 py-2 fw-semibold"
              onClick={handleLoadMore}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogList;
