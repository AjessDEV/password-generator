const btnGenerate = document.getElementById("generateBtn")
const rangeInput = document.getElementById("length")
const numbersCB = document.getElementById("numbers-option")
const symbolsCB = document.getElementById("symbols-option")
const generatedPass = document.getElementById("generated-pass")
const copyBtnEnable = document.querySelector('.copy-icon')

const generatePassword = (base, length) => {
    let pass = ""
    for(let i = 0; i < length; i++) {
        let randomPass = Math.floor(Math.random() * base.length)
        pass += base.charAt(randomPass)
    }
    return pass
}

const generate = () => {
    let length = parseInt(rangeInput.value)

    let letters = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
    const numbers = '0123456789'
    const symbols = '.,+-¿?/&%$#!¡;:*<>{}[]()@_|'

    if(numbersCB.checked) {
        letters += numbers
    }
    if(symbolsCB.checked) {
        letters += symbols
    }

    generatedPass.innerHTML = generatePassword(letters, length)

    console.log(generatedPass.textContent)
}

window.addEventListener('DOMContentLoaded', () => {
    btnGenerate.addEventListener('click', () => {
        generate()
        copyBtnEnable.classList.add('copy-icon_active')
        copyBtnEnable.classList.remove('copy-icon_active2')
    })
})

const copyBtn = document.getElementById('copy-button')

copyBtn.addEventListener('click', () => {
    copyBtnEnable.classList.add('copy-icon_active2')
    copyBtnEnable.classList.remove('copy-icon_active')

    let password = document.getElementById("generated-pass")
    navigator.clipboard.writeText(password.textContent)
})

const barsBtn = document.getElementById('bars')
const navMenu = document.querySelector('.nav-menu')

barsBtn.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu_active')
})
