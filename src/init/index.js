import { state } from "../data.js";
import { ControlPanel } from "../components/controlPanel.js";
import { ShoppingListSection } from "../components/shoppingListSection.js";
import { sortOptions } from "../components/sortingOptionsModal.js";

const body = document.querySelector("body");
// const container = document.createElement('div');
// container.className = "flex-container";
// body.appendChild(container);

const controlSection = document.createElement("section");
controlSection.id = "control-panel";
body.appendChild(controlSection);
const form = document.createElement("form");
controlSection.appendChild(form);
form.appendChild(ControlPanel());
document.getElementById("input-field").select();

const listSection = document.createElement('section');
listSection.id = "shopping-list";
listSection.appendChild(ShoppingListSection(state.items))
body.appendChild(listSection);

const modal = document.createElement("div");
modal.id = "modal-div";
modal.className = "hidden";
body.appendChild(modal);
modal.appendChild(sortOptions());
