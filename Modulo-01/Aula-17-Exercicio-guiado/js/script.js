/* eslint-disable no-console */
let tabCountries = null;
let tabFavorites = null;

let allCountries = [];
let allFavorites = [];

let totalPopulationList = 0;
let totalPopulationFavorites = 0;

let countContries = 0;
let countFavorites = 0;

let numberFormat = null;

window.addEventListener('load', () => {
  tabCountries = document.getElementById('tabCountries');
  tabFavorites = document.getElementById('tabFavorites');
  countContries = document.getElementById('countCountries');
  countFavorites = document.getElementById('countFavorites');
  totalPopulationList = document.getElementById('totalPopulationList');
  totalPopulationFavorites = document.getElementById(
    'totalPopulationFavorites',
  );

  numberFormat = Intl.NumberFormat('pt-BR');

  fetchCountries();
});

async function fetchCountries() {
  const response = await fetch('https://restcountries.eu/rest/v2/all');
  const data = await response.json();
  allCountries = data.map(country => {
    const { numericCode, translations, population, flag } = country;
    return {
      id: numericCode,
      name: translations.pt,
      population,
      flag,
    };
  });

  allFavorites = allCountries;

  render();
}

function render() {
  renderCountryList();
  renderFavorites();
  renderSummary();
  handleCountryButtons();
}

function renderCountryList() {
  console.log(allCountries);
  let countriesHtml = '';
  allCountries.forEach(country => {
    const { id, name, flag, population } = country;
    const countryHtml = `
      <div class="country">
        <div class="waves-effect waves=light btn" id=${id}>+</div>
        <img src=${flag} alt="Bandeira ${name}">
        <div class="data">
          <ul>
            <li>${name}</li>
            <li>${population}</li>
          </ul> 
        </div>
      </div>
    `;

    countriesHtml += countryHtml;
  });

  tabCountries.innerHTML = countriesHtml;
}

function renderFavorites() {
  let favoritesHtml = '';
  allFavorites.forEach(country => {
    const { id, name, flag, population } = country;
    const favoriteCountryHtml = `
      <div class="country">
        <div class="waves-effect waves=light btn red darken-4" id=${id}>-</div>
        <img src=${flag} alt="Bandeira ${name}" />
        <div class="data">
          <ul>
            <li>${name}</li>
            <li>${population}</li>
          </ul>
        </div>
      </div>
    `;

    favoritesHtml += favoriteCountryHtml;
  });

  tabFavorites.innerHTML = favoritesHtml;
}

function renderSummary() {
  countContries.textContent = allCountries.length;
  countFavorites.textContent = allFavorites.length;

  const totalPopulation = allCountries.reduce((accumulator, country) => {
    return accumulator + country.population;
  }, 0);

  const totalFavorites = allFavorites.reduce((accumulator, country) => {
    return accumulator + country.population;
  }, 0);

  totalPopulationList.textContent = formatNumber(totalPopulation);
  totalPopulationFavorites.textContent = formatNumber(totalFavorites);
}

function handleCountryButtons() {
  console.log('handleCountryButtons');
}

function formatNumber(number) {
  return numberFormat.format(number);
}
