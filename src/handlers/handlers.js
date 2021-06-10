import { createListItem, sendUrl } from '../data.js'


// upper buttons control
export const buttonControl = (event) => {
const text = event.target.form.text.value; // input field
const action = event.target.value; // add or remove button
   event.preventDefault();
   
   
   if( action === 'add'){
   //console.log('I add');
   createListItem();
      }
   //send
   if(action === 'send'){
      console.log('I send');
      sendUrl();
   }
   //save
   if(action === 'save'){
      console.log('I save');
   }
   //clean
   if(action === 'clean'){
      console.log('I clean');
   }
}

//DELETE item 
export const deleteItem = (e) => {
   const item = e.target;
   //delete
   if(item.value === 'delete'){
      const toRemove = item.parentElement;
      toRemove.remove();
      console.log('remove works')
   }
  
}
//check item 
export const checkItem = (e) => {
   const item = e.target;
   //delete
   if(item.value === 'check'){
      const toCheck = item.parentElement
      // const toCheck = item.parentElement;
      toCheck.classList.toggle('check-btn-active')
      console.log('check works')
      
   }
}

//ADD item to the list ------ https://youtu.be/Ttf3CEsEwMQ?t=974