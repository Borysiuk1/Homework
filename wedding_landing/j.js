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

function menu(){
  var selector = document.querySelector('#header');
  selector.style.display = 'block';
}

function close(){
  var selector = document.querySelector('#header');
  selector.style.display = 'none';
}
  