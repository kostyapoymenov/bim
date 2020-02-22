$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
      items: 1,
      nav:true,
      loop:true,
      margin: 50,
      responsiveClass:true
    });

    $(".owl-carousel-1").owlCarousel({
      items: 1,
      nav:true,
      loop:true,
      margin: 50,
      responsiveClass:true
    });

    $(".owl-carousel-2").owlCarousel({
        items: 1,
        nav:true,
        loop:true,
        margin: 20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            550:{
                items:1
            },
            768:{
                items:3,
                nav:true,
                loop:false
            }
        }
    });

});

burger();

function burger(){
  const   burgerBtn = $('.burger'),
          burgerItem = $('.burger-nav__link'),
          burgerMenu = $('.burger-menu');

  burgerBtn.on('click', function(){
    burgerBtn.toggleClass('burger--active');
    burgerMenu.toggleClass('burger-menu--active');
    if(burgerBtn.hasClass('burger--active')){
      $('body').addClass('body-hidden');
    } else {
      $('body').removeClass('body-hidden');
    }
  });

  burgerMenu.on('click', function(event){
    var target = event.target;

    for(var i = 0; i < burgerItem.length; i++){
      if(target == burgerItem[i]){
        burgerBtn.removeClass('burger--active');
        burgerMenu.removeClass('burger-menu--active');
        $('body').removeClass('body-hidden');
        scroll(burgerItem[i]);
      }
    }
  });
}

$('.sale-block__btn-show').on('click', function(e){
  $('.sale-block').toggleClass('active');
});

modalPopupCourse('.course__btn', '#popup');

function modalPopupCourse(btn, modal){
  $(document).on('click', btn, function(e){
      e.preventDefault();
      
      var popupText = $(this).parents('.course')
      .find('.course__description_text')
      .html();
      var popupTitle = $(this).parents('.course')
      .find('.course__title')
      .html();

      $('.popup-body__text').html(popupText);
      $('.popup-body__title').html(popupTitle);

      $(modal).css("display", "block");
      $('body').css("overflow", "hidden");

      $(document).on('click', '.close', function(){
          // e.preventDefault();

          $(modal).css("display", "none");
          $('body').css("overflow", "auto");
      });
  });
}

// modalForm('.btn-callback', '#formCallbackModal');
// function modalForm(btn, modal){
//   $(document).on('click', btn, function(e){
//       e.preventDefault();
//       $(modal).css("display", "block");
//       $('body').css("overflow", "hidden");

//       $(document).on('click', '.close', function(){
//           // e.preventDefault();

//           $('#formModal').css("display", "none");
//           $('body').css("overflow", "auto");
//       });
//   });
// }

function scroll(){
  var linkNav = document.querySelectorAll('[href^="#"]'),
      V = 0,
      d = 90; // высота header
  for (var i = 0; i < linkNav.length; i++) {
      linkNav[i].addEventListener('click', function(e) {
          e.preventDefault();
          var w = window.pageYOffset - d,
              hash = this.href.replace(/[^#]*(.*)/, '$1'),
              t = document.querySelector(hash).getBoundingClientRect().top,
              start = null;
          requestAnimationFrame(step);
          function step(time) {
              if (start === null) start = time;
              var progress = time - start,
                  r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
              window.scrollTo(0,r);
              if (r != w + t) {
                  requestAnimationFrame(step)
              } else {
                  location.hash = hash
              }
          }
      }, false);
  }
}
scroll();
