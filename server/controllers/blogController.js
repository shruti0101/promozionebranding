const fs = require("fs");
const imagekit = require("../config/imageKit.js");
const Blog = require("../models/Blog.js");
const main = require("../config/Gemini.js");

// Add Blog
const addBlog = async (req, res) => {
  try {
   const { title, subtitle, description, ispublished, permalink } = JSON.parse(req.body.blog);

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
        { width: "700" },
        {height:"400"}
      ],
    });

   await Blog.create({
    title,
    subtitle,
    description,
    image: optimizedImageUrl,
    fileId: response.fileId,
    ispublished,
    permalink,  // Save permalink
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

// update blog

const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const existingBlog = await Blog.findById(id);
    if (!existingBlog) {
      return res.json({ success: false, message: "Blog not found" });
    }

    const { title, subtitle, description, ispublished } = JSON.parse(
      req.body.blog
    );

    let updatedImageUrl = existingBlog.image;
    let updatedFileId = existingBlog.fileId;

    // If a new image is uploaded, delete old image from ImageKit and upload new one
    if (req.file) {
      // Delete old image from ImageKit
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
          { width: "500 " },
        ],
      });

      updatedFileId = uploadResponse.fileId;
    }

    // Update blog in DB
    existingBlog.title = title;
    existingBlog.subtitle = subtitle;
    existingBlog.description = description;
    existingBlog.ispublished = ispublished;
    existingBlog.image = updatedImageUrl;
    existingBlog.fileId = updatedFileId;

    await existingBlog.save();

    res.json({ success: true, message: "Blog updated successfully" });
  } catch (error) {
    res.json({ success: false, message: error.message });
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

const getDashboard = async (req, res) => {
  try {
    const recentBlogs = await Blog.find({}).sort({ createdAt: -1 }).limit(5);
    const blogs = await Blog.countDocuments();
    const draft = await Blog.countDocuments({ ispublished: false });

    const dashboardData = {
      blogs,
      drafts: draft,   
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


// Get blog by ID
const getBlogsById = async (req, res) => {
  try {
    const { slug } = req.params;  // Changed from blogId to slug

    const blog = await Blog.findOne({ permalink: slug });  // Find by permalink
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
    const { id } = req.params;

    // Find the blog to get fileId of the image

    const blog = await Blog.findById(id);
    if (!blog) {
      return res.json({
        success: false,
        message: "Blog not found",
      });
    }

    // Delete image from ImageKit if fileId exists
    if (blog.fileId) {
      await imagekit.deleteFile(blog.fileId);
    }

    // Delete blog from MongoDB
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

const generateContent = async (req,res) => {
  try {
    const { prompt } = req.body;

    const content = await main(
      prompt +
        "Generate a blog content for this topic it should be unique and SEO friendly "
    );
    res.json({
      success: true,
      content,
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
  getAllBlogAdmin,
  updateBlog,
  generateContent
};
