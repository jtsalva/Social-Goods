function equalizeTable(id) {
    var maxHeight = 0;

    console.log(maxHeight);

    $("#" + id + " tr td:nth-child(1)").each(function(e) {
        if ($(this).outerHeight() > maxHeight) {
            maxHeight = $(this).outerHeight();
        }
    });

    $("#" + id + " tr td").each(function(e) {
        $(this).outerHeight(maxHeight);
    })
}