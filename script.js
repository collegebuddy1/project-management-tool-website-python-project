document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registration-form");
    const postForm = document.getElementById("post-form");
    const taskForm = document.getElementById("task-form");
    const assigneeSelect = document.getElementById("assignee");

    // Dummy data for registered users (replace with actual data)
    const registeredUsers = ["User1", "User2", "User3"];

    registeredUsers.forEach(user => {
        const option = document.createElement("option");
        option.value = user;
        option.textContent = user;
        assigneeSelect.appendChild(option);
    });

    registrationForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const username = document.getElementById("username").value;
        // Implement user registration logic here
        alert(`User ${username} registered successfully.`);
    });

    postForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const postContent = document.getElementById("post-content").value;
        // Implement post creation logic here
        alert(`Posted: ${postContent}`);
    });

    taskForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const taskTitle = document.getElementById("task-title").value;
        const assignee = assigneeSelect.value;
        // Implement task assignment logic here
        alert(`Task "${taskTitle}" assigned to ${assignee}.`);
    });
});

