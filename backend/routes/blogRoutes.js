// routes/blogRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { createBlog, getBlogs, getBlogById } = require('../controllers/blogController');

// Configure multer for file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ 
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Not an image! Please upload an image.'));
        }
    }
});

// Define routes
router.post('/blogs', upload.single('image'), createBlog);
router.get('/blogs', getBlogs);
router.get('/blogs/:id', getBlogById);

module.exports = router;