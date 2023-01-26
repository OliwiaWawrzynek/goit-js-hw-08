import throttle from 'lodash.throttle';
const form = document.querySelector('form');
const inputEmail = document.querySelector('input[name=email]');
const inputMessage = document.querySelector('textarea[name=message]');

window.addEventListener('load', () => {
  const prevVal = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (localStorage.getItem('feedback-form-state') !== null) {
    inputEmail.value = prevVal.email;
    inputMessage.value = prevVal.message;
  }
});

form.addEventListener('input', throttle(() => {
    let someData = {
      email: inputEmail.value,
      message: inputMessage.value,
    }; 
    localStorage.setItem('feedback-form-state', JSON.stringify(someData));
  }, 500)
);

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  form.reset();
  localStorage.removeItem('feedback-form-state');
});
