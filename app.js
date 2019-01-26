console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');

const notes = require('./notes.js');

// console.log(_.isString(true));
// console.log(_.isString('true'));
const filteredArray = _.uniq(['Ryuan', 1, 'Ryuan']);
console.log(filteredArray);  

// const user = os.userInfo();
// console.log(user);
//
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, (err) => {
//   if (err) {
//     console.log('error');
//   }
// });
