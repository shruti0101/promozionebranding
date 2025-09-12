const fs = require("fs");
const imagekit = require("../config/imageKit.js");
const Blog = require("../models/Blog.js");
const main = require("../config/Gemini.js");

// Add Blog
const addBlog = async (req, res) => {
  try {
    const { title, subtitle, description, permalink } = JSON.parse(req.body.blog);

    if (!title || !subtitle || !description) {
      return res.json({
        success: false,
        message: "Missing required fields",
      });
    }

    const imageFile = req.file;
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
        { width: "700" },
        { height: "400" },
      ],
    });

    await Blog.create({
      title,
      subtitle,
      description,
      image: optimizedImageUrl,
      fileId: response.fileId,
      permalink, // Save permalink
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

// Update blog
const updateBlog = async (req, res) => {
  try {
    const { permalink } = req.params;

    const existingBlog = await Blog.findOne({ permalink });
    if (!existingBlog) {
      return res.json({ success: false, message: "Blog not found" });
    }

    const { title, subtitle, description } = JSON.parse(req.body.blog);

    let updatedImageUrl = existingBlog.image;
    let updatedFileId = existingBlog.fileId;

    // If a new image is uploaded, delete old image and upload new one
    if (req.file) {
      if (existingBlog.fileId) {
        await imagekit.deleteFile(existingBlog.fileId);
      }

      const fileBuffer = fs.readFileSync(req.file.path);

      const uploadResponse = await imagekit.upload({
        file: fileBuffer,
        fileName: req.file.originalname,
        folder: "/blogs",
      });

      updatedImageUrl = imagekit.url({
        path: uploadResponse.filePath,
        transformation: [
          { quality: "auto" },
          { format: "webp" },
          { width: "500" },
        ],
      });

      updatedFileId = uploadResponse.fileId;
    }

    existingBlog.title = title;
    existingBlog.subtitle = subtitle;
    existingBlog.description = description;
    existingBlog.image = updatedImageUrl;
    existingBlog.fileId = updatedFileId;

    await existingBlog.save();

    res.json({ success: true, message: "Blog updated successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Get all blogs (no publish filter)
const getALLBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    res.json({ success: true, blogs });
  } catch (error) {
    res.json({ success: false, message: error.message });
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

// Dashboard (no draft count anymore)
const getDashboard = async (req, res) => {
  try {
    const recentBlogs = await Blog.find({}).sort({ createdAt: -1 }).limit(5);
    const blogs = await Blog.countDocuments();

    const dashboardData = {
      blogs,
      recentBlogs,
    };

    res.json({
      success: true,
      dashboardData,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

// Get blog by permalink
const getBlogsById = async (req, res) => {
  try {
    const { slug } = req.params;

    const blog = await Blog.findOne({ permalink: slug });
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
    res.json({ success: false, message: error.message });
  }
};

// Delete blog
const deleteBlogById = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findById(id);
    if (!blog) {
      return res.json({
        success: false,
        message: "Blog not found",
      });
    }

    if (blog.fileId) {
      await imagekit.deleteFile(blog.fileId);
    }

    await Blog.findByIdAndDelete(id);

    res.json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Generate blog content (AI helper)
const generateContent = async (req, res) => {
  try {
    const { prompt } = req.body;

    const content = await main(
      prompt +
        " Generate a blog content for this topic it should be unique and SEO friendly "
    );
    res.json({
      success: true,
      content,
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

module.exports = {
  addBlog,
  getALLBlogs,
  getBlogsById,
  deleteBlogById,
  getDashboard,
  getAllBlogAdmin,
  updateBlog,
  generateContent,
};
