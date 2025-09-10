
let tasks =[]
function addTask(){
    const element = document.getElementById('input');
    const taskText = element.value.trim();
    if(taskText != '') {

        if(tasks.length == 0){
            const taskContainer = document.createElement('task-flex-container');
            taskContainer.id = 'taskContainer';
            taskContainer.className = 'task-flex-container';
            document.getElementById('task-section').appendChild(taskContainer);
        }
        tasks.push(taskText);
        console.log("задача добавлена");
        element.value = '';
        renderTasks();
    }

}
function removeTask(index) {
    tasks.splice(index, 1);
    console.log("задача удалена")
    if(tasks.length == 0){
        let section = document.getElementById('task-section');
        section.removeChild(document.getElementById('taskContainer'));
    }
    renderTasks();
}
function renderTasks() {
    const tasksContainer = document.getElementById("taskContainer")
    tasksContainer.innerHTML = '';

    for(let i = 0; i < tasks.length; i++){


        const taskElement = document.createElement('div');
        taskElement.className = 'task-flex-item';

        const numberOfElement = document.createElement('div');
        numberOfElement.textContent = i + 1;
        numberOfElement.className = 'task-number-item';

        const taskText = document.createElement('div');
        taskText.textContent = tasks[i];
        taskText.className = 'task-text';

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '✖';
        deleteButton.onclick = () => removeTask(i)
        deleteButton.className = 'remove-button';

        taskElement.appendChild(numberOfElement);
        taskElement.appendChild(taskText);
        taskElement.appendChild(deleteButton);

        tasksContainer.appendChild(taskElement);
    }
}
