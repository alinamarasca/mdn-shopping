import {inputField, theList} from '../init/ui.js'


// upper buttons control
export const buttonControl = (event) => {
const text = event.target.form.text.value; // input field
const action = event.target.value; // add or remove button
   event.preventDefault();
   if( action === 'add'){
   console.log('I add');
   //small div: <li> <btn> <btn>
   //div
   const itemDiv = document.createElement('div');
   itemDiv.setAttribute('id', 'item-div');
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
   deleteBtn.addEventListener('click', deleteItem);
   }
   if (action === 'send'){
      // event.preventDefault();
      console.log('I send');
   }
}

const deleteItem = (e) => {
   const item = e.target;
   //delete
   if(item.classList[0] === 'delete-btn'){
      const toRemove = item.parentElement;
      toRemove.remove();
      console.log('remove works')
   }
}


//ADD item to the list ------ https://youtu.be/Ttf3CEsEwMQ?t=974