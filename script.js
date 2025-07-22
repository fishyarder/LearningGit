"use strict";

// const jonas = {
//     firstName: 'Jonas',
//     friends: ['Michael', 'Peter', 'Steven'],
//     job: 'teacher',
//     birthYear: 1991,
//     hasDriverLicense: false,

//     calcAge: function () {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     calcHasDriverLicense: function () {
//         return this.hasDriverLicense ? 'a' : 'no';
//     }
// }

// console.log(jonas.calcHasDriverLicense);

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}. `);

// console.log(`${jonas.firstName} is a ${jonas.calcAge()}-year old ${jonas.job}, and he has ${jonas.calcHasDriverLicense()} driver's license.`);

const printForecast = function (temp) {
  let strPrint = "...";
  for (let i = 0; i < temp.length; i++) {
    strPrint += ` ${temp[i]}°C in ${i + 1} days ...`;
  }
  console.log(strPrint);
};

printForecast([12, 5, -5, 0, 4]);
