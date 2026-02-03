import React from 'react';
import { RefreshCw } from 'lucide-react';

const LoadingSpinner = ({ 
  size = 'md', 
  className = '',
  text = 'Loading...',
  ...props 
}) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`} {...props}>
      <RefreshCw className={`animate-spin text-electric-blue-500 ${sizes[size]}`} />
      {text && <span className="text-navy-300 text-sm">{text}</span>}
    </div>
  );
};

export default LoadingSpinner;