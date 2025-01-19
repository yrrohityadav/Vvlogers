import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
            Thoughtscape
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition duration-300">
              Home
            </Link>
            <Link to="/blog/create" className="text-gray-600 hover:text-blue-600 transition duration-300">
              Create Blog
            </Link>
            <Link to="/help" className="text-gray-600 hover:text-blue-600 transition duration-300">
              Help
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

