/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */

// this variable for check if create task from buttonAddTask or from editTask
let indexFromEdit = -1;

// this variables for select the div contains the tasks
let todoTasks = document.getElementById("to-do-tasks");
let inProgressTasks = document.getElementById("in-progress-tasks");
let doneTasks = document.getElementById("done-tasks");

// this variables for select inputs form
let taskTitle = document.querySelector("#taskTitle");
let Type = document.getElementById("Feature");
let taskPriority = document.getElementById("taskPriority");
let taskStatus = document.getElementById("taskStatus");
let taskDate = document.getElementById("taskDate");
let taskDescription = document.getElementById("taskDescription");


readTasks();

function createButton(index, task){
    let button = document.createElement("button");
    button.className = "border-0 bg-white py-3 d-flex w-100 text-start mb-1px position-relative";
    button.id = "task";

    let iconDiv = document.createElement("div");
    iconDiv.className = "px-3 py-1";
        let icon = document.createElement("i");
        if(task.status == "To Do"){
            icon.className = "fa-regular fa-circle-question text-success fa-lg";
        }else if(task.status == "In Progress"){
            icon.className = "fa fa-circle-notch text-success fa-lg";
        }else if(task.status == "Done"){
            icon.className = "far fa-check-circle text-success fa-lg";
        }
        iconDiv.append(icon);

    let contentDiv = document.createElement("div");
    contentDiv.className = "w-75";
    contentDiv.setAttribute("onclick", `editTask(${index})`);
        let titleTask = document.createElement("div");
        titleTask.className = "fw-bold text-truncate";
        titleTask.append(task.title);
        let dateTask = document.createElement("div");
        dateTask.className = "text-black-50";
        dateTask.append(`#${index+1} created in ${task.date}`);
        let descriptionTask = document.createElement("div");
        descriptionTask.className = "text-truncate";
        descriptionTask.append(task.description);
        let priorityTask = document.createElement("span");
        priorityTask.className = "bg-primary rounded text-white";
        priorityTask.append(task.priority);
        let typeTask = document.createElement("span");
        typeTask.className = "bg-light rounded";
        typeTask.append(task.type);
        contentDiv.append(titleTask, dateTask, descriptionTask, priorityTask, typeTask);

    let deleteDiv = document.createElement("div");
    deleteDiv.id = "deleteTask";
    deleteDiv.setAttribute("onclick", `deleteTask(${index})`);
        let deleteIcon = document.createElement("span");
        deleteIcon.innerHTML = "&times;";
        deleteDiv.append(deleteIcon);


    button.append(iconDiv, contentDiv, deleteDiv);
    return button;
}

function readTasks(){
    let count = 0;
    let countTodo = 0, countInProgress = 0, countDone = 0;

    tasks.forEach(element => {
        if(element['status'] == 'To Do'){
            countTodo++;
            todoTasks.append(createButton(count, element));
        }else if(element['status'] == 'In Progress'){
            countInProgress++;
            inProgressTasks.append(createButton(count, element));
        }else if(element['status'] == 'Done'){
            countDone++;
            doneTasks.append(createButton(count, element));
        }
        count++;
    });

    document.getElementById("to-do-tasks-count").textContent = countTodo;
    document.getElementById("in-progress-tasks-count").textContent = countInProgress;
    document.getElementById("done-tasks-count").textContent = countDone;

    createTask();
}

function createTask() {
    let buttonAddTask = document.getElementById("buttonAddTask");

    buttonAddTask.onclick = ()=>{
        indexFromEdit = -1;
        
        // initialiser task form
        initTaskForm();

        // Ouvrir modal form
        $("#modal-task").modal("show");

        saveTask();
    };
}

function saveTask() {
    let buttonSave = document.getElementById("buttonSave");
    let buttonCancel = document.getElementById("buttonCancel");
    let textRequired = document.getElementById("textRequired");

    // Recuperer task attributes a partir les champs input
    buttonSave.onclick = ()=>{
        let taskType = (Type.checked === true) ? "Feature" : "Bug";

        if(taskTitle.value != "" && taskDate.value != "" && taskDescription.value != ""){
            textRequired.innerHTML = "";

            // Créez task object
            let task = {
                'title'         :   taskTitle.value,
                'type'          :   taskType,
                'priority'      :   taskPriority.value,
                'status'        :   taskStatus.value,
                'date'          :   taskDate.value,
                'description'   :   taskDescription.value,
            };
        
            // Ajoutez object au Array
            if(indexFromEdit != -1){
                tasks.splice(indexFromEdit, 1);
            }
            tasks.push(task);
        
            // refresh tasks
            reloadTasks();
            buttonCancel.click();
        }else{
            textRequired.innerHTML = `<p>All the fields are required !</p>`;
        }
    };
}

function editTask(id) {
    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete
    indexFromEdit = id;

    // Initialisez task form
    let typeFeature = document.getElementById("Feature");
    let typeBug = document.getElementById("Bug");
    if(tasks[id].type == "Feature"){
        typeFeature.checked = true;
    }else{
        typeBug.checked = true;
    }

    taskTitle.value = tasks[id].title;
    taskPriority.value = tasks[id].priority;
    taskStatus.value = tasks[id].status;
    taskDate.value = tasks[id].date;
    taskDescription.value = tasks[id].description;

    // Ouvrir Modal form
    $("#modal-task").modal("show");

    // Save the new task
    saveTask();
}

function deleteTask(id) {
    // Remove task from array by index splice function
    tasks.splice(id, 1);
    
    // refresh tasks
    reloadTasks();
}

function initTaskForm() {
    // Clear task form from data
    document.getElementById("test").reset();
}

function reloadTasks() {
    // Remove tasks elements
    todoTasks.innerHTML = "";
    inProgressTasks.innerHTML = "";
    doneTasks.innerHTML = "";
    readTasks();
}

/* function updateTask() {
    
    // GET TASK ATTRIBUTES FROM INPUTS

    // Créez task object

    // Remplacer ancienne task par nouvelle task

    // Fermer Modal form

    // Refresh tasks
    
} */

// `<button id="task" class="border-0 bg-white py-3 d-flex w-100 text-start mb-1px position-relative">
//     <div class="px-3 py-1">
//         <i class="fa-regular fa-circle-question text-success fa-lg"></i>
//     </div>
//     <div class="w-75" onclick="editTask(${count})">
//         <div class="fw-bold text-truncate">${element['title']}</div>
//         <div class="text-black-50">#${count+1} created in ${element['date']}</div>
//         <div class="text-truncate" title="">${element['description']}</div>
//         <span class="bg-primary rounded text-white">${element['priority']}</span>
//         <span class="bg-light rounded">${element['type']}</span>
//     </div>
//     <div onclick="deleteTask(${count})" id="deleteTask">
//         <span>&times;</span>
//     </div>
// </button>`