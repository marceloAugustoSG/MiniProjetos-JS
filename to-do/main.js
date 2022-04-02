
const btnCreateTask = document.querySelector('.create button')
const btntaskDelete = document.querySelector('.btnDelete')
const getTask = document.querySelector('.create input')
const msg = document.querySelector('.container-taskCreate div')
const containerTaskList = document.querySelector('.container-taskList')

console.log(containerTaskList.childNodes)


console.log(btntaskDelete)


console.log(getTask.value)

const taskList = document.querySelector('ul')

const tasks = []



function createElementTask(item) {
    const containerTasks = document.createElement('div')
    const element = document.createElement('li')
    const check = document.createElement('input')

    if (item === "") {
        msg.textContent = 'Campo vazio'

        return null;

    } else {
        containerTasks.classList.add('container-taskList')
        let id = 0
        msg.textContent = ''
        const text = document.createTextNode(item)
        const label = document.createElement('label')
        const button = document.createElement('button')
        const icon = document.createElement('i')
        icon.classList.add('fa-solid')
        icon.classList.add('fa-trash')
        button.classList.add('btnDelete')
        check.type = 'checkbox'
        check.setAttribute('id', `${id}`)
        label.setAttribute('for', 'check')

        label.appendChild(text)
        element.appendChild(check)
        element.appendChild(label)
        element.appendChild(button)
        button.appendChild(icon)

        containerTasks.appendChild(element)

        id++;

        button.addEventListener('click', () => {
            taskList.removeChild(element)
            console.log(taskList)

        })
    }


    return taskList.appendChild(element)

}

function checkTaskList(taskList) {

}

btnCreateTask.addEventListener('click', () => {
    tasks.push(getTask.value)
    createElementTask(getTask.value)
    getTask.value = ''

})



























