// This block of code is for the dropdown menu
document.addEventListener('click', e => {
    const isDropDownButton = e.target.matches("[data-dropdown-button]")

    if(!isDropDownButton && e.target.closest('[data-dropdown]') != null) return

    let currentDropdown
    if (isDropDownButton) {
        currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove('active')
    })
})

// This block of code is for the modals
const openPopupButtons = document.querySelectorAll('[data-popup-target]');
const closePopupButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openPopupButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popup = document.querySelector(button.dataset.popupTarget)
        openPopup(popup)
    })
})

closePopupButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popup = button.closest('.popup')
        closePopup(popup)
    })
})

function openPopup(popup) {
    if (popup == null) return
    popup.classList.add('active')
    overlay.classList.add('active')
}

function closePopup(popup) {
    if (popup == null) return
    popup.classList.remove('active')
    overlay.classList.remove('active')
}

// This block of code creates divs that serve as post-its
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

// This block of code adds draggable functionality to the post-its

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

// This block of code is for the daily song feature
const showSongButton = document.querySelector('[data-song-target]')
const closeSongButton = document.querySelector('[data-close-song]')
const songElement = document.getElementById('song')

showSongButton.addEventListener('click', () => {
    const song = document.querySelector(showSongButton.dataset.songTarget)
    showSong(song)
})

closeSongButton.addEventListener('click', () => {
    const song = closeSongButton.nextElementSibling
    closeSong(song)
})

function showSong(song) {
    if (song == null) return
    song.classList.add('active')
    showSongButton.classList.add('active')
    closeSongButton.classList.add('active')
}

function closeSong(song) {
    if (song == null) return
    song.classList.remove('active')
    showSongButton.classList.remove('active')
    closeSongButton.classList.remove('active')
}
