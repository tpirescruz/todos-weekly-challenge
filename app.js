const toDoList = document.querySelector('.todo-list');
const toDoInput = document.querySelector('.todo-input');
const toDoCount = document.querySelector('.todo-count');
const btn = document.querySelector('.btn-sent');

const all = document.querySelector('#all')
const active = document.querySelector('#active')
const completed = document.querySelector('#completed')
const removeCompleted = document.querySelector('#remove-completed')
let count = 0


btn.addEventListener('click', (e) => {
    e.preventDefault()
    
    const toDo = document.createElement('li')
    const toDoText = document.createElement('p')
    const check = document.createElement('div')
    const deleteToDo = document.createElement('div')
    const todos = document.querySelectorAll('li')
    
    
    check.classList.add('unchecked')
    toDoText.classList.add('todo-text')
    
    toDoText.textContent = toDoInput.value;
    
    toDo.appendChild(check)
    toDo.appendChild(toDoText)
    toDo.appendChild(deleteToDo)
    toDoList.appendChild(toDo)
    
    
    removeCompleted.addEventListener('click', () => {
        if (check.classList.contains('checked')) {
            check.parentNode.parentNode.removeChild(toDo)
        }
    })
    
    check.addEventListener('click', () => {
        check.classList.toggle('checked')
        console.log(completedTodos.length)
    })
    const completedTodos = document.querySelectorAll('.checked')
    
    
    console.log(completedTodos.length)
    toDoCount.textContent = `${(todos.length + 1)} todos left`
})



