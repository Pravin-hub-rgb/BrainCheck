import indianCitizenData from './quizData/indian-citizen';
import indiaConstitutionData from './quizData/india-constitution';
import indiaLawsRightsData from './quizData/india-laws-rights';
import indiaHistoryData from './quizData/india-history';
import indiaGeographyData from './quizData/india-geography';
import indiaGovernmentData from './quizData/india-government';
import indiaSymbolsData from './quizData/india-symbols';
import indiaCultureData from './quizData/india-culture';
import indiaEconomyData from './quizData/india-economy';
import indiaScienceData from './quizData/india-science';

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
    id: "india-constitution",
    title: "Constitution & Fundamental Rights & Duties",
    category: "india",
    difficulty: "medium",
    questionsCount: 30,
    description: "Test your knowledge of Indian Constitution, Fundamental Rights, and Fundamental Duties",
    icon: "🏛️",
    tags: ["India", "Constitution", "Fundamental Rights", "Fundamental Duties", "Civic", "Government"],
    dataFile: "india-constitution.js",
    featured: false,
    estimatedTime: "8-10 minutes",
    highScore: 0
  },
  {
    id: "india-laws-rights",
    title: "Important Laws, Rights & Everyday Citizen Knowledge",
    category: "india",
    difficulty: "easy",
    questionsCount: 30,
    description: "Test your knowledge of important laws, rights, and everyday citizen knowledge in India",
    icon: "⚖️",
    tags: ["India", "Laws", "Rights", "Citizen Knowledge", "Legal", "Everyday Life"],
    dataFile: "india-laws-rights.js",
    featured: false,
    estimatedTime: "6-8 minutes",
    highScore: 0
  },
  {
    id: "india-history",
    title: "Key Historical Events",
    category: "india",
    difficulty: "medium",
    questionsCount: 45,
    description: "Explore India's rich historical journey from ancient times to modern independence",
    icon: "🏛️",
    tags: ["India", "History", "Freedom Struggle", "Wars", "Independence", "Ancient"],
    dataFile: "india-history.js",
    featured: false,
    estimatedTime: "10-12 minutes",
    highScore: 0
  },
  {
    id: "india-geography",
    title: "Geography of India",
    category: "india",
    difficulty: "medium",
    questionsCount: 40,
    description: "Explore India's diverse physical and political geography, from mountains to rivers to states",
    icon: "🌍",
    tags: ["India", "Geography", "Mountains", "Rivers", "States", "Climate", "Physical Geography"],
    dataFile: "india-geography.js",
    featured: false,
    estimatedTime: "8-10 minutes",
    highScore: 0
  },
  {
    id: "india-government",
    title: "Government & Polity Structure",
    category: "india",
    difficulty: "medium",
    questionsCount: 35,
    description: "Understand India's government structure, from Union to Local levels, and key constitutional bodies",
    icon: "🏛️",
    tags: ["India", "Government", "Polity", "Constitution", "Parliament", "Judiciary", "Executive"],
    dataFile: "india-government.js",
    featured: false,
    estimatedTime: "8-10 minutes",
    highScore: 0
  },
  {
    id: "india-symbols",
    title: "National Symbols, Anthem, Flag, Mottos",
    category: "india",
    difficulty: "easy",
    questionsCount: 25,
    description: "Learn about India's national symbols, anthem, flag, and mottos that represent our nation",
    icon: "🇮🇳",
    tags: ["India", "National Symbols", "Flag", "Anthem", "Motto", "Emblem", "Symbols"],
    dataFile: "india-symbols.js",
    featured: false,
    estimatedTime: "5-7 minutes",
    highScore: 0
  },
  {
    id: "india-culture",
    title: "Culture, Festivals, Heritage",
    category: "india",
    difficulty: "medium",
    questionsCount: 35,
    description: "Explore India's rich cultural diversity, festivals, and heritage sites",
    icon: "🎭",
    tags: ["India", "Culture", "Festivals", "Heritage", "Dance", "Music", "Art"],
    dataFile: "india-culture.js",
    featured: false,
    estimatedTime: "8-10 minutes",
    highScore: 0
  },
  {
    id: "india-economy",
    title: "Economy, Currency, Trade",
    category: "india",
    difficulty: "medium",
    questionsCount: 30,
    description: "Learn about India's economy, currency, trade, and economic development",
    icon: "💰",
    tags: ["India", "Economy", "Currency", "Trade", "GDP", "Development", "Finance"],
    dataFile: "india-economy.js",
    featured: false,
    estimatedTime: "6-8 minutes",
    highScore: 0
  },
  {
    id: "india-science",
    title: "Science & Technology",
    category: "india",
    difficulty: "medium",
    questionsCount: 30,
    description: "Explore India's achievements in science, technology, space, and innovation",
    icon: "🔬",
    tags: ["India", "Science", "Technology", "Space", "ISRO", "Innovation", "Research"],
    dataFile: "india-science.js",
    featured: false,
    estimatedTime: "6-8 minutes",
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
      case 'india-constitution':
        return indiaConstitutionData;
      case 'india-laws-rights':
        return indiaLawsRightsData;
      case 'india-history':
        return indiaHistoryData;
      case 'india-geography':
        return indiaGeographyData;
      case 'india-government':
        return indiaGovernmentData;
      case 'india-symbols':
        return indiaSymbolsData;
      case 'india-culture':
        return indiaCultureData;
      case 'india-economy':
        return indiaEconomyData;
      case 'india-science':
        return indiaScienceData;
      default:
        throw new Error(`Quiz data not found for ${quizId}`);
    }
  } catch (error) {
    console.error('Error loading quiz data:', error);
    throw error;
  }
};
