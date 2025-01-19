// controllers/blogController.js
const Blog = require('../models/Blog');

const createBlog = async (req, res) => {
    try {
        console.log('Request body:', req.body);
        console.log('Uploaded file:', req.file);

        if (!req.file) {
            return res.status(400).json({ message: 'Image is required' });
        }

        const { title, content } = req.body;
        
        if (!title || !content) {
            return res.status(400).json({ message: 'Title and content are required' });
        }

        const blog = new Blog({
            title,
            content,
            imageUrl: req.file.path
        });

        const savedBlog = await blog.save();
        res.status(201).json(savedBlog);
    } catch (error) {
        console.error('Error in createBlog:', error);
        res.status(500).json({ message: error.message });
    }
};

const getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 });
        res.json(blogs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }
        res.json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    createBlog,
    getBlogs,
    getBlogById
};