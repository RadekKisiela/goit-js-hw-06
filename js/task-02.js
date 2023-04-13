const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulList = document.querySelector('#ingredients');
ingredients.forEach((ingredients) => {
  const liItem = document.createElement('li');
liItem.textContent = ingredients;
liItem.classList.add('item');
ulList.appendChild(liItem);
});