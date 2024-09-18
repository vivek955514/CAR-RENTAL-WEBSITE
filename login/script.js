document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Hardcoded credentials (for demonstration purposes)
    const validUsername = 'vivek';
    const validPassword = '123';

    // Get user input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Authenticate user
    if (username === validUsername && password === validPassword) {
        alert('Login successful!');
        // Redirect to a secure page or display secure content
        window.location.href = 'secure_page.html';
    } else {
        document.getElementById('error').innerText = 'Username and Password invalid!!';
    }
});
