import { quizIndex } from '../data/quizIndex';
import { categories } from '../data/topics';

/**
 * Calculate dynamic statistics from quiz data
 */
export const calculateStats = () => {
  // Total quizzes
  const totalQuizzes = quizIndex.length;
  
  // Total questions
  const totalQuestions = quizIndex.reduce((sum, quiz) => sum + quiz.questionsCount, 0);
  
  // Categories with quizzes (excluding 'all')
  const categoriesWithQuizzes = categories
    .filter(category => category.id !== 'all')
    .filter(category => {
      return quizIndex.some(quiz => quiz.category === category.id);
    });
  
  const totalCategories = categoriesWithQuizzes.length;

  return {
    totalQuizzes,
    totalCategories,
    totalQuestions,
    categoriesWithQuizzes
  };
};

/**
 * Format numbers with appropriate suffixes
 */
export const formatNumber = (num) => {
  if (num >= 1000) {
    return `${Math.floor(num / 1000)}k+`;
  }
  return num.toString();
};

/**
 * Get dynamic stats for display
 */
export const getStatsForDisplay = () => {
  const stats = calculateStats();
  
  return {
    totalQuizzes: formatNumber(stats.totalQuizzes),
    totalCategories: stats.totalCategories,
    totalQuestions: formatNumber(stats.totalQuestions),
    categoriesWithQuizzes: stats.categoriesWithQuizzes
  };
};