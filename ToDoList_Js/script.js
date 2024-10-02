document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const timestamp = new Date().toLocaleString();
    const li = document.createElement('li');
    li.innerHTML = `<span>${taskText}</span><span class="timestamp">${timestamp}</span> <button onclick="removeTask(this)">Delete</button>`;
    
    document.getElementById('taskList').appendChild(li);
    taskInput.value = '';
}

function removeTask(button) {
    const li = button.parentElement;
    li.classList.add('fade-out');
    setTimeout(() => {
        li.remove();
    }, 300);
}
