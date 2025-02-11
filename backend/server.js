// // server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const path = require('path');
// const blogRoutes = require('./routes/blogRoutes');

// const app = express();

// // Create uploads directory if it doesn't exist
// const fs = require('fs');
// if (!fs.existsSync('uploads')) {
//     fs.mkdirSync('uploads');
// }

// // Middlewares
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Serve uploaded files
// app.use('/uploads', express.static('uploads'));

// // Routes
// app.use('/api', blogRoutes);

// // Error handling middleware
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).json({ message: err.message });
// });

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/blogdb')
//     .then(() => {
//         console.log('Connected to MongoDB');
//         // Start server after successful database connection
//         const PORT = process.env.PORT || 5000;
//         app.listen(PORT, () => {
//             console.log(`Server is running on port ${PORT}`);
//         });
//     })
//     .catch((error) => {
//         console.error('MongoDB connection error:', error);
//     });

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const blogRoutes = require('./routes/blogRoutes');

const app = express();

// Ensure 'uploads' directory exists
if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api', blogRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: err.message });
});

// Connect to MongoDB
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/blogdb';
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        const PORT = process.env.PORT || 5000;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('MongoDB connection error:', error);
    });

// Graceful shutdown
process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log('MongoDB connection closed');
    process.exit(0);
});
