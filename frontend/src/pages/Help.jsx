import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <Link to={`/blog/${blog._id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            {blog.title}
          </h2>
          <p className="text-gray-600 mb-4">
            {blog.content.substring(0, 150)}...
          </p>
          <p className="text-sm text-gray-500">
            {new Date(blog.date).toLocaleDateString()}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;