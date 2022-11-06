const sliderElement = document.querySelector('.effect-level__slider');
//const effectLevelValue = document.querySelector('.effect-level__value');
const effectsRadio = document.querySelectorAll('.effects__radio');
const imagePreview = document.querySelector('.img-upload__preview');
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

const effectsKeysArray = Object.keys(effects);

const setEffect = () => {
  effectsRadio.addEventListener('change', (evt) => {
    if (evt.target.checked && evt.target.value !== 'none') {

      sliderWrapper.classList.remove('visually-hidden');

      for (const effect of effectsRadio) {
        if(effectsRadio[effect].value === effectsKeysArray[effect]) {
          imagePreview.classList.add(effect.effectListItems[effect].HTML_CLASS);
          sliderElement.noUiSlider.updateOptions({
            range: {
              min: effect.effectListItems[effect].MIN,
              max: effect.effectListItems[effect].MAX
            },
            start: effect.effectListItems[effect].START,
            step: effect.effectListItems[effect].STEP
          });
        }
      }
    } else {
      sliderWrapper.classList.add('visually-hidden');
    }});
};
setEffect(effects);

