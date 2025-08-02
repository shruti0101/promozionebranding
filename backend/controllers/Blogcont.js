import fs from "fs";
import imagekit from "../Database/Imagekit.js";
import Blog from "../models/blog.js";

export const addBlog = async (req, res) => {
    try {
        const { title, subtitle, description, ispublished } = JSON.parse(req.body.blog);
        const imageFile = req.file;

        if (!title || !description || !imageFile) {
            return res.json({
                success: false,
                message: "Missing Required Fields",
            });
        }

        const fileBuffer = fs.readFileSync(imageFile.path);

        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: "/blogs",
        });

        const OptimizedImage = imagekit.url({
            path: response.filePath,
            transformation: [
                { quality: "auto" },
                { format: "webp" },
                { width: "1200" },
            ],
        });

        const image = OptimizedImage;

        await Blog.create({ title, subtitle, description, image, ispublished });

        res.json({
            success: true,
            message: "Blog submitted successfully",
        });

    } catch (error) {
        res.json({
            success: false,
            message: error.message
        });
    }
};