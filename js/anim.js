$(document).ready(function() {

    // Menu Item Animation
    $(".menu-main-item").hover(function() {
        $(this).children("p").css("color", "white");
        $(this).css("opacity", "0.6")
    }, function() {
        $(this).children("p").css("color", "#0066FF");
        $(this).css("opacity", "1")
    });

    // Menu Item Action
    $(".menu-main-item").click(function() {
        const link = $(this).children("h2").text().replace(/\s/g,'') + ".html";
        console.log(link);
        window.location.href = link;
    });


})