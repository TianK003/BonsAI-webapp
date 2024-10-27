// prijava.js

// Simulated user database for demonstration
const users = [
    { username: "a", password: "a" } // Example user
];

// Handle the login submission
function handleLogin(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check against the simulated user database
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Redirect to main.html if credentials match
        window.location.href = 'main.html';
    } else {
        // Show an alert for failed login
        alert("Neveljavne prijavne informacije. Preverite uporabniško ime in geslo.");
    }
}
