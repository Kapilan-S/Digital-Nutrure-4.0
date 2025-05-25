const eventList = document.querySelector("#event-list");

const card = document.createElement("div");
card.textContent = "Event: JS Meetup";
eventList.appendChild(card);

// On registration
card.textContent = "Event: JS Meetup - You’re registered!";
