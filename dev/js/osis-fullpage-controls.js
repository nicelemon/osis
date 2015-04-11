$(document).ready(function() {

    var dirtyGround = document.getElementById("dirtyGround");
    var clouds = document.getElementById("clouds");
    var abs = document.getElementById("absBG");

// Initialize scroll snapping stuff
	$('#fullpage').fullpage({
		anchors: ['hi', 'hu_cry.png', 'flowhida', 'ratstroll.png', 'headspin.png', 'young.gz', 'hu_cry2.png'],
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

        // onLeave: function(index, nextIndex, direction){ // Begin playing before scrolling finishes and collect garbage as you go
        //     if (index == 1 && direction == "down") {
        //         $( "#fullpage" ).css( "background-color", "rgb(156, 252, 197)" );
        //         // dirtyGround.play();
        //         // $( "#ratcrawl" ).removeClass( "off" );
        //     }
        //     else if (index == 2 && direction == "down") {
        //         $( "#fullpage" ).css( "background-color", "rgb(162, 104, 95)" );
        //         // dirtyGround.pause();
        //         // clouds.play();
        //         // $( "#headspin" ).removeClass( "off" );
        //     }
        //     else if (index == 3 && direction == "down") {
        //         // $( "#unclecry" ).removeClass( "off" );
        //     }
        //     else if (index == 3 && direction == "up") {
        //         $( "#fullpage" ).css( "background-color", "rgb(156, 252, 197)" );
        //         // clouds.pause();
        //         // dirtyGround.play();
        //         // $( "#ratcrawl" ).removeClass( "off" );
        //     }
        //     else if (index == 4 && direction == "up") {
        //         // clouds.play();
        //         // $( "#unclecry" ).removeClass( "off" );
        //     }
        //     else if (index == 5 && direction == "up") {
        //         // $( "#unclecry" ).removeClass( "off" );
        //     };
        // },

        afterLoad: function( anchorLink, index ){

            if(index == 1){
                $( "div" ).addClass( "off" );
                $( "#scoliosisImg" ).addClass( "shady" );
                dirtyGround.pause();
                clouds.pause();
            };
            if(index == 2){
                $( "div" ).addClass( "off" );
                $("#uncleWrap").fadeIn(2000).addClass( "box-shade" );
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
                $("#ratWrap").fadeIn(2000).addClass( "box-shade" );
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
                $("#headWrap").fadeIn(2000);
                $( "#headspin" ).removeClass( "off" );
                dirtyGround.pause();
                clouds.play();
            };
            if(index == 7){
                $( "div" ).addClass( "off" );
                $("#uncleWrap2").fadeIn(2000).addClass( "box-shade" );
                $( "#unclecry2" ).removeClass( "off" );
                dirtyGround.pause();
                clouds.pause();
            };
            // if(index == 3){
            //     $( "#fullpage" ).css( "background-color", "rgb(255, 194, 243)" );
            // }
            // else {
            //     $( "#fullpage" ).css( "background-color", "rgb(239, 145, 223)" );
            // };
        }

	});

});