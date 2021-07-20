export const CopyUrl = () => {
    const button = document.createElement('button');
    button.setAttribute('id', 'send-btn');
    button.setAttribute('class', 'btn'); 
    button.setAttribute('value', 'copy-url'); 
    button.textContent = 'copy Url';
    return button;
}