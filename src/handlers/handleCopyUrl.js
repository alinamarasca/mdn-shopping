export const handleCopyUrl = () => {
    
    console.log('copy url handler')
    let inputcopy = document.body.appendChild(document.createElement("input"));
    inputcopy.value = window.location.href;
    inputcopy.focus();
    inputcopy.select();
    document.execCommand('copy');
    inputcopy.parentNode.removeChild(inputcopy);
    }