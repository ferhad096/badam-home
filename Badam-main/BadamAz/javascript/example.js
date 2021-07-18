'use strict'
//SLIDER
$('.slider').slick();
$(".slick-next").click(IsActive)
$(".slick-prev").click(IsActive)

function IsActive() {
    $(".image-slider").removeClass("active")
    setTimeout(() => {
        $(".image-slider").addClass("active")
    }, 2000);
}
//End Slider 

//Start newProduct 
$(document).ready(function () {
    $('.counter').each(function () {
        var cnt = $(this);
        var countTo = cnt.attr('data-count');

        $({ countNum: cnt.text() }).animate({
            countNum: countTo
        },
            {

                duration: 2000,
                easing: 'linear',
                step: function () {
                    cnt.text(Math.floor(this.countNum))
                },
                complete: function () {
                    cnt.text(this.countNum);
                }
            }

        )
    })
})
$('.newProductSlider').slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      
        {
            breakpoint: 1360,
            settings: {
                arrows: false,
                slidesToScroll: 2,
                slidesToShow: 4
            }
        },
        {
            breakpoint: 992,
            settings: {
                arrows: false,
                slidesToScroll: 2,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToScroll: 2,
                slidesToShow: 2
            }
        }
    ]
});
//End newProduct 

var btn = $('#scrollUp');
//StartScrollUp
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
//EndScrollUp
