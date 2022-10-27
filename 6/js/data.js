import {getRandomInt} from './utils.js';

const OBJECTS_COUNT = 25;

const DESCRIPTIONS = [
  'Фотография природы',
  'красиво озеро',
  'Универмаг',
  'Детская площадка',
  'Лодочная станция',
  'ресторан',
  'Торговый зал',
];

const generatePhoto = (num) => ({
  id: num + 1,
  url: `photos/${num + 1}.jpg`,
  description: getRandomInt(0, DESCRIPTIONS.length - 1),
  likes: getRandomInt(15, 200),
  comments: getRandomInt(0, 200),
});

const generatePhotoData = () => Array.from({length: OBJECTS_COUNT}, (value, num) => generatePhoto(num++));

export {generatePhotoData};

