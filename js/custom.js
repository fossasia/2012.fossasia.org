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

$(".sidebar-menu-toggle").click(function(){    
             if(!$(".sidebar-menu-toggle").hasClass("show-sidebar")){    // make sure sidebar-menu-toggle-anim class doesn't clash with sidebar-menu-toggle-anim-reverse
                $(".sidebar-menu-toggle").toggleClass('rotated').toggleClass("sidebar-btn-color");
                $(window).click(function(){
                    debugger
                    if($(".sidebar-menu-toggle").hasClass("show-sidebar")){
                        $(".sidebar-menu-toggle").toggleClass('rotated');
                        $(".sidebar-menu-toggle").removeClass("sidebar-btn-color");
                    }
                })
             }
             else{
                debugger;
                $(".sidebar-menu-toggle").toggleClass('rotated');
                $(".sidebar-menu-toggle").removeClass("sidebar-btn-color");
             }
        });