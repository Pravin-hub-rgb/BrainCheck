import React from 'react';

const Card = ({ 
  children, 
  className = '',
  variant = 'default',
  hoverable = true,
  ...props 
}) => {
  const baseClasses = 'card transition-all duration-300';
  
  const variants = {
    default: '',
    hover: hoverable ? 'hover:shadow-neon-lg hover:-translate-y-1' : '',
    featured: 'border-2 border-electric-blue-500/50 shadow-neon-lg',
  };

  return (
    <div 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = '' }) => (
  <div className={`px-6 py-4 border-b border-navy-700 ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = '' }) => (
  <div className={`px-6 py-4 ${className}`}>
    {children}
  </div>
);

const CardFooter = ({ children, className = '' }) => (
  <div className={`px-6 py-4 border-t border-navy-700 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className = '' }) => (
  <h3 className={`text-lg font-semibold text-navy-100 ${className}`}>
    {children}
  </h3>
);

const CardDescription = ({ children, className = '' }) => (
  <p className={`text-sm text-navy-300 ${className}`}>
    {children}
  </p>
);

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;
Card.Title = CardTitle;
Card.Description = CardDescription;

export default Card;