import "../listeners/listener.js"

//div for EVERYTHING ---- bigDiv
const bigDiv = document.createElement('div');
bigDiv.setAttribute('id','container');
document.body.appendChild(bigDiv);
console.log(bigDiv);

// div for MAKING LIST ---- createList
const createList = document.createElement('DIV');
createList.setAttribute('id', 'create-list');
// console.log(inputDiv);
bigDiv.appendChild(createList);

// INPUT FIELD ---- inputField type = text id = input-field
const inputField = document.createElement('input');
inputField.setAttribute('type', "text");
inputField.setAttribute('id', "input-field");
// console.log(inputField);
createList.appendChild(inputField);


// ADD btn --addBtn id = add-btn class= btn
export const addBtn = document.createElement('button');
addBtn.setAttribute('id', 'add-btn');
addBtn.setAttribute('class', 'btn');  
addBtn.textContent = 'add';
createList.appendChild(addBtn);

// create div to see the list


// addBtn.addEventListener('click', (e) => console.log('hey'))
