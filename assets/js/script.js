
$('.dropdwn-show').click(function(){
$('.mega-box').toggleClass('show');
})


    $(function () {
      setTimeout(function () {
        $(".loader-main").hide();
      }, 1000)
 
    })



    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: false,
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    })

    
    AOS.init({disable: 'mobile'});