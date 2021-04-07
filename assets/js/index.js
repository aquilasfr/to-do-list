var inputTask= document.querySelector('.form-task__input');
var formTask= document.querySelector('.form-task');
var toDoList= document.querySelector('.to-do__list')


function handleFormTask(event){
    event.preventDefault()
    createToDoItem()
    formTask.reset()
    
}

function createToDoItem() {
    var checkbox = document.createElement('input')
    checkbox.setAttribute("type", "checkbox")

    var label = document.createElement('label')
    label.textContent = inputTask.value
    
    var listItem = document.createElement('li'); 
    listItem.classList.add("to-do__task")   
   
    listItem.appendChild(checkbox)
    listItem.appendChild(label)
    toDoList.appendChild(listItem)

}

formTask.addEventListener('submit', handleFormTask);






