/*
Funciona agregando onchange en el check box con switchTheme()

<input type.. clas.. id.. onchange="switchTheme()"

function switchTheme (){
    document.body.classList.toggle("dark-mode")
}
 */

const checkbox = document.querySelector('#check-box')

console.log(checkbox)

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    checkbox.setAttribute('checked', true)
}

checkbox.addEventListener('change', function (event) {
    
    event.preventDefault()

    if (this.checked) {
        document.body.classList.remove('is-light-mode')
        document.body.classList.add('is-dark-mode')
    } else {
        document.body.classList.remove('is-dark-mode')
        document.body.classList.add('is-light-mode')
    }
})

