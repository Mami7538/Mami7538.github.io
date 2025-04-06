
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const imageFilenames = ['IMG_9541.JPG', 'IMG_9563.JPG', 'IMG_9565.JPG', 'IMG_9566.JPG', 'IMG_9574.JPG'];

const imageAlts = {
  'IMG_9541.JPG': 'Pink Flower',
  'IMG_9563.JPG': 'Red Flower',
  'IMG_9565.JPG': 'Bush of Pink Flowers',
  'IMG_9566.JPG': 'Bush of Orange FLowers',
  'IMG_9574.JPG': 'Single White Flower'
};

for (const filename of imageFilenames) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `${filename}`);
  newImage.setAttribute('alt', imageAlts[filename]);
  thumbBar.appendChild(newImage);

  newImage.addEventListener('click', () => {
    displayedImage.setAttribute('src', `${filename}`);
    displayedImage.setAttribute('alt', imageAlts[filename]);
  });
}

btn.addEventListener('click', () => {
    const currentClass = btn.getAttribute('class');
    if (currentClass === 'dark') {
      btn.setAttribute('class', 'light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)';
      displayedImage.style.border = '10px solid white';
    } else {
      btn.setAttribute('class', 'dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)';
      displayedImage.style.border = '10px solid black';
    }
  });