const events = [
  { name: "Tech Talk", date: "2025-07-10", seats: 10 },
  { name: "Old Event", date: "2023-01-01", seats: 0 }
];

events.forEach(event => {
  if (new Date(event.date) > new Date() && event.seats > 0) {
    console.log(`${event.name} is available`);
  } else {
    console.log(`${event.name} is not available`);
  }
});

function register(event) {
  try {
    if (event.seats <= 0) throw "No seats left!";
    event.seats--;
    console.log("Registered!");
  } catch (err) {
    console.log("Error:", err);
  }
}
