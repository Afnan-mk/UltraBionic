
$(function () {
    "use strict";
$(window).on("scroll", function(){
 var sc = $(window).scrollTop();
   console.log(sc)
   if(sc > 0){
       $(".nav-bar , .dropdown-options").addClass("default");
       $(".nav-bar__menu ul li a , .nav-bar__logo a").addClass("default2");
      

                $(".nav-bar__menu>ul>li>a").on({
                    mouseenter: function(){
                    $(this).addClass("default3");
                    },
                    mouseleave: function(){
                        $(this).removeClass("default3");
                    }
                });

              
                $(".dropdown-options>li>a").on({
                    mouseenter: function(){
                    $(this).addClass("default3");
                    },
                    mouseleave: function(){
                        $(this).removeClass("default3");
                    }
                });
   

   } else {
      $(".nav-bar , .dropdown-options ").removeClass("default");
      $(".nav-bar__menu ul li a , .nav-bar__logo a").removeClass("default2");

                $(".nav-bar__menu>ul>li>a").on({
                    mouseenter: function(){
                    $(this).removeClass("default3");
                    } });

                $(".dropdown-options>li>a").on({
                    mouseenter: function(){
                    $(this).removeClass("default3");
                    } });
 
    }
});
var sc = $(window).scrollTop();
   console.log(sc)
   if(sc > 0){
       $(".nav-bar , .dropdown-options").addClass("default");
       $(".nav-bar__menu ul li a , .nav-bar__logo a").addClass("default2");
      

                $(".nav-bar__menu>ul>li>a").on({
                    mouseenter: function(){
                    $(this).addClass("default3");
                    },
                    mouseleave: function(){
                        $(this).removeClass("default3");
                    }
                });

              
                $(".dropdown-options>li>a").on({
                    mouseenter: function(){
                    $(this).addClass("default3");
                    },
                    mouseleave: function(){
                        $(this).removeClass("default3");
                    }
                });
   

   } else {
      $(".nav-bar , .dropdown-options ").removeClass("default");
      $(".nav-bar__menu ul li a , .nav-bar__logo a").removeClass("default2");

                $(".nav-bar__menu>ul>li>a").on({
                    mouseenter: function(){
                    $(this).removeClass("default3");
                    } });

                $(".dropdown-options>li>a").on({
                    mouseenter: function(){
                    $(this).removeClass("default3");
                    } });
 
    }
});



$(document).ready(function() {
    "use strict";
    $(".go-button").click(function () {
    $('html, body').animate({scrollTop:940},"slow");
    });
});







$(function(){
    "use strict";
    $(window).on("scroll",function(){
    var sc = $(window).scrollTop();
    if(sc > 200){
        $(".up").fadeIn();
    } else {
        $(".up").fadeOut();
    }
    });

    var sc = $(window).scrollTop();
    if(sc > 200){
        $(".up").fadeIn();
    } else {
        $(".up").fadeOut();
    }

});

var pla = $('div').width();
$(document).ready(function() {
"use strict";
$(".up").click(function () {
$('html, body').animate({scrollTop:0});
});

});






// $(document).ready(function(){

//     $(".dropdown").hover(function(){
//         $(this).children('ul').stop(true, false, true).animateToggle({
//             top: '88px'
//             });
//     },"slow");

// });


$(document).ready(function(){

    $(".sidebar-menu>div>a").click(function(){
        $(".sidebar").addClass("jQuery-edit");
    });

    $(".sidebar__links a").click(function(){
        $(".sidebar").removeClass("jQuery-edit");
    });

    $(".dropdown2").click(function(){
        $(".sidebar").addClass("jQuery-edit");
    });


    $(".dropdown2").click(function(){
        $(".dropdown-options2").slideToggle("slow");
        $(".down-icon").toggleClass("jQuery-edit2");
    });


    $(".medical").click(function(){
        $(".medical a").addClass("services-active");
        $(".technical a").removeClass("services-active");
        $(".description1").css("display","block");
        $(".description2").css("display","none");
    });

    $(".technical").click(function(){
        $(".technical a").addClass("services-active");
        $(".medical a").removeClass("services-active");
        $(".description2").css("display","block");
        $(".description1").css("display","none");
    });

   
});














