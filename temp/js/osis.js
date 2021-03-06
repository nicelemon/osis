$(document).ready(function() {
    console.log();
    // Add preloading function and preload first image
    $.fn.preload = function() {
        this.each(function(){
            $('<img/>')[0].src = this;
        });
    }
    $(['/img/loading.svg', '/img/scoliosis.png', '/img/menu.svg','/vid/dirty-ground.png','/img/headspin.png']).preload();

    $(window).load(function() {
        $('#loader').toggleClass("hide");
        $("#scoliosisDiv").fadeIn('slow');
        // $(['/vid/dirty-ground.mp4','/img/headspin.png','/vid/clouds.mp4']).preload();
        $.get( "/ajax/headspin.html", function( data ) {
            $( "#hspin" ).html( data );
        });
    });

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
    $.get( "/ajax/ratwalk.html", function( data ) {
        $( "#rwalk" ).html( data );
    });
    // $.get( "/ajax/threedee.html", function( data ) {
    //     $( "#threed" ).html( data );
    // });
    $.get( "/ajax/mingwalk.html", function( data ) {
        $( "#mwalk" ).html( data );
    });
    $.get( "/ajax/unclecry.html", function( data ) {
        $( "#ucry" ).html( data );
    });

    // Wait for all ajaxed content to load before initializing lazy load
    $(window).on('ajaxComplete', function() {
        setTimeout(function() {
            $(window).lazyLoadXT();
        }, 50);
    });
    $(['/img/ratcrawl.png','/img/1.png','/img/2.png']).preload();

});