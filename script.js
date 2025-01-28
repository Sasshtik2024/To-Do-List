function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = taskText;

        const editBtn = document.createElement("button");
        editBtn.textContent = "✎";
        editBtn.className = "edit";
        editBtn.onclick = function() {
            editTask(span);
        };

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "🗑️";
        deleteBtn.className = "delete";
        deleteBtn.onclick = function() {
            deleteTask(li);
        };

        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        taskInput.value = ""; // Clear input field
    }
}

function editTask(taskSpan) {
    const newTask = prompt("Edit your task:", taskSpan.textContent);
    if (newTask !== null && newTask.trim() !== "") {
        taskSpan.textContent = newTask.trim();
    }
}

function deleteTask(taskItem) {
    taskItem.remove();
}
