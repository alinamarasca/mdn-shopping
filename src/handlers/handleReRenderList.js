import { ShoppingListSection } from "../components/shoppingListSection.js";
import { state } from "../data.js";

export const reRenderList = () => {
    const section = document.getElementById('shopping-list');
    section.innerHTML = "";
    section.appendChild(ShoppingListSection(state.items));
 }