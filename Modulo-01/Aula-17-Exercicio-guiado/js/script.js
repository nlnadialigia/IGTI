/* eslint-disable no-console */
let tabCountries = null;
let tabFavorites = null;

let allCountries = [];
let favoriteCountries = [];

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
      populationFormatted: formatNumber(population),
      flag,
    };
  });

  // favoriteCountries = allCountries;

  render();
}

function render() {
  renderCountryList();
  renderFavorites();
  renderSummary();
  handleCountryButtons();
}

function renderCountryList() {
  // console.log(allCountries);
  let countriesHtml = "<div class='countries'>";
  allCountries.forEach(country => {
    const { id, name, flag, populationFormatted } = country;
    const countryHtml = `
      <div class="country">
        <div>
          <a class="waves-effect waves=light btn" id=${id}>+</a>
        </div>
        <img src=${flag} alt="Bandeira ${name}">
        <div class="data">
          <ul>
            <li>${name}</li>
            <li>${populationFormatted}</li>
          </ul> 
        </div>
      </div>
    `;

    countriesHtml += countryHtml;
  });
  countriesHtml += '</div>';

  tabCountries.innerHTML = countriesHtml;
}

function renderFavorites() {
  let favoritesHtml = '<div>';
  favoriteCountries.forEach(country => {
    const { id, name, flag, populationFormatted } = country;
    const favoriteCountryHtml = `
      <div class="country">
        <div>
          <a class="waves-effect waves=light btn red darken-4" id=${id}>-</a>
        </div>
        <img src=${flag} alt="Bandeira ${name}" />
        <div class="data">
          <ul>
            <li>${name}</li>
            <li>${populationFormatted}</li>
          </ul>
        </div>
      </div>
    `;

    favoritesHtml += favoriteCountryHtml;
  });

  favoritesHtml += '</div>';
  tabFavorites.innerHTML = favoritesHtml;
}

function renderSummary() {
  countContries.textContent = allCountries.length;
  countFavorites.textContent = favoriteCountries.length;

  const totalPopulation = allCountries.reduce((accumulator, country) => {
    return accumulator + country.population;
  }, 0);

  const totalFavorites = favoriteCountries.reduce((accumulator, country) => {
    return accumulator + country.population;
  }, 0);

  totalPopulationList.textContent = formatNumber(totalPopulation);
  totalPopulationFavorites.textContent = formatNumber(totalFavorites);
}

function handleCountryButtons() {
  const countryButtons = Array.from(tabCountries.querySelectorAll('.btn'));
  const favoriteButtons = Array.from(tabFavorites.querySelectorAll('.btn'));

  countryButtons.forEach(button => {
    button.addEventListener('click', () => addToFavorites(button.id));
  });

  favoriteButtons.forEach(button => {
    button.addEventListener('click', () => removeFromFavorites(button.id));
  });
}

function addToFavorites(id) {
  const countryToAdd = allCountries.find(country => country.id === id);

  favoriteCountries = [...favoriteCountries, countryToAdd];

  favoriteCountries.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  allCountries = allCountries.filter(country => country.id !== id);

  render();
}

function removeFromFavorites(id) {
  const countryToRemove = favoriteCountries.find(country => country.id === id);

  allCountries = [...allCountries, countryToRemove];

  allCountries.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  favoriteCountries = favoriteCountries.filter(country => country.id !== id);

  render();
}

function formatNumber(number) {
  return numberFormat.format(number);
}
