document.addEventListener("DOMContentLoaded", function () {
    loadProjects();
});

function addProject() {
    let projectName = document.querySelector(".projectInput").value.trim();
    let dueDate = document.querySelector(".projectDueDate").value;
    let priority = document.querySelector(".projectPriority").value;

    if (projectName === "") return;

    let projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    projectDiv.innerHTML = `
        <h3 onclick="toggleTasks(this)" class="project-title">${projectName} ⬇</h3>
        <p><strong>Due:</strong> ${dueDate ? dueDate : "No Due Date"} | <strong>Priority:</strong> ${priority}</p>
        <div class="taskContainer">
            <input type="text" placeholder="Task Name" class="taskInput">
            <input type="date" class="taskDueDate">
            <select class="taskPriority">
                <option value="Low">Low</option>
                <option value="Medium">Medium</option>
                <option value="High">High</option>
            </select>
            <button onclick="addTask(this)">Add Task</button>
            <div class="taskList"></div>
        </div>
    `;

    document.getElementById("projectList").appendChild(projectDiv);
    
    // Reset input fields
    document.querySelector(".projectInput").value = "";
    document.querySelector(".projectDueDate").value = "";
    document.querySelector(".projectPriority").value = "Low";
}

function addTask(button) {
    let project = button.parentElement.parentElement;
    let taskList = project.querySelector(".taskList");
    let taskInput = project.querySelector(".taskInput");
    let dueDateInput = project.querySelector(".taskDueDate");
    let priorityInput = project.querySelector(".taskPriority");
    let taskName = taskInput.value.trim();
    let dueDate = dueDateInput.value;
    let priority = priorityInput.value;

    if (taskName === "") return;

    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.innerHTML = `
        <input type="checkbox" onclick="toggleTask(this)">
        <span>${taskName}</span>
        <span class="due-date">${dueDate ? "Due: " + dueDate : "No Due Date"}</span>
        <span class="priority ${priority.toLowerCase()}">${priority}</span>
        <button class="delete" onclick="deleteTask(this)">❌</button>
        <div class="subtaskList"></div>
        <input type="text" class="subtaskInput" placeholder="Add subtask">
        <button onclick="addSubtask(this)">+ Subtask</button>
    `;

    taskList.style.display = "block";
    taskList.appendChild(taskDiv);

    taskInput.value = "";
    dueDateInput.value = "";
    priorityInput.value = "Low";
}

function addSubtask(button) {
    let task = button.parentElement;
    let subtaskList = task.querySelector(".subtaskList");
    let subtaskInput = task.querySelector(".subtaskInput");
    let subtaskName = subtaskInput.value.trim();

    if (subtaskName === "") return;

    let subtaskDiv = document.createElement("div");
    subtaskDiv.classList.add("subtask");
    subtaskDiv.innerHTML = `
        <input type="checkbox" onclick="toggleTask(this)">
        <span>${subtaskName}</span>
        <button class="delete" onclick="deleteTask(this)">❌</button>
    `;

    subtaskList.appendChild(subtaskDiv);
    subtaskInput.value = "";
}

function toggleTask(checkbox) {
    checkbox.parentElement.classList.toggle("completed", checkbox.checked);
}

function deleteTask(button) {
    button.parentElement.remove();
}

function toggleTasks(header) {
    let project = header.parentElement;
    let taskContainer = project.querySelector(".taskContainer");
    let taskList = project.querySelector(".taskList");

    if (taskContainer.style.display === "none") {
        taskContainer.style.display = "block";
        taskList.style.display = "block";
        header.innerHTML = header.innerHTML.replace("⬇", "⬆");
    } else {
        taskContainer.style.display = "none";
        taskList.style.display = "none";
        header.innerHTML = header.innerHTML.replace("⬆", "⬇");
    }
}

function loadProjects() {
    // Sau này có thể lưu vào LocalStorage
}
