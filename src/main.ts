/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против..."
  ]
};

// 1
const adsBloc = document.querySelectorAll('.promo__adv img');
adsBloc?.forEach(img => img.remove());

// 2
const genre = document.querySelector('.promo__genre');
if (genre) genre.textContent = 'драма';

// 3
const background = document.querySelector('.promo__bg') as HTMLElement;
if (background) background.style.backgroundImage = "url('src/images/bg.jpg')";

// 4-5
const filmList = document.querySelector('.promo__interactive-list');
const listItems = filmList?.querySelectorAll('li');
movieDB.movies.sort();
movieDB.movies.forEach((title, index) => {
  if (listItems) {
    listItems[index].textContent = `${index + 1}. ${title}`;
  }
})
