const range = document.querySelector('#change-number')
const inputNumber = document.querySelector('#number-number')
const textNumber = document.querySelector('#text-number')
var number 

range.addEventListener('input', () => {
  
  var number = range.value

  inputNumber.value = number
 
})

function readNumber(element) {
  number = String(element)

  console.log(number.length)

  
}

readNumber(562)

