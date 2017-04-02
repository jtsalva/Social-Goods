console.log("Confirmed Load");

// Rate Colour Change
$(document).on("click", "#expenditures td:nth-child(6)" ,  function() {
    console.log("Received");
    console.log($(this).children("select").val());
    if ((parseInt($(this).children("select").val()) < 4)) {
        $(this).css("border-right", "10px solid red");
    } else if ((parseInt($(this).children("select").val()) < 7)) {
        $(this).css("border-right", "10px solid orange");
    } else {
        $(this).css("border-right", "10px solid green");
    }
})

$(document).ready(function() {

    colorRates();

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

function colorRates() {
    $("#expenditures tr td select").each(function() {
        if ((parseInt($(this).val()) < 4)) {
            $(this).parent().css("border-right", "10px solid red");
        } else if ((parseInt($(this).val()) < 7)) {
            $(this).parent().css("border-right", "10px solid orange");
        } else {
            $(this).parent().css("border-right", "10px solid green");
        }
    })
}

function randomNumberFromRange(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

function setRates() {
    var selects = $("#expenditures tr td select");

    for (var i = 0; i < selects.length; i++) {
        // Iterate over numeric indexes from 0 to 5, as everyone expects.
        selects[i].children[randomNumberFromRange(0,10)].selected = true;
    }

    // selects.forEach(function (item, index) {
    //     item.children(randomNumberFromRange(0,10)).prop("selected", true);
    // })
}


 setTimeout(setRates, 3000);
 setTimeout(colorRates, 3000);
console.log("Re");