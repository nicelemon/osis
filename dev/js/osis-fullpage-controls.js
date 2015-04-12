$(document).ready(function() {

    var dirtyGround = document.getElementById("dirtyGround");
    var clouds = document.getElementById("clouds");
    var abs = document.getElementById("absBG");

// Initialize scroll snapping stuff
	$('#fullpage').fullpage({
		anchors: ['hi', 'hu_cry.png', 'flowhida', 'ratstroll.png', 'headspin.png', 'young.gz', 'hu_cry2.png', 'loading'],
		menu: '#menu',
        css3: true,
        scrollingSpeed: 1000,
        autoScrolling: true,
        fitToSection: true,
        scrollBar: true,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopHorizontal: true,
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        afterLoad: function( anchorLink, index ){

            if(index == 1){
                $( "div" ).addClass( "off" );
                $( "#scoliosisImg" ).addClass( "shady" );
                dirtyGround.pause();
                clouds.pause();
            };
            if(index == 2){
                $( "div" ).addClass( "off" );
                $( "#unclecry" ).removeClass( "off" );
                dirtyGround.pause();
                clouds.pause();
            };
            if(index == 3){
                $( "div" ).addClass( "off" );
                $( "#flowHida").addClass( "shady" );
                dirtyGround.pause();
                clouds.pause();
            };
            if(index == 4){
                $( "div" ).addClass( "off" );
                $( "#ratcrawl" ).removeClass( "off" );
                dirtyGround.play();
                clouds.pause();
            };
            if(index == 5){
                $( "div" ).addClass( "off" );
                $( "#jeezy").addClass( "shady" );
                dirtyGround.pause();
                clouds.pause();
            };
            if(index == 6){
                $( "div" ).addClass( "off" );
                $( "#headspin" ).removeClass( "off" );
                dirtyGround.pause();
                clouds.play();
            };
            if(index == 7){
                $( "div" ).addClass( "off" );
                $( "#unclecry2" ).removeClass( "off" );
                dirtyGround.pause();
                clouds.pause();
            };
            if(index == 8){
                $( "div" ).addClass( "off" );
                $( ".loading" ).removeClass( "off" );
                dirtyGround.pause();
                clouds.pause();
            }
            // if(index == 3){
            //     $( "#fullpage" ).css( "background-color", "rgb(255, 194, 243)" );
            // }
            // else {
            //     $( "#fullpage" ).css( "background-color", "rgb(239, 145, 223)" );
            // };
        }

	});

});