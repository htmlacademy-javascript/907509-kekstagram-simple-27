import {isEscapeKey} from './utils.js';

const uploadFile = document.querySelector('#upload-file');
const closeButton = document.querySelector('#upload-cancel');
const photoUpload = document.querySelector('.img-upload__overlay');
const inputComment = document.querySelector('.text__description');
const imagePreview = document.querySelector('.img-upload__preview');
const noEffectRadio = document.querySelector('#effect-none');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModalClick();
  }
};

const uploadPicture = () => {
  photoUpload.classList.remove('hidden');
  document.body.classList.add('modal-open');
  closeButton.addEventListener('click', closeModalClick);
  document.addEventListener('keydown', onPopupEscKeydown);
};

function closeModalClick () {
  photoUpload.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
  closeButton.removeEventListener('click', closeModalClick);
  uploadFile.value = '';
  inputComment.value = '';
  imagePreview.style.filter = 'none';
  noEffectRadio.checked = 'true';
  imagePreview.style.transform = 'scale(1)';
}

uploadFile.addEventListener('change', uploadPicture);

export {closeModalClick};
