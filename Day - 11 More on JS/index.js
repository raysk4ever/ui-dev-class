// // variables -> Javascript.info
// // datatypes -> 
// // type coversions ->


// // = => assignment oprator

// let name = "ravi"

// // == ==> compare oprator (value), ignores the datatype

// let number1 = 20 // number1 => Number
// let number2 = "20" // number2 => String      "20" string => number (20)
// let number3 = 20

// console.log('1', number1 == number2) // ?? true
// console.log('2', number1 == number3) // ?? true
// // 20 == 20
// // === ==> compare oprator (value + datatype)


// console.log('3', number1 === number2) // ?? false
// console.log('4', number1 === number3) // ?? true | false

// // 3
// // true, false

// // 4
// // true


// let a = true // Boolean (true) => Number (1)
// let b = 1 

// console.log('a == b', a == b) // true
// console.log('a === b', a === b) // false




// check if marks are > 50 => ?
// else => ?

/*
if (condition) {

} else {
  
}
*/
// 50 >= 50 false
// if (marks > 50) {
//   console.log(marks, 'You are PASS!!! >=')
// } else {
//   console.log(marks, 'Try again next time!!!')
// }

// ternary operator
// condition ? "RUN if TRUE" : "RUN IF FALSE"

// marks > 50 ? console.log('PASS') : console.log('FAIL')
// marks > 50 ? (
//  condition1 ? true : false
// ) : console.log('FAIL')

// if (marks > 50) {
  //   console.log(marks, 'You are PASS ⭐️⭐️⭐️!!! >=')
  // } else if (marks > 90) {
    //   console.log(marks, 'You are PASS ⭐️!!! >=')
    // } else {
      //   console.log(marks, 'Try again next time!!!')
      // }
      
      
      
const marks = 99
// ⭐️⭐️⭐️ X ,
// ⭐️ |
// ⭐️⭐️⭐️ + else |
// ⭐️⭐️⭐️ + ⭐️ |
// if | else if | else

// if (marks > 90) { // false
//   console.log(marks, 'You are PASS ⭐️⭐️⭐️!!! >=')
// } else if (marks > 50) { // true
//   console.log(marks, 'You are PASS ⭐️!!! >=')
// } else if (marks === 99) { // true
//   console.log(marks, 'You are PASS 99 !!! >=')
// } else {
//   console.log(marks, 'Try again next time!!!')
// }




// AND | OR | NOT 
// AND => &&

// condidtion1 && condidtion2 && condition3

// true && false && false => false
// false && true && true => false
// true && true && true => false


// OR => ||
// false || false || false || true ==> true

// NOT => !

let n1 = 80
let n2 = 11
let n3 = 90

if (n1 > n2 && n1 > n3) {
  console.log('n1 is large')
} else {
  console.log('n2 is large')
}

const isPass = n1 > 33 // true

if (!isPass) {
  console.log('student is fail') 
} else {
  console.log('student is pass') 
}
