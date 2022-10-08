const getRandomInt = function (min, max) {
  if (min < 0 || min >= max) {
    return NaN;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomInt(0, 100);

const getStringLenth = (string, maxLength) => string.length <= maxLength;

getStringLenth('find string length', 5);
