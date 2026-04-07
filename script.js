const inputField = document.getElementById('input-field');
const buttons = document.querySelectorAll('.btn');
const outputField = document.getElementById('output-field');

const btn = Array.from(buttons);
    
btn[0].addEventListener('click', () => {
    toUpperCase();
});

btn[1].addEventListener('click', () => {
    toLowerCase();
});

btn[2].addEventListener('click', () => {
    capitalize();
});

btn[3].addEventListener('click', () => {
    boldtext();
});

btn[4].addEventListener('click', () => {
    italictext();
});

btn[5].addEventListener('click', () => {
    underlinetext();
});

function toUpperCase() {
  const inputText = inputField.value;
  const upperCaseText = inputText.toUpperCase();
  outputField.innerText = upperCaseText;
}

function toLowerCase() {
  const inputText = inputField.value;
  const lowerCaseText = inputText.toLowerCase();
  outputField.innerText = lowerCaseText;
}

function capitalize() {
    const inputtext = inputField.value;
    const capitalizedText = inputtext.charAt(0).toUpperCase() + inputtext.slice(1).toLowerCase();
    outputField.innerText = capitalizedText;
}
 function boldtext() {
    const inputtext = inputField.value;
    outputField.innerText = inputtext;
    outputField.style.fontWeight = 'bold';
    
 }

 function italictext() {
    const inputtext = inputField.value;
    outputField.innerText = inputtext;
    outputField.style.fontStyle = 'italic';
 }

 function underlinetext() {
    const inputtext = inputField.value;
    outputField.innerText = inputtext;
    outputField.style.textDecoration = 'underline';
 }
