// Select elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add Task Event
addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();

    if (!taskText) return alert("Please enter a task!");

    // Create <li>
    const li = document.createElement("li");
    li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="complete-btn">Complete</button>
        <button class="delete-btn">Delete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
});

// Event Delegation for Complete & Delete Buttons
taskList.addEventListener("click", (e) => {
    const item = e.target;

    // Delete task
    if (item.classList.contains("delete-btn")) {
        item.parentElement.remove();
    }

    // Mark as complete
    if (item.classList.contains("complete-btn")) {
        const taskText = item.parentElement.querySelector(".task-text");
        taskText.style.textDecoration =
            taskText.style.textDecoration === "line-through"
                ? "none"
                : "line-through";
    }
});
