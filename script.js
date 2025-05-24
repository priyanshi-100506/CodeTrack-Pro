// DOM Elements
const themeToggleBtn = document.getElementById('themeToggle');
const body = document.body;

// Screens
const screens = document.querySelectorAll('.screen');
const navLinks = document.querySelectorAll('.nav-links li');

// Dashboard Elements
const currentDateEl = document.getElementById('currentDate');
const totalSolvedEl = document.getElementById('totalSolved');
const currentStreakEl = document.getElementById('currentStreak');
const streakStatusEl = document.getElementById('streakStatus');
const accuracyRateEl = document.getElementById('accuracyRate');
const dailyGoalEl = document.getElementById('dailyGoal');
const goalProgressEl = document.getElementById('goalProgress');
const dailyQuoteEl = document.getElementById('dailyQuote');
const refreshQuoteBtn = document.getElementById('refreshQuote');

// Problems Screen Elements
const problemSearch = document.getElementById('problemSearch');
const difficultyFilter = document.getElementById('difficultyFilter');
const categoryFilter = document.getElementById('categoryFilter');
const problemsContainer = document.getElementById('problemsContainer');

// Statistics Screen Elements
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const totalProblemsStat = document.getElementById('totalProblemsStat');
const longestStreakStat = document.getElementById('longestStreakStat');
const favCategoryStat = document.getElementById('favCategoryStat');
const avgDailyStat = document.getElementById('avgDailyStat');

// Goals Screen Elements
const dailyGoalToggle = document.getElementById('dailyGoalToggle');
const dailyProblemCount = document.getElementById('dailyProblemCount');
const goalDifficulty = document.getElementById('goalDifficulty');
const todayGoalProgress = document.getElementById('todayGoalProgress');
const todayGoalText = document.getElementById('todayGoalText');
const weekProgressFill = document.getElementById('weekProgressFill');
const weekProgressText = document.getElementById('weekProgressText');
const claimRewardBtn = document.getElementById('claimRewardBtn');

// Progress Circle
const progressCircle = document.querySelector('.progress-circle .progress');
const progressText = document.querySelector('.progress-text');

