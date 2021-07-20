// take from input, send to data, clean input
import { state } from "../data.js";
// import { ShoppingListSection } from "../components/shoppingListSection.js";

export const handleAddItem = () => {
    const input = document.getElementById("input-field");
    const newItem = {item: input.value, bought: false};
    state.items.push(newItem);
    input.value = "";
    //console.log(state);
    // ShoppingListSection(state.items);
}
    // console.log(item)
