console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;

const command = process.argv[2];

console.log('Command: ', command);
console.log('process: ', process.argv);
console.log('yargs: ', argv);

if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body);

  if (note) {
    console.log('note created');
    notes.logNote(note);
  } else {
    console.log('note title taken');
  }

} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read')  {
  const note = notes.getNote(argv.title);
  if (note) {
    console.log('note found');
    notes.logNote(note);
  } else {
    console.log('note not found');
  }
} else if (command === 'remove') {
  const noteRemoved = notes.removeNote(argv.title);
  const message = noteRemoved ? 'note was removed' : 'note not found';
  console.log(message);
} else {
  console.log('Command not recognized');
}
