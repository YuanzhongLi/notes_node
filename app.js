const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
  describe: 'title of note',
  demand: true,
  alias: 't',
};

const argv = yargs
  .command('add', 'Add a new note', {
    title: titleOptions,
    body: {
      describe: 'body of note',
      demand: true,
      alias: 'b',
    }
  })
  .command('list', 'list all notes')
  .command('read','Read a note', {
    title: titleOptions,
  })
  .command('remove', 'remove note', {
    title: titleOptions,
  })
  .help()
  .argv;

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
  const allNotes = notes.getAll();
  console.log(`printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note));
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
