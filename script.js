function addProject() {
    let projectName = document.getElementById("projectName").value;
    if (projectName.trim() === "") return;

    let projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    projectDiv.innerHTML = `<h3>${projectName}</h3>
        <input type="text" placeholder="Task Name" class="taskInput">
        <button onclick="addTask(this)">Add Task</button>
        <div class="taskList"></div>`;

    document.getElementById("projectList").appendChild(projectDiv);
    document.getElementById("projectName").value = "";
}

function addTask(button) {
    let project = button.parentElement;
    let taskName = project.querySelector(".taskInput").value;
    if (taskName.trim() === "") return;

    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.innerHTML = `<input type="checkbox" onclick="toggleTask(this)">
        <span>${taskName}</span>
        <button onclick="deleteTask(this)">❌</button>`;

    project.querySelector(".taskList").appendChild(taskDiv);
    project.querySelector(".taskInput").value = "";
}

function toggleTask(checkbox) {
    checkbox.parentElement.classList.toggle("completed", checkbox.checked);
}

function deleteTask(button) {
    button.parentElement.remove();
}
