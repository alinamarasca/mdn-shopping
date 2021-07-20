/* get index, go to data, change bought to true/false, add style to div*/
import { state } from "../data.js";
import { reRenderList } from "./handleReRenderList.js";

export const handleCheckMark = (e) => {
  const item = e.currentTarget.parentElement;
  const index = item.dataset.index;
  console.log(state.items[index].bought)
  state.items[index].bought = !state.items[index].bought;
  console.log(state.items[index].bought)
  // if (state.items[index].bought){
  //   item.classList.add("bought");
  // } else {
  //   item.classList.remove("bought");
  // }
  reRenderList();
}