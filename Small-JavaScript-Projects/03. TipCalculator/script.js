// Get the input fields, submite button and display section
let priceInput = document.getElementById("price");
let tips = document.getElementById("tip");
let peopleCount = document.getElementById("numberOfPeople");
let btnSubmit = document.getElementById("btn");
let display = document.getElementById("display");

//Add event to the submite button.
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  //Check if input fields are empty or negative numbers.
  if (priceInput.value <= 0) {
      display.style.color = 'red';
    display.innerHTML = "Невалидна сума.";
    return;
  } else if (!Number(tips.value)) {
    display.style.color = 'red';
    display.innerHTML = "Невалиден бакшиш.";
    return;
  } else if (peopleCount.value <= 0) {
    display.style.color = 'red';
    display.innerHTML = "Невалиден брой хора.";
    return;
  }

  //Calculate tip
  let tipsCalculate = Number(priceInput.value * tips.value);
  let tipPerPerson = tipsCalculate / peopleCount.value;
  display.innerHTML = tipPerPerson.toFixed(2)+'лв. на човек.';
});
