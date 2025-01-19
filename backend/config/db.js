// config/db.js
const mongoose = require('mongoose');

// MongoDB connection URL - Using local MongoDB instance
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/blog_app';

// MongoDB connection options
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
};

// Connect to MongoDB
mongoose.connect(MONGODB_URI, options)
    .then(() => {
        console.log('✅ Successfully connected to MongoDB.');
        console.log(`📦 Connected to database: ${mongoose.connection.name}`);
    })
    .catch((err) => {
        console.error('❌ Error connecting to MongoDB:', err.message);
        process.exit(1);
    });

// Handle connection events
mongoose.connection.on('connected', () => {
    console.log('🔄 Mongoose connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
    console.error('❌ Mongoose connection error:', err.message);
});

mongoose.connection.on('disconnected', () => {
    console.log('🔌 Mongoose disconnected from MongoDB');
});

// Handle application termination
process.on('SIGINT', async () => {
    try {
        await mongoose.connection.close();
        console.log('🛑 MongoDB connection closed through app termination');
        process.exit(0);
    } catch (err) {
        console.error('❌ Error closing MongoDB connection:', err.message);
        process.exit(1);
    }
});

module.exports = mongoose;