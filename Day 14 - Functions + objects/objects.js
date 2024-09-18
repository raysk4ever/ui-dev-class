

// const user = {
//   a: 10,
//   name: 'Mike',
//   getName: function () {
//     console.log('2 this => ', this)
//   },
//   address: {
//     city: 'noida',
//     getCity: function () {
//       console.log('this 3 => ', this)
//     }
//   }
// }

// "this" => reffer to a current object and
// its value is determine how its been called.

function f1() {
  console.log('this => ', this)
}

const user = {
  name: 'Mike',
  getName: f1,
  address: {
    city: 'Noida',
    getCity: f1
  }
}

// console.log(user.getName())

f1() // this => window object
user.getName() // this => ? user object
user.address.getCity() // this => ? user.address

// user.getName() // this => user object
// user.address.getCity() // this => user.address



// TASK => 
// "Hello World! My age is 20. how are your?"
// => { H: 1, h: 1, e: 2, .... } // case - sensitive
// => { h: 2, !: 1, " ": 8, .... } // 
