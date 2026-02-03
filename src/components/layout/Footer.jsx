const Footer = () => {
  return (
    <footer className="bg-navy-800/80 backdrop-blur-md border-t border-navy-700">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-electric-blue-500 to-neon-cyan-500 rounded-lg flex items-center justify-center shadow-neon">
                <span className="text-white font-bold">Q</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gradient">BrainCheck</h3>
                <p className="text-navy-400 text-sm">Challenge your knowledge</p>
              </div>
            </div>
            <p className="text-navy-300 text-sm leading-relaxed">
              A comprehensive quiz platform with 100+ quizzes across various categories. 
              Test your knowledge and track your progress.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-navy-100 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-navy-300">
              <li><a href="/" className="hover:text-navy-100 transition-colors">Home</a></li>
              <li><a href="/dashboard" className="hover:text-navy-100 transition-colors">Dashboard</a></li>
              <li><a href="#" className="hover:text-navy-100 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-navy-100 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold text-navy-100 mb-4">Categories</h4>
            <div className="flex flex-wrap gap-2">
              <span className="badge">Civic Education</span>
              <span className="badge">Science</span>
              <span className="badge">History</span>
              <span className="badge">Technology</span>
              <span className="badge">Sports</span>
              <span className="badge">Entertainment</span>
              <span className="badge">Geography</span>
              <span className="badge">Fun</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-navy-700 mt-8 pt-8 text-center text-navy-400 text-sm">
          <p>&copy; {new Date().getFullYear()} BrainCheck. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;