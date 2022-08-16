const inputControl = document.querySelector('#font-size-control');
const outputText = document.querySelector('#text');

inputControl.addEventListener('input', () =>{
    outputText.style.fontSize = `${inputControl.value}px`;

}

)