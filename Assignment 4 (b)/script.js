let timer;
let seconds = 0;
let isRunning = false; // Flag to track the timer state

// Function to update the time display
const updateTimeDisplay = () => {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    document.getElementById('stopwatch').textContent = `${hours}:${minutes}:${secs}`;
};

// Function to start the timer
const startTimer = async () => {
    if (!isRunning) { // Only start if it's not already running
        isRunning = true; // Set the flag to true
        timer = setInterval(() => {
            seconds++;
            updateTimeDisplay();
        }, 1000);
    }
};

// Function to stop the timer
const stopTimer = () => {
    clearInterval(timer);
    isRunning = false; // Reset the flag when the timer is stopped
};

// Function to reset the timer
const resetTimer = () => {
    stopTimer(); // Stop the timer first
    seconds = 0; // Reset seconds
    updateTimeDisplay(); // Update the display
};

// Function to set the current date in the date picker
const setCurrentDate = () => {
    const today = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
    document.getElementById('date-picker').value = today; // Set the date picker value to today
};

// Event listeners for buttons
document.getElementById('start-btn').addEventListener('click', startTimer);
document.getElementById('stop-btn').addEventListener('click', stopTimer);
document.getElementById('reset-btn').addEventListener('click', resetTimer);

// Call the function to set the current date on page load
setCurrentDate();
