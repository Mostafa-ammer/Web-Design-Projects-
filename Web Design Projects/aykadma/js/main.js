
/*start jquery code*/
/* global $ document window  */





$(document).ready(function(){
$("#crd").click(function(){
  $("#c-card").slideToggle();
});
});



$(document).ready(function(){
$("#email-edit").click(function(){
  $("#in-email").slideToggle();
});
});

$(document).ready(function(){
$("#name-edit").click(function(){
  $("#in-name").slideToggle();
});
});

$(document).ready(function(){
$("#pass-edit").click(function(){
  $("#in-pass").slideToggle();
});
});

$(document).ready(function(){
$("#add-edit").click(function(){
  $("#in-add").slideToggle();
});
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








                             /************************* VALIDATION FORM REGISTERATION************/

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
                                      if(true){
                                        alert("data inserted successfully") 
                                     }
                                    
                                     
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
















                        /**********************************  profile **********************/


  $(document).ready(function(){
    $("#a").click(function(){
      var val=$("#in-email").val();
     $("#span1").text(val);

    });
  });



$(document).ready(function(){
    $("#b").click(function(){
      var val1=$("#in-name").val();
     $("#span2").text(val1);
    });
  });


$(document).ready(function(){
    $("#c").click(function(){
      var val2=$("#in-pass").val();
     $("#span3").text(val2);
    });
  });

$(document).ready(function(){
    $("#d").click(function(){
      var val3=$("#in-add").val();
     $("#span4").text(val3);
    });
  });

                                         /******************************** room page ***************************/
$(document).ready(function(){
  $("#bt1").click(function(){
    $("#form1").slideDown("");
      $(this).css("background-color", "green");
      $("#img1").css("border", "green solid 4px ");
  });
});

$(document).ready(function(){
  $("#bt2").click(function(){
    $("#form2").slideDown("");
      $(this).css("background-color", "green");
      $("#img2").css("border", "green solid 4px ");
  });
});



//  $(window).on("load",function(){
//           $(".loader-wrapper").fadeOut("slow");
//         });


//
//var x=document.querySelectorAll("#click");
//for(var i=0;i<=5;++i){
//x[i].onclick = function(){
//    "use strict";
//   this.classList.add('active');
//
//};
//}



                         




             /*      counterdown  ******************/

$(document).ready(function(){
  $("#save1").click(function(){

var seconds=15,
    countdiv=document.getElementById('counterdown'),
    
    secondpass,
    countdown=setInterval(function(){
        
        
        "use strict";
        secondpass();
        
    },1000)
    
    
    function secondpass(){
       "use strict";
       
        var minutes = Math.floor(seconds/60),
            
            remseconds=seconds % 60;
        if(seconds<10){
           remseconds="0"+ remseconds;
        }
        
        
        countdiv.innerHTML=minutes+" : "+remseconds;
        
        if(seconds>0){
        seconds = seconds - 1;
        
    }else{
        clearInterval(countdown);
        countdiv.innerHTML="time out without performing servic you will pane from site"
    }
        
    

}
      
      
        });
});











$(document).ready(function(){
  $("#save2").click(function(){

var seconds=15,
    countdiv=document.getElementById('counterdown2'),
    
    secondpass,
    countdown=setInterval(function(){
        
        
        "use strict";
        secondpass();
        
    },1000)
    
    
    function secondpass(){
       "use strict";
       
        var minutes = Math.floor(seconds/60),
            
            remseconds=seconds % 60;
        if(seconds<10){
           remseconds="0"+ remseconds;
        }
        
        
        countdiv.innerHTML=minutes+" : "+remseconds;
        
        if(seconds>0){
        seconds = seconds - 1;
        
    }else{
        clearInterval(countdown);
        countdiv.innerHTML="time out without performing servic you will pane from site"
    }
        
    

}
      
      
        });
});


