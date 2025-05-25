function submitRegistration(userData) {
  console.log("Submitting...");
  fetch("https://mockapi.com/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData)
  })
    .then(res => res.json())
    .then(data => {
      console.log("Success:", data);
    })
    .catch(err => {
      console.log("Error:", err);
    });

  setTimeout(() => {
    console.log("Simulated delay complete.");
  }, 2000);
}
