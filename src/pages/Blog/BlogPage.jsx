// src/components/Blog/BlogPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../../Data/Data";

const BlogPage = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id.toString() === id);

  if (!blog) return <h2>Blog not found</h2>;

  return (
    <div className="container py-5">
      <h1>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className="img-fluid my-3" />
      <p>{blog.content}</p>
    </div>
  );
};

export default BlogPage;
