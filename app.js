// This function asks for the users name 
function getUsername() {
    let myName = prompt("What is your name?");
    return document.write(myName)
}

getUsername ();

const shopLocation = {
    name: 'shopName',
    min cust: 23,
    max cust: 65,
    avg cookies: 6.3,
    getRandomNo: function(min cust, max cust) {
      return Math.random() * (max cust - min cust) + min;
    }
  }
  
  // add a method that adds a room type to the array

    const hotel = {
    name: hotelName,
    rooms: 40,
    booked: 25,
    gym: true,
    roomTypes: ["Twin", "Double", "Suites"],
    checkAvailabilty: function(min cust, max cust) {
      return this.rooms - this.booked;
    }
  }
  
  // add a method that adds a room type to the array