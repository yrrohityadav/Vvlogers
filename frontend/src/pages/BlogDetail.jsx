import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/blogs/${id}`);
        if (!response.ok) throw new Error('Blog not found');
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-red-600">Error: {error}</h2>
      </div>
    );
  }

  if (!blog) return null;

  return (
    <article className="max-w-3xl mx-auto">
      <img
        src={`http://localhost:5000/${blog.imageUrl}`}
        alt={blog.title}
        className="w-full h-64 object-cover rounded-lg mb-8"
      />
      
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog.title}</h1>
      
      <div className="text-gray-500 mb-8">
        {new Date(blog.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })}
      </div>
      
      <div className="prose prose-lg max-w-none">
        {blog.content.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  );
};

export default BlogDetail;