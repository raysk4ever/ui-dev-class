// // // normal function

// // // Defination of function
// // function myFunc() {
// //   // body of function
// //   console.log('Hi, from myFunc')
// //   let firstName = 'John'
// //   let lastName = 'Wick'

// //   console.log('Full Name is ', firstName, lastName)
// // }

// // // calling of function
// // myFunc()


// // // arrow function




// // defining a function
// // agruments => number1, number2
// // function => sum


// function minus(number1, number2) {
//   console.log('Minus', number1 - number2)
// }

// sum()

// // calling
// sum(30, 40)

// minus(22, 50)

// minus(33, 33)


// // default agrument's value
function sqare(number = 10) {
  console.log('number is ', number)
  console.log('square', number * number)
}
function sum(number1 = 0, number2 = 0) {
  console.log('Sum', number1 + number2)
}

// sqare()
// sqare(20)




// function calArea(number1, number2) {
//   console.log('from inside calArea', number1 * number2)
//   return number1 * number2
//   //
// }


// let result = calArea(10, 10)

// console.log('result', result)



// let number = prompt('Your Number') // 20
// number = 20 // string

// sqare(number) // 400 // "20" * "20" =>  400 // number
// sum(number) // 200 // "20" + 0 => 200 // string


// normal function
function display(name) {
  console.log('My name is', name)
}

// arrow function
const arrowDisplay = name => console.log('My name is', name)



// display('john')



function sum(a, b) {
  let c = 30
  return a+b+c
}

const arrowSum = (a, b) => {
  let c = 30
  return a+b+c
}

console.log(sum(10, 20))
console.log(arrowSum(10, 20))

