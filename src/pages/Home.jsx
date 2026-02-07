import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import { getStatsForDisplay } from '../utils/stats';

const Home = () => {
  const stats = getStatsForDisplay();

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl">
        <div className="absolute inset-0 bg-gradient-to-br from-electric-blue-600/20 via-neon-cyan-600/10 to-accent-purple-600/20"></div>
        <div className="relative bg-navy-800/50 backdrop-blur-sm border border-navy-700 rounded-3xl p-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-8xl mb-6 animate-bounce-slow">🧠</div>
            <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
              BrainCheck
            </h1>
            <p className="text-xl md:text-2xl text-navy-300 mb-8 leading-relaxed">
              Challenge your mind with {stats.totalQuizzes} quizzes across {stats.totalCategories} categories. 
              From civic education to comprehensive India knowledge, test your knowledge and track your progress.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button variant="primary" size="xl">
                  Start Quizzing
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="ghost" size="xl">
                  Browse Quizzes
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="hover:shadow-neon-lg transition-all duration-300">
          <Card.Content>
            <div className="text-4xl mb-4">🎯</div>
            <Card.Title>{stats.totalQuizzes} Quizzes</Card.Title>
            <Card.Description>
              Explore quizzes across {stats.totalCategories} categories including civic education 
              and comprehensive India knowledge.
            </Card.Description>
          </Card.Content>
        </Card>

        <Card className="hover:shadow-neon-lg transition-all duration-300">
          <Card.Content>
            <div className="text-4xl mb-4">🏆</div>
            <Card.Title>Track Progress</Card.Title>
            <Card.Description>
              Monitor your scores, compete with your past performances, 
              and watch your knowledge grow over time.
            </Card.Description>
          </Card.Content>
        </Card>

        <Card className="hover:shadow-neon-lg transition-all duration-300">
          <Card.Content>
            <div className="text-4xl mb-4">⚡</div>
            <Card.Title>Real-time Feedback</Card.Title>
            <Card.Description>
              Get instant feedback on your answers with detailed explanations 
              to help you learn and improve.
            </Card.Description>
          </Card.Content>
        </Card>
      </div>

      {/* Categories Preview */}
      <div className="card p-8">
        <h2 className="text-3xl font-bold text-navy-100 mb-6 text-center">Explore Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {stats.categoriesWithQuizzes.map((category, index) => (
            <div key={index} className="text-center p-4 rounded-lg border border-navy-700 hover:border-electric-blue-500/50 transition-all duration-300">
              <div className="text-3xl mb-2">{category.icon}</div>
              <div className={`font-semibold ${category.color}`}>{category.name}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link to="/dashboard">
            <Button variant="secondary">View All Categories</Button>
          </Link>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <Card className="p-8">
          <h2 className="text-3xl font-bold text-navy-100 mb-4">Ready to Challenge Yourself?</h2>
          <p className="text-navy-300 mb-6">
            Join thousands of users who are testing their knowledge every day.
          </p>
          <Link to="/dashboard">
            <Button variant="primary" size="lg">
              Get Started Now
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default Home;