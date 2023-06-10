
/*start jquery code*/
/* global $ document window  */

$(document).ready(function(){
    $('.c1').owlCarousel({
    loop:false,
    autoplay:false,
    margin:10,
    dots: false,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:4,
            nav:true,

        }
    }

    })
});



$(document).ready(function(){
    $('.c2').owlCarousel({
    loop:false,
    autoplay:false,
    margin:10,
    dots: false,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:4,
            nav:true,

        }
    }

    })
});




$(document).ready(function(){
    $('.c3').owlCarousel({
    loop:false,
    autoplay:false,
    margin:10,
    dots: false,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:4,
            nav:true,

        }
    }

    })
});



$(document).ready(function(){
    $('.c4').owlCarousel({
    loop:false,
    autoplay:false,
    margin:10,
    dots: false,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:4,
            nav:true,

        }
    }

    })
});



$(document).ready(function(){
    $('.c5').owlCarousel({
    loop:false,
    autoplay:false,
    margin:10,
    dots: false,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:4,
            nav:true,

        }
    }

    })
});


$(document).ready(function(){
    $('.c6').owlCarousel({
    loop:false,
    autoplay:false,
    margin:10,
    dots: false,
    responsive:{
        0:{
            items:2,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1000:{
            items:4,
            nav:true,

        }
    }

    })
});











var pattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
$(document).ready(function(){
  $('.sign').click(function(){
        if ($('#name').val() !=''){
                if ($('#email').val() !='') {

                    if($('#email').val().match(pattern)){

                    if ($('#pass').val() !='') {
                        if ($('#pass').val().length>=8) {
                    if ($('#re-pass').val() !=''){

                        if ($('#re-pass').val() == $('#pass').val() ){


                        if ($('#phone').val() !=''){
                          if ($('#phone').val().length==11){
                            if ($('#reg').val() !=''){
                                 if ($('#country').val() !=''){
                        }
                        else{

                        alert('countery is required');
                        }

                    }else{

                        alert('region is required');

                    }


                              }else{

                    alert('phone must contain 11 number');
                }

                }else{

                    alert('phone is required');
                }

                  }else{
                alert('password and  confirmation password not equal');
            }

            }else{
                alert('re-pass is required');
            }

                                 }else{
                alert('password must contain at least 8 characters');
            }

                    }else{
                alert('pass is required');
            }

                    }else{
                alert('mail must contain  pattern @.com ');
            }


                }else{
                alert('mail is required');
            }

               }else{
                alert('name is required');
            }


        });


 });



                                        /************************ login page ************************/

//var pattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


$(document).ready(function(){
  $('.login-send').click(function(){
if ($('#login-email').val() !='') {
                    if($('#login-email').val().match(pattern)){
                    if ($('#login-pass').val() !='') {
                         }else{
                alert('pass is required');
            }
                    }else{
                alert('mail must contain  pattern @.com ');
            }
                }else{
                alert('Email is required');
            }
        });

 });


