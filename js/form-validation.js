import {getStringLength} from './utils.js';
import {sendData, onFormSuccessSend, onFormErrorSend} from './server-interaction.js';

const MIN_COMMENTS_LENGHT = 20;
const MAX_COMMENTS_LENGHT = 140;
const INVALID_INPUT_STYLE = 'red';
const VALID_INPUT_STYLE = 'green';

const inputComment = document.querySelector('.text__description');

const onValidationComment = (evt) => {
  const isValidationTextLength = getStringLength(inputComment.value, MIN_COMMENTS_LENGHT, MAX_COMMENTS_LENGHT);

  if(!isValidationTextLength) {
    inputComment.setCustomValidity(`Комментарий обязателен и не может быть меньше ${MIN_COMMENTS_LENGHT} символов,
     и не может быть больше ${MAX_COMMENTS_LENGHT} символов.`);
    inputComment.style.outlineColor = INVALID_INPUT_STYLE;
    evt.preventDefault();
  } else {
    inputComment.setCustomValidity('');
    inputComment.style.outlineColor = VALID_INPUT_STYLE;
    sendData(onFormSuccessSend, onFormErrorSend);
  }
  inputComment.reportValidity();
};

inputComment.addEventListener('input', onValidationComment);
