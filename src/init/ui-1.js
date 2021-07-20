// import "../listeners/listener.js"
// title
const header = document.createElement('header')
document.body.appendChild(header);
const welcome = document.createElement('p');
welcome.setAttribute('id', 'welcome')
header.appendChild(welcome);
welcome.textContent = 'Welcome! Here you can create your shopping list!'


//DIV for EVERYTHING ---- bigDiv
const bigDiv = document.createElement('div');
bigDiv.setAttribute('id','container');
document.body.appendChild(bigDiv);
console.log(bigDiv);

// DIV for LIST CONTROL ---- input & buttons
const controlList = document.createElement('FORM');//was DIV
controlList.setAttribute('id', 'control-list');
// console.log(inputDiv);
bigDiv.appendChild(controlList);

// INPUT FIELD ---- inputField type = text id = input-field
const inputField = document.createElement('input');
inputField.setAttribute('type', "text");
inputField.setAttribute('name', "text");//
inputField.setAttribute('id', "input-field");
console.log(inputField);
controlList.appendChild(inputField);

// ADD btn --addBtn id = add-btn class= btn
const addBtn = document.createElement('button');
addBtn.setAttribute('id', 'add-btn');
addBtn.setAttribute('class', 'btn'); 
addBtn.setAttribute('value', 'add'); //
addBtn.textContent = 'add';
controlList.appendChild(addBtn);

// SEND btn
const sendBtn = document.createElement('button');
sendBtn.setAttribute('id', 'send-btn');
sendBtn.setAttribute('class', 'btn'); 
sendBtn.setAttribute('value', 'send'); //
sendBtn.textContent = 'send';
controlList.appendChild(sendBtn);

// SAVE btn
const saveBtn = document.createElement('button');
saveBtn.setAttribute('id', 'save-btn');
saveBtn.setAttribute('class', 'btn');  
saveBtn.setAttribute('value', 'save'); 
saveBtn.textContent = 'save';
controlList.appendChild(saveBtn);

// CLEAN btn
const cleanBtn = document.createElement('button');
cleanBtn.setAttribute('id', 'clean-btn');
cleanBtn.setAttribute('class', 'btn'); 
cleanBtn.setAttribute('value', 'clean'); 
cleanBtn.textContent = 'clean';
controlList.appendChild(cleanBtn);

// CHECKED bottom
const checkedToBottom = document.createElement('button');
checkedToBottom.setAttribute('id', 'checked-bottom-btn');
checkedToBottom.setAttribute('class', 'btn'); 
checkedToBottom.setAttribute('value', 'checked-bottom'); 
checkedToBottom.textContent = 'checked to bottom';
controlList.appendChild(checkedToBottom);

// DIV to DISPLAY LIST ---- all items
const displayList = document.createElement('div');
displayList.setAttribute('id', 'display-list');
bigDiv.appendChild(displayList);

//create UL LIST
const theList = document.createElement('ul');
theList.setAttribute('id', 'the-list');
displayList.appendChild(theList);


export { addBtn, sendBtn, saveBtn, cleanBtn, inputField, theList }