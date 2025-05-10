const form = document.querySelector("form");
const fullName = document.getElementById("fullname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");
const toggleButton = document.getElementById("toggle-theme");
const signupContainer = document.querySelector(".signup-container");
const body = document.body;

const nameRegex = /^[A-Za-z\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function(e) {
    let hasError = false;

    if (
        !fullName.value.trim() ||
        !email.value.trim() ||
        !phone.value.trim() ||
        !password.value.trim() ||
        !confirmPassword.value.trim()
    ) {
        alert("Please fill in all the fields.");
        hasError = true;
    }

    else if (!nameRegex.test(fullName.value)) {
        alert("Full name must be in English letters only.");
        hasError = true;
    }

    else if (!emailRegex.test(email.value)) {
        alert("Please enter a valid email address.");
        hasError = true;
    }

    else if (password.value.length < 6) {
        alert("Password must be at least 6 characters.");
        hasError = true;
    }

    else if (password.value !== confirmPassword.value) {
        alert("Passwords don't match.");
        hasError = true;
    }

    if (hasError) {
        e.preventDefault();
    } else {
        saveUserData();
    }
});

toggleButton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    signupContainer.classList.toggle("dark-mode");
    toggleButton.classList.toggle("dark-mode");

    const isDarkMode = body.classList.contains("dark-mode");
    toggleButton.textContent = isDarkMode
        ? "Switch to Light Mode"
        : "Switch to Dark Mode";
});

function saveUserData() {
    var name = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;

    localStorage.setItem('username', name);
    localStorage.setItem('useremail', email);
    localStorage.setItem('userphone', phone);
    localStorage.setItem('useraddress', address);

    alert("Data saved successfully.");
    window.location.href = "profile.html"; 
}
