// DOM => Document Object MODEL

// console.log(window.document)

// find => element, not found => null
// const result = document.getElementById("123123")
// console.log(result);


// // find => array of elements, not found => []
// const res = document.getElementsByTagName('a')
// console.log(res)

// const elements = document.getElementsByClassName('header')
// console.log('elements', elements)



// result.innerText = 'NEW TEXT'
// result.style.color = 'red'

// const h2 = document.createElement('h2')
// h2.innerText = 'This is H2 from DOM'

// document.body.appendChild(h2)


// document.body.removeChild(h2)


// const btn = document.getElementById('btn-1')

// btn.onclick = function () {
//   console.log('Hii')
// }

// btn.addEventListener('click', function() {
//     console.log('Hii')
// })

const btn1 = document.getElementById('btn-1')
const btn2 = document.getElementById('btn-2')
const btn10 = document.getElementById('btn-10')
const btn100 = document.getElementById('btn-100')
const btnReset = document.getElementById('btn-reset')
const counter = document.getElementById('counter')

// console.log(btn1, counter)


// btn1.onclick = function () {
//   // get current counter value
//   const value = parseInt(counter.innerText)
//   const newValue = value + 1
//   counter.innerText = newValue
// }

// btn2.onclick = function () {
//   const value = parseInt(counter.innerText)
//   const newValue = value + 2
//   counter.innerText = newValue
// }

// btnReset.onclick = function () {
//   counter.innerText = 0
// }

function myFunc (event) {
  const value = parseInt(counter.innerText)
  const from = event.target.name // '0'
  if (from === '0') {
    counter.innerText = 0  
  } else {
    counter.innerText = value + parseInt(from)
  }
}

btn1.onclick = myFunc
btn2.onclick = myFunc
btn10.onclick = myFunc
btn100.onclick = myFunc
btnReset.onclick = myFunc
