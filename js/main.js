$(document).ready(function () {
  $('.slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 10000,
    draggable: true,
    swipe: false,
  });
    /*--- for 850 --*/
  $('.devSlider1').slick({
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    draggable: true,
    swipe: false,
    slidesToShow: 2
  });
    /*--for 600 --*/

  $('.devSlider2').slick({
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    draggable: true,
    swipe: false,
    slidesToShow: 1
  });

  /*---Burger---*/

  $('.burger').click(function(event){
    $('.header').toggleClass('active-menu');
  })

})

  /*---Need slider?---*/

let count = document.getElementsByClassName('course');
let courses = document.getElementById('courses');

if(count.length > 3){
  courses.classList.remove('line-center');
  courses.classList.add('slider');
}

/*-- diferetn slider --*/

let pageWidth = window.innerWidth;
if (pageWidth <= 850){
  courses.classList.remove('line-center');
  courses.classList.add('devSlider1');
}
if (pageWidth <= 600){
  courses.classList.remove('line-center');
  courses.classList.remove('devSlider1');
  courses.classList.add('devSlider2');
}
