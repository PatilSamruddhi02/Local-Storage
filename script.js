document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var fullname = document.getElementById("full-name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var username = document.getElementById("user-name").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    // Retrieve existing data from local storage or initialize as an empty array
    var users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Add the new user to the array
    users.push({ fullname: fullname, email: email, mobile: mobile, username: username });

    // Store the updated array back in local storage
    localStorage.setItem("users", JSON.stringify(users));

    // Display a success message
    alert("Register successful!");

    // Clear the form fields
    document.getElementById("login-form").reset();
});



