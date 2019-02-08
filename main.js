'use strict';

const SCHMITTYS_PAD = {
    name: 'apartment',
    floors: 1,
    sqfeet: 1200,
    bedrooms: 2,
    baths: 1,
    yearBuilt: 1989
};
const ALLISTAIR = {
    make: 'Infiniti',
    model: 'Q50',
    year: '2018'
};
const CHERRY_BOMB = {
    make: 'Toyota',
    model: 'Rav4',
    year: '2008'
};

let arrayOfCars = [ALLISTAIR, CHERRY_BOMB];

for (let i = 0; i < arrayOfCars.length; i++) {
    let carContainer = document.getElementById('car'),
        carPropertyListItem = document.createElement('li');

    carPropertyListItem.appendChild(document.createTextNode(`Make: ${arrayOfCars[i].make}`));
    carPropertyListItem.appendChild(document.createTextNode(`Model: ${arrayOfCars[i].model}`));
    carPropertyListItem.appendChild(document.createTextNode(`Year: ${arrayOfCars[i].year}`));
    carContainer.appendChild(carPropertyListItem);
}

for (let property of Object.keys(ALLISTAIR)) {
    let carContainer = document.getElementById('car'),
        carPropertyListItem = document.createElement('li');

    carPropertyListItem.appendChild(document.createTextNode(`${property}: ${ALLISTAIR[property]}`));
    carContainer.appendChild(carPropertyListItem);
}

for (let property of Object.keys(SCHMITTYS_PAD)) {
    let houseContainer = document.getElementById('house'),
        housePropertyListItem = document.createElement('li');

    housePropertyListItem.appendChild(document.createTextNode(`${property}: ${SCHMITTYS_PAD[property]}`));
    houseContainer.appendChild(housePropertyListItem);
}