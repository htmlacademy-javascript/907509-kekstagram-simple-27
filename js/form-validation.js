import {getStringLength} from './utils.js';
import {sendData, onFormSuccessSend, onFormErrorSend} from './server-interaction.js';


const MIN_COMMENT_LENGTH = 20;
const MAX_COMMENT_LENGTH = 140;
const INVALID_INPUT_STYLE = 'red';
const VALID_INPUT_STYLE = 'green';

const imgUploadForm = document.querySelector('.img-upload__form');
const inputComment = document.querySelector('.text__description');

const onValidationComment = () => {
  imgUploadForm.addEventListener('input', () => {
    const isValidationTextLength = getStringLength(inputComment.value, MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH);

    if(!isValidationTextLength) {
      inputComment.setCustomValidity(`Комментарий обязателен и не может быть меньше ${MIN_COMMENT_LENGTH} символов,
     и не может быть больше ${MAX_COMMENT_LENGTH} символов.`);
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

