import { DeleteButton } from "./deleteButton.js";
import { CheckButton } from "./checkButton.js";
import { buttonControl } from "../handlers/handleControlButtons.js";


export const ShoppingListSection = (data) => {
     const ul = document.createElement('ul');
     ul.className = "list";

     data.forEach(item => {

     const li = document.createElement("li");
     li.classList = "item";
     // li.dataset.index = data.indexOf(item);
     const div = document.createElement("div");
     div.dataset.index = data.indexOf(item);
     div.className = "item-div";
     li.appendChild(div);
     
     div.innerText = data[data.indexOf(item)].item;
     if (data[data.indexOf(item)].bought){
          li.classList.add("bought");
     }
     div.appendChild(CheckButton());
     div.appendChild(DeleteButton());
     ul.appendChild(li);
     
     })
     
     return ul;
}