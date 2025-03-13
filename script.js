alert("Tanmay bhai")
// DOM Elements
const timeDisplay = document.querySelector('.time');
const sessionTypeDisplay = document.querySelector('.session-type');
const progressRingCircle = document.querySelector('.progress-ring-circle');
const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');
const saveSettingsBtn = document.getElementById('save-settings');
const focusTimeInput = document.getElementById('focus-time');
const shortBreakInput = document.getElementById('short-break');
const longBreakInput = document.getElementById('long-break');
const sessionsBeforeLongBreakInput = document.getElementById('sessions-before-long-break');
const soundEnabledCheckbox = document.getElementById('sound-enabled');
const timerEndSound = document.getElementById('timer-end');
const breakEndSound = document.getElementById('break-end');
const currentStreakDisplay = document.getElementById('current-streak');
const bestStreakDisplay = document.getElementById('best-streak');
const totalFocusDisplay = document.getElementById('total-focus');
const totalTimeDisplay = document.getElementById('total-time');
const studyTip = document.getElementById('study-tip');
const newTipBtn = document.getElementById('new-tip-btn');
const appTitle = document.getElementById('app-title');
const tipsTitle = document.getElementById('tips-title');
const dailyQuote = document.getElementById('daily-quote');
const quoteAuthor = document.getElementById('quote-author');
const userNameInput = document.getElementById('user-name');
const welcomePopup = document.getElementById('welcome-popup');
const welcomeName = document.getElementById('welcome-name');
const welcomeCloseBtn = document.getElementById('welcome-close');
const cornerName = document.getElementById('corner-name');
const subjectTimers = document.querySelectorAll('.subject-timer');
const subjectButtons = document.querySelectorAll('.subject-timer-btn');
const performancePopup = document.getElementById('performance-popup');
const totalQuestionsInput = document.getElementById('total-questions');
const correctAnswersInput = document.getElementById('correct-answers');
const accuracyPercentage = document.getElementById('accuracy-percentage');
const performanceMessage = document.querySelector('.performance-message');
const savePerformanceBtn = document.getElementById('save-performance');
const motivationAudio = document.getElementById('motivation-audio');
const thirdSubjectName = document.querySelector('.third-subject-name');
const tingSound = document.getElementById('ting-sound');
const subjectProgressCircles = document.querySelectorAll('.subject-progress-circle');
const subjectPracticeTimeInput = document.getElementById('subject-practice-time');
const villagerSound = document.getElementById('villager-sound');
// YouTube Music elements
const youtubeMusicSearch = document.getElementById('youtube-music-search');
const searchYoutubeBtn = document.getElementById('search-youtube-btn');
const searchResultsContainer = document.getElementById('search-results-container');
const youtubePlayerContainer = document.getElementById('youtube-player-container');
const themeToggle = document.getElementById('theme-toggle');

// Goal Selection Elements
const goalSelection = document.getElementById('goal-selection');
const mainApp = document.getElementById('main-app');
const goalCards = document.querySelectorAll('.goal-card');
const targetYearSelect = document.getElementById('target-year');
const startAppBtn = document.getElementById('start-app-btn');
const currentGoalDisplay = document.getElementById('current-goal-display');
const changeGoalBtn = document.getElementById('change-goal-btn');

// YouTube API Key - Replace with your own API key
const YOUTUBE_API_KEY = 'AIzaSyBNk2Y4QrLKJQXoRJgX3fjLvwXVIGqeWpY';

// Timer State
let timer = {
    minutes: 25,
    seconds: 0,
    isRunning: false,
    interval: null,
    sessionType: 'focus', // 'focus', 'shortBreak', 'longBreak'
    currentSession: 1,
    totalSessions: 0,
    totalFocusTime: 0, // in minutes
    currentStreak: 0,
    bestStreak: 0,
    lastSessionDate: null,
    sessionsBeforeLongBreak: 4,
    focusTime: 25,
    shortBreakTime: 5,
    longBreakTime: 15,
    soundEnabled: true,
    originalTime: 25 * 60, // in seconds
    remainingTime: 25 * 60, // in seconds,
    goal: 'JEE', // 'JEE' or 'NEET'
    targetYear: '2024',
    userName: ''
};

