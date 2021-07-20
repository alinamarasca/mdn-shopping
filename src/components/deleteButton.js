import { handleDeleteItem } from "../handlers/handleDeleteItem.js"

export const DeleteButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '<i class = "fas fa-trash"></i>';
    button.setAttribute('class','delete-btn');
    button.classList.add('inner-btn');
    button.setAttribute('value', 'delete');
    button.addEventListener('click', handleDeleteItem);
    return button;
};