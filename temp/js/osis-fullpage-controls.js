$(document).ready(function() {

// Initialize scroll snapping stuff
	$('#fullpage').fullpage({
		anchors: ['hola', 'tres', 'dos', 'uno', 'cero'],
		menu: '#menu',
        css3: true,
        scrollingSpeed: 1000,
        autoScrolling: true,
        fitToSection: true,
        scrollBar: true,
        loopHorizontal: true,
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        afterLoad: function( anchorLink, index ){

            var dirtyGround = document.getElementById("dirtyGround");
            var clouds = document.getElementById("clouds");
            var tiedeye = document.getElementById("tiedeye");
            
            if(index == 1){
                $( "div" ).addClass( "off" );
                tiedeye.pause();
                dirtyGround.pause();
                clouds.pause();
            }
            if(index == 2){
                $( "div" ).addClass( "off" );
                $( "#ratcrawl" ).removeClass( "off" );
                tiedeye.pause();
                dirtyGround.play();
                clouds.pause();
            }
            // if(index == 3){
            //     $( "div" ).addClass( "off" );
            //     $( "#jeezy").addClass( "shady" );
            //     dirtyGround.pause();
            //     clouds.pause();
            // };
            if(index == 3){
                $( "div" ).addClass( "off" );
                $( "#mingwalk" ).removeClass( "off" );
                $( "#tiedeye" ).removeClass( "clear" );
                tiedeye.play();
                dirtyGround.pause();
                clouds.pause();
            }
            if(index == 4){
                $( "div" ).addClass( "off" );
                $( "#unclecry" ).removeClass( "off" );
                tiedeye.pause();
                dirtyGround.pause();
                clouds.pause();
            }
            if(index == 5){
                $( "div" ).addClass( "off" );
                $( "#headspin" ).removeClass( "off" );
                $( "#clouds" ).removeClass( "clear" );
                tiedeye.pause();
                dirtyGround.pause();
                clouds.play();
            }
            
        },

        onLeave: function( index, nextIndex, direction ){

            if(index == 3){
                $( "#tiedeye" ).addClass( "clear" );
            }
            if(index == 5){
                $( "#clouds" ).addClass( "clear" );
            }

        }

	});

});