import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  disabled = false,
  className = '',
  type = 'button',
  ...props 
}) => {
  const baseClasses = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-electric-blue-600 hover:bg-electric-blue-700 text-white shadow-neon hover:shadow-neon-lg transform hover:scale-105 focus:ring-electric-blue-500',
    secondary: 'bg-navy-700 hover:bg-navy-600 text-navy-100 border border-navy-600 hover:border-navy-500 focus:ring-navy-500',
    ghost: 'bg-transparent hover:bg-navy-700 text-navy-200 border border-navy-600 hover:border-navy-500 focus:ring-navy-500',
    danger: 'bg-danger-red-600 hover:bg-danger-red-700 text-white focus:ring-danger-red-500',
    success: 'bg-success-green-600 hover:bg-success-green-700 text-white focus:ring-success-green-500',
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm min-h-10',
    md: 'px-4 py-2 text-base min-h-11',
    lg: 'px-6 py-3 text-lg min-h-12',
    xl: 'px-8 py-4 text-xl min-h-14',
  };

  return (
    <button
      type={type}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;