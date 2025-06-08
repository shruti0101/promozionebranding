import { Link } from "react-router-dom";
import "./style.css"; // Custom CSS

const BlogCard = ({ blog }) => (
  <div className="blog-card p-4 shadow-sm h-100 rounded bg-white transition">
    <h5 className="fw-bold mb-2">{blog.title}</h5>
    <p className="text-muted">{blog.excerpt}</p>
    <Link to={`/blog/${blog.id}`} className="text-decoration-none text-primary fw-semibold">
      Read More →
    </Link>
  </div>
);

export default BlogCard;
