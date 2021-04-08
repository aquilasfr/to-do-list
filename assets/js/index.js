var campoDoFormulario= document.querySelector('.form-task__input');
var formulario= document.querySelector('.form-task');
var lista= document.querySelector('.to-do__list')


function enviaFormulario(event){

    event.preventDefault()

    var foiDigitado=campoDoFormulario.value !='' 
    if (foiDigitado)  {
                
        criaItemDaLista()
        formulario.reset()
    }
      

    
}

function criaItemDaLista() {
    var checkbox = document.createElement('input')
    checkbox.setAttribute("type", "checkbox")

    var label = document.createElement('label')
    label.textContent = campoDoFormulario.value
    
    var itemDaLista = document.createElement('li'); 
    itemDaLista.classList.add("to-do__task")   
   
    itemDaLista.appendChild(checkbox)
    itemDaLista.appendChild(label)
    lista.appendChild(itemDaLista)

}

formulario.addEventListener('submit', enviaFormulario);






