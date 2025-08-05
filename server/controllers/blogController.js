const fs = require("fs");
const imagekit = require("../config/imageKit.js");
const Blog = require("../models/Blog.js");

// Add Blog
const addBlog = async (req, res) => {
  try {
    const { title, subtitle, description, ispublished } = JSON.parse(
      req.body.blog
    );
    const imageFile = req.file;

    if (!title || !subtitle || !description || ispublished === undefined) {
      return res.json({
        success: false,
        message: "Missing required fields",
      });
    }

    const fileBuffer = fs.readFileSync(imageFile.path);

    // Upload image to ImageKit
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/blogs",
    });

    // Optimize image URL
    const optimizedImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        { quality: "auto" },
        { format: "webp" },
        { width: "1280" },
      ],
    });

    await Blog.create({
      title,
      subtitle,
      description,
      image: optimizedImageUrl,
      ispublished,
    });

    res.json({
      success: true,
      message: "Blog added successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Get all published blogs
const getALLBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ ispublished: true });

    res.json({ success: true, blogs });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

const getAllBlogAdmin = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    res.json({ success: true, blogs });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

const getDashboard = async (res, req) => {
  try {
    const recentBlog = await Blog.fing({}).sort({ createdAt: -1 }).limit(5);
    const blogs = await Blog.countDocuments();
    const draft= await Blog.countDocuments({ispublished:false})


  const dashboardData  ={
blogs,draft,recentBlog
  }

  res.json({
    success:true,
    dashboardData 
  })
  } catch (error) {}
};

// Get blog by ID
const getBlogsById = async (req, res) => {
  try {
    const { blogId } = req.params;

    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.json({
        success: false,
        message: "Blog not found",
      });
    }

    res.json({
      success: true,
      blog,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Delete blog by ID
const deleteBlogById = async (req, res) => {
  try {
    const { id } = req.body;
    await Blog.findByIdAndDelete(id);

    res.json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Toggle publish status
const togglePublish = async (req, res) => {
  try {
    const { id } = req.body;
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.json({
        success: false,
        message: "Blog not found",
      });
    }

    blog.ispublished = !blog.ispublished;
    await blog.save();

    res.json({
      success: true,
      message: "Blog status updated",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addBlog,
  getALLBlogs,
  getBlogsById,
  deleteBlogById,
  togglePublish,
  getDashboard,
  getAllBlogAdmin
};
