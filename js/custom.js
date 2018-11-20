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
var position = null ;
var distance_left = null;;
var screen_width = null;
$(".sidebar-menu-toggle").click(function(){    
             if(!$(".main-container").hasClass("reveal-sidebar")){    
                debugger;
                position = $(".sidebar-menu-toggle").offset();
                distance_left = position.left;
                screen_width = $(window).width();
                margin_left = screen_width - distance_left + 200 ;
                margin_left = margin_left.toString();
                margin_left = "-".concat(margin_left);
                margin_left = margin_left.concat("px");
                $(".sidebar-menu-toggle").animate({right: margin_left});
                $(".sidebar-menu-toggle").toggleClass('rotated').toggleClass("sidebar-btn-color");
                $(".main-container").click(function(){
                    $(".sidebar-menu-toggle").animate({right: "0px"});
                    $(".sidebar-menu-toggle").toggleClass('rotated');
                    $(".sidebar-menu-toggle").removeClass("sidebar-btn-color");
                    $(".main-container").off("click");
                });
             }
             else{
                debugger;
                $(".sidebar-menu-toggle").animate({right: "0px"});
                $(".sidebar-menu-toggle").toggleClass('rotated');
                $(".sidebar-menu-toggle").removeClass("sidebar-btn-color");
                $(".main-container").off("click");
             }
        });