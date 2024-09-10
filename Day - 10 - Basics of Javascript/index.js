// WEB -> HTML + CSS + JS

var address = "India" // scope => Function Scope | can be modified

address = "USA"
address = true // valid


let name = "John" // Scope => Block Scope | can be modified

name = "Wick"
name = true // valid

const age = false // Scope => Block Scope | can't be modified

// age = 20 // Error

let a
console.log(a)

// 8 - datatypes

// Number => 0, 1, -10, 1.1
// BigInt => 10e10
// String => "this" | 'is' | `valid string`
// Boolean => true | false
// null => null
// undefined => undefined (every var is undefined)
// object => Key value Pair { key: value }
  // key => key should be of type "string"
  // value => value can be of any valid type
  /*
    eg => {
      name: "John",
      age: 20,
      address: {
        city: "India"
      }
    }
  */
  //  Array => [1, 2, 3, 4] => object

// Symbol => it is used to create unique identifire




let s = {

}

console.log(typeof s) // datatype string => "object"

// alert("this is coming from alert") // Block the js exec 
console.log('Here')

// const result = prompt("Hey! This is a prompt") // return null | string (value of user input)
// const result = confirm('This is a confirm model') // boolean true | false

// console.log(result)
// console.log()


let newName = "100" // datatype => ?? string => Number
newName = parseInt(newName) // datatype => Number

// console.log('1=> ', newName, parseInt(newName)) // string => number => success => number | error => NaN (not a number)

let otherName = "200" // datatype => string

otherName = parseInt(otherName)

console.log(newName + otherName) // "100200" | "100+200" | "300" | 300




// let number1 = +"200" // string => number
// let number2 = +"400" // string => number

// console.log(number1 + number2)


// let number1 = new Number("200") // string => number
// let number2 = new Number("400") // string => number



// let number1 = parseInt("John") // string => number

// console.log('🎸', number1)

