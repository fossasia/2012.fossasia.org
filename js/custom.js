$(document).ready(function () {
    $('#map').addClass('scrolloff'); // set the mouse events to none when doc is ready

    $('#overlay').on("mouseup", function () { // lock it when mouse up
        $('#map').addClass('scrolloff');
        //somehow the mouseup event doesn't get call...
    });
    $('#overlay').on("mousedown", function () { // when mouse down, set the mouse events free
        $('#map').removeClass('scrolloff');
    });
    $("#map").mouseleave(function () { // becuase the mouse up doesn't work...
        $('#map').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
        // or you can do it on some other event
    });

    // disable mouse control on map unless clicked
    $('.maps').click(function () {
        $('.maps iframe').css("pointer-events", "auto");
    });
    $(".maps").mouseleave(function () {
        $('.maps iframe').css("pointer-events", "none");
    });
});
$('.map-holder').click(function () {
    $(this).removeClass('zoom-off');
});
debugger;
var screen_width ;
var sidebar_btn_coordinates ; 
var margin_right;
$(".sidebar-menu-toggle").click(function(){    
             if(!$(".main-container").hasClass("reveal-sidebar")){    
                debugger;
                $(".sidebar-menu-toggle").toggleClass('rotated').toggleClass("sidebar-btn-color");
                screen_width = $(window).width();
                sidebar_btn_coordinates = document.getElementsByClassName('sidebar-menu-toggle').offsetLeft;
                margin_right = screen_width - sidebar_btn_coordinates + 200 ; 
                $(".sidebar-menu-toggle").animate({marginRight:"margin_right"});
                $(".main-container").click(function(){
                        $(".sidebar-menu-toggle").toggleClass('rotated');
                        $(".sidebar-menu-toggle").removeClass("sidebar-btn-color");
                        $(".main-container").removeClass("reveal-sidebar");
                });
             }
             else{
                debugger;
                $(".sidebar-menu-toggle").toggleClass('rotated');
                $(".sidebar-menu-toggle").removeClass("sidebar-btn-color");
             }
        });