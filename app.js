// Define UI Vars
const taskList = document.querySelector('.collection');
const form = document.querySelector('#task-form');
const filter = document.querySelector('#filter-input');
const taskInput = document.querySelector('#task-input');
const clearBtn = document.querySelector('.clearTasks');

loadEventListeners();

function loadEventListeners() {
    form.addEventListener('submit', addTask);
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



