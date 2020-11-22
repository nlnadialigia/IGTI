let tabCountries = null;
let tabFavorites = null;

let allCountries = [];
let allFavorites = [];

let totalPopulationList = 0;
let totalPopulationFavorites = 0;

let countContries = 0;
let countFavorites = 0;

let numberFormat = null;

window.addEventListener("load", () => {
  tabCountries = document.querySelector("#tabCountries");
  tabFavorites = document.querySelector("#tabFavorites");
  countContries = document.querySelector("#countCountries");
  countFavorites = document.querySelector("#countFavorites");
  totalPopulationList = document.querySelector("#totalPopulationList");
  totalPopulationFavorites = document.querySelector(
    "#totalPopulationFavorites"
  );

  numberFormat = Intl.NumberFormat("pt-BR");

  fetchCountries();
});

async function fetchCountries() {
  const response = await fetch("https://restcountries.eu/rest/v2/all");
  const data = await response.json();
  allCountries = data.map((country) => {
    const { numericCode, translations, population, flag } = country;
    return {
      id: numericCode,
      name: translations.pt,
      population,
      flag,
    };
  });

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
  let countriesHtml = "";
  allCountries.forEach((country) => {
    const { name, flag, population } = country;
    const countryHtml = `
      <div class="country">
        <div class="add">+</div>
        <img src=${flag} alt="Bandeira ${name}">
        <div class="data">
          <p>${name}</p>
          <p>${population}</p>
        </div>
      </div>
    `;

    countriesHtml += countryHtml;
  });

  tabCountries.innerHTML = countriesHtml;
}

function renderFavorites() {
  console.log(renderFavorites);
}

function renderSummary() {
  console.log(renderSummary);
}

function handleCountryButtons() {
  console.log("handleCountryButtons");
}
