$(document).ready(() => {
    let w = $(window).width();
    if( w < 650) { 
      $('.accordion').attr('open', false);
      $('.accordion-one').attr('open',true);
    }
    else { 
      $('.accordion').attr('open', true);
    }
    $('.slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              dots: true,
              arrows: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              dots: true,
              arrows: false
            }
          },
          {
            breakpoint: 520,
            settings: {
              slidesToShow: 1,
              dots: true,
              arrows: false
            }
          }
        ]
    });
});
$(window).resize( () => {
  let w = $(window).width();
  if( w < 650) { 
    $('.accordion').attr('open', false);
    $('.accordion-one').attr('open',true);
  }
  else { 
    $('.accordion').attr('open', true);
  }
});




