$(document).ready(function() {
    $.get( "/ajax/intro.html", function( data ) {
        $( "#intro" ).html( data );
        $( "#boob" ).delay( 800 ).fadeIn( 2000 );
    });
});