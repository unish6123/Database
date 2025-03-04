const searchField = document.getElementById('searchField');
const insertField = document.getElementById('insertField');

const searchButton = document.getElementById('searchButton');
const insertButton = document.getElementById('insertButton');

const resultField = document.getElementById('result');


insertButton.addEventListener('click', () => {
    fetch('/insert?doc=' + insertField.value )
    .then(response => response.text())
    .then(txt =>{
        resultField.innerText = txt;
    })
})

searchButton.addEventListener('click', () => {
    fetch('/search?find=' + searchField.value )
    .then(response => response.text())
    .then(txt =>{
        resultField.innerText = txt;
    })
})
