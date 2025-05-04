const form = document.querySelector("form");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");
const toggleButton = document.getElementById("toggle-theme");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const body = document.body;
const signupContainer = document.querySelector(".signup-container");
const FullName = document.getElementById("fullname")
const regex =  /^[A-Za-z\s]*$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", function(e) {
    let hasError = false;

    if (!regex.test(FullName.value)) {
        e.preventDefault();
        alert("Full name must be in English.");
        hasError = true;
    }
    if (password.value !== confirmPassword.value) {
        e.preventDefault();
        alert("Passwords don't match.");
        hasError = true;
    }

    if (!emailRegex.test(email.value)) {
        e.preventDefault();
        alert("Please enter a valid email address.");
        hasError = true;
    }

    if (!FullName.value.trim() || !email.value.trim() || !phone.value.trim() ||
    !password.value.trim() || !confirmPassword.value.trim()) {
        e.preventDefault();
        alert("Please fill in all the fields.");
        hasError = true;
    }

    if (!hasError) {
        saveUserData(); 
    }
});

    toggleButton.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    signupContainer.classList.toggle("dark-mode");
    toggleButton.classList.toggle("dark-mode");

    const isDarkMode = body.classList.contains("dark-mode");
    toggleButton.textContent = isDarkMode
        ? "Switch to light mode"
        : "Switch to Dark mode";
});

function saveUserData() {

    const userData = {
        name: FullName.value,
        email: email.value,
        phone: phone.value
    };

    localStorage.setItem("user", JSON.stringify(userData));
    alert("Data saved successfully.");
}
