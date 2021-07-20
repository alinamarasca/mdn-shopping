
import { state } from "../data.js";
import { ShoppingListSection } from "../components/shoppingListSection.js";

export const handleDeleteItem = (e) => {

    const item = e.currentTarget.parentElement;
    console.log(item);
    // const index = item.getAttribute('data-index');
    const index = item.dataset.index;
    console.log(index)
    console.log(state.items[index]);
    state.items.splice(index, 1)
    // const reRenderList = () => {
    //     const section = document.getElementById('shopping-list');
    //     section.innerHTML = "";
    //     section.appendChild(ShoppingListSection(state.items));
    //  }
    //  reRenderList();
    }