import React from 'react';

const ProgressBar = ({ 
  progress = 0, 
  max = 100, 
  showPercentage = true,
  size = 'md',
  className = '',
  ...props 
}) => {
  const percentage = Math.min(Math.max((progress / max) * 100, 0), 100);
  
  const sizes = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4',
  };

  return (
    <div className={`progress-bar ${sizes[size]} ${className}`} {...props}>
      <div 
        className="progress-fill"
        style={{ width: `${percentage}%` }}
      />
      {showPercentage && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-medium text-navy-200">
            {Math.round(percentage)}%
          </span>
        </div>
      )}
    </div>
  );
};

export default ProgressBar;