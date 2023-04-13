const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('li.item');
console.log(`Number of categories: ${categoriesItems.length}`);
categoriesItems.forEach(item => {
    const header = item.querySelector('h2');
    const itemsList = item.querySelectorAll('li');
    console.log(`Category: ${header.textContent}`);
    console.log(`Elements:  ${itemsList.length}`)
});

