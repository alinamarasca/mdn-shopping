export const CleanAll = () => {
const button = document.createElement('button');
button.setAttribute('id', 'clean-btn');
button.setAttribute('class', 'btn'); 
button.setAttribute('value', 'clean'); 
button.textContent = 'clean';
return button;
}
