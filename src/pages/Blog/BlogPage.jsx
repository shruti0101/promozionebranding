// src/components/Blog/BlogPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../../Data/Data";
import "./BlogPage.css";

const BlogPage = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id.toString() === id);

  if (!blog) return <h2 className="text-center mt-5">Blog not found</h2>;

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

   {blog.content.split("\n").map((line, index) => {
  // Full paragraph highlight
  if (line.trim().startsWith("##") && line.trim().endsWith("##")) {
    return (
      <p key={index} className="blog-highlight">
        {line.trim().replace(/##/g, "").trim()}
      </p>
    );
  }

  // Handle inline formatting
  const parts = line.split(/(\*\*[^\*]+\*\*|__[^\_]+__)/g);

  return (
    <p key={index} className="blog-paragraph">
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <span key={i} className="inline-highlight">
              {part.replace(/\*\*/g, "")}
            </span>
          );
        } else if (part.startsWith("__") && part.endsWith("__")) {
          return (
            <strong key={i} className="black-bold">
              {part.replace(/__/g, "")}
            </strong>
          );
        } else {
          return part;
        }
      })}
    </p>
  );
})}

    </div>
  );
};

export default BlogPage;
