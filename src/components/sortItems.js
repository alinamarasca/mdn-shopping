export const SortItems = () =>{
const button = document.createElement('button');
button.setAttribute('id', 'checked-bottom-btn');
button.setAttribute('class', 'btn'); 
button.setAttribute('value', 'sort'); 
button.textContent = 'sort';
return button;
}