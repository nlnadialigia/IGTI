const range = document.querySelector('#change-number')
const inputNumber = document.querySelector('#number-number')
const extendNumber = document.querySelector('#text-number')
let number

range.addEventListener('input', () => {
  number = range.value
  inputNumber.value = number
  const numberString = number.toString().split('')

  switch (numberString.length) {
    case 1:
      extendNumber.value = unityNumber(number)
      break;
    case 2:
      extendNumber.value = dozenNumber(number);
      break
    case 3:
      extendNumber.value = hundredNumber(number)
    default:
      break;
  }
})

const unity = ['ZERO', 'UM', 'DOIS', 'TRÊS', 'QUATRO', 'CINCO', 'SEIS', 'SETE', 'OITO', 'NOVE', 'DEZ', 'ONZE', 'DOZE', 'TREZE', 'QUATORZE', 'QUINZE', 'DEZESSEIS', 'DEZESSETE', 'DEZOITO', 'DEZENOVE'];
const dozens = ['DEZ', 'VINTE', 'TRINTA', 'QUARENTA', 'CINQUENTA', 'SESSENTA', 'SETENTA', 'OITENTA', 'NOVENTA'];
const hundreds = ['CEM', 'CENTO', 'DUZENTOS', 'TREZENTOS', 'QUATROCENTOS', 'QUINHENTOS', 'SEISCENTOS', 'SETECENTOS', 'OITOCENTOS', 'NOVECENTOS'];

function unityNumber(number) {
  numberText = unity[number]

  return numberText
}

function dozenNumber(number) {
  const numberString = number.toString().split('')
  if (numberString[1] == 0) {
    numberText = dozens[numberString[0]-1]
  } else if (number < 20) {
    numberText = unity[number]
  } else {
    numberText = `${dozens[numberString[0]-1]} E ${unity[numberString[1]]}`
  }

  return numberText
}

function hundredNumber(number) {
  const numberString = number.toString().split('')
  if (number == 100) {
    numberText = hundreds[0]
  } 
  else if (numberString[1] == 0 && numberString[2] == 0) {
    numberText = hundreds[numberString[0]]
  } 
  else {
    const number2 = number - (number[0]*100)
    numberText = `${hundreds[numberString[0]]} E ${dozenNumber(number2)}`
  }
  
  return numberText
}







