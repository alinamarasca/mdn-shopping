import { state } from "../data.js";
import { ControlPanel } from "../components/controlPanel.js";
import { ShoppingListSection } from "../components/shoppingListSection.js";
import { buttonControl } from "../handlers/handleControlButtons.js";

const body = document.querySelector("body");

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