// Study Tips
const jeeTips = [
    "Use the Pomodoro technique to maintain focus and prevent burnout during JEE preparation.",
    "Create a study schedule that allocates time for all subjects based on your strengths and weaknesses.",
    "Practice previous years' JEE question papers to understand the exam pattern and improve time management.",
    "Focus on understanding concepts rather than memorizing formulas.",
    "Take regular breaks to keep your mind fresh and maintain productivity.",
    "Maintain a healthy diet and exercise routine to support your brain function during intense study periods.",
    "Use mnemonics and visual aids to remember complex formulas and concepts.",
    "Join study groups or online forums to discuss difficult problems and clarify doubts.",
    "Revise regularly to reinforce learning and prevent forgetting important concepts.",
    "Practice meditation or deep breathing exercises to manage exam stress and anxiety.",
    "Create concise notes for quick revision before the exam.",
    "Solve a variety of problems to strengthen your problem-solving skills.",
    "Identify and focus on high-weightage topics for efficient preparation.",
    "Take mock tests under timed conditions to improve your speed and accuracy.",
    "Analyze your mistakes and work on improving your weak areas."
];

const neetTips = [
    "Use the Pomodoro technique to maintain focus and prevent burnout during NEET preparation.",
    "Create a study schedule that balances Physics, Chemistry, and Biology based on your strengths and weaknesses.",
    "Practice previous years' NEET question papers to understand the exam pattern and improve time management.",
    "For Biology, focus on understanding concepts and memorizing important terminology and diagrams.",
    "Take regular breaks to keep your mind fresh and maintain productivity.",
    "Maintain a healthy diet and exercise routine to support your brain function during intense study periods.",
    "Use flashcards for quick revision of important biological terms and reactions.",
    "Join study groups or online forums to discuss difficult concepts and clarify doubts.",
    "Revise NCERT textbooks thoroughly as they form the foundation for NEET questions.",
    "Practice meditation or deep breathing exercises to manage exam stress and anxiety.",
    "Create concise notes with diagrams for Biology topics for quick revision.",
    "Practice MCQs daily to improve your speed and accuracy.",
    "Focus on NCERT examples and in-text questions for Chemistry and Physics.",
    "Take full-length mock tests under timed conditions to build exam stamina.",
    "Create a visual mind map for complex biological processes and cycles."
];

// Motivational Quotes
const motivationalQuotes = [
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Your time is limited, don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        quote: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        quote: "The harder you work for something, the greater you'll feel when you achieve it.",
        author: "Anonymous"
    },
    {
        quote: "Education is the most powerful weapon which you can use to change the world.",
        author: "Nelson Mandela"
    },
    {
        quote: "The best way to predict your future is to create it.",
        author: "Abraham Lincoln"
    },
    {
        quote: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill"
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "Do not wait to strike till the iron is hot; but make it hot by striking.",
        author: "William Butler Yeats"
    },
    {
        quote: "The difference between ordinary and extraordinary is that little extra.",
        author: "Jimmy Johnson"
    },
    {
        quote: "The expert in anything was once a beginner.",
        author: "Helen Hayes"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quote: "If you can dream it, you can do it.",
        author: "Walt Disney"
    },
    {
        quote: "Don't let yesterday take up too much of today.",
        author: "Will Rogers"
    },
    {
        quote: "You don't have to be great to start, but you have to start to be great.",
        author: "Zig Ziglar"
    },
    {
        quote: "The only person you are destined to become is the person you decide to be.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein"
    },
    {
        quote: "The mind is everything. What you think you become.",
        author: "Buddha"
    },
    {
        quote: "The journey of a thousand miles begins with one step.",
        author: "Lao Tzu"
    },
    {
        quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        author: "Zig Ziglar"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "If you want to achieve greatness stop asking for permission.",
        author: "Anonymous"
    },
    {
        quote: "The successful warrior is the average man, with laser-like focus.",
        author: "Bruce Lee"
    },
    {
        quote: "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
        author: "Joshua J. Marine"
    }
];

// Subject Practice State
let subjectPractice = {
    currentSubject: null,
    timer: null,
    duration: 45 * 60, // 45 minutes in seconds
    remainingTime: 45 * 60,
    isRunning: false
};

// Theme handling
function initTheme() {
    // Check for saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        document.documentElement.dataset.theme = savedTheme;
    } else if (prefersDark) {
        document.documentElement.dataset.theme = 'dark';
    }
}

function toggleTheme() {
    const currentTheme = document.documentElement.dataset.theme;
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem('theme', newTheme);
    
    // Add animation classes
    const sunMoon = themeToggle.querySelector('.sun-and-moon');
    sunMoon.classList.add('theme-toggle-animation');
    
    // Remove animation class after animation completes
    setTimeout(() => {
        sunMoon.classList.remove('theme-toggle-animation');
    }, 500);
}

