import {isEscapeKey} from './utils.js';

const photoUpload = document.querySelector('.img-upload__overlay');

const onCloseModalClick = () => {
  photoUpload.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onCloseModalClick();
  }
};

export {onCloseModalClick, onPopupEscKeydown};
