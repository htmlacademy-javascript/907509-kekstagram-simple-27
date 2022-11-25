import {getStringLength} from './utils.js';
import {sendData, onFormSuccessSend, onFormErrorSend} from './server-interaction.js';


const MIN_LENGHT = 20;
const MAX_LENGHT = 140;
const INVALID_INPUT_STYLE = 'red';
const VALID_INPUT_STYLE = 'green';

const imgUploadForm = document.querySelector('.img-upload__form');
const inputComment = document.querySelector('.text__description');

const onValidationComment = () => {
  imgUploadForm.addEventListener('input', () => {
    const isValidationTextLength = getStringLength(inputComment.value, MIN_LENGHT, MAX_LENGHT);

    if(!isValidationTextLength) {
      inputComment.setCustomValidity(`Комментарий обязателен и не может быть меньше ${MIN_LENGHT} символов,
     и не может быть больше ${MAX_LENGHT} символов.`);
      inputComment.style.outlineColor = INVALID_INPUT_STYLE;
    } else {
      inputComment.setCustomValidity('');
      inputComment.style.outlineColor = VALID_INPUT_STYLE;
    }

    inputComment.reportValidity();
  });
};

onValidationComment();

sendData(onFormSuccessSend, onFormErrorSend);