// Initialize the application
function init() {
    initTheme();
    loadGoalSettings();
    setupGoalSelectionEvents();
    setupEventListeners();
    displayDailyQuote();
    loadYoutubeMusic();
    
    // Load YouTube API
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// Load goal settings from localStorage
function loadGoalSettings() {
    const savedGoal = localStorage.getItem('pomodoroGoal');
    const savedYear = localStorage.getItem('pomodoroYear');
    
    if (savedGoal && savedYear) {
        timer.goal = savedGoal;
        timer.targetYear = savedYear;
        
        // Skip goal selection and show main app
        showMainApp();
    }
}

// Setup goal selection events
function setupGoalSelectionEvents() {
    // Load saved username if exists
    const savedName = localStorage.getItem('pomodoroUserName');
    if (savedName) {
        userNameInput.value = savedName;
        timer.userName = savedName;
    }

    // Goal card selection
    goalCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove selected class from all cards
            goalCards.forEach(c => c.classList.remove('selected'));
            
            // Add selected class to clicked card
            card.classList.add('selected');
            
            // Update timer goal
            timer.goal = card.getAttribute('data-goal');
        });
    });
    
    // Start app button
    startAppBtn.addEventListener('click', () => {
        // Check if name is entered
        const userName = userNameInput.value.trim();
        if (!userName) {
            alert('Please enter your name before proceeding.');
            userNameInput.focus();
            return;
        }

        // Check if a goal is selected
        const selectedGoal = document.querySelector('.goal-card.selected');
        if (!selectedGoal) {
            alert('Please select a goal (JEE or NEET) before proceeding.');
            return;
        }
        
        // Update timer goal, year, and username
        timer.goal = selectedGoal.getAttribute('data-goal');
        timer.targetYear = targetYearSelect.value;
        timer.userName = userName;
        
        // Save settings to localStorage
        localStorage.setItem('pomodoroGoal', timer.goal);
        localStorage.setItem('pomodoroYear', timer.targetYear);
        localStorage.setItem('pomodoroUserName', timer.userName);
        
        // Show main app
        showMainApp();
    });
    
    // Change goal button
    changeGoalBtn.addEventListener('click', () => {
        // Show goal selection and hide main app
        goalSelection.style.display = 'block';
        mainApp.style.display = 'none';
        
        // Pre-select current goal
        goalCards.forEach(card => {
            if (card.getAttribute('data-goal') === timer.goal) {
                card.classList.add('selected');
            } else {
                card.classList.remove('selected');
            }
        });
        
        // Set current year
        targetYearSelect.value = timer.targetYear;
    });
}

// Display daily motivational quote
function displayDailyQuote() {
    // Check if we need to update the quote
    const today = new Date().toDateString();
    const lastQuoteDate = localStorage.getItem('lastQuoteDate');
    const lastQuoteIndex = localStorage.getItem('lastQuoteIndex');
    
    let quoteIndex;
    
    if (lastQuoteDate !== today) {
        // It's a new day, select a new random quote
        do {
            quoteIndex = Math.floor(Math.random() * motivationalQuotes.length);
        } while (quoteIndex === parseInt(lastQuoteIndex)); // Ensure we don't show the same quote as yesterday
        
        // Save the new quote date and index
        localStorage.setItem('lastQuoteDate', today);
        localStorage.setItem('lastQuoteIndex', quoteIndex);
    } else {
        // Use the same quote as earlier today
        quoteIndex = parseInt(lastQuoteIndex) || 0;
    }
    
    // Display the quote
    const quote = motivationalQuotes[quoteIndex];
    dailyQuote.textContent = quote.quote;
    quoteAuthor.textContent = `- ${quote.author}`;
    
    // Add fade-in animation
    dailyQuote.classList.add('fade-in');
    quoteAuthor.classList.add('fade-in');
    
    // Remove animation class after animation completes
    setTimeout(() => {
        dailyQuote.classList.remove('fade-in');
        quoteAuthor.classList.remove('fade-in');
    }, 500);
}

// Show welcome popup
function showWelcomePopup() {
    welcomeName.textContent = timer.userName;
    welcomePopup.classList.add('show');
    
    // Close popup when clicking the button
    welcomeCloseBtn.addEventListener('click', () => {
        welcomePopup.classList.remove('show');
    });
}

