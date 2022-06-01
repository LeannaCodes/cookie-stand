// This function asks for the users name
function getUsername() {
  let myName = prompt("What is your name?");
  return document.write(myName);
}

// opening hours for the stores
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


// const seattle = {
//   name: "Seattle",
//   minCust: 23,
//   maxCust: 65,
//   avgCookies: 6.3,
//   customersEachHour: [],
//   cookiesEachHour: [],
//   calcCustomersEachHour: function () {
//     for (let a = 0; a < hours.length; a++) {
//       this.customersEachHour.push(random(this.minCust, this.maxCust));
//     }
//   },
//   calcCookiesEachHour: function () {
//     for (let a = 0; a < this.customersEachHour.length; a++) {
//       this.cookiesEachHour.push(
//         Math.floor(this.customersEachHour[a] * this.avgCookies)
//       );
//     }
//   },
//   render() {
//     this.calcCustomersEachHour();
//     this.calcCookiesEachHour();
//     const ul = document.getElementById("seattle");
//     for (let a = 0; a < this.cookiesEachHour.length; a++) {
//       const li = document.createElement("li");
//       li.textContent = `${hours[a]}: ${this.cookiesEachHour[a]} cookies`;
//       ul.appendChild(li);
//     }
//   },
//};

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const table = document.getElementById("dataTable");
const tr = document.createElement("tr")
table.appendChild(tr)
const th = document.createElement("th");
tr.appendChild(th) 
for (let a = 0; a <  hours.length; a++) {
  const th = document.createElement("th");
  th.textContent = hours[a]
  tr.appendChild(th)

}

function Store (name, minCust, maxCust, avgCookies){
this.name = name;
this.minCust = minCust;
this.maxCust = maxCust;
this.avgCookies = avgCookies;
this.customersEachHour = []
this.cookiesEachHour = [] 
}

Store.prototype.calcCustomersEachHour = function () {
  for (let a = 0; a < hours.length; a++) {
    this.customersEachHour.push(random(this.minCust, this.maxCust));
  }
}

Store.prototype.calcCookiesEachHour = function () {
  for (let a = 0; a < this.customersEachHour.length; a++) {
    this.cookiesEachHour.push(
      Math.floor(this.customersEachHour[a] * this.avgCookies)
    );
  }
}

const seattle = new Store ("Seattle", 23, 65, 6.3)
console.log(seattle); 

const tokyo = new Store ("Tokyo", 3, 24, 1.2)
console.log(tokyo);

const dubai = new Store ("Dubai", 11, 38, 3.7)
console.log(dubai);

const paris = new Store ("Paris", 20, 38, 2.3)
console.log(paris);

const lima = new Store ("Lima", 2, 16, 4.6)
console.log(lima);

Store.prototype.render = function () {
  this.calcCustomersEachHour();
  this.calcCookiesEachHour();
  const table = document.getElementById("dataTable");
  const tr = document.createElement("tr")
  table.appendChild(tr)
  const td = document.createElement("td");
  td.textContent = this.name
  tr.appendChild(td)
  for (let a = 0; a < this.cookiesEachHour.length; a++) {
    const td = document.createElement("td");
    td.textContent = this.cookiesEachHour[a]
    tr.appendChild(td);
  }
}



seattle.render();
