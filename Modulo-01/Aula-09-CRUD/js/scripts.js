window.addEventListener('load', start);
// var names = document.getElementById('names')
let inputName = null;
let currentIndex = null;

const globalNames = ['Ana'];
let isEditing = false;

function start() {
  inputName = document.querySelector('#inputName');
  preventFormSubmit();
  activateInput();
  render();
}

// Não fazer reload da página quando enviar o form
function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }

  const form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}

// INPUT
function activateInput() {
  function handleTyping(event) {
    function insertName(newName) {
      globalNames.push(newName);

      render();
    }

    function updateName(newName) {
      globalNames[currentIndex] = newName;
      render();
    }

    const hasText = !!event.target.value && event.target.value.trim() !== '';

    if (!hasText) {
      event.target.value = '';
      return;
    }

    if (event.key === 'Enter') {
      if (isEditing) {
        updateName(event.target.value);
        event.target.value = '';
      } else {
        insertName(event.target.value);
        event.target.value = '';
      }

      isEditing = false;
    }
  }

  // ativar a digitação
  inputName.addEventListener('keyup', handleTyping);

  // foco no input quando carregar a página
  inputName.focus();
}

// inserção dinâmica de elementos na div #names
function render() {
  function createDeleteButton(index) {
    function deleteName() {
      globalNames.splice(index, 1);
      render();
    }

    const button = document.createElement('button');
    button.textContent = 'x';

    button.addEventListener('click', deleteName);

    return button;
  }

  function createSpan(name, index) {
    function editName() {
      inputName.value = name;
      inputName.focus();
      isEditing = true;
      currentIndex = index;
    }

    const span = document.createElement('span');
    span.textContent = name;

    span.addEventListener('click', editName);

    return span;
  }

  const divNames = document.querySelector('#names');
  divNames.innerHTML = '';

  const ul = document.createElement('ul');

  for (let i = 0; i < globalNames.length; i++) {
    const currentName = globalNames[i];

    const li = document.createElement('li');
    const span = createSpan(currentName, i);
    const button = createDeleteButton(i);

    li.appendChild(button);
    li.appendChild(span);

    ul.appendChild(li);
  }

  divNames.appendChild(ul);
}
