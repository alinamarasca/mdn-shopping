import { reRenderList } from "./handleReRenderList.js";
import { state } from "../data.js";

export const handleDeleteItem = (e) => {
    const item = e.currentTarget.parentElement;
    // const index = item.getAttribute('data-index');
    const index = item.dataset.index;
    state.items.splice(index, 1)
    console.log(state);
    reRenderList();
    }