// Update UI based on selected goal
function updateUIForGoal() {
    // Update app title
    appTitle.textContent = `${timer.goal} Pomodoro Timer`;
    
    // Update current goal display
    currentGoalDisplay.textContent = `${timer.goal} ${timer.targetYear}`;
    
    // Update tips title
    tipsTitle.textContent = `${timer.goal} Study Tips`;
    
    // Update corner name display
    cornerName.textContent = timer.userName;
    
    // Apply theme color
    document.body.classList.remove('jee-theme', 'neet-theme');
    document.body.classList.add(`${timer.goal.toLowerCase()}-theme`);
    
    // Update third subject name based on goal
    thirdSubjectName.textContent = timer.goal === 'JEE' ? 'Mathematics' : 'Biology';
    const thirdSubjectIcon = document.querySelector('.third-subject .subject-icon i');
    thirdSubjectIcon.className = timer.goal === 'JEE' ? 'fas fa-square-root-alt' : 'fas fa-dna';
}

// Show main app and initialize timer
function showMainApp() {
    // Hide goal selection and show main app
    goalSelection.style.display = 'none';
    mainApp.style.display = 'block';
    
    // Show welcome popup
    showWelcomePopup();
    
    // Update UI based on selected goal
    updateUIForGoal();
    
    // Load settings and stats
    loadSettings();
    loadStats();
    updateDisplay();
    updateStatsDisplay();
    displayRandomTip();
    
    // Initialize subject timer displays
    subjectTimers.forEach(timer => {
        timer.textContent = formatTime(subjectPractice.duration);
    });
    
    // Load YouTube Music
    loadYoutubeMusic();
}

// Load saved settings from localStorage
function loadSettings() {
    const settingsKey = `pomodoro${timer.goal}Settings`;
    const savedSettings = JSON.parse(localStorage.getItem(settingsKey)) || {};
    
    timer.focusTime = savedSettings.focusTime || 25;
    timer.shortBreakTime = savedSettings.shortBreakTime || 5;
    timer.longBreakTime = savedSettings.longBreakTime || 15;
    timer.sessionsBeforeLongBreak = savedSettings.sessionsBeforeLongBreak || 4;
    timer.soundEnabled = savedSettings.soundEnabled !== undefined ? savedSettings.soundEnabled : true;
    
    // Load subject practice time
    const subjectPracticeTime = savedSettings.subjectPracticeTime || 45;
    subjectPractice.duration = subjectPracticeTime * 60;
    subjectPractice.remainingTime = subjectPractice.duration;
    
    // Update input fields
    focusTimeInput.value = timer.focusTime;
    shortBreakInput.value = timer.shortBreakTime;
    longBreakInput.value = timer.longBreakTime;
    sessionsBeforeLongBreakInput.value = timer.sessionsBeforeLongBreak;
    soundEnabledCheckbox.checked = timer.soundEnabled;
    subjectPracticeTimeInput.value = subjectPracticeTime;
    
    // Set initial timer values
    timer.minutes = timer.focusTime;
    timer.originalTime = timer.focusTime * 60;
    timer.remainingTime = timer.originalTime;
}

// Load saved stats from localStorage
function loadStats() {
    const statsKey = `pomodoro${timer.goal}${timer.targetYear}${timer.userName}Stats`;
    const savedStats = JSON.parse(localStorage.getItem(statsKey)) || {};
    
    timer.currentStreak = savedStats.currentStreak || 0;
    timer.bestStreak = savedStats.bestStreak || 0;
    timer.totalSessions = savedStats.totalSessions || 0;
    timer.totalFocusTime = savedStats.totalFocusTime || 0;
    timer.lastSessionDate = savedStats.lastSessionDate ? new Date(savedStats.lastSessionDate) : null;
    
    // Check if streak should be reset (if more than 24 hours since last session)
    if (timer.lastSessionDate) {
        const now = new Date();
        const timeDiff = now - timer.lastSessionDate;
        const hoursDiff = timeDiff / (1000 * 60 * 60);
        
        if (hoursDiff > 24) {
            timer.currentStreak = 0;
            saveStats();
        }
    }
}

