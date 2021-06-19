// Define UI Vars
const taskList = document.querySelector('.collection');
const form = document.querySelector('#task-form');
const filterInput = document.querySelector('#filter-input');
const taskInput = document.querySelector('#task-input');
const clearBtn = document.querySelector('.clear-tasks');

loadEventListeners();

function loadEventListeners() {
    form.addEventListener('submit', addTask);
    taskList.addEventListener('click', removeTask);
    clearBtn.addEventListener('click', clearTasks);
    filterInput.addEventListener('keyup', filterTasks);
}

function addTask(e) {

    if (taskInput.value === '') {
        alert('Add a Task');
    }

    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fas fa-trash-alt"></i>';
    
    li.appendChild(link);
    taskList.appendChild(li);

    taskInput.value = '';

    e.preventDefault();
}

function removeTask(e) {
    if (e.target.parentElement.classList.contains('delete-item')) {
        e.target.parentElement.parentElement.remove();
    }
}

function clearTasks() {
    // taskList.innerHTML = '';
    // Faster 
    if(confirm('Are You Sure You Want to Remove All the List Items?')) {
        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }
    }
}

function filterTasks() {
    
}



