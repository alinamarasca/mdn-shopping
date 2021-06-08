import {inputField, theList} from '../init/ui.js'

export const addItem = (event) => {
   event.preventDefault();
   //small div: <li> <btn> <btn>
   //div
   const itemDiv = document.createElement('div');
   itemDiv.classList.add('item-div');
   theList.appendChild(itemDiv);


   //li
   const listItem = document.createElement('li');
   listItem.innerText = inputField.value;
   listItem.classList.add('item');
      itemDiv.appendChild(listItem);
   inputField.value = '';
   //delete
   const deleteBtn = document.createElement('button');
   deleteBtn.innerHTML = '<i class = "fas fa-trash"></i>';
   deleteBtn.classList.add('delete-btn');
   itemDiv.appendChild(deleteBtn);
}


//ADD item to the list ------ https://youtu.be/Ttf3CEsEwMQ?t=974