// Problem Data - 150+ LeetCode problems organized by category
const PROBLEM_DATA = [
  // Arrays (15 problems)
  { id: 1, title: "Two Sum", link: "https://leetcode.com/problems/two-sum/", category: "Arrays", difficulty: "easy", solved: false },
  { id: 2, title: "Best Time to Buy and Sell Stock", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", category: "Arrays", difficulty: "easy", solved: false },
  { id: 3, title: "Contains Duplicate", link: "https://leetcode.com/problems/contains-duplicate/", category: "Arrays", difficulty: "easy", solved: false },
  { id: 4, title: "Product of Array Except Self", link: "https://leetcode.com/problems/product-of-array-except-self/", category: "Arrays", difficulty: "medium", solved: false },
  { id: 5, title: "Maximum Subarray", link: "https://leetcode.com/problems/maximum-subarray/", category: "Arrays", difficulty: "medium", solved: false },
  { id: 6, title: "3Sum", link: "https://leetcode.com/problems/3sum/", category: "Arrays", difficulty: "medium", solved: false },
  { id: 7, title: "Container With Most Water", link: "https://leetcode.com/problems/container-with-most-water/", category: "Arrays", difficulty: "medium", solved: false },
  { id: 8, title: "Merge Intervals", link: "https://leetcode.com/problems/merge-intervals/", category: "Arrays", difficulty: "medium", solved: false },
  { id: 9, title: "Search in Rotated Sorted Array", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/", category: "Arrays", difficulty: "medium", solved: false },
  { id: 10, title: "Combination Sum", link: "https://leetcode.com/problems/combination-sum/", category: "Arrays", difficulty: "medium", solved: false },
  { id: 11, title: "Trapping Rain Water", link: "https://leetcode.com/problems/trapping-rain-water/", category: "Arrays", difficulty: "hard", solved: false },
  { id: 12, title: "First Missing Positive", link: "https://leetcode.com/problems/first-missing-positive/", category: "Arrays", difficulty: "hard", solved: false },
  { id: 13, title: "Median of Two Sorted Arrays", link: "https://leetcode.com/problems/median-of-two-sorted-arrays/", category: "Arrays", difficulty: "hard", solved: false },
  { id: 14, title: "Sliding Window Maximum", link: "https://leetcode.com/problems/sliding-window-maximum/", category: "Arrays", difficulty: "hard", solved: false },
  { id: 15, title: "Minimum Window Substring", link: "https://leetcode.com/problems/minimum-window-substring/", category: "Arrays", difficulty: "hard", solved: false },

  // Strings (12 problems)
  { id: 16, title: "Valid Palindrome", link: "https://leetcode.com/problems/valid-palindrome/", category: "Strings", difficulty: "easy", solved: false },
  { id: 17, title: "Valid Anagram", link: "https://leetcode.com/problems/valid-anagram/", category: "Strings", difficulty: "easy", solved: false },
  { id: 18, title: "Longest Substring Without Repeating Characters", link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", category: "Strings", difficulty: "medium", solved: false },
  { id: 19, title: "Longest Palindromic Substring", link: "https://leetcode.com/problems/longest-palindromic-substring/", category: "Strings", difficulty: "medium", solved: false },
  { id: 20, title: "Group Anagrams", link: "https://leetcode.com/problems/group-anagrams/", category: "Strings", difficulty: "medium", solved: false },
  { id: 21, title: "Longest Repeating Character Replacement", link: "https://leetcode.com/problems/longest-repeating-character-replacement/", category: "Strings", difficulty: "medium", solved: false },
  { id: 22, title: "Palindromic Substrings", link: "https://leetcode.com/problems/palindromic-substrings/", category: "Strings", difficulty: "medium", solved: false },
  { id: 23, title: "Encode and Decode Strings", link: "https://leetcode.com/problems/encode-and-decode-strings/", category: "Strings", difficulty: "medium", solved: false },
  { id: 24, title: "Minimum Window Substring", link: "https://leetcode.com/problems/minimum-window-substring/", category: "Strings", difficulty: "hard", solved: false },
  { id: 25, title: "Regular Expression Matching", link: "https://leetcode.com/problems/regular-expression-matching/", category: "Strings", difficulty: "hard", solved: false },
  { id: 26, title: "Wildcard Matching", link: "https://leetcode.com/problems/wildcard-matching/", category: "Strings", difficulty: "hard", solved: false },
  { id: 27, title: "Distinct Subsequences", link: "https://leetcode.com/problems/distinct-subsequences/", category: "Strings", difficulty: "hard", solved: false },

  // Linked Lists (10 problems)
  { id: 28, title: "Reverse Linked List", link: "https://leetcode.com/problems/reverse-linked-list/", category: "Linked Lists", difficulty: "easy", solved: false },
  { id: 29, title: "Merge Two Sorted Lists", link: "https://leetcode.com/problems/merge-two-sorted-lists/", category: "Linked Lists", difficulty: "easy", solved: false },
  { id: 30, title: "Linked List Cycle", link: "https://leetcode.com/problems/linked-list-cycle/", category: "Linked Lists", difficulty: "easy", solved: false },
  { id: 31, title: "Add Two Numbers", link: "https://leetcode.com/problems/add-two-numbers/", category: "Linked Lists", difficulty: "medium", solved: false },
  { id: 32, title: "Remove Nth Node From End of List", link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", category: "Linked Lists", difficulty: "medium", solved: false },
  { id: 33, title: "Copy List with Random Pointer", link: "https://leetcode.com/problems/copy-list-with-random-pointer/", category: "Linked Lists", difficulty: "medium", solved: false },
  { id: 34, title: "Merge k Sorted Lists", link: "https://leetcode.com/problems/merge-k-sorted-lists/", category: "Linked Lists", difficulty: "hard", solved: false },
  { id: 35, title: "Reverse Nodes in k-Group", link: "https://leetcode.com/problems/reverse-nodes-in-k-group/", category: "Linked Lists", difficulty: "hard", solved: false },
  { id: 36, title: "LRU Cache", link: "https://leetcode.com/problems/lru-cache/", category: "Linked Lists", difficulty: "hard", solved: false },
  { id: 37, title: "LFU Cache", link: "https://leetcode.com/problems/lfu-cache/", category: "Linked Lists", difficulty: "hard", solved: false },

  // Trees (15 problems)
  { id: 38, title: "Maximum Depth of Binary Tree", link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", category: "Trees", difficulty: "easy", solved: false },
  { id: 39, title: "Validate Binary Search Tree", link: "https://leetcode.com/problems/validate-binary-search-tree/", category: "Trees", difficulty: "medium", solved: false },
  { id: 40, title: "Symmetric Tree", link: "https://leetcode.com/problems/symmetric-tree/", category: "Trees", difficulty: "easy", solved: false },
  { id: 41, title: "Binary Tree Level Order Traversal", link: "https://leetcode.com/problems/binary-tree-level-order-traversal/", category: "Trees", difficulty: "medium", solved: false },
  { id: 42, title: "Convert Sorted Array to Binary Search Tree", link: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/", category: "Trees", difficulty: "easy", solved: false },
  { id: 43, title: "Binary Tree Zigzag Level Order Traversal", link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/", category: "Trees", difficulty: "medium", solved: false },
  { id: 44, title: "Construct Binary Tree from Preorder and Inorder Traversal", link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/", category: "Trees", difficulty: "medium", solved: false },
  { id: 45, title: "Populating Next Right Pointers in Each Node", link: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/", category: "Trees", difficulty: "medium", solved: false },
  { id: 46, title: "Lowest Common Ancestor of a Binary Tree", link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", category: "Trees", difficulty: "medium", solved: false },
  { id: 47, title: "Serialize and Deserialize Binary Tree", link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", category: "Trees", difficulty: "hard", solved: false },
  { id: 48, title: "Binary Tree Maximum Path Sum", link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", category: "Trees", difficulty: "hard", solved: false },
  { id: 49, title: "Vertical Order Traversal of a Binary Tree", link: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/", category: "Trees", difficulty: "hard", solved: false },
  { id: 50, title: "Count Complete Tree Nodes", link: "https://leetcode.com/problems/count-complete-tree-nodes/", category: "Trees", difficulty: "medium", solved: false },
  { id: 51, title: "House Robber III", link: "https://leetcode.com/problems/house-robber-iii/", category: "Trees", difficulty: "medium", solved: false },
  { id: 52, title: "Path Sum III", link: "https://leetcode.com/problems/path-sum-iii/", category: "Trees", difficulty: "medium", solved: false },

  // Graphs (10 problems)
  { id: 53, title: "Number of Islands", link: "https://leetcode.com/problems/number-of-islands/", category: "Graphs", difficulty: "medium", solved: false },
  { id: 54, title: "Clone Graph", link: "https://leetcode.com/problems/clone-graph/", category: "Graphs", difficulty: "medium", solved: false },
  { id: 55, title: "Course Schedule", link: "https://leetcode.com/problems/course-schedule/", category: "Graphs", difficulty: "medium", solved: false },
  { id: 56, title: "Pacific Atlantic Water Flow", link: "https://leetcode.com/problems/pacific-atlantic-water-flow/", category: "Graphs", difficulty: "medium", solved: false },
  { id: 57, title: "Number of Connected Components in an Undirected Graph", link: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/", category: "Graphs", difficulty: "medium", solved: false },
  { id: 58, title: "Graph Valid Tree", link: "https://leetcode.com/problems/graph-valid-tree/", category: "Graphs", difficulty: "medium", solved: false },
  { id: 59, title: "Alien Dictionary", link: "https://leetcode.com/problems/alien-dictionary/", category: "Graphs", difficulty: "hard", solved: false },
  { id: 60, title: "Word Ladder", link: "https://leetcode.com/problems/word-ladder/", category: "Graphs", difficulty: "hard", solved: false },
  { id: 61, title: "Word Ladder II", link: "https://leetcode.com/problems/word-ladder-ii/", category: "Graphs", difficulty: "hard", solved: false },
  { id: 62, title: "Cheapest Flights Within K Stops", link: "https://leetcode.com/problems/cheapest-flights-within-k-stops/", category: "Graphs", difficulty: "medium", solved: false },

  // Dynamic Programming (12 problems)
  { id: 63, title: "Climbing Stairs", link: "https://leetcode.com/problems/climbing-stairs/", category: "Dynamic Programming", difficulty: "easy", solved: false },
  { id: 64, title: "House Robber", link: "https://leetcode.com/problems/house-robber/", category: "Dynamic Programming", difficulty: "easy", solved: false },
  { id: 65, title: "Coin Change", link: "https://leetcode.com/problems/coin-change/", category: "Dynamic Programming", difficulty: "medium", solved: false },
  { id: 66, title: "Longest Increasing Subsequence", link: "https://leetcode.com/problems/longest-increasing-subsequence/", category: "Dynamic Programming", difficulty: "medium", solved: false },
  { id: 67, title: "Word Break", link: "https://leetcode.com/problems/word-break/", category: "Dynamic Programming", difficulty: "medium", solved: false },
  { id: 68, title: "Combination Sum IV", link: "https://leetcode.com/problems/combination-sum-iv/", category: "Dynamic Programming", difficulty: "medium", solved: false },
  { id: 69, title: "Decode Ways", link: "https://leetcode.com/problems/decode-ways/", category: "Dynamic Programming", difficulty: "medium", solved: false },
  { id: 70, title: "Unique Paths", link: "https://leetcode.com/problems/unique-paths/", category: "Dynamic Programming", difficulty: "medium", solved: false },
  { id: 71, title: "Jump Game", link: "https://leetcode.com/problems/jump-game/", category: "Dynamic Programming", difficulty: "medium", solved: false },
  { id: 72, title: "Maximum Product Subarray", link: "https://leetcode.com/problems/maximum-product-subarray/", category: "Dynamic Programming", difficulty: "medium", solved: false },
  { id: 73, title: "Best Time to Buy and Sell Stock with Cooldown", link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/", category: "Dynamic Programming", difficulty: "medium", solved: false },
  { id: 74, title: "Edit Distance", link: "https://leetcode.com/problems/edit-distance/", category: "Dynamic Programming", difficulty: "hard", solved: false },

  // Backtracking (8 problems)
  { id: 75, title: "Subsets", link: "https://leetcode.com/problems/subsets/", category: "Backtracking", difficulty: "medium", solved: false },
  { id: 76, title: "Subsets II", link: "https://leetcode.com/problems/subsets-ii/", category: "Backtracking", difficulty: "medium", solved: false },
  { id: 77, title: "Permutations", link: "https://leetcode.com/problems/permutations/", category: "Backtracking", difficulty: "medium", solved: false },
  { id: 78, title: "Permutations II", link: "https://leetcode.com/problems/permutations-ii/", category: "Backtracking", difficulty: "medium", solved: false },
  { id: 79, title: "Combination Sum", link: "https://leetcode.com/problems/combination-sum/", category: "Backtracking", difficulty: "medium", solved: false },
  { id: 80, title: "Combination Sum II", link: "https://leetcode.com/problems/combination-sum-ii/", category: "Backtracking", difficulty: "medium", solved: false },
  { id: 81, title: "Palindrome Partitioning", link: "https://leetcode.com/problems/palindrome-partitioning/", category: "Backtracking", difficulty: "medium", solved: false },
  { id: 82, title: "Sudoku Solver", link: "https://leetcode.com/problems/sudoku-solver/", category: "Backtracking", difficulty: "hard", solved: false },

  // Heap/Priority Queue (6 problems)
  { id: 83, title: "Kth Largest Element in an Array", link: "https://leetcode.com/problems/kth-largest-element-in-an-array/", category: "Heap", difficulty: "medium", solved: false },
  { id: 84, title: "Find Median from Data Stream", link: "https://leetcode.com/problems/find-median-from-data-stream/", category: "Heap", difficulty: "hard", solved: false },
  { id: 85, title: "Merge k Sorted Lists", link: "https://leetcode.com/problems/merge-k-sorted-lists/", category: "Heap", difficulty: "hard", solved: false },
  { id: 86, title: "Top K Frequent Elements", link: "https://leetcode.com/problems/top-k-frequent-elements/", category: "Heap", difficulty: "medium", solved: false },
  { id: 87, title: "Task Scheduler", link: "https://leetcode.com/problems/task-scheduler/", category: "Heap", difficulty: "medium", solved: false },
  { id: 88, title: "Sliding Window Maximum", link: "https://leetcode.com/problems/sliding-window-maximum/", category: "Heap", difficulty: "hard", solved: false },

  // Binary Search (8 problems)
  { id: 89, title: "Binary Search", link: "https://leetcode.com/problems/binary-search/", category: "Binary Search", difficulty: "easy", solved: false },
  { id: 90, title: "Search a 2D Matrix", link: "https://leetcode.com/problems/search-a-2d-matrix/", category: "Binary Search", difficulty: "medium", solved: false },
  { id: 91, title: "Find First and Last Position of Element in Sorted Array", link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/", category: "Binary Search", difficulty: "medium", solved: false },
  { id: 92, title: "Search in Rotated Sorted Array", link: "https://leetcode.com/problems/search-in-rotated-sorted-array/", category: "Binary Search", difficulty: "medium", solved: false },
  { id: 93, title: "Find Minimum in Rotated Sorted Array", link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", category: "Binary Search", difficulty: "medium", solved: false },
  { id: 94, title: "Time Based Key-Value Store", link: "https://leetcode.com/problems/time-based-key-value-store/", category: "Binary Search", difficulty: "medium", solved: false },
  { id: 95, title: "Find Peak Element", link: "https://leetcode.com/problems/find-peak-element/", category: "Binary Search", difficulty: "medium", solved: false },
  { id: 96, title: "Split Array Largest Sum", link: "https://leetcode.com/problems/split-array-largest-sum/", category: "Binary Search", difficulty: "hard", solved: false },

  // Matrix (6 problems)
  { id: 97, title: "Set Matrix Zeroes", link: "https://leetcode.com/problems/set-matrix-zeroes/", category: "Matrix", difficulty: "medium", solved: false },
  { id: 98, title: "Spiral Matrix", link: "https://leetcode.com/problems/spiral-matrix/", category: "Matrix", difficulty: "medium", solved: false },
  { id: 99, title: "Rotate Image", link: "https://leetcode.com/problems/rotate-image/", category: "Matrix", difficulty: "medium", solved: false },
  { id: 100, title: "Word Search", link: "https://leetcode.com/problems/word-search/", category: "Matrix", difficulty: "medium", solved: false },
  { id: 101, title: "Valid Sudoku", link: "https://leetcode.com/problems/valid-sudoku/", category: "Matrix", difficulty: "medium", solved: false },
  { id: 102, title: "Game of Life", link: "https://leetcode.com/problems/game-of-life/", category: "Matrix", difficulty: "medium", solved: false }
];

// User Data
let userData = {
  problemsSolved: 0,
  currentStreak: 0,
  longestStreak: 0,
  lastActiveDate: null,
  solvedProblems: [],
  dailyGoal: 1,
  weeklyProgress: [false, false, false, false, false, false, false],
  achievements: []
};

// Motivational Quotes
const MOTIVATIONAL_QUOTES = [
  "The only way to learn to code is to write code.",
  "Consistency is key to mastering programming.",
  "Every bug you fix makes you a better developer.",
  "The expert in anything was once a beginner.",
  "Code is like humor. When you have to explain it, it's bad.",
  "First, solve the problem. Then, write the code.",
  "Make it work, make it right, make it fast.",
  "Programming isn't about what you know; it's about what you can figure out.",
  "The best error message is the one that never shows up.",
  "Clean code always looks like it was written by someone who cares."
];

// Initialize the app
function init() {
  loadUserData();
  setupEventListeners();
  updateCurrentDate();
  renderDashboard();
  renderProblems();
  setupCharts();
  showScreen('dashboard');
  
  // Initialize category filter options
  const uniqueCategories = [...new Set(PROBLEM_DATA.map(problem => problem.category))];
  uniqueCategories.forEach(category => {
    const option = document.createElement('option');
    option.value = category.toLowerCase().replace(/\s+/g, '-');
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
}

// Load user data from localStorage
function loadUserData() {
  const savedData = localStorage.getItem('codingJourneyData');
  if (savedData) {
    userData = JSON.parse(savedData);
    checkStreak();
  }
  
  // Load theme preference
  const preferredTheme = localStorage.getItem('preferredTheme') || 'light';
  if (preferredTheme === 'dark') {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
  }
}

// Save user data to localStorage
function saveUserData() {
  localStorage.setItem('codingJourneyData', JSON.stringify(userData));
}

// Check and update streak
function checkStreak() {
  const today = new Date().toDateString();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  
  if (userData.lastActiveDate !== today) {
    if (userData.lastActiveDate === yesterday.toDateString()) {
      userData.currentStreak++;
    } else {
      userData.currentStreak = 0;
    }
    
    if (userData.currentStreak > userData.longestStreak) {
      userData.longestStreak = userData.currentStreak;
    }
    
    userData.lastActiveDate = today;
    saveUserData();
  }
}

// Setup event listeners
function setupEventListeners() {
  // Theme toggle
  themeToggleBtn.addEventListener('click', toggleTheme);
  
  // Navigation
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const screen = link.getAttribute('data-screen');
      showScreen(screen);
    });
  });
  
  // Refresh quote button
  refreshQuoteBtn.addEventListener('click', getRandomQuote);
  
  // Problem search and filters
  problemSearch.addEventListener('input', renderProblems);
  difficultyFilter.addEventListener('change', renderProblems);
  categoryFilter.addEventListener('change', renderProblems);
  
  // Statistics tabs
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.getAttribute('data-tab');
      showTab(tab);
    });
  });
}

// Toggle between light and dark theme
function toggleTheme() {
  body.classList.toggle('light-theme');
  body.classList.toggle('dark-theme');
  
  const isDark = body.classList.contains('dark-theme');
  themeToggleBtn.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
  localStorage.setItem('preferredTheme', isDark ? 'dark' : 'light');
}

// Show specific screen
function showScreen(screenName) {
  screens.forEach(screen => {
    screen.classList.remove('active-screen');
    if (screen.classList.contains(screenName)) {
      screen.classList.add('active-screen');
    }
  });
  
  // Update active nav link
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-screen') === screenName) {
      link.classList.add('active');
    }
  });
}

// Show specific tab
function showTab(tabName) {
  tabBtns.forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('data-tab') === tabName) {
      btn.classList.add('active');
    }
  });
  
  tabContents.forEach(content => {
    content.classList.remove('active');
    if (content.getAttribute('data-tab') === tabName) {
      content.classList.add('active');
    }
  });
}

// Update current date display
function updateCurrentDate() {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  currentDateEl.textContent = new Date().toLocaleDateString('en-US', options);
}

// Render dashboard
function renderDashboard() {
  totalSolvedEl.textContent = userData.problemsSolved;
  currentStreakEl.textContent = `${userData.currentStreak} days`;
  longestStreakStat.textContent = `${userData.longestStreak} days`;
  
  // Update streak status message
  if (userData.currentStreak === 0) {
    streakStatusEl.textContent = "Start a new streak today!";
  } else if (userData.currentStreak < 3) {
    streakStatusEl.textContent = "Keep it going!";
  } else if (userData.currentStreak < 7) {
    streakStatusEl.textContent = "Great streak!";
  } else {
    streakStatusEl.textContent = "Amazing commitment!";
  }
  
  // Update progress circle
  const progressPercentage = Math.min((userData.problemsSolved / 100) * 100, 100);
  const circumference = 188; // 2 * π * r (where r = 30)
  const offset = circumference - (progressPercentage / 100) * circumference;
  progressCircle.style.strokeDashoffset = offset;
  progressText.textContent = `${Math.round(progressPercentage)}%`;
  
  // Update daily goal progress
  const todaySolved = userData.solvedProblems.filter(id => {
    const problem = PROBLEM_DATA.find(p => p.id === id);
    return problem && new Date().toDateString() === userData.lastActiveDate;
  }).length;
  
  const goalPercentage = Math.min((todaySolved / userData.dailyGoal) * 100, 100);
  todayGoalProgress.style.width = `${goalPercentage}%`;
  todayGoalText.textContent = `${todaySolved}/${userData.dailyGoal} problems solved`;
  
  // Get random quote
  getRandomQuote();
}

// Get random motivational quote
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length);
  dailyQuoteEl.textContent = MOTIVATIONAL_QUOTES[randomIndex];
}

// Render problems list
function renderProblems() {
  problemsContainer.innerHTML = '';
  
  const searchTerm = problemSearch.value.toLowerCase();
  const difficulty = difficultyFilter.value;
  const category = categoryFilter.value;
  
  const filteredProblems = PROBLEM_DATA.filter(problem => {
    // Filter by search term
    const matchesSearch = problem.title.toLowerCase().includes(searchTerm) || 
                         problem.category.toLowerCase().includes(searchTerm);
    
    // Filter by difficulty
    const matchesDifficulty = difficulty === 'all' || problem.difficulty === difficulty;
    
    // Filter by category
    const normalizedCategory = category.toLowerCase().replace(/-/g, ' ');
    const normalizedProblemCategory = problem.category.toLowerCase();
    const matchesCategory = category === 'all' || 
                          normalizedProblemCategory.includes(normalizedCategory);
    
    return matchesSearch && matchesDifficulty && matchesCategory;
  });
  
  if (filteredProblems.length === 0) {
    problemsContainer.innerHTML = '<div class="no-results">No problems found matching your criteria</div>';
    return;
  }
  
  filteredProblems.forEach(problem => {
    const problemCard = document.createElement('div');
    problemCard.className = 'problem-card';
    
    const isSolved = userData.solvedProblems.includes(problem.id);
    
    problemCard.innerHTML = `
      <div class="problem-info">
        <div class="problem-title">
          <a href="${problem.link}" target="_blank">${problem.title}</a>
        </div>
        <div class="problem-category">${problem.category}</div>
        <div class="problem-difficulty difficulty-${problem.difficulty}">
          ${problem.difficulty.charAt(0).toUpperCase() + problem.difficulty.slice(1)}
        </div>
      </div>
      <div class="problem-actions">
        <label class="checkbox-container">
          <input type="checkbox" ${isSolved ? 'checked' : ''} data-id="${problem.id}">
          <span class="checkmark"></span>
          <span>Solved</span>
        </label>
      </div>
    `;
    
    problemsContainer.appendChild(problemCard);
  });
  
  // Add event listeners to checkboxes
  document.querySelectorAll('.problem-actions input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
      const problemId = parseInt(this.getAttribute('data-id'));
      
      if (this.checked) {
        if (!userData.solvedProblems.includes(problemId)) {
          userData.solvedProblems.push(problemId);
          userData.problemsSolved++;
        }
      } else {
        userData.solvedProblems = userData.solvedProblems.filter(id => id !== problemId);
        userData.problemsSolved--;
      }
      
      saveUserData();
      renderDashboard();
    });
  });
}

// Setup charts
function setupCharts() {
  // Weekly Activity Chart
  const weeklyCtx = document.getElementById('weeklyChart').getContext('2d');
  new Chart(weeklyCtx, {
    type: 'bar',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Problems Solved',
        data: [3, 5, 2, 4, 6, 1, 0],
        backgroundColor: '#4361ee',
        borderColor: '#3f37c9',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  
  // Problem Type Chart
  const typeCtx = document.getElementById('typeChart').getContext('2d');
  new Chart(typeCtx, {
    type: 'doughnut',
    data: {
      labels: ['Arrays', 'Strings', 'Linked Lists', 'Trees', 'Graphs'],
      datasets: [{
        data: [12, 8, 5, 7, 3],
        backgroundColor: [
          '#4361ee',
          '#4895ef',
          '#3f37c9',
          '#4cc9f0',
          '#560bad'
        ],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
  
  // Progress Chart
  const progressCtx = document.getElementById('progressChart').getContext('2d');
  new Chart(progressCtx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Problems Solved',
        data: [12, 19, 15, 25, 22, 30],
        borderColor: '#4361ee',
        backgroundColor: 'rgba(67, 97, 238, 0.1)',
        fill: true,
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);