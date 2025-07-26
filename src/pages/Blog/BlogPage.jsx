import React from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../../Data/Data";
import "./BlogPage.css";

const BlogPage = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id.toString() === id);

  if (!blog) return <h2 className="text-center mt-5">Blog not found</h2>;

  // Convert markdown-style bold to real HTML before rendering
  const formatContent = (text) => {
    return text
      .replace(/__(.*?)__/g, "<strong>$1</strong>") // __bold__ → <strong>
      .replace(/\*\*(.*?)\*\*/g, "<span class='highlight'>$1</span>"); // **highlight** → styled span
  };

  return (
    <div className="blog-container container py-5">
      <div className="blog-header text-center mb-4">
        <h1 className="blog-title">{blog.title}</h1>
        <div className="blog-divider"></div>
      </div>

      <img
        src={blog.image}
        alt={blog.title}
        className="blog-featured-image mb-4"
      />

      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: formatContent(blog.content) }}
      />
    </div>
  );
};

export default BlogPage;
