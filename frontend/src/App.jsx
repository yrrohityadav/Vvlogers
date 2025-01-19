import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BlogDetail from './pages/BlogDetail';
import BlogCreate from './pages/BlogCreate';
import Help from './pages/Help';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/create" element={<BlogCreate />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;