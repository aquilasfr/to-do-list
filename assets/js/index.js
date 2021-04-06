var inputTask= document.querySelector('.form-task__input');
var formTask= document.querySelector('.form-task');

function handleFormTask(event){
    event.preventDefault()
    console.log(inputTask.value);
}

formTask.addEventListener('submit', handleFormTask);


