// Input => User Todo Item
// Button => Add => Click => Add input's todo to the list

// step 1 => Get the Input Value => 1 ✅
// Step 2 => Add this input value to out todo list 
// Step 3 => Once out todo is added we will clear the input

// string, number, object, array, boolean ?????
// object ??, array ??
// [1,2,3,4,5...] => order of the items 


const myInput = document.getElementById('todo-input')
const addBtn = document.getElementById('add-todo-btn')

const todoList = []
/*
[
    "Learn JS"
]
*/

addBtn.onclick = function () {
  const value = myInput.value
  if (value === '') {
    return
  }
  todoList.unshift(value) // add the item in start of the list
  console.log(todoList)
  myInput.value = ''
  renderTodo()
}

// display the todo
// for-loop

function renderTodo() {
  const todoListDiv = document.getElementById('todo-list')
  const noTodoDiv = document.getElementById('no-todo')
  todoListDiv.innerHTML = ''

  if(todoList.length === 0) {
    noTodoDiv.style.display = 'block'
  } else {
    noTodoDiv.style.display = 'none'
  }

  for (let i = 0; i < todoList.length; i++) {
    // body of the loop
     const crrTodo = todoList[i]
   
     const div = document.createElement('div')
     div.className = 'flex'
     const input = document.createElement('input')
     input.type = 'checkbox'
     const para = document.createElement('p')
     para.innerText = crrTodo
     
     div.appendChild(input)
     div.appendChild(para)
     todoListDiv.appendChild(div)
   }   
}

renderTodo()