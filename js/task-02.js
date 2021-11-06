const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('.ingredients');

const elements = ingredients.map(ingredient => {
const newItemEl = document.createElement('li');
newItemEl.classList.add('item')
newItemEl.textContent = ingredient;
  return newItemEl;

});

console.log(elements);

listEl.append(...elements);






