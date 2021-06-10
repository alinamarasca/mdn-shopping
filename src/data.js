import {inputField, sendBtn, theList} from '../src/init/ui.js'
import {deleteItem} from '../src/handlers/handlers.js'

export const createListItem = () => {
    //create div
 const itemDiv = document.createElement('div');
 itemDiv.setAttribute('id', 'item-div');
 theList.appendChild(itemDiv);
 //create li
 const listItem = document.createElement('li');
 listItem.innerText = inputField.value;
 listItem.classList.add('item');
 itemDiv.appendChild(listItem);
 inputField.value = '';
 //delete button
 const deleteBtn = document.createElement('button');
 deleteBtn.innerHTML = '<i class = "fas fa-trash"></i>';
 deleteBtn.setAttribute('class','delete-btn');
 deleteBtn.setAttribute('value', 'delete');
 itemDiv.appendChild(deleteBtn);
 // deleteBtn listener - is it ok here?
deleteBtn.addEventListener('click', deleteItem);
 }
// using this https://orclqa.com/copy-url-clipboard/
export const sendUrl = () => {
    let inputcopy = document.body.appendChild(document.createElement("input"));
    inputcopy.value = window.location.href;
    inputcopy.focus();
    inputcopy.select();
    document.execCommand('copy');
    inputcopy.parentNode.removeChild(inputcopy);
    
   // e.preventDefault;
  //  element.classList.remove("run-animation");
  
    sendBtn.classList.add('send-active');
    setTimeout(function(){
        sendBtn.classList.remove("send-active");
    }, 600);
    
   
    }