// Save settings to localStorage
function saveSettings() {
    const settings = {
        focusTime: parseInt(focusTimeInput.value),
        shortBreakTime: parseInt(shortBreakInput.value),
        longBreakTime: parseInt(longBreakInput.value),
        sessionsBeforeLongBreak: parseInt(sessionsBeforeLongBreakInput.value),
        soundEnabled: soundEnabledCheckbox.checked,
        subjectPracticeTime: parseInt(subjectPracticeTimeInput.value)
    };
    
    const settingsKey = `pomodoro${timer.goal}Settings`;
    localStorage.setItem(settingsKey, JSON.stringify(settings));
    
    // Update timer object
    timer.focusTime = settings.focusTime;
    timer.shortBreakTime = settings.shortBreakTime;
    timer.longBreakTime = settings.longBreakTime;
    timer.sessionsBeforeLongBreak = settings.sessionsBeforeLongBreak;
    timer.soundEnabled = settings.soundEnabled;
    
    // Update subject practice duration
    subjectPractice.duration = settings.subjectPracticeTime * 60;
    
    // Reset subject practice timers display
    subjectTimers.forEach(timer => {
        timer.textContent = formatTime(subjectPractice.duration);
    });
    
    // Reset subject progress circles
    subjectProgressCircles.forEach(circle => {
        circle.style.strokeDashoffset = circle.getAttribute('stroke-dasharray');
    });
    
    // Reset timer if it's not running
    if (!timer.isRunning) {
        resetTimer();
    }
    
    // Reset subject practice if it's not running
    if (!subjectPractice.isRunning) {
        subjectPractice.remainingTime = subjectPractice.duration;
    }
}

// Save stats to localStorage
function saveStats() {
    const stats = {
        currentStreak: timer.currentStreak,
        bestStreak: timer.bestStreak,
        totalSessions: timer.totalSessions,
        totalFocusTime: timer.totalFocusTime,
        lastSessionDate: timer.lastSessionDate
    };
    
    const statsKey = `pomodoro${timer.goal}${timer.targetYear}${timer.userName}Stats`;
    localStorage.setItem(statsKey, JSON.stringify(stats));
}

// Update the timer display
function updateDisplay() {
    // Format time as MM:SS
    const minutes = Math.floor(timer.remainingTime / 60);
    const seconds = timer.remainingTime % 60;
    timeDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Update session type display
    if (timer.sessionType === 'focus') {
        sessionTypeDisplay.textContent = 'Focus Time';
    } else if (timer.sessionType === 'shortBreak') {
        sessionTypeDisplay.textContent = 'Short Break';
    } else {
        sessionTypeDisplay.textContent = 'Long Break';
    }
    
    // Update progress ring
    const progress = (timer.originalTime - timer.remainingTime) / timer.originalTime;
    const circumference = parseFloat(progressRingCircle.getAttribute('stroke-dasharray'));
    const offset = circumference - progress * circumference;
    progressRingCircle.style.strokeDashoffset = offset;
    
    // Update button states
    if (timer.isRunning) {
        startBtn.disabled = true;
        pauseBtn.disabled = false;
    } else {
        startBtn.disabled = false;
        pauseBtn.disabled = true;
    }
}

// Update stats display
function updateStatsDisplay() {
    currentStreakDisplay.textContent = timer.currentStreak;
    bestStreakDisplay.textContent = timer.bestStreak;
    totalFocusDisplay.textContent = timer.totalSessions;
    
    // Convert total focus time to hours and minutes
    const hours = Math.floor(timer.totalFocusTime / 60);
    const minutes = timer.totalFocusTime % 60;
    totalTimeDisplay.textContent = hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
}

// Display a random study tip based on selected goal
function displayRandomTip() {
    const tips = timer.goal === 'JEE' ? jeeTips : neetTips;
    const randomIndex = Math.floor(Math.random() * tips.length);
    studyTip.textContent = tips[randomIndex];
    studyTip.classList.add('fade-in');
    
    // Remove animation class after animation completes
    setTimeout(() => {
        studyTip.classList.remove('fade-in');
    }, 500);
}

