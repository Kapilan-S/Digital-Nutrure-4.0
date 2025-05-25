function showEvent(name = "Unknown Event", date = "TBD") {
  console.log(`${name} is on ${date}`);
}

const event = { name: "Tech Talk", date: "2025-08-10" };
const { name, date } = event;

const clonedEvents = [...events];
