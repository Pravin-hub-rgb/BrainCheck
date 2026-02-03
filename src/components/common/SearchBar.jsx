import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ 
  value = '', 
  onChange, 
  placeholder = 'Search...',
  className = '',
  ...props 
}) => {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-navy-400">
        <Search size={20} />
      </div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="input-field pl-10 w-full"
        {...props}
      />
    </div>
  );
};

export default SearchBar;