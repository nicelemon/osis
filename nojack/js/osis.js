$(document).ready(function() {
    // Add preloading function and preload first image
    $.fn.preload = function() {
        this.each(function(){
            $('<img/>')[0].src = this;
        });
    }
    $(['/img/loading.svg', '/img/scoliosis.png', '/img/menu.svg','/vid/dirty-ground.png','/img/headspin.png']).preload();

    $('#menuButton').on('click', function() {
        $('#menuButton').toggleClass("open");
        $('#contentWrapper').toggleClass("open");
    });
    $('#contentWrapper').on('click', function(e) {
        $('#menuButton').removeClass("open");
        $('#contentWrapper').removeClass("open");
        e.preventDefault();
    });
});