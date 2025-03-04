document.addEventListener("DOMContentLoaded", function () {
    loadProjects();
});

function addProject() {
    let projectName = document.getElementById("projectName").value;
    if (projectName.trim() === "") return;

    let projectDiv = document.createElement("div");
    projectDiv.classList.add("project");
    projectDiv.innerHTML = `
        <h3 onclick="toggleTasks(this)">${projectName} ⬇</h3>
        <input type="text" placeholder="Task Name" class="taskInput">
        <button onclick="addTask(this)">Add Task</button>
        <div class="taskList" style="display: none;"></div>`;

    document.getElementById("projectList").appendChild(projectDiv);
    document.getElementById("projectName").value = "";
}

function addTask(button) {
    let project = button.parentElement; // Lấy Project chứa Task
    let taskList = project.querySelector(".taskList"); // Lấy danh sách Task của Project
    let taskInput = project.querySelector(".taskInput"); // Ô nhập Task
    let taskName = taskInput.value.trim(); // Lấy tên Task

    if (taskName === "") return; // Nếu trống thì không làm gì

    // Tạo phần tử Task
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.innerHTML = `
        <input type="checkbox" onclick="toggleTask(this)">
        <span>${taskName}</span>
        <button class="delete" onclick="deleteTask(this)">❌</button>
    `;

    // Hiển thị danh sách Task nếu đang bị ẩn
    taskList.style.display = "block"; 

    // Thêm Task vào danh sách
    taskList.appendChild(taskDiv);

    // Xóa nội dung ô nhập sau khi thêm
    taskInput.value = "";
}

function toggleTask(checkbox) {
    checkbox.parentElement.classList.toggle("completed", checkbox.checked);
}

function deleteTask(button) {
    button.parentElement.remove();
}

function toggleTasks(header) {
    let taskList = header.nextElementSibling.nextElementSibling;
    if (taskList.style.display === "none") {
        taskList.style.display = "block";
        header.innerHTML = header.innerHTML.replace("⬇", "⬆");
    } else {
        taskList.style.display = "none";
        header.innerHTML = header.innerHTML.replace("⬆", "⬇");
    }
}

function loadProjects() {
    // Sau này có thể lưu vào LocalStorage
}
