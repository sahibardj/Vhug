$( document ).ready(function() {
    var w = window.innerWidth;

    if(w > 767){
        $('#menu-jk').scrollToFixed();
    }else{
       // $('#menu-jk').scrollToFixed();
    }



})


$( document ).ready(function() {

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay: true,
        dots: true,
        autoplayTimeout: 5000,
        navText:['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


});



$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

$(function(){
    $("dt").click(function(){
      $(this).toggleClass("open");
      if($(this).hasClass("open"))
        $("dt").not(this).removeClass("open");
    })
  })

var tl = new TimelineMax({
    repeat: 3    
  });
 
  
  tl.add(
    TweenMax.from(".logo-svg", 2, {
      scale: 0.5,
      rotation: 360,
      ease: Elastic.easeInOut
    })
  );
   
  tl.add(
    TweenMax.from(".logo-svg", 2, {
      scale: 0.5,
      rotation: 360,
      ease: Elastic.easeInOut
    })
  );


  $(function(){
    setTimeout(function(){
      $('#preloader').fadeOut('slow', function() {
        $(this).remove();
      });
     }, 2000);
     $('#nav').show('slow');
  });
  $('#nav').affix({
    offset: {
      top: $('header').height()-$('#nav').height()
    }
}); 

