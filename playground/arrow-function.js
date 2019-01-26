const square = x => x * x;
console.log(square(9));

const user = {
  name: 'Yuanzhong',
  sayHi: () => {
    console.log(`hi, Im ${this.name}`);
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`hi, Im ${this.name}`);
  },
};

user.sayHi(1, 2, 3);
