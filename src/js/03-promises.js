import Notiflix from 'notiflix';

const formRef = document.querySelector('.form');



formRef.addEventListener('submit',onBtnSubmit)


function onBtnSubmit(e) {
  e.preventDefault();
  const { elements: { amount, delay, step } } = e.currentTarget;
  
  let delayNext = parseInt(delay.value);
  
  for (let i = 1; i <= amount.value; i += 1) {
    createPromise(i,delayNext)
      .then(onSuccess).catch(onError);
    delayNext += parseInt(step.value);
  }
}


  




function createPromise(position, delay) {

  return new Promise((resolve, reject) => {
 
    setTimeout(() => {
const shouldResolve = Math.random() > 0.3;

    if (shouldResolve) {
      resolve(`✅ Fulfilled promise ${position} in ${delay}ms`)
    } else {
      reject(`❌ Rejected promise ${position} in ${delay}ms`)
    }
    },delay)
  })
  
  
}

function onSuccess(result) {
  Notiflix.Notify.success(result);
}

function onError(error) {
  Notiflix.Notify.failure(error);
}
