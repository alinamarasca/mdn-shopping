export const UserInput = () => {
    const div = document.createElement("div")
    div.classList = "input-div";
    const inputField = document.createElement('input');
    div.appendChild(inputField);
    inputField.setAttribute("type", "text");
    inputField.setAttribute("name", "text");
    inputField.id = "input-field";
    return div;
}