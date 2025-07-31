import { useNavigate } from "react-router-dom";
const BlogCard = ({ blog }) => {
  const { title, description, image, _id, createdAt } = blog;
  const navigate = useNavigate();

    const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };
  return (
    <>
      <div onClick={() => navigate(`/profile/blog/${_id}`)} className="">
        <img src={image} alt="" className="aspect-ratio img-fluid" />
        <p className="text-muted pt-3">{formatDate(createdAt)}</p>
        <div className="p-2 ">
          <h5 className="mb-2 fw-semibold text-black">{title}</h5>
          <p
            className="mb-3 text-sm text-black"
            
            dangerouslySetInnerHTML={{ __html: description.slice(0, 50) }}
          ></p>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
