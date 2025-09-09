
let tasks =[]
function addTask(){
    const element = document.getElementById('input');
    const taskText = element.value.trim();
    if(taskText != '') {
        tasks.push(taskText);
        console.log("задача добавлена");
        element.value = '';
        renderTasks();
    }

}
function removeTask(index) {
    tasks.splice(index, 1);
    console.log("задача удалена")
    renderTasks();
}
function renderTasks() {
    const tasksContainer = document.getElementById("taskContainer")
    tasksContainer.innerHTML = '';

    for(let i = 0; i < tasks.length; i++){
        const taskElement = document.createElement('div');
        taskElement.textContent = tasks[i];
        taskElement.className = 'task-flex-item';

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '✖';
        deleteButton.onclick = () => removeTask(i)
        deleteButton.className = 'remove-button';

        taskElement.appendChild(deleteButton);
        tasksContainer.appendChild(taskElement);
    }
}
