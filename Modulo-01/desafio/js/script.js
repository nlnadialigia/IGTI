let dataUsers = [];
let usersFiltered = [];
const usersId = document.getElementById('users');
const inputSearch = document.getElementById('input-search');
const titleResults = document.getElementById('results-title');
const titleStatistic = document.getElementById('statistic-title');
const statistics = document.getElementById('statistic');
const noResults = document.getElementById('no-results');

async function start() {
  const response = await fetch('http://localhost:3000/results');
  const data = await response.json();

  dataUsers = data.map(user => {
    const { gender, name, dob, picture } = user;

    return {
      gender,
      name: `${name.first} ${name.last}`,
      age: dob.age,
      avatar: picture.medium,
    };
  });

  filterUsers();
}

function filterUsers() {
  inputSearch.addEventListener('keyup', () => {
    const inputValue = inputSearch.value;

    if (inputValue.length > 0) {
      usersFiltered = dataUsers.filter(user =>
        user.name.toLowerCase().includes(inputValue.toLowerCase()),
      );
      usersFiltered.sort((a, b) => a.name.localeCompare(b.name));
    }
  });

  submitEvents();
}

function submitEvents() {
  document.querySelector('button').addEventListener('click', searchResults);
  inputSearch.addEventListener('keyup', inputEnter);
}

function searchResults() {
  const word = inputSearch.value;
  const number = usersFiltered.length;

  if (word === '') {
    clearUsers();
    return;
  }

  changeTitle(number);
  userListResults();
  clearSearch();
  statisticResults();
}

function inputEnter(event) {
  if (event.key === 'Enter' || event.key === 'numpadEnter') {
    searchResults();
  }
}

function changeTitle(number) {
  usersId.style.display = 'block';
  noResults.style.display = 'none';
  titleResults.innerHTML = `${number} usuário(s) encontrados`;
  titleStatistic.style.display = 'none';
  statistics.style.display = 'block';
}

function clearSearch() {
  inputSearch.value = '';
}

function clearUsers() {
  usersId.style.display = 'none';
  noResults.style.display = 'block';
  titleResults.innerHTML = '';
  titleStatistic.style.display = 'block';
  statistics.style.display = 'none';
}

function statisticResults() {
  maleGender();
  femaleGender();
  totalList();
}

function maleGender() {
  const male = document.getElementById('male');

  maleFiltered = usersFiltered.filter(user => user.gender === 'male');
  male.innerHTML = maleFiltered.length;
}

function femaleGender() {
  const female = document.getElementById('female');

  femaleFiltered = usersFiltered.filter(user => user.gender === 'female');
  female.innerHTML = femaleFiltered.length;
}

function totalList() {
  const total = document.getElementById('total-age');
  const avarage = document.getElementById('avarage-age');

  const totalAge = usersFiltered.reduce((accumulator, user) => {
    return accumulator + user.age;
  }, 0);

  total.innerHTML = totalAge;

  if (usersFiltered.length !== 0) {
    const avarageAge = (totalAge / usersFiltered.length).toFixed(2);

    avarage.innerHTML = avarageAge;
  }
}

/* DOM MANIPULATE */
function userListResults() {
  let usersHtml = '';

  usersFiltered.forEach(user => {
    const { avatar, name, age } = user;

    userHtml = `
      <div class="user">
        <img src="${avatar}">
        <div class="user-data">
          <p>${name}</p>
          <p>${age} anos</p>
        </div>
      </div>
    `;
    usersHtml += userHtml;
  });

  usersId.innerHTML = usersHtml;
}

start();
