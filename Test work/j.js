var openBtn = document.querySelector('.hamburger');
var closeBtn = document.querySelector('.close');
var modal = document.querySelector('.header');
var close = document.querySelector('.un');


openBtn.addEventListener('click', () => {
    modal.classList.add('active');
  })
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  })
  close.addEventListener('click', () => {
    modal.classList.remove('active');
  })
  close.addEventListener('click', () => {
    close.classList.add('unactive');
  })