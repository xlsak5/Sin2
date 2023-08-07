$(function() {
  $('.main__slider').slick({
    slide : "div", 
    infinite : true, 
    slidesToShow : 1, 
    slidesToScroll : 1, 
    speed : 500, 
    arrows: true, 
    dots: true, 
    autoplay: true,  
    autoplaySpeed: 1000, 
    pauseOnHover: false, 
    vertical: false, 
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    draggable: true, 
    responsive: [ 
      {
        breakpoint: 960, 
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  $('.banner__slide').slick({
    slide : "div", 
    infinite : true, 
    slidesToShow : 4, 
    slidesToScroll : 4, 
    speed : 500, 
    arrows: true, 
    dots: true, 
    autoplay: false,  
    autoplaySpeed: 1000, 
    pauseOnHover: false, 
    vertical: false, 
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    draggable: true, 
    responsive: [ 
      {
        breakpoint: 960, 
        settings: {
          slidesToShow: 3, 
        }
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  });
})