/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */
 let indexFromEdit = -1;

let todoTasks = document.getElementById("to-do-tasks");
let inProgressTasks = document.getElementById("in-progress-tasks");
let doneTasks = document.getElementById("done-tasks");

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
                <button data-status="${element['status']}" data-id="${count}" id="task" class="border-0 bg-white py-3 d-flex text-start mb-1px position-relative">
                    <div class="px-3 py-1">
                        <i class="fa-regular fa-circle-question text-success fa-lg"></i>
                    </div>
                    <div class="" onclick="editTask(this)" data-bs-toggle="modal" data-bs-target="#modal-task">
                        <div class="fw-bold">${element['title']}</div>
                        <div class="">
                            <div class="text-black-50">#${count+1} created in ${element['date']}</div>
                            <div class="w-200px text-truncate" title="">${element['description']}</div>
                        </div>
                        <div class="">
                            <span class="bg-primary rounded text-white">${element['priority']}</span>
                            <span class="bg-light rounded">${element['type']}</span>
                        </div>
                    </div>
                    <div onclick="deleteTask(this)" id="deleteTask">
                        <span>&times;</span>
                    </div>
                </button>`;
        }else if(element['status'] == 'In Progress'){
            countInProgress++;
            inProgressTasks.innerHTML += `
                <button data-status="${element['status']}" data-id="${count}" id="task" class="border-0 bg-white py-3 d-flex text-start mb-1px position-relative" >
                    <div class="px-3 py-1">
                        <i class="fa fa-circle-notch text-success fa-lg" aria-hidden="true"></i>
                    </div>
                    <div class="" onclick="editTask(this)" data-bs-toggle="modal" data-bs-target="#modal-task">
                        <div class="fw-bold">${element['title']}</div>
                        <div class="">
                            <div class="text-black-50">#${count+1} created in ${element['date']}</div>
                            <div class="w-200px text-truncate" title="">${element['description']}</div>
                        </div>
                        <div class="">
                            <span class="bg-primary rounded text-white">${element['priority']}</span>
                            <span class="bg-light rounded">${element['type']}</span>
                        </div>
                    </div>
                    <div onclick="deleteTask(this)" id="deleteTask">
                        <span>&times;</span>
                    </div>
                </button>`;
        }else if(element['status'] == 'Done'){
            countDone++;
            doneTasks.innerHTML += `
                <button data-status="${element['status']}" data-id="${count}" id="task" class="border-0 bg-white py-3 d-flex text-start mb-1px position-relative" >
                    <div class="px-3 py-1">
                        <i class="far fa-check-circle text-success fa-lg"></i>
                    </div>
                    <div class="" onclick="editTask(this)" data-bs-toggle="modal" data-bs-target="#modal-task">
                        <div class="fw-bold">${element['title']}</div>
                        <div class="">
                            <div class="text-black-50">#${count+1} created in ${element['date']}</div>
                            <div class="w-200px text-truncate" title="">${element['description']}</div>
                        </div>
                        <div class="">
                            <span class="bg-primary rounded text-white">${element['priority']}</span>
                            <span class="bg-light rounded">${element['type']}</span>
                        </div>
                    </div>
                    <div onclick="deleteTask(this)" id="deleteTask">
                        <span>&times;</span>
                    </div>
                </button>`;
        }
        count++;
    });

    let countTodoTasks = document.getElementById("to-do-tasks-count");
    let countInProgressTasks = document.getElementById("in-progress-tasks-count");
    let countDoneTasks = document.getElementById("done-tasks-count");

    countTodoTasks.innerText = countTodo;
    countInProgressTasks.innerText = countInProgress;
    countDoneTasks.innerText = countDone;

    createTask();
}

function createTask() {
    // initialiser task form
    let buttonAddTask = document.getElementById("buttonAddTask");

    buttonAddTask.addEventListener("click", ()=>{
        indexFromEdit = -1;
        initTaskForm();
        saveTask();
    });
    // Afficher le boutton save

    // Ouvrir modal form
}

function saveTask() {
    let buttonSave = document.getElementById("buttonSave");
    let buttonCancel = document.getElementById("buttonCancel");
    let textRequired = document.getElementById("textRequired");

    // Recuperer task attributes a partir les champs input
    
    buttonSave.addEventListener("click", (e)=>{
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
    });
}

function editTask(e) {
    // console.log(e.parentElement.getAttribute("data-id"));
    indexFromEdit = e.parentElement.getAttribute("data-id");
    // Initialisez task form

    // Affichez updates

    // Delete Button

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM 
    let typeFeature = document.getElementById("Feature");
    let typeBug = document.getElementById("Bug");
    if(e.children[2].children[1].textContent == "Feature"){
        typeFeature.checked = true;
        typeBug.checked = false;
    }else{
        typeFeature.checked = false;
        typeBug.checked = true;
    }

    taskTitle.value = e.children[0].textContent;
    taskPriority.value = e.children[2].children[0].textContent;
    taskStatus.value = e.parentElement.getAttribute("data-status");
    taskDate.value = e.children[1].children[0].textContent.slice(-10);
    taskDescription.value = e.children[1].children[1].textContent;
    // Ouvrir Modal form

    saveTask();
}

function updateTask() {
    
    // GET TASK ATTRIBUTES FROM INPUTS

    // Créez task object

    // Remplacer ancienne task par nouvelle task

    // Fermer Modal form

    // Refresh tasks
    
}

function deleteTask(e) {
    // Get index of task in the array
    let index = e.parentElement.getAttribute("data-id");

    // Remove task from array by index splice function
    tasks.splice(index, 1);

    // close modal form

    // refresh tasks
    reloadTasks();
}

function initTaskForm() {
    // Clear task form from data
    let buttonClear = document.getElementById("buttonClear");
    buttonClear.click();
    // Hide all action buttons
}

function reloadTasks() {
    // Remove tasks elements
    todoTasks.innerHTML = "";
    inProgressTasks.innerHTML = "";
    doneTasks.innerHTML = "";
    readTasks();
    // Set Task count
}