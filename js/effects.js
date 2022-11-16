/*const sliderElement = document.querySelector('.effect-level__slider');
//const effectLevelValue = document.querySelector('.effect-level__value');
const imgUploadForm = document.querySelector('.img-upload__form');
//const imagePreview = document.querySelector('.img-upload__preview');
const sliderWrapper = document.querySelector('.img-upload__effect-level');

const effects = {
  chrome: {
    NAME: 'grayscale',
    HTML_CLASS: 'effects__preview--chrome',
    MIN: 0,
    MAX: 1,
    STEP: 0.1,
    START: 1,
  },
  sepia: {
    NAME: 'sepia',
    HTML_CLASS: 'effects__preview--sepia',
    UNIT: '',
    MIN: 0,
    MAX: 1,
    STEP: 0.1,
    START: 1,
  }
};

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',
  format: {
    to: (value) => Number.isInteger(value) ? value.toFixed(0) : value.toFixed(1),
    from: (value) => parseFloat(value),
  },
});

const onSliderOptions = (minValue, maxValue, startValue, stepValue) => {
  effectLevelSlider.noUiSlider.updateOptions({
    range: {
      min: minValue,
      max: maxValue,
    },
    start: startValue,
    step: stepValue,
  });
};

const effectsKeys = Object.keys(effects);

/* const getEffect = (keys) => {

  imgUploadForm.addEventListener('change', (evt) => {
    if (evt.target.checked && evt.target.value !== 'none') {

      sliderWrapper.classList.remove('visually-hidden');

      evt.target.addEventListener('click', () => {
        for (let i = 0; i <= keys.length; i++) {
          if(evt.target.includes('#effect-`${keys.[i]`'))
       }

      } );

    } else {
      sliderWrapper.classList.add('visually-hidden');
    }
  }
  );
};
*/
