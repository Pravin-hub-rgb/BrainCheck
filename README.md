# BrainCheck - Quiz Challenge Platform

A modern, interactive quiz platform built with React, featuring 100+ quizzes across various categories with a stunning dark navy theme.

## 🎯 Features

### Core Features
- **100+ Quizzes**: Extensive collection across 9 different categories
- **Dark Navy Theme**: Modern, sleek design with neon accents
- **Real-time Scoring**: Instant feedback and score tracking
- **Progress Tracking**: Monitor your performance over time
- **Timer System**: 30-second timer per question for added challenge
- **High Score System**: Local storage for score persistence
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile

### Categories
- 🏛️ Civic Education (Constitution, Government, Rights)
- 🔬 Science & Technology
- 📜 History & Culture
- 💻 Technology & Innovation
- ⚽ Sports & Games
- 🎬 Entertainment & Pop Culture
- 🌍 Geography & Travel
- 🎉 Fun & Games (5-year-old challenges, 5th grader quizzes)

### User Experience
- **Search & Filter**: Find quizzes by category, difficulty, or keywords
- **Instant Feedback**: See explanations for each answer
- **Progress Visualization**: Visual progress bars and score breakdowns
- **Grade System**: A+ to F grading based on performance
- **Share Results**: Easy sharing and score tracking

## 🛠️ Tech Stack

### Frontend
- **React 18**: Modern React with functional components and hooks
- **Vite**: Fast build tool and development server
- **React Router v6**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework with custom dark theme
- **Lucide React**: Modern icon library

### Architecture
- **Modular Components**: Reusable, composable component architecture
- **Context API**: Global state management for quiz data
- **Lazy Loading**: Optimized data loading for large quiz collections
- **Component Composition**: Flexible, maintainable code structure

## 📁 Project Structure

```
src/
├── components/
│   ├── common/           # Reusable components
│   │   ├── Button.jsx    # Styled buttons with variants
│   │   ├── Card.jsx      # Card component with hover effects
│   │   ├── ProgressBar.jsx # Progress visualization
│   │   ├── Timer.jsx     # Countdown timer
│   │   └── SearchBar.jsx # Search functionality
│   ├── layout/           # Layout components
│   │   ├── Header.jsx    # App header with navigation
│   │   ├── Footer.jsx    # App footer
│   │   └── Layout.jsx    # Main layout wrapper
│   └── dashboard/        # Dashboard-specific components
│       ├── QuizCard.jsx  # Individual quiz display
│       ├── Filters.jsx   # Category and difficulty filters
│       └── QuizGrid.jsx  # Grid layout for quizzes
├── pages/                # Page components
│   ├── Home.jsx          # Landing page
│   ├── Dashboard.jsx     # Quiz listing page
│   ├── QuizPage.jsx      # Main quiz interface
│   └── ResultsPage.jsx   # Results and score display
├── context/              # State management
│   └── QuizContext.jsx   # Global quiz state
├── data/                 # Quiz data and configuration
│   ├── topics.js         # Category definitions
│   ├── quizIndex.js      # Master quiz index
│   └── quizData/         # Individual quiz data files
└── hooks/                # Custom React hooks
    ├── useQuiz.js        # Quiz logic hook
    └── useTimer.js       # Timer functionality
```

## 🎨 Design System

### Color Palette
- **Navy Backgrounds**: Deep navy theme (#0f172a)
- **Electric Blue**: Primary accent (#3b82f6)
- **Neon Cyan**: Secondary accent (#06b6d4)
- **Success Green**: Correct answers (#22c55e)
- **Danger Red**: Incorrect answers (#ef4444)
- **Warning Yellow**: Medium difficulty (#f59e0b)

### Typography
- **Font Family**: Inter with system fallbacks
- **Text Gradient**: Electric blue to neon cyan gradients
- **Animations**: Smooth transitions and hover effects
- **Shadows**: Neon glow effects for interactive elements

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd BrainCheck
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5174`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📊 Adding New Quizzes

### Quiz Data Structure

```javascript
export default {
  id: "unique-quiz-id",
  title: "Quiz Title",
  category: "category-id",
  difficulty: "easy|medium|hard",
  questionsCount: 50,
  description: "Quiz description",
  icon: "🎯",
  tags: ["tag1", "tag2"],
  estimatedTime: "5-10 minutes",
  
  questions: [
    {
      id: 1,
      question: "Question text?",
      options: [
        "Option A",
        "Option B", 
        "Option C",
        "Option D"
      ],
      correctAnswer: 0, // Index of correct option
      explanation: "Detailed explanation"
    }
  ]
};
```

### Steps to Add a Quiz

1. **Create quiz data file** in `src/data/quizData/`
2. **Add quiz entry** to `src/data/quizIndex.js`
3. **Import and register** in the quiz index
4. **Test the quiz** in the dashboard

### Categories and Tags

- **Categories**: Define in `src/data/topics.js`
- **Tags**: Use relevant keywords for search functionality
- **Difficulty**: Categorize as easy, medium, or hard

## 🔧 Customization

### Theme Colors
Modify `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  'navy': {
    50: '#f8fafc',
    // ... other shades
    900: '#020617',
  },
  // Add your custom colors
}
```

### Component Styling
- **Common Components**: Modify in `src/components/common/`
- **Page Layout**: Update in respective page components
- **Global Styles**: Edit `src/index.css`

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Desktop**: Full feature set with grid layouts
- **Tablet**: Adapted layouts with touch-friendly interactions
- **Mobile**: Streamlined interface with mobile-first design

## 🎯 Performance Features

- **Lazy Loading**: Quiz data loaded on demand
- **Virtualization**: Optimized rendering for large lists
- **Caching**: Local storage for user preferences and scores
- **Bundle Optimization**: Tree-shaking and code splitting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Quiz Content**: Based on educational materials and public domain knowledge
- **Design Inspiration**: Modern web design trends and best practices
- **Technology Stack**: Built with cutting-edge React ecosystem tools

---

**BrainCheck** - Challenge your knowledge, track your progress, and learn something new every day! 🧠✨