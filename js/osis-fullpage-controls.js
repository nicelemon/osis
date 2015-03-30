$(document).ready(function() {

    var dirtyGround = document.getElementById("dirtyGround");
    var clouds = document.getElementById("clouds");
    var abs = document.getElementById("absBG");

// Initialize scroll snapping stuff
	$('#fullpage').fullpage({
		anchors: ['hi', 'one', 'two', 'three', 'four'],
		menu: '#menu',
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        scrollBar: true,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopHorizontal: true,
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        onLeave: function(index, nextIndex, direction){ // Begin playing before scrolling finishes and collect garbage as you go
            if (index == 1 && direction == "down") {
                dirtyGround.play();
                $( "#ratcrawl" ).removeClass( "off" );
            }
            else if (index == 2 && direction == "down") {
                dirtyGround.pause();
                clouds.play();
                $( "#headspin" ).removeClass( "off" );
            }
            else if (index == 3 && direction == "down") {
                $( "#unclecry" ).removeClass( "off" );
            }
            else if (index == 3 && direction == "up") {
                clouds.pause();
                dirtyGround.play();
                $( "#ratcrawl" ).removeClass( "off" );
            }
            else if (index == 4 && direction == "up") {
                clouds.play();
                $( "#unclecry" ).removeClass( "off" );
            }
            else if (index == 5 && direction == "up") {
                $( "#unclecry" ).removeClass( "off" );
            };
        },

        afterLoad: function( anchorLink, index ){

            if(index == 1){
                $( "#ratcrawl" ).addClass( "off" );
                $( "#headspin" ).addClass( "off" );
                $( "#unclecry" ).addClass( "off" );
                dirtyGround.pause();
                clouds.pause();
            };
            if(index == 2){
                $("#ratWrap").fadeIn(2000);
                $( "#ratcrawl" ).removeClass( "off" );
                $( "#headspin" ).addClass( "off" );
                $( "#unclecry" ).addClass( "off" );
                dirtyGround.play();
                clouds.pause();
            };
            if(index == 3){
                $("#headWrap").fadeIn(2000);
                $( "#ratcrawl" ).addClass( "off" );
                $( "#headspin" ).removeClass( "off" );
                $( "#unclecry" ).addClass( "off" );
                dirtyGround.pause();
                clouds.play();
            };
            if(index == 4){
                $("#uncleWrap").fadeIn(2000);
                $( "#ratcrawl" ).addClass( "off" );
                $( "#headspin" ).addClass( "off" );
                $( "#unclecry" ).removeClass( "off" );
                dirtyGround.pause();
                clouds.pause();
            };
            if(index == 5){
                $("#flippinWrap").fadeIn(2000);
                $( "#ratcrawl" ).addClass( "off" );
                $( "#headspin" ).addClass( "off" );
                $( "#unclecry" ).addClass( "off" );
                dirtyGround.pause();
                clouds.pause();
            };
        }

	});

});