let button = document.querySelector('#buttonArea')
let noti = document.querySelector('#historyArea > h2')
let guess = Math.floor(Math.random(Number)*10);
let bodyc = document.querySelector('body')
console.log(guess)

button.addEventListener('click', ()=> {
    let userGuess = Number(document.querySelector('#userGuess').value)

    if (userGuess >= 1) {
        if (userGuess > guess) {
            noti.innerHTML = "too long"
        }

        else if (userGuess < guess) {
            noti.innerHTML = "too short"
        }

        else{
            noti.innerHTML = "you won !"
            button.disabled = true
            noti.style.color = 'red'
            bodyc.style.backgroundColor = 'rgb(0,150,70)'
            document.querySelector('#userGuess').disabled = true

        }
    }
} )


