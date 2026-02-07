import React from 'react';
import { categories } from '../../data/topics';
import { getStatsForDisplay } from '../../utils/stats';
import Button from '../common/Button';

const Filters = ({ selectedCategory, onCategoryChange }) => {
  const stats = getStatsForDisplay();

  return (
    <div className="space-y-6">
      {/* Categories Filter */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-navy-100 mb-4 flex items-center space-x-2">
          <span>📁</span>
          <span>Categories</span>
        </h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'primary' : 'ghost'}
              size="sm"
              className="w-full justify-start text-left"
              onClick={() => onCategoryChange(category.id)}
            >
              <span className="mr-2 text-lg">{category.icon}</span>
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Difficulty Filter */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-navy-100 mb-4 flex items-center space-x-2">
          <span>🎯</span>
          <span>Difficulty</span>
        </h3>
        <div className="space-y-2">
          <Button variant="ghost" size="sm" className="w-full justify-start text-left">
            <span className="mr-2">⚪</span>
            All Levels
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start text-left">
            <span className="mr-2">🟢</span>
            Easy
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start text-left">
            <span className="mr-2">🟡</span>
            Medium
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start text-left">
            <span className="mr-2">🔴</span>
            Hard
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="card p-6">
        <h3 className="text-lg font-semibold text-navy-100 mb-4">📊 Quick Stats</h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="text-navy-300">Total Quizzes</span>
            <span className="text-electric-blue-400 font-semibold">{stats.totalQuizzes}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-navy-300">Categories</span>
            <span className="text-electric-blue-400 font-semibold">{stats.totalCategories}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-navy-300">Questions</span>
            <span className="text-electric-blue-400 font-semibold">{stats.totalQuestions}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;