let btnDecrease = document.getElementById('decrease');
let btnReset = document.getElementById('reset');
let btnIncrease = document.getElementById('increase');
let display = document.getElementById('displayBox');

let counter = 0;



btnDecrease.addEventListener('click', () => {
    counter--;
    display.innerHTML = counter;
    positiveOrNegative();
    
})

btnReset.addEventListener('click', () => {
    counter = 0;
    display.innerHTML = counter;
    display.style.color = 'green';
    
})

btnIncrease.addEventListener('click', () => {
    counter++;
    display.innerHTML = counter;
    positiveOrNegative();
    

})

function positiveOrNegative(){

    if(counter % 2 == 0){
        display.style.color = 'blue';
    }else{
        display.style.color = 'red';
    }
}
