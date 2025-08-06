import axios from "axios";
import { assets } from "../../assets/blogs/assets";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const BlogTable = ({ blog, fetchDashboardData, index }) => {
  const { title, createdAt } = blog;
  const BlogDate = new Date(createdAt);
  const navigate = useNavigate();

  const deleteBlog = async () => {
    const confirm = window.confirm("Are you sure you want to delete this blog?");
    if (!confirm) return;

    try {
      const { data } = await axios.delete(`http://localhost:5000/api/blog/delete/${blog._id}`);
      if (data.success) {
        toast.success(data.message);
        await fetchDashboardData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleEdit = () => {
    navigate(`/admin/edit-blog/${blog._id}`);
  };

  return (
    <tr className="border-bottom align-middle table-hover">
      <th className="px-3 py-3">{index}</th>
      <td className="px-3 py-3 fw-medium text-dark">{title}</td>
      <td className="px-3 py-3 d-none d-md-table-cell text-muted">
        {BlogDate.toLocaleDateString()}
      </td>
      <td className="px-3 py-3 d-none d-md-table-cell">
        <span className={`badge ${blog.ispublished ? "bg-danger" : "bg-success"}`}>
          {blog.ispublished ? "Unpublished" : "Published"}
        </span>
      </td>
      <td className="px-3 py-3">
        <div className="d-flex align-items-center gap-3">
          <button onClick={handleEdit} className="btn btn-sm btn-outline-primary">
            Edit
          </button>
          <img
            onClick={deleteBlog}
            src={assets.cross_icon}
            alt="Delete"
            style={{ width: "18px", height: "18px", cursor: "pointer" }}
          />
        </div>
      </td>
    </tr>
  );
};

export default BlogTable;
