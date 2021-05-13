let inputField = document.getElementById('inputField');
let addButton = document.getElementById('AddBtn');
let getDisplay = document.getElementById('display');


addButton.addEventListener('click', () => {
    let createPelement = document.createElement('p');
    createPelement.innerHTML = inputField.value + ' ';
    createPelement.classList.add('list');

    getDisplay.appendChild(createPelement);

    let createBtn = document.createElement('button');
    createBtn.innerHTML = 'X';

    createPelement.appendChild(createBtn);

});


