// object
// 

const user = {
  age: 10,
  name: 'Mike',
  name: 'John',
  address: {
    city: '30'
  }
}

// console.log(user.name)

const keys = Object.keys(user) // array of string => keys

console.log('keys', keys)

// const addKeys = Object.keys(user.address)

// console.log(addKeys)

const values = Object.values(user)

console.log('values', values)

const entries = Object.entries(user)

console.log('entries', entries)


// in 

console.log('city' in user) // boolean => false
console.log('age' in user) // boolean => false


for (let key in user) {
  console.log('key', key)
}



console.log('user', user)

// update/new keys 
user.age = 20
user.marks = 300

// delete
// delete user.name
// delete user.address

console.log('user', user)

// access for key in object
// . (dot) => ?
// [] => ? => key special char -


const a = 10
let b = a // copy by value
console.log('$1', a, b)
b = 20
console.log('$1', a, b)

// primtive
// object => non - primtive

let a1 = {name: 'John', age: 10}
let a2 = a1 // copy by ref => address
a2.age = 20 // update
a2.marks = 100 // add key
// delete
delete a1.age

console.log(a1, a2)
