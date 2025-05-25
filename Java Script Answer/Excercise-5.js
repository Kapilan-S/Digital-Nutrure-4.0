function Event(name, seats) {
  this.name = name;
  this.seats = seats;
}

Event.prototype.checkAvailability = function() {
  return this.seats > 0;
};

const e1 = new Event("JS Workshop", 10);
console.log(e1.checkAvailability());

console.log(Object.entries(e1));
