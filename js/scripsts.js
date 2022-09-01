// função de adicionar tarefa 
function addTask() {

//título da tarefa

const taskTitle = document.querySelector("#task-title").value;


if(taskTitle) {

//clonar template

const template = document.querySelector(".template");

const newTask = template.cloneNode(true);

//adicionar título 

newTask.querySelector(".task-title").textContent = taskTitle;

//remover classes 

newTask.classList.remove("template");
newTask.classList.remove("hide");

//adiciona tarefa na lista 
const list = document.querySelector("#task-list");

list.appendChild(newTask);

//adicionar o evento de remover
const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function() {
   removeTask(this);
});

//adicionar evento de completar tarefa 
const doneBtn = newTask.querySelector(".done-btn").addEventListener("click", function(){
  completeTask(this);
});

//limpar texto
document.querySelector("#task-title").value = ""
}

}


//função de remover tarefa

function removeTask(task){
    task.parentNode.remove (true);
}

//função de completar tarefa 
  function completeTask(task) {

    const tasktoComplete = task.parentNode;

    tasktoComplete.classList.toggle("done");
  }

//evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", function(e) {

    e.preventDefault();
  
    addTask();

});

