// signup.js

// Simulated user database for demonstration purposes
const users = [];

// Handle the signup submission
function handleSignup(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Gesli se ne ujemata. Poskusite znova.");
        return;
    }

    // Check if username already exists
    if (users.some(user => user.username === username)) {
        alert("Uporabniško ime že obstaja. Prosimo, izberite drugo.");
        return;
    }

    // Register the new user
    users.push({ username, email, password });
    alert("Uspešna registracija! Prijavite se zdaj.");

    // Redirect to main.html after successful registration
    window.location.href = 'main.html';
}

// Attach the handleSignup function to the form submission
document.querySelector('form').addEventListener('submit', handleSignup);
