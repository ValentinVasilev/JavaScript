//Get the inputField, addButton and display section
let inputField = document.getElementById("inputField");
let addButton = document.getElementById("AddBtn");
let getDisplay = document.getElementById("display");

//Add event to AddButton
addButton.addEventListener("click", () => {
  //Create 'p' element and fill it up with info from input field.
  let createPelement = document.createElement("p");
  createPelement.innerHTML = (inputField.value + " ").trimStart();
  createPelement.classList.add("list");

  //Create 'ul' element.
  let createUl = document.createElement("ul");
  createUl.appendChild(createPelement);

  // Append 'p' and 'ul' to Display section
  document.querySelector("#display").appendChild(createUl);
  getDisplay.appendChild(createUl);

  //create 'Delete' button and append it to 'p' element.
  let createBtn = document.createElement("button");
  createBtn.innerHTML = "X";
  createBtn.classList.add("clear");
  createPelement.appendChild(createBtn);

  //Clear the data from input field;
  inputField.value = "";

 //Remove the 'p' element on clicking the 'X' button.
  createBtn.addEventListener("click", () => {
    createUl.remove();
  });

  //Chanage 'p' element color and 'X' button color on clicking the 'p' element.
  createPelement.addEventListener("click", () => {
    createPelement.style.backgroundColor = "green";
    createBtn.style.backgroundColor = "red";
  });
});
