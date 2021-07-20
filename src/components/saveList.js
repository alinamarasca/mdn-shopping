
export const SaveList = () => {
const button = document.createElement('button');
button.setAttribute('id', 'save-btn');
button.setAttribute('class', 'btn');  
button.setAttribute('value', 'save'); 
button.textContent = 'save';
return button;
}