let inputField = document.getElementById('inputField');
let addButton = document.getElementById('AddBtn');
let getDisplay = document.getElementById('display');


addButton.addEventListener('click', () => {
    let createPelement = document.createElement('p');
    createPelement.innerHTML = (inputField.value + ' ').trimStart();
    createPelement.classList.add('list');

    let createUl = document.createElement('ul');
    createUl.appendChild(createPelement);

    document.querySelector('#display').appendChild(createUl);
    

    getDisplay.appendChild(createUl);

    let createBtn = document.createElement('button');
    createBtn.innerHTML = 'X';
    createBtn.classList.add('clear');

    createPelement.appendChild(createBtn);

    inputField.value = '';
    createBtn.addEventListener('click', () => {
        createUl.remove();
    })

    createPelement.addEventListener('click', () => {
        createPelement.style.backgroundColor = 'green';
        createBtn.style.backgroundColor = 'red';
    })
});


