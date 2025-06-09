// src/components/Blog/AllBlogs.jsx
import BlogCard from "./BlogCard";
import { blogs } from "../../Data/Data";
import AOS from "aos";
import "aos/dist/aos.css";
import CommentSection  from "./CommentSection";

const AllBlogs = () =>
    
    (

  <div className="container py-5">
    <h2 className="mb-4 fw-bold" style={{color:"#2548BD"}}>All Blogs</h2>
    <div className="row g-4">
      {blogs.map((blog) => (
        <div className="col-md-4" key={blog.id}>
          <BlogCard blog={blog} />
        </div>
      ))}
    </div>

      <div className="mt-5 " data-aos="fade-up">
        <CommentSection />
      </div>
  </div>
);

export default AllBlogs;
