import {getStringLength} from './utils.js';

const MIN_COMMENTS_LENGHT = 20;
const MAX_COMMENTS_LENGHT = 140;
const INVALID_INPUT_STYLE = 'red';
const VALID_INPUT_STYLE = 'green';

const inputComment = document.querySelector('.text__description');

const validationComment = (evt) => {
  const validationTextLength = getStringLength(inputComment.value, MIN_COMMENTS_LENGHT, MAX_COMMENTS_LENGHT);
  if(inputComment.required === true) {
    evt.preventDefault();
  }
  if(!validationTextLength) {
    inputComment.setCustomValidity(`Комментарий не может быть меньше ${MIN_COMMENTS_LENGHT} символов,
     и не может быть больше ${MAX_COMMENTS_LENGHT} символов.`);
    inputComment.style.outlineColor = INVALID_INPUT_STYLE;
    evt.preventDefault();
  } else {
    inputComment.setCustomValidity('');
    inputComment.style.outlineColor = VALID_INPUT_STYLE;
  }
  inputComment.reportValidity();
};

inputComment.addEventListener('input', validationComment);
