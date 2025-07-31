import { useParams } from "react-router-dom";
import { blog_data } from "../../assets/blogs/assets";
import { useEffect, useState } from "react";

const BlogPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  const fetchData = async () => {
    // Ensure type safety for comparison (convert _id to string)
    const data = blog_data.find((item) => item._id.toString() === id);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, [id]); // Dependency array added to avoid infinite loop

  if (!data) {
    return <h2 className="text-center p-5 my-5 fw-bold fs-1">Blog Not Found</h2>;
  }

  // Date Formatter
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <section className="bg-light">
      <div className="container py-5">
        <h1 className="fw-bold mb-4 text-center p-3 text-wrap">{data.title}</h1>
        <img src={data.image} alt={data.title} className="img-fluid mb-4 rounded" />
        <p className="text-muted">Published on {formatDate(data.createdAt)}</p>
        <p dangerouslySetInnerHTML={{ "__html": data.description }}></p>
      </div>
    </section>
  );
};

export default BlogPage;
