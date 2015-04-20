$(document).ready(function() {

// Initialize scroll snapping stuff
	$('#fullpage').fullpage({
		anchors: ['hola', 'tres', 'dos', 'uno'],
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

            if(index == 1){
                $.get( "/ajax/intro.html", function( data ) {
                    $( "#intro" ).html( data );
                });
            };
            if(index == 2){
                $.get( "/ajax/three.html", function( data ) {
                    $( "#tree" ).html( data );
                });
            };
            if(index == 3){
                $.get( "/ajax/two.html", function( data ) {
                    $( "#doo" ).html( data );
                });
            };

            if(index == 4){
                $.get( "/ajax/one.html", function( data ) {
                    $( "#won" ).html( data );
                });
            };
            
        }

	});

});