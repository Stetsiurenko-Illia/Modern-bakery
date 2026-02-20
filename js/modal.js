// Знаходимо модалку та кнопку закриття
const modal = document.querySelector('.backdrop');
const modalBtnClose = document.querySelector('.modal-btn-close');

// Знаходимо ВСІ кнопки відкриття (повертає список елементів)
const modalBtnsOpen = document.querySelectorAll('.modal-btn-open');

const toggleModal = () => modal.classList.toggle('is-hidden');

// Перебираємо кожну кнопку зі списку і додаємо слухач подій
modalBtnsOpen.forEach(btn => {
  btn.addEventListener('click', toggleModal);
});

// Закриття модалки
modalBtnClose.addEventListener('click', toggleModal);
