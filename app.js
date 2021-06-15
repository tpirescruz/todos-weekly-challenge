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
    const todos = document.querySelector('li')


    check.classList.add('unchecked')
    toDoText.classList.add('todo-text')

    toDoText.textContent = toDoInput.value;

    toDo.appendChild(check)
    toDo.appendChild(toDoText)
    toDo.appendChild(deleteToDo)
    toDoList.appendChild(toDo)
    count++
    toDoCount.textContent = `${(count)} todos left`

    removeCompleted.addEventListener('click', () => {
        if (check.classList.contains('checked')) {
            check.parentNode.parentNode.removeChild(toDo)
        }
    })

    check.addEventListener('click', () => {
        check.classList.toggle('checked')
        if (check.classList.contains('checked')) {
            count--

        } else {
            count++
        }
        toDoCount.textContent = `${(count)} todos left`
    })
    all.addEventListener('click', () => {
        all.classList.toggle('btn-type-active')
        toDo.classList.remove('hidden')
    })
    completed.addEventListener('click', () => {
        completed.classList.toggle('btn-type-active')
        toDo.classList.remove('hidden')

        if (!check.classList.contains('checked')) {
            toDo.classList.toggle('hidden')
        }
    })
    active.addEventListener('click', () => {
        // active.classList.toggle('btn-type-active')
        toDo.classList.remove('hidden')
        if (check.classList.contains('checked')) {
            toDo.classList.toggle('hidden')
        }
    })

    const completedTodos = document.querySelectorAll('.checked')
})



