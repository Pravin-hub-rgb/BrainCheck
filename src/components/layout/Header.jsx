import { Link, useLocation } from 'react-router-dom';
import { useQuiz } from '../../context/QuizContext';
import { Home, BarChart3, Search } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const { searchQuery, updateSearchQuery } = useQuiz();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-navy-800/80 backdrop-blur-md border-b border-navy-700 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-electric-blue-500 to-neon-cyan-500 rounded-xl flex items-center justify-center shadow-neon">
                <span className="text-white font-bold text-lg">Q</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gradient">
                  BrainCheck
                </h1>
                <p className="text-navy-300 text-sm">Quiz Challenge Platform</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive('/') 
                  ? 'bg-electric-blue-600/20 text-electric-blue-400 border border-electric-blue-500/50' 
                  : 'text-navy-300 hover:text-navy-100 hover:bg-navy-700'
              }`}
            >
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link 
              to="/dashboard" 
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                isActive('/dashboard') 
                  ? 'bg-electric-blue-600/20 text-electric-blue-400 border border-electric-blue-500/50' 
                  : 'text-navy-300 hover:text-navy-100 hover:bg-navy-700'
              }`}
            >
              <BarChart3 size={20} />
              <span>Dashboard</span>
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-navy-400" size={20} />
              <input
                type="text"
                placeholder="Search quizzes..."
                value={searchQuery}
                onChange={(e) => updateSearchQuery(e.target.value)}
                className="input-field pl-10 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;