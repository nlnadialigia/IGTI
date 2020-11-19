window.addEventListener('load', start)
// var names = document.getElementById('names')
var inputName = null
var currentIndex = null

var globalNames = ['Ana']
var isEditing = false


function start() {
  inputName = document.querySelector('#inputName')
  preventFormSubmit()
  activateInput()
  render()
}

//Não fazer reload da página quando enviar o form
function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault()
  }

  var form = document.querySelector('form')
  form.addEventListener('submit', handleFormSubmit)
}

//INPUT
function activateInput() {
  function handleTyping(event) {
    function insertName(newName) {
      globalNames.push(newName)

      render()
    }

    function updateName(newName) {
      globalNames[currentIndex] = newName
      render()
    }

    var hasText = !!event.target.value && event.target.value.trim() !== ''

    if(!hasText){
      event.target.value = ''
      return
    }

    if (event.key === 'Enter') {
      if (isEditing) {
        updateName(event.target.value)
        event.target.value = ''
      } else {
        insertName(event.target.value)
        event.target.value = ''
      }
      
      isEditing = false
    }
  }

  //ativar a digitação
  inputName.addEventListener('keyup', handleTyping)
  
  //foco no input quando carregar a página
  inputName.focus()
}

//inserção dinâmica de elementos na div #names
function render() {
  function createDeleteButton(index) {
    function deleteName() {
      globalNames.splice(index, 1)
      render()
    }

    var button = document.createElement('button')
    button.textContent = 'x'

    button.addEventListener('click', deleteName)

    return button
  }

  function createSpan(name, index) {
    function editName() {
      inputName.value = name
      inputName.focus()
      isEditing = true
      currentIndex = index
    }

    var span = document.createElement('span')
    span.textContent = name

    span.addEventListener('click', editName)

    return span
  }

  var divNames = document.querySelector('#names')
  divNames.innerHTML = ''

  var ul = document.createElement('ul')

  for (let i = 0; i < globalNames.length; i++) {
    var currentName = globalNames[i]

    var li = document.createElement('li')
    var span = createSpan(currentName, i)    
    var button = createDeleteButton(i)

    li.appendChild(button)
    li.appendChild(span)

    ul.appendChild(li)    
  }

  divNames.appendChild(ul)
}