// Start the timer
function startTimer() {
    if (!timer.isRunning) {
        timer.isRunning = true;
        
        // Update last session date for streak tracking
        timer.lastSessionDate = new Date();
        saveStats();
        
        timer.interval = setInterval(() => {
            timer.remainingTime--;
            
            if (timer.remainingTime <= 0) {
                clearInterval(timer.interval);
                timer.isRunning = false;
                
                // Play sound notification
                if (timer.soundEnabled) {
                    // Play villager sound when timer ends
                    villagerSound.currentTime = 0;
                    villagerSound.play().catch(error => console.log('Error playing villager sound:', error));
                }
                
                // Handle session completion
                if (timer.sessionType === 'focus') {
                    // Update stats
                    timer.totalSessions++;
                    timer.totalFocusTime += timer.focusTime;
                    timer.currentStreak++;
                    
                    // Update best streak if current streak is higher
                    if (timer.currentStreak > timer.bestStreak) {
                        timer.bestStreak = timer.currentStreak;
                    }
                    
                    saveStats();
                    updateStatsDisplay();
                    
                    // Determine next break type
                    if (timer.currentSession % timer.sessionsBeforeLongBreak === 0) {
                        timer.sessionType = 'longBreak';
                        timer.remainingTime = timer.longBreakTime * 60;
                        timer.originalTime = timer.remainingTime;
                    } else {
                        timer.sessionType = 'shortBreak';
                        timer.remainingTime = timer.shortBreakTime * 60;
                        timer.originalTime = timer.remainingTime;
                    }
                    
                    timer.currentSession++;
                } else {
                    // After break, start a new focus session
                    timer.sessionType = 'focus';
                    timer.remainingTime = timer.focusTime * 60;
                    timer.originalTime = timer.remainingTime;
                }
                
                updateDisplay();
                
                // Add pulse animation to timer
                timeDisplay.classList.add('pulse');
                setTimeout(() => {
                    timeDisplay.classList.remove('pulse');
                }, 2000);
            }
            
            updateDisplay();
        }, 1000);
        
        updateDisplay();
    }
}

// Pause the timer
function pauseTimer() {
    if (timer.isRunning) {
        clearInterval(timer.interval);
        timer.isRunning = false;
        updateDisplay();
    }
}

// Reset the timer
function resetTimer() {
    clearInterval(timer.interval);
    timer.isRunning = false;
    timer.sessionType = 'focus';
    timer.remainingTime = timer.focusTime * 60;
    timer.originalTime = timer.remainingTime;
    updateDisplay();
}

// Format time for display
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

// Start subject practice timer
function startSubjectPractice(subject, button, timerDisplay) {
    if (subjectPractice.isRunning) {
        // If the same subject is running, stop it
        if (subjectPractice.currentSubject === subject) {
            stopSubjectPractice(button, timerDisplay);
            return;
        }
        // If a different subject is running, don't allow starting a new one
        return;
    }

    subjectPractice.currentSubject = subject;
    // Always use the current duration setting when starting a new timer
    subjectPractice.remainingTime = subjectPractice.duration;
    subjectPractice.isRunning = true;

    // Update button state
    button.textContent = 'Stop Practice';
    button.classList.add('running');

    // Get the progress circle for this subject
    const progressCircle = button.parentElement.querySelector('.subject-progress-circle');
    const circumference = parseFloat(progressCircle.getAttribute('stroke-dasharray'));

    // Start timer
    subjectPractice.timer = setInterval(() => {
        subjectPractice.remainingTime--;
        timerDisplay.textContent = formatTime(subjectPractice.remainingTime);

        // Update progress ring
        const progress = (subjectPractice.duration - subjectPractice.remainingTime) / subjectPractice.duration;
        const offset = circumference - progress * circumference;
        progressCircle.style.strokeDashoffset = offset;

        if (subjectPractice.remainingTime <= 0) {
            clearInterval(subjectPractice.timer);
            subjectPractice.isRunning = false;
            button.textContent = 'Start Practice';
            button.classList.remove('running');
            
            // Play sound notification
            if (timer.soundEnabled) {
                // Play villager sound when subject timer ends
                villagerSound.currentTime = 0;
                villagerSound.play().catch(error => console.log('Error playing villager sound:', error));
            }
            
            showPerformancePopup(subject);
        }
    }, 1000);
}

// Stop subject practice timer
function stopSubjectPractice(button, timerDisplay) {
    clearInterval(subjectPractice.timer);
    subjectPractice.isRunning = false;
    subjectPractice.currentSubject = null;
    button.textContent = 'Start Practice';
    button.classList.remove('running');
    timerDisplay.textContent = formatTime(subjectPractice.duration);
    
    // Reset progress ring
    const progressCircle = button.parentElement.querySelector('.subject-progress-circle');
    progressCircle.style.strokeDashoffset = progressCircle.getAttribute('stroke-dasharray');
    
    // Play sound notification when timer is stopped manually
    if (timer.soundEnabled) {
        villagerSound.currentTime = 0;
        villagerSound.play().catch(error => console.log('Error playing villager sound:', error));
    }
}

