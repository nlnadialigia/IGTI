let tabCountries = null
let tabFavorites = null

let allCountries = []
let allFavorites = []

let totalPopulationList = 0
let totalPopulationFavorites = 0

let countContries = 0
let countFavorites = 0

let numberFormat = null

window.addEventListener('load', () => {
  tabCountries = document.querySelector('#tabCountries')
  tabFavorites = document.querySelector('#tabFavorites')
  countContries = document.querySelector('#countCountries')
  countFavorites = document.querySelector('#countFavorites')
  totalPopulationList = document.querySelector('#totalPopulationList')
  totalPopulationFavorites = document.querySelector('#totalPopulationFavorites')

  numberFormat = Intl.NumberFormat('pt-BR')

  fetchCountries()
})

function fetchCountries() {
  console.log('FETCH');
}