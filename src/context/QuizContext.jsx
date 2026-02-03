import React, { createContext, useContext, useState, useEffect } from 'react';
import { shuffleArray } from '../utils/shuffle';

const QuizContext = createContext();

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};

export const QuizProvider = ({ children }) => {
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(30);
  const [highScores, setHighScores] = useState({});
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Load high scores from localStorage
  useEffect(() => {
    const savedScores = localStorage.getItem('quizHighScores');
    if (savedScores) {
      setHighScores(JSON.parse(savedScores));
    }
  }, []);

  // Save high scores to localStorage
  useEffect(() => {
    localStorage.setItem('quizHighScores', JSON.stringify(highScores));
  }, [highScores]);

  const startQuiz = (quiz) => {
    // Create a copy of the quiz with shuffled questions
    const shuffledQuiz = {
      ...quiz,
      questions: shuffleArray(quiz.questions)
    };
    
    setCurrentQuiz(shuffledQuiz);
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswers([]);
    setIsQuizActive(true);
    setTimeRemaining(30);
  };

  const endQuiz = () => {
    setIsQuizActive(false);
    // Save high score if better than previous
    if (currentQuiz && score > (highScores[currentQuiz.id] || 0)) {
      setHighScores(prev => ({
        ...prev,
        [currentQuiz.id]: score
      }));
    }
  };

  const selectAnswer = (answerIndex) => {
    if (!isQuizActive || currentQuestionIndex >= currentQuiz.questions.length) return;

    const currentQuestion = currentQuiz.questions[currentQuestionIndex];
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    const points = isCorrect ? 10 : 0;

    setAnswers(prev => [...prev, {
      questionId: currentQuestion.id,
      selectedAnswer: answerIndex,
      isCorrect,
      points
    }]);

    setScore(prev => prev + points);
    // Don't auto-advance here - let handleNextQuestion handle the advancement
  };

  const advanceQuestion = () => {
    if (isQuizActive && currentQuestionIndex < currentQuiz.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuiz(null);
    setCurrentQuestionIndex(0);
    setScore(0);
    setAnswers([]);
    setIsQuizActive(false);
    setTimeRemaining(30);
  };

  const updateTimer = (time) => {
    setTimeRemaining(time);
  };

  const updateCategory = (category) => {
    setSelectedCategory(category);
  };

  const updateSearchQuery = (query) => {
    setSearchQuery(query);
  };

  const value = {
    currentQuiz,
    currentQuestionIndex,
    score,
    answers,
    isQuizActive,
    timeRemaining,
    highScores,
    selectedCategory,
    searchQuery,
    startQuiz,
    endQuiz,
    selectAnswer,
    advanceQuestion,
    resetQuiz,
    updateTimer,
    updateCategory,
    updateSearchQuery
  };

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  );
};