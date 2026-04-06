const inputField = document.getElementById('input-field');
const buttons = document.querySelectorAll('button');
const outputField = document.getElementById('output-field');

buttons.forEach(button => {
    
button.addEventListener('onclick', () => {
    toUpperCase();
});

button.addEventListener('onclick', () => {
    toLowerCase();
});

button.addEventListener('onclick', () => {
    capitalize();
});

button.addEventListener('onclick', () => {
    boldtext();
});

button.addEventListener('onclick', () => {
    italictext();
});

button.addEventListener('onclick', () => {
    underlinetext();
});
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
    inputtext.style.fontWeight = 'bold';
    outputField.innerText = 'inputtext';
    
 }

 function italictext() {
    const inputtext = inputField.value;
   inputtext.style.fontStyle = 'italic';
    outputField.innerText = 'inpiuttext';
 }

 function underlinetext() {
    const inputtext = inputField.value;
   inputtext.style.textDecoration = 'underline';
    outputField.innerText = 'inputtext';
 }
