const myName = document.getElementById('my-name');
const fName = myName.innerHTML;
const btnViewMore = document.getElementById('btnViewMore');
const projects = document.querySelectorAll('.hidden');
const node = document.querySelector('#fundo')
myName.innerHTML='';

function viewMore (e) {
    projects.forEach( (element) => {
        if (element.classList.contains('hidden')) {
            element.classList.remove('hidden');
            element.classList.add('visivel');
            btnViewMore.innerHTML = 'Ver menos';
        } else {
            element.classList.add('hidden');
            element.classList.remove('visivel');
            btnViewMore.innerHTML = 'Ver mais';
        }
    } )
}

function typeWriter (name) {
    setTimeout( () => {
    const myNameF = name.split('');
    myName.innerHTML='';
    myNameF.forEach( (letter, index) => {
        setTimeout(function (){
            myName.innerHTML += letter;
        }, 150 * index)
    })}, 1500)
    
}