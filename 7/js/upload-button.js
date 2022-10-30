import {onCloseModalClick, onPopupEscKeydown} from './close.js';

const closeUpload = document.querySelector('#upload-cancel');
const photoUpload = document.querySelector('.img-upload__overlay');

const uploadPicture = () => {
  photoUpload.classList.remove('hidden');
  document.body.classList.add('modal-open');
  closeUpload.addEventListener('click', onCloseModalClick);
  document.addEventListener('keydown', onPopupEscKeydown);
};

export {uploadPicture};
