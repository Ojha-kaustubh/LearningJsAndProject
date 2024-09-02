
let logDiv = document.querySelector('.log');
let stateDiv = document.querySelector('.state');
let startBtn = document.querySelector('.Start-btn')
let stopBtn = document.querySelector('.stop-btn')

startBtn.addEventListener ( 'click' , (e) => {
    document.addEventListener('keyup' , handleUp);
    document.addEventListener('keydown' , handleDown);
})

stopBtn.addEventListener ('click' , (e) => {
    document.addEventListener('keyup' , handleUp);
    document.addEventListener('keydown' , handleDown);
    logDiv.textContent = " "
    stateDiv.textContent = " "
})

function handleUp (e) {
    logDiv.textContent = `key ${e.key} presed up`
    stateDiv.textContent = `key is up`
}

function handleDown (e) {
    logDiv.textContent = `key ${e.key} presed down`
    stateDiv.textContent = `key is down`
}

