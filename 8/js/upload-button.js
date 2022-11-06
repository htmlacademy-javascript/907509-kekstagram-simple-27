import {isEscapeKey} from './utils.js';

const uploadFile = document.querySelector('#upload-file');
const closeButton = document.querySelector('#upload-cancel');
const photoUpload = document.querySelector('.img-upload__overlay');
const inputComment = document.querySelector('.text__description');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onCloseModalClick();
  }
};

const uploadPicture = () => {
  photoUpload.classList.remove('hidden');
  document.body.classList.add('modal-open');
  closeButton.addEventListener('click', onCloseModalClick);
  document.addEventListener('keydown', onPopupEscKeydown);
};

function onCloseModalClick () {
  photoUpload.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  closeButton.removeEventListener('click', onCloseModalClick);
  uploadFile.value = '';
  inputComment.value = '';
}

uploadFile.addEventListener('change', uploadPicture);

