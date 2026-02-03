import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import Button from '../components/common/Button';
import ProgressBar from '../components/common/ProgressBar';

const ResultsPage = () => {
  const navigate = useNavigate();
  const { currentQuiz, score, answers, highScores, resetQuiz } = useQuiz();
  
  const totalQuestions = currentQuiz?.questions.length || 0;
  const maxScore = totalQuestions * 10;
  const percentage = totalQuestions > 0 ? Math.round((score / maxScore) * 100) : 0;
  const previousHighScore = highScores[currentQuiz?.id] || 0;
  const isNewHighScore = score > previousHighScore;

  const getScoreGrade = (percentage) => {
    if (percentage >= 90) return { grade: 'A+', color: 'success-green' };
    if (percentage >= 80) return { grade: 'A', color: 'success-green' };
    if (percentage >= 70) return { grade: 'B', color: 'warning-yellow' };
    if (percentage >= 60) return { grade: 'C', color: 'warning-yellow' };
    if (percentage >= 50) return { grade: 'D', color: 'danger-red' };
    return { grade: 'F', color: 'danger-red' };
  };

  const scoreGrade = getScoreGrade(percentage);

  const handlePlayAgain = () => {
    resetQuiz();
    navigate(`/quiz/${currentQuiz.id}`);
  };

  const handleBackToDashboard = () => {
    resetQuiz();
    navigate('/dashboard');
  };

  if (!currentQuiz) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-navy-100 mb-4">No Quiz Found</h2>
          <Button onClick={handleBackToDashboard}>Back to Dashboard</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Results Card */}
      <div className="card p-8 text-center">
        {/* Trophy Icon */}
        <div className="text-6xl mb-4">
          {percentage >= 80 ? '🏆' : percentage >= 60 ? '🎖️' : '🎯'}
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-navy-100 mb-2">Quiz Complete!</h1>
        
        {/* Score Summary */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-electric-blue-400">{score}</div>
            <div className="text-sm text-navy-400">Your Score</div>
          </div>
          <div className="text-center">
            <div className={`text-2xl font-bold text-${scoreGrade.color}-400`}>{scoreGrade.grade}</div>
            <div className="text-sm text-navy-400">Grade</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-navy-300 mb-2">
            <span>Progress</span>
            <span>{percentage}%</span>
          </div>
          <ProgressBar progress={percentage} max={100} size="lg" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="text-center">
            <div className="text-lg font-semibold text-navy-100">{answers.length}</div>
            <div className="text-xs text-navy-400">Questions</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-success-green-400">
              {answers.filter(a => a.isCorrect).length}
            </div>
            <div className="text-xs text-navy-400">Correct</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-danger-red-400">
              {answers.filter(a => !a.isCorrect).length}
            </div>
            <div className="text-xs text-navy-400">Incorrect</div>
          </div>
        </div>

        {/* High Score */}
        {isNewHighScore && (
          <div className="mb-6 p-4 bg-success-green-600/20 border border-success-green-500/50 rounded-lg">
            <div className="text-success-green-400 font-semibold mb-1">🎉 New High Score!</div>
            <div className="text-sm text-navy-300">
              Previous: {previousHighScore} | New: {score}
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="space-y-4">
          <Button variant="primary" size="lg" onClick={handlePlayAgain} className="w-full">
            Play Again
          </Button>
          <Button variant="ghost" size="lg" onClick={handleBackToDashboard} className="w-full">
            Back to Dashboard
          </Button>
        </div>
      </div>

      {/* Share Section */}
      <div className="card p-6 mt-6 text-center">
        <h3 className="text-lg font-semibold text-navy-100 mb-4">Share Your Results</h3>
        <div className="flex justify-center space-x-4">
          <Button variant="ghost" size="sm">
            📱 Share
          </Button>
          <Button variant="ghost" size="sm">
            📋 Copy Score
          </Button>
          <Button variant="ghost" size="sm">
            🖨️ Print
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;