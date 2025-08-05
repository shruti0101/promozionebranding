const express = require("express");
const {
  addBlog,
  getALLBlogs,
  getBlogsById,
  deleteBlogById,
  togglePublish,

} = require("../controllers/blogController");
const upload = require("../middleware/multer.js");

const blogRouter = express.Router();

blogRouter.post("/add", upload.single("image"), addBlog);
blogRouter.get("/all", getALLBlogs);
blogRouter.get("/:blogId", getBlogsById);
blogRouter.post("/delete", deleteBlogById);
blogRouter.post("/toggle", togglePublish);




module.exports = blogRouter;
