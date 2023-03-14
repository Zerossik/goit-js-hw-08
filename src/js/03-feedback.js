import Throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

const inputMessage = {};

function handleInputValue(evt) {
  inputMessage[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(inputMessage));
}

function handleSubmitReset(evt) {
  evt.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  formEl.reset();
  localStorage.removeItem('feedback-form-state');
}

function getTextFromInput() {
  const localDate = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (localDate) {
    if (localDate.email) {
      formEl.elements.email.value = localDate.email;
    }
    if (localDate.message) {
      formEl.elements.message.value = localDate.message;
    }
  }
}

formEl.addEventListener('input', Throttle(handleInputValue, 500));
formEl.addEventListener('submit', handleSubmitReset);
getTextFromInput();
