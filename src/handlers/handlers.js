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
}


//ADD item to the list ------ https://youtu.be/Ttf3CEsEwMQ?t=974