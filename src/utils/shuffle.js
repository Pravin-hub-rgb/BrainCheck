/**
 * Fisher-Yates shuffle algorithm to randomize an array
 * @param {Array} array - The array to shuffle
 * @returns {Array} - A new shuffled array
 */
export const shuffleArray = (array) => {
  // Create a copy to avoid mutating the original array
  const shuffled = [...array];
  
  for (let i = shuffled.length - 1; i > 0; i--) {
    // Generate random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    
    // Swap elements at indices i and j
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  return shuffled;
};