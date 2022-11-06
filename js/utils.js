const getRandomInt = function (min, max) {
  if (min < 0 || min >= max) {
    return 'Введено число меньше 0 либо задан неправильный интервал';
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getStringLength = (string, minLength, maxLength) => string.length > minLength && string.length < maxLength;

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomInt, getStringLength, isEscapeKey};

