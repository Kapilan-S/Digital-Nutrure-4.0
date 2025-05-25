function addEvent(name, category) {
  return { name, category };
}

function registerUser(eventName) {
  console.log(`User registered for ${eventName}`);
}

function filterEventsByCategory(events, category) {
  return events.filter(e => e.category === category);
}

function registrationCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const countMusic = registrationCounter();
console.log(countMusic()); // 1
console.log(countMusic()); // 2
