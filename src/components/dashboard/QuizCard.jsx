import React from 'react';
import { Link } from 'react-router-dom';
import { useQuiz } from '../../context/QuizContext';
import Button from '../common/Button';
import ProgressBar from '../common/ProgressBar';
import { getQuizById } from '../../data/quizIndex';

const QuizCard = ({ quiz }) => {
  const { highScores } = useQuiz();
  const highScore = highScores[quiz.id] || 0;

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy': return 'success-green';
      case 'medium': return 'warning-yellow';
      case 'hard': return 'danger-red';
      default: return 'electric-blue';
    }
  };

  const getDifficultyEmoji = (difficulty) => {
    switch (difficulty) {
      case 'easy': return '🟢';
      case 'medium': return '🟡';
      case 'hard': return '🔴';
      default: return '⚪';
    }
  };

  return (
    <div className="card hover:shadow-neon-lg transition-all duration-300 hover:-translate-y-1">
      {/* Card Header */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <span className="text-3xl">{quiz.icon}</span>
            <div>
              <h3 className="text-lg font-bold text-navy-100">{quiz.title}</h3>
              <p className="text-navy-300 text-sm">{quiz.category}</p>
            </div>
          </div>
          <div className={`badge bg-${getDifficultyColor(quiz.difficulty)}-600/20 text-${getDifficultyColor(quiz.difficulty)}-300 border-${getDifficultyColor(quiz.difficulty)}-500/50`}>
            {getDifficultyEmoji(quiz.difficulty)} {quiz.difficulty}
          </div>
        </div>

        {/* Description */}
        <p className="text-navy-300 text-sm mb-4 leading-relaxed">
          {quiz.description}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-electric-blue-400">{quiz.questionsCount}</div>
            <div className="text-xs text-navy-400">Questions</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-neon-cyan-400">{quiz.estimatedTime}</div>
            <div className="text-xs text-navy-400">Est. Time</div>
          </div>
        </div>

        {/* High Score */}
        {highScore > 0 && (
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-navy-300">Your Best Score</span>
              <span className="text-sm font-semibold text-success-green-400">{highScore}</span>
            </div>
            <ProgressBar 
              progress={highScore} 
              max={quiz.questionsCount * 10} 
              size="sm" 
            />
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {quiz.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="badge text-xs">
              {tag}
            </span>
          ))}
          {quiz.tags.length > 3 && (
            <span className="badge text-xs">+{quiz.tags.length - 3}</span>
          )}
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-6 py-4 border-t border-navy-700 bg-navy-800/30">
        <Link to={`/quiz/${quiz.id}`}>
          <Button 
            variant="primary" 
            size="md" 
            className="w-full"
          >
            Start Quiz
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default QuizCard;