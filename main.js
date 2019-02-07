'use strict';

const schmittysPad = {
    name: 'apartment',
    floors: 1,
    sqfeet: 1200,
    bedrooms: 2,
    baths: 1,
    yearBuilt: 1989
};
const allistair = {
    make: 'Infiniti',
    model: 'Q50',
    year: '2018'
};
// uncomment to use optimized function
// createListFromObjectProperties('car', allistair);
// createListFromObjectProperties('house', schmittysPad);
for (let property of Object.keys(allistair)) {
    let carContainer = document.getElementById('car'),
        carPropertyListItem = document.createElement('li');

    carPropertyListItem.appendChild(document.createTextNode(`${property}: ${allistair[property]}`));
    carContainer.appendChild(carPropertyListItem);
}

for (let property of Object.keys(schmittysPad)) {
    let houseContainer = document.getElementById('house'),
        housePropertyListItem = document.createElement('li');

    housePropertyListItem.appendChild(document.createTextNode(`${property}: ${schmittysPad[property]}`));
    houseContainer.appendChild(housePropertyListItem);
}