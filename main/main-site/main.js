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

// This block of code is for the daily song feature
const showSongButton = document.querySelector('[data-song-target]')
const closeSongButton = document.querySelector('[data-close-song]')


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
