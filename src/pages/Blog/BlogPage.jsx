import { useParams } from "react-router-dom";
import { blogs } from "../../Data/Data"
const BlogPage = () => {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === parseInt(id));

  if (!blog) return <p className="text-center py-5">Blog not found.</p>;

  return (
    <div className="container py-5">
      <h2 className="fw-bold">{blog.title}</h2>
      <p className="mt-3">{blog.content}</p>
    </div>
  );
};

export default BlogPage;
