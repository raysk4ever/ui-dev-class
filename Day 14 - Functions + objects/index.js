// # Write a function that accepts a string as input and returns an object where
// each character is a key, and its corresponding value is the number of times
// that character appears in the string

// For Example:
// Input: -> "hello"
// Output: -> { h: 1, e: 1, l: 2, o: 1 } 

// "hello" -> { h: 1, e: 1, l: 2, o: 1 } 

// Loop though the string "hello"
// check if the char eg => "h" => first time => count 1, repeat => count+1
// save objects 

const input = "hello"
const output = {}

for (let i = 0; i< input.length; i++) {
 const currentChar = input.charAt(i) // h, e, l, l, o
  if (currentChar in output) { // l => true
    output[currentChar] = output[currentChar] + 1  // { h: 1, e: 1, l: 2 }
  } else {
    output[currentChar] = 1 // { h: 1, e: 1, l: 1 }
  }

}

console.log(input, output)