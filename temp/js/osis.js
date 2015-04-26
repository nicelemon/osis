$(document).ready(function() {
    // Add preloading function and preload first image
    $.fn.preload = function() {
        this.each(function(){
            $('<img/>')[0].src = this;
        });
    }
    $(['/img/scoliosis.png']).preload();

    // Display menu elements
    $("#nav").fadeIn(2000);
    $("#menuButton").removeClass("see-through");

    $('#menuButton').on('click', function() {
        $('#menuButton').toggleClass("open");
        $('#fullpage').toggleClass("open");
    });
    $('#fullpage').on('click', function(e) {
        $('#menuButton').removeClass("open");
        $('#fullpage').removeClass("open");
        e.preventDefault();
    });

    // Add content to page slides with ajax
    $.get( "/ajax/menu.html", function( data ) {
        $( "#navBG" ).html( data );
    });
    $.get( "/ajax/intro.html", function( data ) {
        $( "#intro" ).html( data );
    });
    $.get( "/ajax/three.html", function( data ) {
        $( "#tree" ).html( data );
    });
    $.get( "/ajax/two.html", function( data ) {
        $( "#doo" ).html( data );
    });
    $.get( "/ajax/one.html", function( data ) {
        $( "#won" ).html( data );
    });
    $.get( "/ajax/zero.html", function( data ) {
        $( "#ceero" ).html( data );
    });

    // Wait for all ajaxed content to load before initializing lazy load
    $(window).on('ajaxComplete', function() {
        setTimeout(function() {
            $(window).lazyLoadXT();
        }, 50);
    });
    $(['/img/ratcrawl.png','/img/1.png','/img/2.png']).preload();

});