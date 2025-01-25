document.addEventListener('DOMContentLoaded', () => {
    // declare element by Id
     addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const takeList = document.getElementById('task-list');

    // addTask function
    function addTask() {
        const taskText = document.getElementById('task-input').ariaValueMax.trim();
        if (taskText != " ") {
            //add element
            const li = document.createElement('li');
            const addTask = document.createElement('span');
            const newButton = document.createElement('span');
             //add content
             li.textContent = taskText;
             newButton.textContent = 'Remove'
            // add class
            newButton.classList.add('remove-btn');
            const newTask = document.getElementById('todo-app');
            newTask.addEventListener('submit', function (e) {
                e.preventDefault();
                const value = newTask.querySelector('input[type="text]').value;
                console.log(value);
            })
            // append to document
            li.appendChild(newButton);
            takeList.appendChild(li);
            takeList.value = " ";
        }; 
        if (taskText == " ") {
            alert.prompt('please enter a task');
        }
    }
    const addButton = document.getElementById('add-task-btn');
    addButton.addEventListener('click', function () {
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