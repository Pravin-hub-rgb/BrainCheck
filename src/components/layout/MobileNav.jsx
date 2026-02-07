import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BarChart3 } from 'lucide-react';

const MobileNav = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-navy-800/90 backdrop-blur-md border-t border-navy-700 z-50">
      <div className="flex justify-around items-center py-2">
        <Link 
          to="/" 
          className={`flex flex-col items-center py-2 px-4 rounded-lg transition-all duration-200 ${
            isActive('/') 
              ? 'text-electric-blue-400' 
              : 'text-navy-300 hover:text-navy-100'
          }`}
        >
          <Home size={24} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link 
          to="/dashboard" 
          className={`flex flex-col items-center py-2 px-4 rounded-lg transition-all duration-200 ${
            isActive('/dashboard') 
              ? 'text-electric-blue-400' 
              : 'text-navy-300 hover:text-navy-100'
          }`}
        >
          <BarChart3 size={24} />
          <span className="text-xs mt-1">Dashboard</span>
        </Link>
      </div>
    </div>
  );
};

export default MobileNav;