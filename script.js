document.addEventListener('DOMContentLoaded', () => {
    // declare element by Id
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // addTask function
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText != " ") {
            //add element
            const li = document.createElement('li');
            li.textContent = taskText;
            const newButton = document.createElement('span');
            newButton.textContent = 'Remove'
            newButton.classList.add('remove-btn');

            //const newTask = document.getElementById('todo-app');
        newButton.onclick = function () {
            taskList.removeChild(li);
        }
            // append to document
            li.appendChild(newButton);
            taskList.appendChild(li);
            taskList.value = " ";
        }; 
        if (taskText == " ") {
            alert('please enter a task');
        }
    }
  
    addButton.addEventListener('button', function () {
        addTask();
    });
    
    
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    })

});

document.addEventListener('DOMContentLoaded', function () {
    addTask();
});