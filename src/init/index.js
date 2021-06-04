//div for EVERYTHING
const bigDiv = document.createElement('div');
bigDiv.setAttribute('id','container');
document.body.appendChild(bigDiv);
console.log(bigDiv);

// div for MAKING LIST
const createList = document.createElement('DIV');
inputDiv.setAttribute('id', 'create-list');
// console.log(inputDiv);
bigDiv.appendChild(inputDiv);

// INPUT FIELD
const inputField = document.createElement('input');
inputField.setAttribute('type', "text");
// console.log(inputField);
inputDiv.appendChild(inputField);

// ADD btn
const addBtn = document.createElement('button');
addBtn.setAttribute('id', 'add-btn');
addBtn.setAttribute('class', 'btn');  
addBtn.textContent = 'add';
inputDiv.appendChild(addBtn);

// create div to see the list