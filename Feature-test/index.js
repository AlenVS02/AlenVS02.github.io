let drag;
const numberRegEx = /[1-9]/;

function dragMove(group) {
    var elements = document.querySelectorAll('.post-it-note')
    elements.forEach(element => {
        element.style.position = 'absolute';
        element.onmousedown = function(){
            drag = element;
        }
    });
}

document.onmouseup = function(e) {
    drag = null;
}
document.onmousemove = function(e) {
    var x = e.pageX
    var y = e.pageY

    drag.style.left = x + 'px';
    drag.style.top = y + 'px'
}

const stickyBoard = document.querySelector('.stickyboard')
const createNoteButton = document.querySelector('.create-button')

function getColor(){
    return "hsl(" + 360 * Math.random() + ',' +
               (25 + 70 * Math.random()) + '%,' +
               (85 + 10 * Math.random()) + '%)'
}

let idNumber = 0

createNoteButton.addEventListener('click', () => {
    const inputText = document.querySelector('.post-it').value
    const postIt = document.createElement('div')
    idNumber++

    postIt.textContent = inputText
    postIt.classList.add('post-it-note')
    postIt.id = `post-it-note${idNumber}`
    postIt.style.backgroundColor = getColor()

    stickyBoard.appendChild(postIt)
    document.querySelector('.post-it').value = null
})
