// const obj = {
//   name: 'Yuanzhong',
// };
//
// const stringObj = JSON.stringify(obj);
//
// console.log(typeof(stringObj));
// console.log(stringObj);

// const personSrting = '{"name": "Yuanzhong", "age": 22}';
//
// const person = JSON.parse(personSrting);
//
// console.log(typeof(person));
// console.log(personSrting);

const fs = require('fs');

const originalNote = {
  title: 'some title',
  body: 'some body',
};

const originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

const noteString = fs.readFileSync('notes.json');

const note = JSON.parse(noteString);

console.log(typeof(note));
console.log(note.title);
