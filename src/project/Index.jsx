import React from "react";
export default function Index() {
    return (
        <div className="container">
            <h1>My To-Do List</h1>
            <input type="text" id="taskInput" placeholder="Add a new task..." />
            <button onclick="addTask()">Add Task</button>
            <ul id="taskList" />
            <img src="https://www.amitree.com/wp-content/uploads/2021/08/the-pros-and-cons-of-paper-to-do-lists.jpeg" class="img-thumbnail" alt="image"></img>
        </div>
    )
}