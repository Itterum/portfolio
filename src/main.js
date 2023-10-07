// Массив имен файлов изображений
const imageNames = ['image1.png', 'image2.png', 'image3.png', 'image4.jpeg', 'image5.jpeg', 'image6.jpeg', 'image7.jpeg'];

// Получаем контейнер, куда будем добавлять изображения
const imageListContainer = document.getElementById('image-list');

// Генерируем элементы DOM для каждой картинки
imageNames.forEach((imageName, index) => {
  const slide = document.createElement('div');
  slide.classList.add('swiper-slide');

  const imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');

  const img = document.createElement('img');
  img.src = 'src/images/' + imageName;
  img.alt = 'Изображение ' + (index + 1);

  imageContainer.appendChild(img);
  slide.appendChild(imageContainer);
  imageListContainer.appendChild(slide);
});

// Инициализируем Swiper после создания всех слайдов
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 3, // Количество видимых слайдов
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
