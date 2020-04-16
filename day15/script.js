const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || []; //if there´s something in the local storage get it
function addItem(e) {
    e.preventDefault(); //as default is for external sources ad we are working with local storage
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    }
    items.push(item);
    populateList(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items)); //convert an object to a string
    this.reset();
}

function populateList(plates = [], platesList) { //every time we add an item recreate the hole list
    platesList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
          <label for="item${i}">${plate.text}</label>
        </li>
      `;
    }).join('');
}

function toggleDone(e) {
    if (!e.target.matches('input')) return; // if is not an input do not call it
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done; // set it to an inverse of itself
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}


addItems.addEventListener('submit', addItem); //to cover more errors
itemsList.addEventListener('click', toggleDone);


populateList(items, itemsList);