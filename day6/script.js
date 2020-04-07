document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('ID').play();
    document.removeEventListener('click', musicPlay);
}

const weapons = [];

fetch("weapons.json")
  .then(blob => blob.json())
  .then(data => weapons.push(...data));

function findMatches(wordToMatch, weapons) {
    return weapons.filter(weapon => {
    const regex = new RegExp(wordToMatch, 'gi');
    return weapon.name.match(regex)
  });
}

function displayMatches() {
  const matchArray = findMatches(this.value, weapons);
  const html = matchArray.map(weapon => {
    const regex = new RegExp(this.value, 'gi');
    const Name = weapon.name.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${Name}</span>
      </li>
    `;
  }).join('');
  suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

