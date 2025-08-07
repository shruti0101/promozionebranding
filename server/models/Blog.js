const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    subtitle: {
        type: String,
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    fileId: {  
        type: String,
    },
    ispublished: {
        type: Boolean,
        required: true,
    },
    permalink: {
        type: String,
        required: true,
        unique: true,  
    }
}, { timestamps: true });

const Blog = mongoose.model('blog', BlogSchema);
module.exports = Blog;
