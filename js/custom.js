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
             if($(".sidebar-menu-toggle").css("marginRight") != "-300px"){
                $(".sidebar-menu-toggle").removeClass('sidebar-menu-toggle-anim-reverse');  
                $(".sidebar-menu-toggle").css("color","#fff");    // make sure sidebar-menu-toggle-anim class doesn't clash with sidebar-menu-toggle-anim-reverse
                $(".sidebar-menu-toggle").toggleClass('rotated').toggleClass('sidebar-menu-toggle-anim');
             }
             else{
                $(".sidebar-menu-toggle").removeClass('sidebar-menu-toggle-anim');            // make sure sidebar-menu-toggle-anim-reverse class doesn't clash with sidebar-menu-toggle-anim
                $(".sidebar-menu-toggle").css("color","#333333");
                $(".sidebar-menu-toggle").toggleClass('rotated').toggleClass('sidebar-menu-toggle-anim-reverse');
             }
        });