const express = require("express");
const {
  addBlog,
  getALLBlogs,
  getBlogsById,
  deleteBlogById,
  togglePublish,
  updateBlog,
  generateContent

} = require("../controllers/blogController");
const upload = require("../middleware/multer.js");

const blogRouter = express.Router();

blogRouter.post("/add", upload.single("image"), addBlog);
blogRouter.get("/all", getALLBlogs);
blogRouter.get("/:slug", getBlogsById);
blogRouter.delete("/delete/:id", deleteBlogById);
blogRouter.post("/toggle", togglePublish);
blogRouter.put("/update/:id", upload.single("image"), updateBlog); 
blogRouter.post('/generate',generateContent)




module.exports = blogRouter;
