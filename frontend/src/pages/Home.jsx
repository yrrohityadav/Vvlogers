import { Link } from "react-router-dom"
import BlogCard from "../components/BlogCard"
import { useState, useEffect } from "react"

const Home = () => {
  const [blogs, setBlogs] = useState([])
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    // Fetch blogs from API
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/blogs")
        const data = await response.json()
        setBlogs(data)
      } catch (error) {
        console.error("Error fetching blogs:", error)
      }
    }
    fetchBlogs()
  }, [])

  // Filter blogs based on the search query
  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.content.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4 py-16 space-y-12">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Welcome to Thoughtscape</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore a world of ideas, stories, and insights. Share your thoughts and connect with like-minded
            individuals.
          </p>
          <Link
            to="/blog/create"
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
          >
            Start Writing
          </Link>
        </div>

        <div className="max-w-3xl mx-auto mb-8">
          <input
            type="text"
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 rounded-md border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))
          ) : (
            <p className="text-center text-xl text-gray-600 col-span-full">No blogs found</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home
