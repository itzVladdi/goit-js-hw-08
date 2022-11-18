const throttle = require('lodash.throttle');
const formEl = document.querySelector('.feedback-form');
let feedbackForm = {};
const key = 'feedback-form-state';

if (localStorage.getItem(key)) {
  feedbackForm = JSON.parse(localStorage.getItem(key));
  for (const key in feedbackForm) {
    if (feedbackForm.hasOwnProperty(key)) {
      formEl.elements[key].value = feedbackForm[key];
    }
  }
}

function onFormElInput(event) {
  const { target } = event;
  const targetName = target.name;
  const targetValue = target.value;
  feedbackForm[targetName] = targetValue;
  localStorage.setItem(key, JSON.stringify(feedbackForm));
}

function onSubmitBtn(event) {
  event.preventDefault();
  const { target } = event;
  console.log(feedbackForm);
  localStorage.removeItem(key);
  target.reset();
}

formEl.addEventListener('input', throttle(onFormElInput, 500));
formEl.addEventListener('submit', onSubmitBtn);
