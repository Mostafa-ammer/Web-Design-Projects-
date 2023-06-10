/*start jquery code*/


/************ OWL carousel  for home page*****************/
$(document).ready(function(){
  $('.top-related').owlCarousel({
      loop:true,
      margin:20,
      nav:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:2
          }
      }
  })


});




$(document).ready(function(){
  $('.say').owlCarousel({
      loop:true,
      margin:20,
      nav:false,
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
  $('.best-sellers').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:2500,
    autoplaySpeed:1000,
    margin:10,
    responsiveClass:true,
    dots: false,
    margin:20,
    responsive:{
        0:{
            items:1,
            nav:true
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
$('.test').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})
});



$(document).ready(function(){
  $('.brand').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:2500,
    autoplaySpeed:1000,
    margin:10,
    responsiveClass:true,
    dots: false,
    margin:20,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:6,
            nav:false,

        }
    }
})
});


$(document).ready(function(){
var mybutton=document.getElementById('goup');
window.onscroll=function () {
  "use strict";
  if(window.pageYOffset >=1200){
    mybutton.style.display='block';
  }
  else{
    mybutton.style.display='none';
  }

};
  mybutton.onclick=function () {
    "use strict";
    window.scrollTo(0,0);

  };

});




       function total() {
         "use strict";
   var x = document.getElementById("input").value;
  var one_peace=200;
  var z=one_peace * x;
document.getElementById("total").innerHTML =z;}





  $(window).on("load",function(){
           $(".loader-wrapper").fadeOut("slow");
         });



         $(document).ready(function(){
           $("#input").click(function(){
             if($("#input").val() <0 || $("#input").val()==0){
               alert("negative number or zero not allow");
               $("#input").val(1);
             }

           });

});



// m.onclick=function k() {
//
// }
