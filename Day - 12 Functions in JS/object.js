// object datatype
// key, value pair,
// key => unique
// key => always string
// value => any datatype

/*
  {
    key1: value,
    key2: value
  }
*/


const user = {
  name: "John",
  age: 24,
  address: {
    city: 'ABC',
    state: 'XYZ',
    country: 'INDIA'
  }
}

// access a key from object

// 1 => Dot (.)
console.log(user.name)
console.log(user.age)
console.log(user.city) // undefied
console.log(user.address.city)

// 2 => square [keyName] => Dynamic value
console.log(user['name'])
console.log(user['age'])
console.log(user['address']['country'])




const school = {
  name: "ABC School",
  "total class": 20,
  'school-name': "XYS" 
}

console.log(school['school-name'])
console.log(school["total class"])

console.log(school["total class"])


// const result = prompt('What you want to know?') // age

// console.log(user.age) //  undefined
// console.log(user[result]) // 24 



// view
// update 
// delete
// copy