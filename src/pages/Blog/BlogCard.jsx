import { Link } from "react-router-dom";
import "./style.css"; // Custom CSS file

const BlogCard = ({ blog }) => (
  <div className="blog-card  p-4 shadow-sm rounded bg-white transition">
    <div className="image-wrapper mb-3">
      <img src={blog.image} alt={blog.title} className="img-fluid rounded" />
    </div>

    <h5 className="blog-title fw-bold mb-2">{blog.title}</h5>
    <p className="blog-excerpt text-muted mb-3">{blog.excerpt}</p>
    <p className="blog-snippet mb-4">{blog.snippet}</p>

    <Link to={`/profile/blogs/${blog.id}`} className="nav-btn text-center mx-auto w-50 ">
      Read More
      {/* <span className="btn-icon">&rarr;</span> */}
    </Link>
  </div>
);

export default BlogCard;
