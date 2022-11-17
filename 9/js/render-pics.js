const template = document.querySelector('#picture').content.querySelector('.picture');
const pictureContainer = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

const renderPictures = (array) => array.forEach(({url, likes, comments}) => {
  const templateItem = template.cloneNode(true);
  templateItem.querySelector('.picture__img').src = url;
  templateItem.querySelector('.picture__likes').textContent = likes;
  templateItem.querySelector('.picture__comments').textContent = comments;
  fragment.append(templateItem);
  pictureContainer.append(fragment);
});

export{renderPictures};
