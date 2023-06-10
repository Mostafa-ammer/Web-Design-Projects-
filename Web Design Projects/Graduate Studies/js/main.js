/*start jquery code*/



/************ OWL carousel *****************/




$(document).ready(function(){
  $('.baner-slider').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplaySpeed:1000,
    autoplayHoverPause:true,
    margin:10,
    responsiveClass:true,
    dots: true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:false,
        }
    }
})
});


$(document).ready(function(){
  $("#a").click(function(){
    $("#ss").slideDown().fadeIn();
    // $("#register").hide(1000);
    
  });
});



$(document).ready(function(){
  $("#ll").click(function(){
    $("#hh").slideDown().fadeIn();
    // $("#register").hide(1000);
    
  });
});


$(document).ready(function(){
  $("#ee").click(function(){
    $("#yy").slideDown().fadeIn();
    // $("#register").hide(1000);
    
  });
});