export const sendUrl = () => {
    let inputcopy = document.body.appendChild(document.createElement("input"));
    inputcopy.value = window.location.href;
    inputcopy.focus();
    inputcopy.select();
    document.execCommand('copy');
    inputcopy.parentNode.removeChild(inputcopy);
    // sendBtn.classList.add('send-active');
    // setTimeout(function(){
    // sendBtn.classList.remove("send-active");
    // }, 1000);
    
    }