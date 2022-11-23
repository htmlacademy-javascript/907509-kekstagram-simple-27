import {renderPictures} from './render-pics.js';
import {showAlert, isEscapeKey} from './utils.js';
import {closeModalClick} from './upload-button.js';

const imgUploadForm = document.querySelector('.img-upload__form');
const errorUploadImage = document.querySelector('#error').content.querySelector('section');
const successUploadImage = document.querySelector('#success').content.querySelector('section');
const errorFragment = document.createDocumentFragment();
const successFragment = document.createDocumentFragment();

const closeModalMessage = (messageTemplate, messageCloseButton, messageInner) => {
  messageCloseButton.addEventListener('click', () => {
    messageTemplate.remove();
  });
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      messageTemplate.remove();
    }
  });
  messageTemplate.addEventListener('click', (evt) => {
    const isClickInside = messageInner.contains(evt.target);

    if (!isClickInside) {
      messageTemplate.remove();
    }
  });
};

const onFormErrorSend = () => {

  closeModalClick();

  const showErrorMessage = () => {
    const errorUploadImageTemplate = errorUploadImage.cloneNode(true);
    const errorButtonTemplate = errorUploadImageTemplate.querySelector('.error__button');
    const errorInnerTemplate = errorUploadImageTemplate.querySelector('.error__inner');
    errorFragment.appendChild(errorUploadImageTemplate);
    document.body.appendChild(errorFragment);

    closeModalMessage(errorUploadImageTemplate, errorButtonTemplate, errorInnerTemplate);
  };

  showErrorMessage();
};

const onFormSuccessSend = () => {

  closeModalClick();

  const showSuccessMessage = () => {
    const successUploadImageTemplate = successUploadImage.cloneNode(true);
    const successButtonTemplate = successUploadImageTemplate.querySelector('.success__button');
    const successInnerTemplate = successUploadImageTemplate.querySelector('.success__inner');
    successFragment.appendChild(successUploadImageTemplate);
    document.body.appendChild(successFragment);

    closeModalMessage(successUploadImageTemplate, successButtonTemplate, successInnerTemplate);
  };

  showSuccessMessage();
};

const getData = (onSuccess) => {
  fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
    .then((response) => response.json())
    .then((photos) => onSuccess(photos))
    .catch(() => showAlert('Ошибка при загрузке фото. Попробуйте ещё раз.'));
};

getData(renderPictures);

const sendData = (onSuccess, onError) => {
  imgUploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);
    fetch('https://27.javascript.pages.academy/kekstagram-simple/data',
      {
        method: 'POST',
        body: formData,
      })
      .then((response) => response.ok ? onSuccess : onError)
      .then(() => onSuccess())
      .catch(() => onError());
  });
};

export {sendData, onFormSuccessSend, onFormErrorSend};
