import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import JoditEditor from "jodit-react";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const editor = useRef(null);

  const [blogData, setBlogData] = useState({
    title: "",
    subtitle: "",
    description: "",
    ispublished: false,
  });
  const [imageFile, setImageFile] = useState(null);
  const [previewImage, setPreviewImage] = useState("");

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

  const editorConfig = {
    readonly: false,
    toolbarAdaptive: false,
    buttons: [
      'bold', 'italic', 'underline', 'strikethrough', '|',
      'ul', 'ol', '|',
      'outdent', 'indent', '|',
      'font', 'fontsize', 'brush', 'paragraph', '|',
      'h5', 'h6', '|',  // Custom H5 & H6 buttons
      'align', '|',
      'link', 'image', '|',
      'undo', 'redo', '|',
      'hr', 'eraser', 'copyformat', '|',
      'fullsize', 'selectall', 'print', '|',
      'source'
    ],
    cleanHTML: {
      allowTags: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'ul', 'ol', 'li', 'strong', 'em', 'u', 's', 'a', 'img'],
    },
    controls: {
      h5: {
        name: 'h5',
        icon: 'heading',
        tooltip: 'Heading 5',
        exec: (editor) => {
          editor.s.wrapInTag('h5');
        }
      },
      h6: {
        name: 'h6',
        icon: 'heading',
        tooltip: 'Heading 6',
        exec: (editor) => {
          editor.s.wrapInTag('h6');
        }
      }
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
          <JoditEditor
            ref={editor}
            // config={editorConfig}
            value={blogData.description}
            onChange={(newContent) =>
              setBlogData({ ...blogData, description: newContent })
            }
          />
        </div>

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
        <button type="submit" className="btn mb-4 btn-primary">
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
