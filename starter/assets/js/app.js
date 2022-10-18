/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */
let todoTasks = document.getElementById("to-do-tasks");
let inProgressTasks = document.getElementById("in-progress-tasks");
let doneTasks = document.getElementById("done-tasks");

readTasks();
createTask();

function readTasks(){
    let count = 0;
    let countTodo = 0, countInProgress = 0, countDone = 0;

    tasks.forEach(element => {
        count++;
        if(element['status'] == 'To Do'){
            countTodo++;
            todoTasks.innerHTML += `
                <button class="border-0 bg-white py-3 d-flex text-start mb-1px">
                    <div class="px-3 py-1">
                        <i class="fa-regular fa-circle-question text-success fa-lg"></i>
                    </div>
                    <div class="">
                        <div class="fw-bold">${element['title']}</div>
                        <div class="">
                            <div class="text-black-50">#${count} created in ${element['date']}</div>
                            <div class="" title="">${element['description']}</div>
                        </div>
                        <div class="">
                            <span class="bg-primary rounded text-white">${element['priority']}</span>
                            <span class="bg-light rounded">${element['type']}</span>
                        </div>
                    </div>
                </button>`;
        }else if(element['status'] == 'In Progress'){
            countInProgress++;
            inProgressTasks.innerHTML += `
                <button class="border-0 bg-white py-3 d-flex text-start mb-1px">
                    <div class="px-3 py-1">
                        <i class="fa fa-circle-notch text-success fa-lg" aria-hidden="true"></i>
                    </div>
                    <div class="">
                        <div class="fw-bold">${element['title']}</div>
                        <div class="">
                            <div class="text-black-50">#${count} created in ${element['date']}</div>
                            <div class="" title="">${element['description']}</div>
                        </div>
                        <div class="">
                            <span class="bg-primary rounded text-white">${element['priority']}</span>
                            <span class="bg-light rounded">${element['type']}</span>
                        </div>
                    </div>
                </button>`;
        }else if(element['status'] == 'Done'){
            countDone++;
            doneTasks.innerHTML += `
                <button class="border-0 bg-white py-3 d-flex text-start mb-1px">
                    <div class="px-3 py-1">
                        <i class="far fa-check-circle text-success fa-lg"></i>
                    </div>
                    <div class="">
                        <div class="fw-bold">${element['title']}</div>
                        <div class="">
                            <div class="text-black-50">#${count} created in ${element['date']}</div>
                            <div class="" title="">${element['description']}</div>
                        </div>
                        <div class="">
                            <span class="bg-primary rounded text-white">${element['priority']}</span>
                            <span class="bg-light rounded">${element['type']}</span>
                        </div>
                    </div>
                </button>`;
        }
    });

    let countTodoTasks = document.getElementById("to-do-tasks-count");
    let countInProgressTasks = document.getElementById("in-progress-tasks-count");
    let countDoneTasks = document.getElementById("done-tasks-count");

    countTodoTasks.innerText = countTodo;
    countInProgressTasks.innerText = countInProgress;
    countDoneTasks.innerText = countDone;
}

function removeTasks(){
    todoTasks.innerHTML = "";
    inProgressTasks.innerHTML = "";
    doneTasks.innerHTML = "";
}

function clearFields(){
    taskTitle.value = "";
    taskDate.value = "";
    taskDescription.value = "";
}

function createTask() {
    // initialiser task form

    // Afficher le boutton save

    // Ouvrir modal form
    saveTask();
}

function saveTask() {
    let buttonSave = document.getElementById("buttonSave");
    let buttonCancel = document.getElementById("buttonCancel");
    let textRequired = document.getElementById("textRequired");

    // Recuperer task attributes a partir les champs input
    let taskTitle = document.querySelector("#taskTitle");
    let Type = document.getElementById("feature");
    let taskPriority = document.getElementById("taskPriority");
    let taskStatus = document.getElementById("taskStatus");
    let taskDate = document.getElementById("taskDate");
    let taskDescription = document.getElementById("taskDescription");
    
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
            tasks.push(task);
        
            // refresh tasks
            clearFields();
            removeTasks();
            readTasks();
            buttonCancel.click();
        }else{
            textRequired.innerHTML = `<p>All the fields are required !</p>`;
        }
    });
}

function editTask(index) {
    // Initialisez task form

    // Affichez updates

    // Delete Button

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
}

function updateTask() {
    // GET TASK ATTRIBUTES FROM INPUTS

    // Créez task object

    // Remplacer ancienne task par nouvelle task

    // Fermer Modal form

    // Refresh tasks
    
}

function deleteTask() {
    // Get index of task in the array

    // Remove task from array by index splice function

    // close modal form

    // refresh tasks
}

function initTaskForm() {
    // Clear task form from data

    // Hide all action buttons
}

function reloadTasks() {
    // Remove tasks elements

    // Set Task count
}