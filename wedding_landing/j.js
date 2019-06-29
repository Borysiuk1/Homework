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

// function menu() {
//   modal.classList.add('active');
// }
closeBtn.addEventListener('click', () => {
  modal.classList.remove('active');
})
openBtn.addEventListener('click', () => {
  modal.classList.add('active');
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
  