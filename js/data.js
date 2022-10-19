import {getRandomInt} from './utils.js';

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

const getPhotoDescription = (num) => ({
  id: num + 1,
  url: `'photos/${num + 1}.jpg'`,
  description: getRandomInt(0, DESCRIPTIONS.length - 1),
  likes: getRandomInt(15, 200),
  comments: getRandomInt(0, 200),
});

const photoDescriptions = Array.from({length: ARRAY_NUMBER}, (value, num) => getPhotoDescription(num++));

export {photoDescriptions};
