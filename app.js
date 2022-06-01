// This function asks for the users name
function getUsername() {
  let myName = prompt("What is your name?");
  return document.write(myName);
}

const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];

const seattle = {
  name: "Seattle",
  minCust: 23,
  maxCust: 65,
  avgCookies: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  calcCustomersEachHour: function () {
    for (let a = 0; a < hours.length; a++) {
      this.customersEachHour.push(random(this.minCust, this.maxCust));
    }
  },
  calcCookiesEachHour: function () {
    for (let a = 0; a < this.customersEachHour.length; a++) {
      this.cookiesEachHour.push(
        Math.floor(this.customersEachHour[a] * this.avgCookies)
      );
    }
  },
  render() {
    this.calcCustomersEachHour();
    this.calcCookiesEachHour();
    const ul = document.getElementById("seattle");
    for (let a = 0; a < this.cookiesEachHour.length; a++) {
      const li = document.createElement("li");
      li.textContent = `${hours[a]}: ${this.cookiesEachHour[a]} cookies`;
      ul.appendChild(li);
    }
  },
};

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

seattle.render();
console.log(seattle);
