$(document).ready(function() {

// Initialize scroll snapping stuff
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', 'lastPage'],
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

	});

});