const body=document.querySelector('body')
const btnStart = document.querySelector('[data-start]')
const btnStop = document.querySelector('[data-stop]')


btnStart.addEventListener('click',onBtnStart)
btnStop.addEventListener('click',onBtnStop)


btnStop.setAttribute('disabled','')
// let isIntervalActive = false;
let intervalId = null;

function onBtnStart() {
    // if (isIntervalActive) {
    //     return;
    // }

    // isIntervalActive = true;
    btnStop.removeAttribute('disabled')
    btnStart.setAttribute('disabled','')
     intervalId = setInterval(() => {
        body.style.backgroundColor=getRandomHexColor()
    },1000)
}

function onBtnStop() {
    clearInterval(intervalId)
    btnStop.setAttribute('disabled','')
    btnStart.removeAttribute('disabled')
    isIntervalActive = false;
}



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}