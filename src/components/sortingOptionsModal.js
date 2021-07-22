import { SortItems } from "../handlers/handleSorting.js";

const data = [
    'bought first',
    'to buy first',
    'a to z',
    'z to a',
    'apple to pear'
]

export const sortOptions = () => {

const backdrop = document.createElement('div');
backdrop.className = "backdrop";

const content = document.createElement('div');

content.className = "content";
backdrop.appendChild(content);

const ul = document.createElement('ul');
    for (let i = 0; i < data.length; i++){
        console.log(i);
        const li = document.createElement('li');
        li.textContent = data[i];
        li.setAttribute("value", data[i]);
        ul.appendChild(li);
        li.addEventListener('click', SortItems);
}
content.appendChild(ul)
return backdrop;
}

