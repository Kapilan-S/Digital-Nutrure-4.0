// Using fetch + .then/.catch
fetch("https://api.mock.com/events")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log("Error:", err));

// Using async/await
async function getEvents() {
  console.log("Loading...");
  const res = await fetch("https://api.mock.com/events");
  const data = await res.json();
  console.log(data);
}
getEvents();
