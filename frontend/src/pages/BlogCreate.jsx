import BlogForm from '../components/BlogForm';

const BlogCreate = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Create New Blog Post</h1>
      <BlogForm />
    </div>
  );
};

export default BlogCreate;
