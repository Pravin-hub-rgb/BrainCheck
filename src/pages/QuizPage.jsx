import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import { loadQuizData } from '../data/quizIndex';
import Button from '../components/common/Button';
import Timer from '../components/common/Timer';
import ProgressBar from '../components/common/ProgressBar';
import LoadingSpinner from '../components/common/LoadingSpinner';

const QuizPage = () => {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const { 
    currentQuiz, 
    currentQuestionIndex, 
    score, 
    answers, 
    isQuizActive, 
    timeRemaining, 
    startQuiz, 
    selectAnswer, 
    advanceQuestion,
    endQuiz, 
    updateTimer 
  } = useQuiz();

  const [loading, setLoading] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);

  useEffect(() => {
    const initializeQuiz = async () => {
      setLoading(true);
      try {
        const quizData = await loadQuizData(quizId);
        startQuiz(quizData);
      } catch (error) {
        console.error('Error loading quiz:', error);
        navigate('/dashboard');
      } finally {
        setLoading(false);
      }
    };

    if (!currentQuiz || currentQuiz.id !== quizId) {
      initializeQuiz();
    } else {
      setLoading(false);
    }
  }, [quizId, currentQuiz, startQuiz, navigate]);

  useEffect(() => {
    if (isQuizActive && timeRemaining > 0) {
      const timer = setInterval(() => {
        updateTimer(timeRemaining - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeRemaining === 0 && isQuizActive) {
      handleTimeUp();
    }
  }, [timeRemaining, isQuizActive]);

  const handleTimeUp = () => {
    if (isQuizActive) {
      selectAnswer(null); // Submit no answer when time's up
      setIsAnswerSubmitted(true);
      setShowExplanation(true);
      
      // Auto-advance after showing explanation
      setTimeout(() => {
        handleNextQuestion();
      }, 3000);
    }
  };

  const handleAnswerSelect = (answerIndex) => {
    if (!isQuizActive || isAnswerSubmitted) return;
    
    setSelectedAnswer(answerIndex);
    selectAnswer(answerIndex);
    setIsAnswerSubmitted(true);
    setShowExplanation(true);
    
    // Auto-advance after showing explanation
    setTimeout(() => {
      handleNextQuestion();
    }, 3000);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex >= currentQuiz.questions.length - 1) {
      endQuiz();
      navigate('/results');
    } else {
      // Clear current question state first
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
      setShowExplanation(false);
      
      // Advance to next question using the context function
      advanceQuestion();
      
      // Add a small delay to ensure UI clears properly before showing next question
      setTimeout(() => {
        updateTimer(30);
      }, 100);
    }
  };

  const handleQuitQuiz = () => {
    endQuiz();
    navigate('/dashboard');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner text="Loading quiz..." />
      </div>
    );
  }

  if (!currentQuiz) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-navy-100 mb-4">Quiz Not Found</h2>
          <Button onClick={() => navigate('/dashboard')}>Back to Dashboard</Button>
        </div>
      </div>
    );
  }

  const currentQuestion = currentQuiz.questions[currentQuestionIndex];
  const progressPercentage = ((currentQuestionIndex) / currentQuiz.questions.length) * 100;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Quiz Header */}
      <div className="card p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <span className="text-3xl">{currentQuiz.icon}</span>
            <div>
              <h1 className="text-2xl font-bold text-navy-100">{currentQuiz.title}</h1>
              <p className="text-navy-300 text-sm">Question {currentQuestionIndex + 1} of {currentQuiz.questions.length}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Timer 
              initialTime={30}
              isActive={isQuizActive && !isAnswerSubmitted}
              onTimeUp={handleTimeUp}
              showProgress={true}
            />
            <div className="text-right">
              <div className="text-2xl font-bold text-electric-blue-400">{score}</div>
              <div className="text-xs text-navy-400">Score</div>
            </div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <ProgressBar progress={progressPercentage} max={100} size="lg" />
      </div>

      {/* Question Card */}
      <div className="card p-8">
        {/* Question */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-navy-100 mb-4">
            {currentQuestion.question}
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((option, index) => {
            const isCorrect = index === currentQuestion.correctAnswer;
            const isSelected = selectedAnswer === index;
            const isSubmitted = isAnswerSubmitted;

            let optionClass = "p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer hover:bg-navy-700/50";
            
            if (isSubmitted) {
              if (isSelected && isCorrect) {
                optionClass += " border-success-green-500 bg-success-green-600/20";
              } else if (isSelected && !isCorrect) {
                optionClass += " border-danger-red-500 bg-danger-red-600/20";
              } else if (isCorrect) {
                optionClass += " border-success-green-500 bg-success-green-600/20";
              } else {
                optionClass += " border-navy-600 bg-navy-800/30";
              }
            } else {
              optionClass += " border-navy-600 hover:border-electric-blue-500";
            }

            return (
              <div
                key={index}
                className={optionClass}
                onClick={() => handleAnswerSelect(index)}
              >
                <div className="flex items-center justify-between">
                  <span className="text-navy-100">{option}</span>
                  {isSubmitted && (
                    <span className="text-lg">
                      {isCorrect ? "✓" : isSelected ? "✗" : ""}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className="p-4 bg-navy-700/50 rounded-lg border border-navy-600 mb-6">
            <h3 className="text-sm font-semibold text-navy-200 mb-2">Explanation</h3>
            <p className="text-navy-300 text-sm">{currentQuestion.explanation}</p>
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between">
          <Button variant="ghost" onClick={handleQuitQuiz}>
            Quit Quiz
          </Button>
          
          {isAnswerSubmitted && (
            <Button 
              variant="primary" 
              onClick={handleNextQuestion}
              className="ml-auto"
            >
              {currentQuestionIndex >= currentQuiz.questions.length - 1 ? "Finish Quiz" : "Next Question"}
            </Button>
          )}
        </div>
      </div>

      {/* Question Navigation */}
      <div className="mt-6 flex justify-center">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(20px,_1fr))] gap-2 max-w-4xl">
          {currentQuiz.questions.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index < currentQuestionIndex 
                  ? 'bg-success-green-500' 
                  : index === currentQuestionIndex 
                    ? 'bg-electric-blue-500' 
                    : 'bg-navy-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;