import { handleCheckMark } from "../handlers/handleCheckMark.js";

export const CheckButton =() => {
    const button = document.createElement('button');
    button.innerHTML = '<i class = "fas fa-check"></i>';
    button.setAttribute('class','check-btn');
    button.classList.add('inner-btn');
    button.setAttribute('value', 'check');
    button.addEventListener('click', handleCheckMark);
    return button;
  }

