// 
// Learn JS => Check/uncheck | High, Medium, Low | Created At
// 
// [] =? 

// [ 
  // { title: 'todo1', completed: false, pri: low, createAt: '123' },
  // { title: 'todo2', completed: false, pri: low, createAt: '123' }
// ]

// {} =? 




const todotitle = document.getElementById('todo-title')
const todotype = document.getElementById('todo-type')
const addTodoBtn = document.getElementById('add-todo')
const all = document.getElementById('all')
const pending = document.getElementById('pending')
const completed = document.getElementById('completed')


const todoListElement = document.getElementById('todo-list')

const todos = []


addTodoBtn.onclick = function () {

  const newTodo = {
    id: todos.length + 1,
    title: todotitle.value,
    completed: false,
    pri: todotype.value,
    createAt: new Date().toLocaleString()
  }

  console.log(newTodo)

  todos.unshift(newTodo)
  console.log(todos)
  all.innerText = todos.length
  pending.innerText = todos.length
  renderTodoItem(newTodo)
  todotitle.value = ''

}

function renderTodoItem(newTodo) {

  const todoDiv = document.createElement('div')
  todoDiv.id = newTodo.id
  todoDiv.classList.add('todo-item')
  todoDiv.classList.add(newTodo.pri)

  const titlePara = document.createElement('p')
  titlePara.innerText = newTodo.title
  
  const todoPri = document.createElement('p')
  todoPri.innerText = newTodo.pri

  const checked = document.createElement('input')
  checked.onclick = (event) => handleOnInputCheck(event, newTodo)
  checked.type = 'checkbox'

  todoDiv.appendChild(checked)
  todoDiv.appendChild(titlePara)
  todoDiv.appendChild(todoPri)

  console.log(todoDiv)

  todoListElement.appendChild(todoDiv)
}


function handleOnInputCheck(event, newTodo) {
  const todo = todos.find(t => t.id === newTodo.id)
  todo.completed = event.target.checked
  // console.log(event, completed, completed.innerText)
  const completedTodo = todos.filter(t => t.completed === true)
  completed.innerText = completedTodo.length
  pending.innerText = todos.length - completedTodo.length
}