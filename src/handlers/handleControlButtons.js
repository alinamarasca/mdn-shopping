import { handleAddItem } from "./handleAddItem.js";
import { handleCopyUrl } from "./handleCopyUrl.js";
import { reRenderList } from "./handleReRenderList.js"


export const buttonControl = (event) => {

const action = event.target.value;
// const needReRender = event.target;
// if (needReRender.value === 'delete' && reRender.value === 'check' ){
//    reRenderList();
// }

   event.preventDefault();

   if(action === 'add'){
      handleAddItem();
      reRenderList();
   }

   if(action === 'save'){
      console.log('I save');
   }

   if(action === 'sort'){
      console.log('I sort');
   }
   
   if(action === 'copy-url'){
      handleCopyUrl();
   }

}


// //DELETE item 
// export const deleteItem = (e) => {
//    const item = e.target;
//    //delete
//    if(item.value === 'delete'){
//       const toRemove = item.parentElement;
//       toRemove.remove();
//       console.log('remove works')
//    }
  
// }
// //check item 
// export const checkItem = (e) => {
//    const item = e.target;
//    //delete
//    if(item.value === 'check'){
//       const toCheck = item.parentElement
//       // const toCheck = item.parentElement;
//       toCheck.classList.toggle('check-btn-active')
//       console.log('check works')
      
//    }
// }


//ADD item to the list ------ https://youtu.be/Ttf3CEsEwMQ?t=974