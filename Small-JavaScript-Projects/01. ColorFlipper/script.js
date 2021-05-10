let btnId = document.getElementById('buttonid');
let boxId = document.getElementById('coloverfulbox');
let pId = document.getElementById('colorName');


btnId.addEventListener('click', () => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    boxId.style.backgroundColor = '#' + randomColor;
    pId.innerHTML = '#' + randomColor;
});