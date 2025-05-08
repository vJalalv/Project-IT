function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if(name === "" || email === "" || message === "") {
      alert("Please fill in all information");
      return false;
  }

  if(!email.includes("@")) {
      alert("Please enter a valid email address");
      return false;
  }

  alert("Your message has been sent successfully.");
  return true;
}

function saveMessage() {
  let message = document.getElementById("message").value;
  localStorage.setItem("lastMessage", message);
}
