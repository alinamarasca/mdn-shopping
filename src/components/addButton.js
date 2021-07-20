export const AddButton = () => {
const button = document.createElement('button');
button.setAttribute('id', 'add-btn');
button.setAttribute('class', 'btn'); 
button.setAttribute('value', 'add'); 
button.textContent = 'add';
return button;
}
