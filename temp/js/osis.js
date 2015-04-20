$(document).ready(function() {
    $.get( "/ajax/intro.html", function( data ) {
        $( "#intro" ).html( data );
    });
});