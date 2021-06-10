import { addBtn, sendBtn, saveBtn, cleanBtn} from "../init/ui.js"
import {buttonControl} from '../handlers/handlers.js'
// import { toLocalStorage } from '../data.js'

// document.addEventListener('DOMContentLoaded', toLocalStorage);

addBtn.addEventListener('click', buttonControl)

sendBtn.addEventListener('click', buttonControl)

saveBtn.addEventListener('click', buttonControl)

cleanBtn.addEventListener('click', buttonControl)

// deleteBtn.addEventListener('click', deleteItem);