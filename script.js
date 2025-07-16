'use strict';

const jonas = {
    firstName: 'Jonas',
    friends: ['Michael', 'Peter', 'Steven'],
    job: 'teacher',
    birthYear: 1991,
    hasDriverLicense: false,

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    calcHasDriverLicense: function () {
        return this.hasDriverLicense ? 'a' : 'no';
    }
}

// console.log(jonas.calcHasDriverLicense);

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}. `);

console.log(`${jonas.firstName} is a ${jonas.calcAge()}-year old ${jonas.job}, and he has ${jonas.calcHasDriverLicense()} driver's license.`);