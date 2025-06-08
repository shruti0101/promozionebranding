// src/components/Home/BlogList.jsx
import { useEffect } from "react";
import BlogCard from "../Blog/BlogCard";
import { blogs } from "../../Data/Data";
import CommentSection from "../Blog/CommentSection";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const BlogList = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const previewBlogs = blogs.slice(0, 3);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5 fw-bold">Latest Blogs</h2>

      <div className="row g-4">
        {previewBlogs.map((blog, i) => (
          <div
            key={blog.id}
            className="col-md-4"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <Link to="/profile/blogs/all" className="btn btn-dark px-4 py-2 shadow-sm">
          View More Blogs
        </Link>
      </div>

      <hr className="my-5" />

      <div data-aos="fade-up">
        <CommentSection />
      </div>
    </div>
  );
};

export default BlogList;
