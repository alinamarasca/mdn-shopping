import { buttonControl } from "../handlers/handleControlPanel.js";
import { AddButton } from "./addButton.js";
import { CopyUrl } from "./copyUrl.js";
import { SaveList } from "./saveList.js"
import { SortItems } from "./sortItems.js";
import { UserInput } from "./userInput.js";

export const ControlPanel = () => {
    const section = document.getElementById("control-panel");
    section.addEventListener('click', buttonControl);
    const form = document.querySelector("form");
    form.appendChild(UserInput())
    const div = document.createElement("div");
    div.className = "controls";
    div.appendChild(AddButton());
    div.appendChild(SaveList());
    div.appendChild(SortItems());
    div.appendChild(CopyUrl());
return div;
}