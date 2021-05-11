let priceInput = document.getElementById("price");
let tips = document.getElementById("tip");
let peopleCount = document.getElementById("numberOfPeople");
let btnSubmit = document.getElementById("btn");
let display = document.getElementById("display");

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  if (priceInput.value <= 0) {
    display.innerHTML = "Невалидна сума.";
    return;
  } else if (!Number(tips.value)) {
    display.innerHTML = "Невалиден бакшиш.";
    return;
  } else if (!peopleCount.value) {
    display.innerHTML = "Невалиден брой хора.";
    return;
  }

  let tipsCalculate = Number(priceInput.value * tips.value);
  let tipPerPerson = tipsCalculate / peopleCount.value;
  display.innerHTML = tipPerPerson.toFixed(2) + "лв. на човек.";
});
