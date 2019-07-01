$('.slider').slick({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 420,
        settings: {
          arrows: false,
          dots: false,
          infinite: true,
          speed: 600,
          slidesToShow: 1,
          adaptiveHeight: true,
          autoplay: true,
          autoplaySpeed: 7000
        }
      }
    ]
  });

var openBtn = document.querySelector('.hamburger');
var closeBtn = document.querySelector('.close');
var modal = document.querySelector('.header');
var close = document.querySelector('.menu_first');
var close1 = document.querySelector('.menu_second');
var close2 = document.querySelector('.menu_third');
var close3 = document.querySelector('.menu_fourth');
var close4 = document.querySelector('.menu_fifth');


openBtn.addEventListener('click', () => {
  modal.classList.add('active');
})

closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
})
close.addEventListener('click', () => {
  modal.classList.remove('active');
})
close1.addEventListener('click', () => {
  modal.classList.remove('active');
})
close2.addEventListener('click', () => {
  modal.classList.remove('active');
})
close3.addEventListener('click', () => {
  modal.classList.remove('active');
})
close4.addEventListener('click', () => {
  modal.classList.remove('active');
})

// function close() {
//   modal.classList.remove('active');
//   console.log(1);
  
// }

/*function menu(){
  var selector = document.querySelector('#header');
  selector.style.display = 'block';
}

function close(){
  var close = document.querySelector('#header');
  close.style.display = 'none';
}*/
  
// function menu() {
//   modal.classList.add('active');
// }