// Show performance analysis popup
function showPerformancePopup(subject) {
    performancePopup.classList.add('show');
    totalQuestionsInput.value = '';
    correctAnswersInput.value = '';
    accuracyPercentage.textContent = '0';
    performanceMessage.textContent = '';
    
    // Update inputs when values change
    function updateAccuracy() {
        const total = parseInt(totalQuestionsInput.value) || 0;
        const correct = parseInt(correctAnswersInput.value) || 0;
        
        if (total > 0 && correct <= total) {
            const accuracy = (correct / total) * 100;
            accuracyPercentage.textContent = accuracy.toFixed(1);
            
            if (accuracy < 79) {
                performanceMessage.textContent = 'Keep practicing! You need to improve.';
                motivationAudio.play();
            } else {
                performanceMessage.textContent = 'Great work! Keep it up!';
            }
        }
    }

    totalQuestionsInput.addEventListener('input', updateAccuracy);
    correctAnswersInput.addEventListener('input', updateAccuracy);

    // Save performance
    savePerformanceBtn.onclick = () => {
        const total = parseInt(totalQuestionsInput.value) || 0;
        const correct = parseInt(correctAnswersInput.value) || 0;
        
        if (total > 0 && correct <= total) {
            // Save to localStorage
            const performanceKey = `${timer.goal}${timer.targetYear}${timer.userName}${subject}Performance`;
            const performances = JSON.parse(localStorage.getItem(performanceKey)) || [];
            
            performances.push({
                date: new Date().toISOString(),
                total: total,
                correct: correct,
                accuracy: (correct / total) * 100
            });
            
            localStorage.setItem(performanceKey, JSON.stringify(performances));
            performancePopup.classList.remove('show');
        } else {
            alert('Please enter valid numbers for questions attempted and correct answers.');
        }
    };
}

// Setup subject practice events
function setupSubjectPractice() {
    const subjects = ['Physics', 'Chemistry', timer.goal === 'JEE' ? 'Mathematics' : 'Biology'];
    
    subjectButtons.forEach((button, index) => {
        const subject = subjects[index];
        const timerDisplay = subjectTimers[index];
        
        button.addEventListener('click', () => {
            startSubjectPractice(subject, button, timerDisplay);
        });
    });
}

// Load YouTube Music from localStorage
function loadYoutubeMusic() {
    const youtubeKey = `pomodoro${timer.goal}${timer.userName}Youtube`;
    const savedYoutubeData = localStorage.getItem(youtubeKey);
    
    if (savedYoutubeData) {
        try {
            // Try to parse as JSON (new format)
            const videoData = JSON.parse(savedYoutubeData);
            youtubePlayerContainer.innerHTML = videoData.embedCode;
        } catch (e) {
            // If it's not JSON, it's the old format (just the embed code)
            youtubePlayerContainer.innerHTML = savedYoutubeData;
        }
    }
}

// Save YouTube Music to localStorage
function saveYoutubeMusic(embedCode) {
    const youtubeKey = `pomodoro${timer.goal}${timer.userName}Youtube`;
    localStorage.setItem(youtubeKey, embedCode);
}

