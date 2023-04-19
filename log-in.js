const form = document.querySelector('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const checkmarkUsername = document.getElementById('checkmark-username');
const wrongCrossUsername = document.getElementById('wrong-cross-username');
const checkmarkPassword = document.getElementById('checkmark-password');
const wrongCrossPassword = document.getElementById('wrong-cross-password');
const usernameErrorMessage = document.getElementById('username-error-message');
const passwordErrorMessage = document.getElementById('password-error-message');

form.addEventListener('submit', (e) => {
    let successCounter = 0

    const usernameRequirements = username.value.length === 0 || username.value !== 'anaLovesAlen'
    const passwordRequirements = password.value.length === 0 || password.value !== 'myLoveIsEternal/0'

    if (usernameRequirements) {
        username.setAttribute('style', 'border: 2px solid red;')
        wrongCrossUsername.style.opacity = '1'
        usernameErrorMessage.textContent = "Hint: Who loves who?"
        e.preventDefault()
        form.style.animation = "tilt-shaking 0.2s 2"
    }
    if (passwordRequirements) {
        password.setAttribute('style', 'border: 2px solid red;')
        wrongCrossPassword.style.opacity = '1'
        passwordErrorMessage.textContent = "Hint: How lasting is your love?"
        e.preventDefault()

    }

    if (!usernameRequirements) {
        usernameErrorMessage.textContent = ""
        wrongCrossUsername.style.opacity = '0'
        username.style.border = '2px solid green'
        checkmarkUsername.style.opacity = '1'
        successCounter++
    }
    if (!passwordRequirements) {
        passwordErrorMessage.textContent = ""
        wrongCrossPassword.style.opacity = '0'
        password.style.border = '2px solid green'
        checkmarkPassword.style.opacity = '1'
        successCounter++
    }
})
