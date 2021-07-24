$(document).ready(function(){
    $('.slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        responsive: [
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                dots: true
              }
            },
        ]
    });
});