// Extract YouTube video ID from URL
function getYoutubeVideoId(url) {
    if (!url) return null;
    
    // Regular YouTube URL
    let match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    if (match && match[1]) {
        return match[1];
    }
    
    // YouTube Music URL
    match = url.match(/(?:music\.youtube\.com\/watch\?v=)([^"&?\/\s]{11})/);
    if (match && match[1]) {
        return match[1];
    }
    
    // YouTube Playlist URL
    match = url.match(/(?:youtube\.com\/playlist\?list=)([^"&?\/\s]+)/);
    if (match && match[1]) {
        return match[1];
    }
    
    // YouTube Music Playlist URL
    match = url.match(/(?:music\.youtube\.com\/playlist\?list=)([^"&?\/\s]+)/);
    if (match && match[1]) {
        return match[1];
    }
    
    // If the input is already a video ID (11 characters)
    if (url.match(/^[a-zA-Z0-9_-]{11}$/)) {
        return url;
    }
    
    return null;
}

// Generate YouTube embed code
function getYoutubeEmbedCode(videoId) {
    if (!videoId) {
        return null;
    }
    
    // Check if it's a playlist ID (longer than 11 characters)
    if (videoId.length > 11 && videoId.includes('PL')) {
        return `<iframe width="100%" height="352" src="https://www.youtube.com/embed/videoseries?list=${videoId}&autoplay=1" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>`;
    }
    
    // Regular video embed
    return `<iframe width="100%" height="352" src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>`;
}

// Add YouTube Music
function addYoutubeMusic() {
    const input = youtubeMusicSearch.value.trim();
    
    if (!input) {
        alert('Please enter a YouTube Music URL or video ID.');
        return;
    }
    
    // Check if it's a URL or video ID
    const videoId = getYoutubeVideoId(input);
    
    if (videoId) {
        // It's a valid YouTube URL or ID
        const embedCode = getYoutubeEmbedCode(videoId);
        
        if (embedCode) {
            // Display the YouTube Music
            youtubePlayerContainer.innerHTML = embedCode;
            
            // Save to localStorage
            const videoData = {
                embedCode: embedCode,
                title: 'Custom YouTube Video'
            };
            saveYoutubeMusic(JSON.stringify(videoData));
            
            // Clear input field
            youtubeMusicSearch.value = '';
        } else {
            // If not a valid URL, try searching
            searchYoutubeMusic();
        }
    } else {
        // If not a valid URL, try searching
        searchYoutubeMusic();
    }
}

// Search YouTube Music
function searchYoutubeMusic() {
    const query = youtubeMusicSearch.value.trim();
    
    if (!query) {
        alert('Please enter a search term.');
        return;
    }
    
    // Show development message
    searchResultsContainer.innerHTML = `
        <div class="search-message">
            <i class="fas fa-tools"></i>
            <p>Music search feature is currently under development.</p>
            <p>We're working on implementing a better search experience.</p>
            <p>Please check back soon!</p>
        </div>
    `;
    searchResultsContainer.classList.add('show');
    
    // For now, still allow direct URL input
    const videoId = getYoutubeVideoId(query);
    if (videoId) {
        // If it's a valid YouTube URL or ID, still allow it to work
        setTimeout(() => {
            const embedCode = getYoutubeEmbedCode(videoId);
            if (embedCode) {
                // Display the YouTube Music
                youtubePlayerContainer.innerHTML = embedCode;
                
                // Save to localStorage
                const videoData = {
                    embedCode: embedCode,
                    title: 'Custom YouTube Video'
                };
                saveYoutubeMusic(JSON.stringify(videoData));
                
                // Clear input field and hide results
                youtubeMusicSearch.value = '';
                searchResultsContainer.classList.remove('show');
            }
        }, 2000);
    }
}

// Display search results
function displaySearchResults(items) {
    searchResultsContainer.innerHTML = '';
    
    items.forEach(item => {
        const videoId = item.id;
        const title = item.title;
        const channelTitle = item.channel;
        const thumbnail = item.thumbnail;
        
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';
        resultItem.innerHTML = `
            <img class="search-result-thumbnail" src="${thumbnail}" alt="${title}">
            <div class="search-result-info">
                <div class="search-result-title">${title}</div>
                <div class="search-result-channel">${channelTitle}</div>
            </div>
        `;
        
        resultItem.addEventListener('click', () => {
            playYoutubeVideo(videoId, title);
            searchResultsContainer.classList.remove('show');
        });
        
        searchResultsContainer.appendChild(resultItem);
    });
}

// Play YouTube video
function playYoutubeVideo(videoId, title) {
    const embedCode = getYoutubeEmbedCode(videoId);
    
    if (embedCode) {
        // Display the YouTube Music
        youtubePlayerContainer.innerHTML = embedCode;
        
        // Save to localStorage with title
        const videoData = {
            embedCode: embedCode,
            title: title
        };
        saveYoutubeMusic(JSON.stringify(videoData));
        
        // Clear input field
        youtubeMusicSearch.value = '';
    }
}

// Setup event listeners
function setupEventListeners() {
    startBtn.addEventListener('click', startTimer);
    pauseBtn.addEventListener('click', pauseTimer);
    resetBtn.addEventListener('click', resetTimer);
    saveSettingsBtn.addEventListener('click', saveSettings);
    newTipBtn.addEventListener('click', displayRandomTip);
    searchYoutubeBtn.addEventListener('click', searchYoutubeMusic);
    themeToggle.addEventListener('click', toggleTheme);
    setupSubjectPractice();
    
    // Also add event listener for Enter key on YouTube input
    youtubeMusicSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            searchYoutubeMusic();
        }
    });
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            document.documentElement.dataset.theme = e.matches ? 'dark' : 'light';
        }
    });
    
    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchResultsContainer.contains(e.target) && 
            e.target !== youtubeMusicSearch && 
            e.target !== searchYoutubeBtn) {
            searchResultsContainer.classList.remove('show');
        }
    });
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', init); 
