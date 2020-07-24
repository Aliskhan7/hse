
$(function() {
    var header = $(".start-style");
    var navbarbrand = $(".navbar-brand");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 500) {
            header.removeClass('start-style').addClass("scroll-on");
            
            $(".brand-none").addClass("logo-white");
            $(".brand-black").removeClass("logo-black");
        } else {
            header.removeClass("scroll-on").addClass('start-style');

            $(".brand-none").removeClass("logo-white");
            $(".brand-black").addClass("logo-black");
        }


    });
});		
    
//Animation

$(document).ready(function() {
    $('body.hero-anime').removeClass('hero-anime');
});

//Menu On Hover
    
$('body').on('mouseenter mouseleave','.nav-item',function(e){
        if ($(window).width() > 750) {
            var _d=$(e.target).closest('.nav-item');_d.addClass('show');
            setTimeout(function(){
            _d[_d.is(':hover')?'addClass':'removeClass']('show');
            },1);
        }
});


$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 10,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    
    arrows: true,
    centerMode: true,
    focusOnSelect: true
  });


  $('.multiple-items').slick({
    infinite: true,
    slidesToShow: 9,
    slidesToScroll: 3,
    arrows: true,
  });

  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Загрузка изображения #%curr%...',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    }
    });


//     const select = document.querySelector('#dropdown');

// select.addEventListener('change', (event) => {
// 	const option = event.target.querySelector(':checked').getAttribute('data-value');
// 	const display = document.querySelector('.select__content');
    
// 	display.querySelector('.active').classList.remove('active');
// 	display.children[option - 1].classList.add('active');
// });




$(document).ready(function(){
    $(".navbar-collapse").on("click",".nav-link", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 800);
    });
});

$(function () {
    $('[data-toggle="popover"]').popover({
        html: true,
        trigger: 'hover'
    })
})
