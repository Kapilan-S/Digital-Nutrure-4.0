document.getElementById("registerBtn").onclick = function() {
  alert("Registered!");
};

document.getElementById("categoryFilter").onchange = function(e) {
  console.log("Filter by:", e.target.value);
};

document.addEventListener("keydown", function(e) {
  if (e.key === "Enter") console.log("Searching...");
});
