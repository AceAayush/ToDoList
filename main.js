let taskInput = document.getElementById("taskInput");
let addButton = document.getElementById("addButton");
let tasksContainer = document.getElementById("tasksToDoContainer");

addButton.onclick = function() {
    if(taskInput.value = ""){
        window.alert("nigga");
    }
    let taskText = document.createElement("li");
    tasksContainer.appendChild(taskText);
    taskText.innerText = taskInput.value;

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "DELETE";
    taskText.appendChild(deleteButton);
    deleteButton.onclick = function() {
        tasksContainer.removeChild(taskText);
    }
}
