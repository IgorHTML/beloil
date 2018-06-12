$(function() {


  //parallax

$('.parallax-window').parallax({imageSrc: 'img/section-1-bg.png', speed: '0.3'});

$('.section-6').parallax({imageSrc: 'img/section-6-bg.jpg', speed: '0.3', naturalHeight: '160'});
$('.section-caption').parallax({imageSrc: 'img/news-caption-bg.jpg', speed: '0.5'});


//menu

  $(document).click(function(event) {
    if ($(event.target).closest(".nav-inner").length) return;
    if($(window).width() < 992) {
      $(".nav-inner").slideUp();
      $(".hamburger").removeClass("is-active");
    } else {
      return;
    };
    event.stopPropagation();
  });

  $(".hamburger").click(function() {
    $(this).toggleClass("is-active");
    $(".nav-inner").slideToggle();
    return false;
  });


  // Carousel
  $('.carousel').owlCarousel({
    loop: false,
    items: 2,
    nav: true,
    margin: 30,
    smartSpeed: 700,
    navText: ['<img src="../img/prev.png" alt="alt">','<img src="../img/next.png" alt="alt">'],
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 2
      },
    },
  });



  // maskedinput
  $('[name=tel]').inputmask({
    mask: '+38 (999) 999-99-99',
    showMaskOnHover: true,
    showMaskOnFocus: true,
  });
  
  // img not drag
  $("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

$(window).on('load', function() {
  window.onresize = function() {
    onResize();
  };

  function onResize() {
    $('.text__product').equalHeights();
  }onResize();

});



var options = {
  offset: 0
}
var header = new Headhesive('#header', options);


//плавный скроллинг
$(document).ready(function(){
    $("#up").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});