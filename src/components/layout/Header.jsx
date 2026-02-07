import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useQuiz } from '../../context/QuizContext';
import { Home, BarChart3, Search, Menu, X } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const { searchQuery, updateSearchQuery } = useQuiz();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-navy-800/80 backdrop-blur-md border-b border-navy-700 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-electric-blue-500 to-neon-cyan-500 rounded-xl flex items-center justify-center shadow-neon">
              <span className="text-white font-bold text-base md:text-lg">Q</span>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-gradient">
                BrainCheck
              </h1>
              <p className="text-navy-300 text-xs md:text-sm hidden sm:block">Quiz Challenge Platform</p>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-navy-700 transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X size={24} className="text-navy-200" />
            ) : (
              <Menu size={24} className="text-navy-200" />
            )}
          </button>

          {/* Desktop Navigation */}
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
          <div className="hidden lg:flex-1 lg:max-w-md lg:mx-8">
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

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 border-t border-navy-700 pt-4 animate-fade-in">
            <nav className="flex flex-col space-y-2 mb-4">
              <Link 
                to="/" 
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive('/') 
                    ? 'bg-electric-blue-600/20 text-electric-blue-400 border border-electric-blue-500/50' 
                    : 'text-navy-300 hover:text-navy-100 hover:bg-navy-700'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Home size={20} />
                <span>Home</span>
              </Link>
              <Link 
                to="/dashboard" 
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                  isActive('/dashboard') 
                    ? 'bg-electric-blue-600/20 text-electric-blue-400 border border-electric-blue-500/50' 
                    : 'text-navy-300 hover:text-navy-100 hover:bg-navy-700'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <BarChart3 size={20} />
                <span>Dashboard</span>
              </Link>
            </nav>
            
            {/* Mobile Search Bar */}
            <div className="relative mb-4">
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
        )}
      </div>
    </header>
  );
};

export default Header;