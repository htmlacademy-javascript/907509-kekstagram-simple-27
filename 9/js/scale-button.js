const SCALE_MIN_VALUE = 25;
const SCALE_MAX_VALUE = 100;
const SCALE_STEP = 25;

const onScaleUpButton = document.querySelector('.scale__control--smaller');
const onScaleDownButton = document.querySelector('.scale__control--bigger');
const imagePreview = document.querySelector('.img-upload__preview');
const scaleControlValue = document.querySelector('.scale__control--value');

let currentScale = SCALE_MAX_VALUE;
scaleControlValue.value = `${currentScale}%`;

const changeScale = (newScale) => {
  scaleControlValue.value = `${newScale}%`;
  imagePreview.style = `transform: scale(${currentScale / SCALE_MAX_VALUE})`;
};

const onScaleUp = () => {
  if (currentScale < SCALE_MAX_VALUE) {
    currentScale += SCALE_STEP;
    changeScale(currentScale);
  }
};

const onScaleDown = () => {
  if (currentScale > SCALE_MIN_VALUE) {
    currentScale -= SCALE_STEP;
    changeScale(currentScale);
  }
};

onScaleUpButton.addEventListener('click', onScaleDown);
onScaleDownButton.addEventListener('click', onScaleUp);
