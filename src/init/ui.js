// import "../listeners/listener.js"

//DIV for EVERYTHING ---- bigDiv
const bigDiv = document.createElement('div');
bigDiv.setAttribute('id','container');
document.body.appendChild(bigDiv);
console.log(bigDiv);

// DIV for LIST CONTROL ---- input & buttons
const controlList = document.createElement('DIV');
controlList.setAttribute('id', 'control-list');
// console.log(inputDiv);
bigDiv.appendChild(controlList);

// INPUT FIELD ---- inputField type = text id = input-field
const inputField = document.createElement('input');
inputField.setAttribute('type', "text");
inputField.setAttribute('id', "input-field");
// console.log(inputField);
controlList.appendChild(inputField);

// ADD btn --addBtn id = add-btn class= btn
const addBtn = document.createElement('button');
addBtn.setAttribute('id', 'add-btn');
addBtn.setAttribute('class', 'btn');  
addBtn.textContent = 'add';
controlList.appendChild(addBtn);


// DIV to DISPLAY LIST ----
const displayList = document.createElement('div');
displayList.setAttribute('id', 'display-list');
bigDiv.appendChild(displayList);

export { addBtn }