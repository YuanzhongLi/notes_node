const person = {
  name: 'Yuanzhong',
};

person.age = 22;

// debugのcの時、ここで一旦止まる 
debugger;

person.name = 'Mike';

console.log(person);
