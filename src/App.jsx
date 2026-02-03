import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QuizProvider } from './context/QuizContext';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import QuizPage from './pages/QuizPage';
import ResultsPage from './pages/ResultsPage';
import Home from './pages/Home';

function App() {
  return (
    <QuizProvider>
      <Router>
        <div className="min-h-screen bg-navy-900">
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/quiz/:quizId" element={<QuizPage />} />
              <Route path="/results" element={<ResultsPage />} />
            </Routes>
          </Layout>
        </div>
      </Router>
    </QuizProvider>
  );
}

export default App;