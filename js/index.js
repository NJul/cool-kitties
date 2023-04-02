function getRandomKitten() {
  const kittenContainer = document.querySelector('.kitten-container');
  const kittenImage = document.querySelector('#kitten-image');
  const kittenUrl = `https://source.unsplash.com/400x400/?kitten&${Math.random()}`;

  kittenImage.src = '';
  kittenContainer.classList.add('loading');

  setTimeout(() => {
    kittenImage.src = kittenUrl;
    kittenContainer.classList.remove('loading');
  }, 1000);
}
