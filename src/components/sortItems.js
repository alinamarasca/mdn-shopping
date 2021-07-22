import { showOptions } from "../handlers/handleShowOptions.js";

export const SortItems = () =>{
const button = document.createElement('button');
button.id = "sort";
button.className = "btn";
button.textContent = 'sort';
button.addEventListener("click", showOptions)
return button;
}