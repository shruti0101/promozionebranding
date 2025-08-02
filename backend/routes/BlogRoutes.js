import express from 'express';
import { addBlog } from '../controllers/Blogcont.js';
import upload from '../middlewares/Multer.js';

const blogRouter = express.Router();

// REMOVED verifyy middleware here!
blogRouter.post("/add", upload.single('image'), addBlog);

export default blogRouter;
