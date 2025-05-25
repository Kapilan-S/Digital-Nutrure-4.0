document.getElementById("registerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = this.elements["name"].value;
  const email = this.elements["email"].value;

  if (!name || !email) {
    document.getElementById("error").textContent = "Please fill in all fields.";
    return;
  }

  console.log("Registered:", name, email);
});
