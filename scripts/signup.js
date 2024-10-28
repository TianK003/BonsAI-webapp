// signup.js

// Simulated user database for demonstration purposes
const users = [];

// Handle the signup submission
function handleSignup(event) {
    
    // Redirect to dashboard.html after successful registration
    window.location.href = 'dashboard.html';
}

// Attach the handleSignup function to the form submission
document.querySelector('form').addEventListener('submit', handleSignup);
