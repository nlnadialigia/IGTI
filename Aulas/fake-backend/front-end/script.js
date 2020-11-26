let allCountries = [];

async function start() {
  const response = await fetch('http://localhost:3000/countries');
  const data = await response.json();
  console.log(data[10]);

  allCountries = data.map(country => {
    const { translations, flag, nativeName } = country;

    return {
      name: translations.pt,
      flag,
      nativeName,
    };
  });

  console.log(allCountries);
  renderCountries();
}

function renderCountries() {
  const countries = document.getElementById('countries');
  let countryHtml = '';
  let countriesHtml = '';

  allCountries.forEach(country => {
    const { name, flag, nativeName } = country;
    countryHtml = `
      <div id="country">
        <img src=${flag} alt="Bandeira ${name}">
        <div>
          <p>${name}</p>
          <p>${nativeName}</p>
        </div>
      </div>
    `;
    countriesHtml += countryHtml;
  });

  countries.innerHTML = countriesHtml;
}

start();
