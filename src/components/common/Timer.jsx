import React, { useEffect, useRef } from 'react';

const Timer = ({ 
  initialTime = 30, 
  onTimeUp, 
  isActive = true,
  className = '',
  showProgress = true,
  ...props 
}) => {
  const [time, setTime] = React.useState(initialTime);
  const [isRunning, setIsRunning] = React.useState(isActive);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isActive && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime(prevTime => {
          if (prevTime <= 1) {
            setIsRunning(false);
            if (onTimeUp) onTimeUp();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isActive, time, onTimeUp]);

  useEffect(() => {
    if (isActive) {
      setTime(initialTime);
      setIsRunning(true);
    }
  }, [initialTime, isActive]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercentage = (time / initialTime) * 100;
  const isLowTime = time <= 5;

  return (
    <div className={`relative ${className}`} {...props}>
      <div className="flex items-center justify-center space-x-3">
        <div className={`text-2xl font-bold transition-colors ${
          isLowTime ? 'text-danger-red-400 animate-pulse' : 'text-navy-100'
        }`}>
          {formatTime(time)}
        </div>
        {showProgress && (
          <div className="w-16">
            <div className="progress-bar h-2">
              <div 
                className={`progress-fill ${isLowTime ? 'bg-danger-red-500' : 'bg-electric-blue-500'}`}
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        )}
      </div>
      {isLowTime && (
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-danger-red-400 font-medium">
          Time running out!
        </div>
      )}
    </div>
  );
};

export default Timer;