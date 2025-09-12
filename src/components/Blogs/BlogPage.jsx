import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const BlogPage = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  const fetchBlog = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/${slug}`);
      setBlog(res.data.blog);
    } catch (err) {
      console.error("Error fetching blog:", err);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  if (!blog) {
    return <h2 className="text-center p-5 my-5 fw-bold fs-1">Blog Not Found</h2>;
  }

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <section className="bg-light">
      <div className="container py-3">
        <h1 className="fw-bold text-start p-2 text-wrap">{blog.title}</h1>
        <img
          src={blog.image}
          alt={blog.title}
          className="img-fluid mb-4 rounded"
        />
        <p className="text-muted">Published on {formatDate(blog.createdAt)}</p>
        <p dangerouslySetInnerHTML={{ __html: blog.description }}></p>
      </div>
    </section>
  );
};

export default BlogPage;
