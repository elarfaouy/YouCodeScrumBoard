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

function readTasks(){
    let count = 0;
    let countTodo = 0, countInProgress = 0, countDone = 0;

    tasks.forEach(element => {
        if(element['status'] == 'To Do'){
            countTodo++;
            todoTasks.innerHTML += `
                <button id="task" class="border-0 bg-white py-3 d-flex w-100 text-start mb-1px position-relative">
                    <div class="px-3 py-1">
                        <i class="fa-regular fa-circle-question text-success fa-lg"></i>
                    </div>
                    <div class="w-75" onclick="editTask(${count})">
                        <div class="fw-bold text-truncate">${element['title']}</div>
                        <div class="">
                            <div class="text-black-50">#${count+1} created in ${element['date']}</div>
                            <div class="text-truncate" title="">${element['description']}</div>
                        </div>
                        <div class="">
                            <span class="bg-primary rounded text-white">${element['priority']}</span>
                            <span class="bg-light rounded">${element['type']}</span>
                        </div>
                    </div>
                    <div onclick="deleteTask(${count})" id="deleteTask">
                        <span>&times;</span>
                    </div>
                </button>`;
        }else if(element['status'] == 'In Progress'){
            countInProgress++;
            inProgressTasks.innerHTML += `
                <button id="task" class="border-0 bg-white py-3 d-flex text-start mb-1px position-relative" >
                    <div class="px-3 py-1">
                        <i class="fa fa-circle-notch text-success fa-lg" aria-hidden="true"></i>
                    </div>
                    <div class="w-75" onclick="editTask(${count})">
                        <div class="fw-bold text-truncate">${element['title']}</div>
                        <div class="">
                            <div class="text-black-50">#${count+1} created in ${element['date']}</div>
                            <div class="text-truncate" title="">${element['description']}</div>
                        </div>
                        <div class="">
                            <span class="bg-primary rounded text-white">${element['priority']}</span>
                            <span class="bg-light rounded">${element['type']}</span>
                        </div>
                    </div>
                    <div onclick="deleteTask(${count})" id="deleteTask">
                        <span>&times;</span>
                    </div>
                </button>`;
        }else if(element['status'] == 'Done'){
            countDone++;
            doneTasks.innerHTML += `
                <button id="task" class="border-0 bg-white py-3 d-flex text-start mb-1px position-relative" >
                    <div class="px-3 py-1">
                        <i class="far fa-check-circle text-success fa-lg"></i>
                    </div>
                    <div class="w-75" onclick="editTask(${count})">
                        <div class="fw-bold text-truncate">${element['title']}</div>
                        <div class="">
                            <div class="text-black-50">#${count+1} created in ${element['date']}</div>
                            <div class="text-truncate" title="">${element['description']}</div>
                        </div>
                        <div class="">
                            <span class="bg-primary rounded text-white">${element['priority']}</span>
                            <span class="bg-light rounded">${element['type']}</span>
                        </div>
                    </div>
                    <div onclick="deleteTask(${count})" id="deleteTask">
                        <span>&times;</span>
                    </div>
                </button>`;
        }
        count++;
    });

    document.getElementById("to-do-tasks-count").innerText = countTodo;
    document.getElementById("in-progress-tasks-count").innerText = countInProgress;
    document.getElementById("done-tasks-count").innerText = countDone;

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