window.onload = function() {
  // Отримання всіх зображень у галереї
  var galleryImages = document.querySelectorAll('.gallery img');

  // Додавання обробників подій для кожного зображення
  for (var i = 0; i < galleryImages.length; i++) {
      galleryImages[i].addEventListener('mouseover', upDate);
      galleryImages[i].addEventListener('mouseout', unDo);
  }
}

function upDate(event) {
  // Отримання зображення, на яке наведено мишу
  var img = event.target;

  // Оновлення фонового зображення та тексту
  document.querySelector('#image').style.backgroundImage = "url('" + img.src + "')";
  document.querySelector('#image').innerHTML = img.alt;
}

function unDo() {
  // Скидання фонового зображення та тексту
  document.querySelector('#image').style.backgroundImage = "url('')";
  document.querySelector('#image').innerHTML = "Наведіть курсор на зображення нижче, щоб відобразити його тут";
}
