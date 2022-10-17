const ARRAY_NUMBER = 25;

const DESCRIPTIONS = [
  'Фотография природы',
  'красиво озеро',
  'Универмаг',
  'Детская площадка',
  'Лодочная станция',
  'ресторан',
  'Торговый зал',
];

const getRandomInt = function (min, max) {
  if (min < 0 || min >= max) {
    return 'Введено число меньше 0 либо задан неправильный интервал';
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

getRandomInt(0, 100);

const getStringLenth = (string, maxLength) => string.length <= maxLength;
getStringLenth('find string length', 5);

const getPhotoDescription = (num) => ({
  id: num + 1,
  url: `'photos/${num + 1}.jpg'`,
  description: getRandomInt(0, DESCRIPTIONS.length - 1),
  likes: getRandomInt(15, 200),
  comments: getRandomInt(0, 200),
});

const photoDescriptions = Array.from({length: ARRAY_NUMBER}, (value, num) => getPhotoDescription(num++));

export {photoDescriptions};
