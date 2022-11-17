const sliderElement = document.querySelector('.effect-level__slider');
const imgUploadForm = document.querySelector('.img-upload__form');
const imagePreview = document.querySelector('.img-upload__preview img');
const sliderWrapper = document.querySelector('.img-upload__effect-level');
const effectLevel = document.querySelector('.effect-level__value');

const EFFECTS = [
  {
    name: 'none',
    min: 0,
    max: 100,
    step: 1,
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    start: 0,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    start: 0,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    start: 0,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    start: 0,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    start: 0,
    step: 0.1,
    unit: '',
  },
];

const DEFAULT_EFFECT = EFFECTS[0];
let chosenEffect = DEFAULT_EFFECT;

noUiSlider.create(sliderElement, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
  format: {
    to: (value) => Number.isInteger(value) ? value.toFixed(0) : value.toFixed(1),
    from: (value) => parseFloat(value),
  },
});

const updateSlider = () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    start: chosenEffect.start,
    step: chosenEffect.step,
  });
};

const getEffect = () => {

  imgUploadForm.addEventListener('change', (evt) => {
    if (evt.target.checked && evt.target.value !== 'none') {

      sliderWrapper.classList.remove('visually-hidden');
      chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);

      sliderElement.noUiSlider.on('update', () => {
        const sliderValue = sliderElement.noUiSlider.get();
        effectLevel.value = sliderValue;
        imagePreview.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
      });

    } else {
      sliderWrapper.classList.add('visually-hidden');
      imagePreview.style.filter = 'none';
    }});
};

updateSlider();
getEffect();
