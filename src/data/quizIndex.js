import indianCitizenData from './quizData/indian-citizen';

export const quizIndex = [
  {
    id: "indian-citizen",
    title: "100 Essential Things Every Indian Citizen Should Know",
    category: "civic-education",
    difficulty: "medium",
    questionsCount: 100,
    description: "Test your knowledge of Indian citizenship, Constitution, and culture",
    icon: "🏛️",
    tags: ["India", "Constitution", "Civic", "History", "Government"],
    dataFile: "indian-citizen.js",
    featured: true,
    estimatedTime: "20-30 minutes",
    highScore: 0
  },
  {
    id: "animal-quiz",
    title: "Animal Kingdom Challenge",
    category: "science",
    difficulty: "easy",
    questionsCount: 50,
    description: "Test your knowledge about animals and wildlife",
    icon: "🦁",
    tags: ["Animals", "Wildlife", "Science", "Nature"],
    dataFile: "animal-quiz.js",
    featured: false,
    estimatedTime: "10-15 minutes",
    highScore: 0
  },
  {
    id: "smarter-than-5yo-science",
    title: "Are You Smarter Than 5 Yo? - Science Edition",
    category: "fun",
    difficulty: "easy",
    questionsCount: 30,
    description: "Fun science questions that test basic knowledge",
    icon: "🧪",
    tags: ["Science", "Fun", "Kids", "Basic"],
    dataFile: "smarter-than-5yo-science.js",
    featured: false,
    estimatedTime: "5-10 minutes",
    highScore: 0
  },
  {
    id: "smarter-than-5yo-maths",
    title: "Are You Smarter Than 5 Yo? - Maths Edition",
    category: "fun",
    difficulty: "easy",
    questionsCount: 30,
    description: "Basic math questions to test your fundamentals",
    icon: "➗",
    tags: ["Math", "Fun", "Kids", "Basic"],
    dataFile: "smarter-than-5yo-maths.js",
    featured: false,
    estimatedTime: "5-10 minutes",
    highScore: 0
  },
  {
    id: "smarter-than-5th-grader",
    title: "Are You Smarter Than a 5th Grader?",
    category: "fun",
    difficulty: "medium",
    questionsCount: 40,
    description: "Test your knowledge against 5th-grade curriculum",
    icon: "📚",
    tags: ["School", "Education", "Fun", "Challenge"],
    dataFile: "smarter-than-5th-grader.js",
    featured: false,
    estimatedTime: "8-12 minutes",
    highScore: 0
  },
  {
    id: "indian-history",
    title: "Indian History Challenge",
    category: "history",
    difficulty: "medium",
    questionsCount: 60,
    description: "Explore India's rich historical journey",
    icon: "🏛️",
    tags: ["History", "India", "Culture", "Ancient"],
    dataFile: "indian-history.js",
    featured: false,
    estimatedTime: "12-18 minutes",
    highScore: 0
  },
  {
    id: "world-geography",
    title: "World Geography Master",
    category: "geography",
    difficulty: "medium",
    questionsCount: 75,
    description: "Test your knowledge of world countries and landmarks",
    icon: "🌍",
    tags: ["Geography", "World", "Countries", "Landmarks"],
    dataFile: "world-geography.js",
    featured: false,
    estimatedTime: "15-20 minutes",
    highScore: 0
  },
  {
    id: "sports-challenge",
    title: "Sports Trivia Challenge",
    category: "sports",
    difficulty: "easy",
    questionsCount: 45,
    description: "Test your sports knowledge across various games",
    icon: "⚽",
    tags: ["Sports", "Games", "Athletics", "Fun"],
    dataFile: "sports-challenge.js",
    featured: false,
    estimatedTime: "8-12 minutes",
    highScore: 0
  },
  {
    id: "bollywood-trivia",
    title: "Bollywood Movie Trivia",
    category: "entertainment",
    difficulty: "easy",
    questionsCount: 40,
    description: "Test your knowledge of Indian cinema",
    icon: "🎬",
    tags: ["Movies", "Bollywood", "Entertainment", "India"],
    dataFile: "bollywood-trivia.js",
    featured: false,
    estimatedTime: "8-12 minutes",
    highScore: 0
  },
  {
    id: "tech-trends",
    title: "Technology Trends Quiz",
    category: "technology",
    difficulty: "medium",
    questionsCount: 55,
    description: "Stay updated with the latest tech developments",
    icon: "💻",
    tags: ["Technology", "Innovation", "Modern", "Digital"],
    dataFile: "tech-trends.js",
    featured: false,
    estimatedTime: "10-15 minutes",
    highScore: 0
  }
];

// Function to get quiz by ID
export const getQuizById = (id) => {
  return quizIndex.find(quiz => quiz.id === id);
};

// Function to get quizzes by category
export const getQuizzesByCategory = (category) => {
  if (category === 'all') {
    return quizIndex;
  }
  return quizIndex.filter(quiz => quiz.category === category);
};

// Function to search quizzes
export const searchQuizzes = (query) => {
  const q = query.toLowerCase();
  return quizIndex.filter(quiz => 
    quiz.title.toLowerCase().includes(q) ||
    quiz.description.toLowerCase().includes(q) ||
    quiz.tags.some(tag => tag.toLowerCase().includes(q))
  );
};

// Function to get featured quizzes
export const getFeaturedQuizzes = () => {
  return quizIndex.filter(quiz => quiz.featured);
};

// Function to get quiz data (lazy loading)
export const loadQuizData = async (quizId) => {
  try {
    switch (quizId) {
      case 'indian-citizen':
        return indianCitizenData;
      default:
        throw new Error(`Quiz data not found for ${quizId}`);
    }
  } catch (error) {
    console.error('Error loading quiz data:', error);
    throw error;
  }
};