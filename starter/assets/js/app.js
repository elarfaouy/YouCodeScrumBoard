/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */
let todoTasks = document.getElementById("to-do-tasks");
let inProgressTasks = document.getElementById("in-progress-tasks");
let doneTasks = document.getElementById("done-tasks");

readTasks();
saveTask();

function readTasks(){
    let count = 0;
    tasks.forEach(element => {
        count++;
        if(element['status'] == 'To Do'){
            todoTasks.innerHTML += `
                <button class="border-0 bg-white py-3 d-flex text-start mb-1px rounded-bottom">
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
            inProgressTasks.innerHTML += `
                <button class="border-0 bg-white py-3 d-flex text-start mb-1px rounded-bottom">
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
        }else if(element['status'] == 'Done'){
            doneTasks.innerHTML += `
                <button class="border-0 bg-white py-3 d-flex text-start mb-1px rounded-bottom">
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
        }
    });
}

function createTask() {
    // initialiser task form

    // Afficher le boutton save

    // Ouvrir modal form

}

function saveTask() {
    let buttonSave = document.getElementById("buttonSave");

    // Recuperer task attributes a partir les champs input
    let taskTitle = document.querySelector("#taskTitle");
    let taskType = document.getElementById("feature");
    let taskPriority = document.getElementById("taskPriority");
    let taskStatus = document.getElementById("taskStatus");
    let taskDate = document.getElementById("taskDate");
    let taskDescription = document.getElementById("taskDescription");

    buttonSave.addEventListener("click", (e)=>{
        e.preventDefault();
        console.log(taskTitle.childNodes);
        console.log(taskType.childNodes);
        console.log(taskPriority);
        console.log(taskStatus);
        console.log(taskDate);
        console.log(taskDescription);
        if(taskTitle.value !== "" && taskDate.value !== ""){
            todoTasks.innerHTML += `
            <button class="border-0 bg-white py-3 d-flex text-start mb-1px rounded-bottom">
                <div class="px-3 py-1">
                    <i class="fa-regular fa-circle-question text-success fa-lg"></i>
                </div>
                <div class="">
                    <div class="fw-bold">Use charts and diagrams</div>
                    <div class="">
                        <div class="text-black-50">#5 created in 2022-10-08</div>
                        <div class="" title="While it is not always necessary, sometimes it might be beneficial to prepare a flowchart, a block diagram or some other kind of concept visualization that will render it easy for the developer to comprehend the task and its scope.">While it is not always necessary, sometimes it might be...</div>
                    </div>
                    <div class="">
                        <span class="bg-primary rounded text-white">High</span>
                        <span class="bg-light rounded">Feature</span>
                    </div>
                </div>
            </button>`;
        }
    });

    // Créez task object
    // let task = {
    //     'title'         :   taskTitle,
    //     'type'          :   taskType,
    //     'priority'      :   taskPriority,
    //     'status'        :   taskStatus,
    //     'date'          :   taskDate,
    //     'description'   :   taskDescription,
    // };

    // Ajoutez object au Array
    // tasks.push(task);

    // refresh tasks
    // readTasks();
    
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