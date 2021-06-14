import {inputField, sendBtn, theList} from '../src/init/ui.js'
import {deleteItem, checkItem} from '../src/handlers/handlers.js'


// const thing = document.getElementById('the-list').lastChild;

// console.log(thing);

// export const toLocalStorage = (thing) => {
    
//     let storedItems;
    
//     //check if we already havestoredItems
//     if (localStorage.getItem('storedItems') === null) {
//         //if no create one
//        storedItems = [];
//     } else {
//         //if yes get them
//        storedItems = JSON.parse(localStorage.getItem('storedItems'));
//     }
//    storedItems.push(thing);
//     localStorage.setItem('storedItems', JSON.stringify(storedItems));
// }


export const createListItem = () => {
    //create div
 const itemDiv = document.createElement('div');
 itemDiv.setAttribute('id', 'each-item-div');
 theList.appendChild(itemDiv);
 //create li
 const listItem = document.createElement('li');
 listItem.innerText = inputField.value;
 listItem.classList.add('item');
 itemDiv.appendChild(listItem);
 inputField.value = '';
  //checked button
  const checkBtn = document.createElement('button');
  checkBtn.innerHTML = '<i class = "fas fa-check"></i>';
  checkBtn.setAttribute('class','check-btn');
  checkBtn.classList.add('inner-btn');
  checkBtn.setAttribute('value', 'check');
  itemDiv.appendChild(checkBtn);
  //listener!???11
  
 //delete button
 const deleteBtn = document.createElement('button');
 deleteBtn.innerHTML = '<i class = "fas fa-trash"></i>';
 deleteBtn.setAttribute('class','delete-btn');
 deleteBtn.classList.add('inner-btn');
 deleteBtn.setAttribute('value', 'delete');
 itemDiv.appendChild(deleteBtn);
 // deleteBtn listener - is it ok here?
deleteBtn.addEventListener('click', deleteItem);
checkBtn.addEventListener('click', checkItem);
 }

// BUTTON using this https://orclqa.com/copy-url-clipboard/
export const sendUrl = () => {
    let inputcopy = document.body.appendChild(document.createElement("input"));
    inputcopy.value = window.location.href;
    inputcopy.focus();
    inputcopy.select();
    document.execCommand('copy');
    inputcopy.parentNode.removeChild(inputcopy);
    sendBtn.classList.add('send-active');
    setTimeout(function(){
        sendBtn.classList.remove("send-active");
    }, 1000);
    
    }
