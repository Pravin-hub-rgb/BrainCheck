import React, { useState, useEffect } from 'react';
import { useQuiz } from '../context/QuizContext';
import { getQuizzesByCategory, searchQuizzes, getFeaturedQuizzes } from '../data/quizIndex';
import { categories } from '../data/topics';
import QuizCard from '../components/dashboard/QuizCard';
import Filters from '../components/dashboard/Filters';
import SearchBar from '../components/common/SearchBar';
import LoadingSpinner from '../components/common/LoadingSpinner';

const Dashboard = () => {
  const { selectedCategory, searchQuery } = useQuiz();
  const [quizzes, setQuizzes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [featuredQuizzes, setFeaturedQuizzes] = useState([]);

  useEffect(() => {
    const loadQuizzes = async () => {
      setLoading(true);
      
      // Simulate loading delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const allQuizzes = getQuizzesByCategory(selectedCategory);
      const searchResults = searchQuery ? searchQuizzes(searchQuery) : allQuizzes;
      
      // Get featured quizzes for hero section
      const featured = getFeaturedQuizzes();
      
      setFeaturedQuizzes(featured);
      setQuizzes(searchResults);
      setLoading(false);
    };

    loadQuizzes();
  }, [selectedCategory, searchQuery]);

  const handleCategoryChange = (category) => {
    // This will be handled by the context
  };

  const handleSearchChange = (query) => {
    // This will be handled by the context
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-electric-blue-600/20 to-neon-cyan-600/20"></div>
        <div className="relative bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-2xl p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Welcome to BrainCheck
            </h1>
            <p className="text-xl text-navy-300 mb-6 leading-relaxed">
              Challenge your knowledge with 100+ quizzes across various categories. 
              From civic education to fun challenges, test yourself and track your progress.
            </p>
            
            {/* Featured Quiz */}
            {featuredQuizzes.length > 0 && (
              <div className="bg-navy-700/50 rounded-xl p-6 border border-navy-600">
                <h2 className="text-lg font-semibold text-navy-200 mb-2">Featured Quiz</h2>
                <div className="flex items-center space-x-4">
                  <span className="text-4xl">{featuredQuizzes[0].icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-navy-100">{featuredQuizzes[0].title}</h3>
                    <p className="text-navy-300 text-sm">{featuredQuizzes[0].description}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1">
          <Filters 
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          {/* Search Bar */}
          <div className="mb-6">
            <SearchBar 
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search quizzes by title, description, or tags..."
            />
          </div>

          {/* Results Info */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-navy-300">Showing</span>
              <span className="text-electric-blue-400 font-semibold">{quizzes.length}</span>
              <span className="text-navy-300">quizzes</span>
            </div>
            {loading && <LoadingSpinner size="sm" />}
          </div>

          {/* Quiz Grid */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="card h-48 animate-pulse bg-navy-700/30"></div>
              ))}
            </div>
          ) : quizzes.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-navy-200 mb-2">No quizzes found</h3>
              <p className="text-navy-400">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quizzes.map((quiz) => (
                <QuizCard key={quiz.id} quiz={quiz} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;