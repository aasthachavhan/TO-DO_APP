// script.js

// Function to add a new task
function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskText = taskInput.value.trim();

    // Ensure the input is not empty
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }

    // Create a new list item
    let li = document.createElement('li');
    li.innerText = taskText;

    // Create a delete button for the task
    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = function() {
        deleteTask(li);
    };

    // Append the delete button to the list item
    li.appendChild(deleteButton);

    // Append the list item to the task list
    document.getElementById('taskList').appendChild(li);

    // Clear the input field after adding the task
    taskInput.value = '';
}

// Function to delete a task
function deleteTask(taskItem) {
    document.getElementById('taskList').removeChild(taskItem);
}
