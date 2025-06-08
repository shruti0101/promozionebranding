// src/components/Blog/BlogCard.jsx
import { Link } from "react-router-dom";
import "./style.css"; // Optional custom styles

const BlogCard = ({ blog }) => (
  <div className="blog-card p-4 shadow-sm h-100 rounded bg-white transition">
    <h5 className="fw-bold mb-2">{blog.title}</h5>
    <p className="text-muted">{blog.excerpt}</p>

    <Link to={`/profile/blogs/${blog.id}`}>
      <div className="card">
        <img src={blog.image} alt={blog.title} className="img-fluid" />
        <h5>{blog.title}</h5>
        <p>{blog.snippet}</p>
      </div>
    </Link>


  </div>
);

export default BlogCard;
