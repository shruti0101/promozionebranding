import { useState, useRef } from "react";
import { assets } from "../../assets/blogs/assets";
import JoditEditor from "jodit-react";
import axios from "axios";
import { toast } from "react-toastify";
import { marked } from "marked";

const AddBlog = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(false);
  const [title, setTitle] = useState("");
  const [subtitle, setsubTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ispublished, setisPublished] = useState(false);

  const [permalink, setPermalink] = useState("");
  const editor = useRef(null);

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      setIsAdding(true);

      const blog = { title, subtitle, description, ispublished,permalink  };

      const formData = new FormData();
      formData.append("blog", JSON.stringify(blog));

      formData.append("image", image);
      const { data } = await axios.post(
        "http://localhost:5000/api/blog/add",
        formData
      );
      if (data.success) {
        toast.success(data.message);
        setImage(false);
        setTitle("");
        setDescription("");
        setsubTitle("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsAdding(false);
    }
  };
  const genContent = async () => {
    if (!title) return toast.error("Please enter the title first");
    try {
      setLoading(true);
      const { data } = await axios.post(
        "http://localhost:5000/api/blog/generate",
        { prompt: title }
      );
      if (data.success) {
        const htmlContent = marked.parse(data.content); // Convert Markdown to HTML
        setDescription(htmlContent); // Set to JoditEditor
        toast.success("AI Content Generated!");
      } else {
        toast.error(data.message || "Failed to generate content");
      }
    } catch (error) {
      toast.error(
        error.message || "Something went wrong while generating content"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-4">
      <form onSubmit={onSubmitHandler} className="bg-light rounded shadow p-4">
        <h3 className="mb-4">Add New Blog</h3>

        {/* Upload Thumbnail */}
        <div className="mb-4">
          <label htmlFor="image" className="form-label fw-semibold">
            Upload Thumbnail
          </label>
          <div
            className="border rounded d-flex justify-content-center align-items-center"
            style={{
              width: "100%",
              height: "200px",
              cursor: "pointer",
              overflow: "hidden",
            }}
            onClick={() => document.getElementById("image").click()}
          >
            <img
              src={!image ? assets.upload_area : URL.createObjectURL(image)}
              alt="Upload"
              className="img-fluid"
              style={{ maxHeight: "100%", objectFit: "cover" }}
            />
          </div>
          <input
            type="file"
            id="image"
            hidden
            required
            onChange={(e) => setImage(e.target.files[0])}
          />
        </div>

        {/* Blog Title */}
        <div className="mb-3">
          <label className="form-label fw-semibold">Blog Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Type here..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Sub Title */}
        <div className="mb-4">
          <label className="form-label fw-semibold">Sub Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Type here..."
            value={subtitle}
            onChange={(e) => setsubTitle(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Permalink (Slug)</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g., my-awesome-blog"
            value={permalink}
            onChange={(e) => setPermalink(e.target.value)}
            required
          />
        </div>

        {/* Blog Description */}
        <div disabled={loading} className="mb-4 position-relative">
          <label className="form-label fw-semibold">Blog Description</label>
          <button
            type="button"
            className="btn btn-dark position-absolute end-0  me-2"
            onClick={genContent}
            style={{ zIndex: 10 }}
          >
            Generate with AI
          </button>
          <JoditEditor
            ref={editor}
            value={description}
            onChange={(newContent) => setDescription(newContent)}
          />
        </div>

        {/* Publish Toggle */}
        {/* <div className="d-flex gap-2 mt-4">
          <p className="text-capitalize">publish now</p>
          <input
            type="checkbox"
            checked={ispublished}
            className="cursor-pointer"
            onChange={(e) => setisPublished(e.target.checked)}
          />
        </div> */}

        {/* Submit Button */}
        <button disabled={isAdding} type="submit" className="btn btn-primary ">
          {isAdding ? "Submitting...." : "Submit Blog"}
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
