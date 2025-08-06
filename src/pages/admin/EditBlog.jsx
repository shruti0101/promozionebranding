import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blogData, setBlogData] = useState({
    title: "",
    subtitle: "",
    description: "",
    ispublished: false,
  });
  const [imageFile, setImageFile] = useState(null);
  const [previewImage, setPreviewImage] = useState("");

  // Fetch blog data
  const fetchBlog = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/api/blog/${id}`);
      if (data.success) {
        setBlogData({
          title: data.blog.title,
          subtitle: data.blog.subtitle,
          description: data.blog.description,
          ispublished: data.blog.ispublished,
        });
        setPreviewImage(data.blog.image);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append(
      "blog",
      JSON.stringify({
        title: blogData.title,
        subtitle: blogData.subtitle,
        description: blogData.description,
        ispublished: blogData.ispublished,
      })
    );
    if (imageFile) {
      formData.append("image", imageFile);
    }

    try {
      const { data } = await axios.put(
        `http://localhost:5000/api/blog/update/${id}`,
        formData
      );
      if (data.success) {
        toast.success(data.message);
        navigate("/admin/listblog");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Edit Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={blogData.title}
            onChange={(e) =>
              setBlogData({ ...blogData, title: e.target.value })
            }
            required
          />
        </div>
        <div className="mb-3">
          <label>Subtitle</label>
          <input
            type="text"
            className="form-control"
            value={blogData.subtitle}
            onChange={(e) =>
              setBlogData({ ...blogData, subtitle: e.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label>Description</label>
          <textarea
            className="form-control"
            rows="5"
            value={blogData.description}
            onChange={(e) =>
              setBlogData({ ...blogData, description: e.target.value })
            }
            required
          ></textarea>
        </div>
        {/* <div className="mb-3">
          <label>Status</label>
          <select
            className="form-select"
            value={blogData.ispublished}
            onChange={(e) =>
              setBlogData({ ...blogData, ispublished: e.target.value === "true" })
            }
          >
            <option value={true}>Published</option>
            <option value={false}>Unpublished</option>
          </select>
        </div> */}
        <div className="mb-3">
          <label>Image</label>
          <input
            type="file"
            className="form-control"
            onChange={(e) => {
              setImageFile(e.target.files[0]);
              setPreviewImage(URL.createObjectURL(e.target.files[0]));
            }}
          />
          {previewImage && (
            <img
              src={previewImage}
              alt="Preview"
              className="img-fluid mt-2"
              style={{ maxWidth: "300px" }}
            />
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
