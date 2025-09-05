import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { title, description, image, permalink, createdAt } = blog;
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div
      onClick={() => navigate(`/blog/${permalink}`)} // ✅ Corrected path
      className="card h-100 mt-5 shadow-sm blog-card border-0 rounded-4 overflow-hidden"
      style={{
        transition: "transform 0.3s ease",
        cursor: "pointer",
        boxShadow: "3px 3px 6px rgba(0, 0, 0, 0.2)", // ✅ fixed boxShadow
      }}
    >
      <img src={image} alt={title} className="aspect-ratio img-fluid" />
      <p className="text-muted pt-3 p-2">{formatDate(createdAt)}</p>
      <div className="p-2">
        <h5 className="mb-2 fw-semibold text-black">{title}</h5>
        <p
          className="mb-3 text-sm text-black"
          dangerouslySetInnerHTML={{
            __html:
              description.slice(0, 350) +
              ` ....<span style="color: #007bff; cursor: pointer;">Read more</span>`,
          }}
        ></p>
      </div>
    </div>
  );
};

export default BlogCard;
