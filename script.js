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

// Spotify Configuration
const SPOTIFY_CLIENT_ID = 'ea44bfd95903408792b80ce04accba63';
const SPOTIFY_REDIRECT_URI = 'https://abhisheksinghgaira.github.io/Promodoro/';
const SPOTIFY_SCOPES = [
    'streaming',
    'user-read-email',
    'user-read-private',
    'user-modify-playback-state',
    'user-read-playback-state'
];

// Spotify Elements
const spotifyLoginBtn = document.getElementById('spotify-login-btn');
const spotifyStatus = document.getElementById('spotify-status');
const spotifyPlayerSection = document.getElementById('spotify-player-section');
let spotifyAccessToken = null;
let spotifyPlayer = null;

// Spotify Authentication
function authenticateSpotify() {
    const authUrl = `https://accounts.spotify.com/authorize?` +
        `client_id=${SPOTIFY_CLIENT_ID}&` +
        `response_type=token&` +
        `redirect_uri=${encodeURIComponent(SPOTIFY_REDIRECT_URI)}&` +
        `scope=${encodeURIComponent(SPOTIFY_SCOPES.join(' '))}`;
    window.location.href = authUrl;
}

// Handle Spotify Authentication Redirect
function handleSpotifyRedirect() {
    const params = new URLSearchParams(window.location.hash.substring(1));
    const accessToken = params.get('access_token');
    if (accessToken) {
        spotifyAccessToken = accessToken;
        localStorage.setItem('spotify_access_token', accessToken);
        updateSpotifyUI(true);
    }
}

// Update UI Based on Spotify Connection
function updateSpotifyUI(isConnected) {
    if (isConnected) {
        spotifyStatus.textContent = 'Connected to Spotify';
        spotifyLoginBtn.style.display = 'none';
        spotifyPlayerSection.style.display = 'block';
    } else {
        spotifyStatus.textContent = 'Not connected to Spotify';
        spotifyLoginBtn.style.display = 'block';
        spotifyPlayerSection.style.display = 'none';
    }
}

// Initialize Spotify
function initSpotify() {
    handleSpotifyRedirect();
    if (localStorage.getItem('spotify_access_token')) {
        spotifyAccessToken = localStorage.getItem('spotify_access_token');
        updateSpotifyUI(true);
    }
    spotifyLoginBtn.addEventListener('click', authenticateSpotify);
}

document.addEventListener('DOMContentLoaded', initSpotify);
