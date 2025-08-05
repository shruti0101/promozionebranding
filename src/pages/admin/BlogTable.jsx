import { assets } from "../../assets/blogs/assets";

const BlogTable = ({ blog, fetchDashboardData, index }) => {
  const { title, createdAt } = blog;
  const BlogDate = new Date(createdAt);

  return (
    <tr className="border-bottom align-middle table-hover">
      <th className="px-3 py-3">{index}</th>
      <td className="px-3 py-3 fw-medium text-dark">{title}</td>
      <td className="px-3 py-3 d-none d-md-table-cell text-muted">
        {BlogDate.toLocaleDateString()}
      </td>
      <td className="px-3 py-3 d-none d-md-table-cell">
        <span className={`badge ${blog.ispublished ? 'bg-danger' : 'bg-success'}`}>
          {blog.ispublished ? 'Unpublished' : 'Published'}
        </span>
      </td>
      <td className="px-3 py-3">
        <div className="d-flex align-items-center gap-3">
          <button className="btn btn-sm btn-outline-primary">
            {blog.ispublished ? 'Publish' : 'Unpublish'}
          </button>
          <img
            src={assets.cross_icon}
            alt="Delete"
            style={{ width: '18px', height: '18px', cursor: 'pointer' }}
          />
        </div>
      </td>
    </tr>
  );
};

export default BlogTable;
