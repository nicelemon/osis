$(document).ready(function() {

// Initialize scroll snapping stuff
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', 'lastPage'],
		menu: '#menu',
		//Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        scrollBar: true,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        // loopBottom: true,
        // loopTop: true,
        loopHorizontal: true,
        // continuousVertical: true,
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

   //      onLeave: function(index, nextIndex, direction){
   //          var leavingSection = $(this);

			// after leaving section 1
   //          if (direction =='down') {
   //          	loop.stop();
			//     loop.start("sound" + 2);
   //          	var trackSelect = 1;
   //              document.getElementById("consoleTrackNumber").innerHTML = trackNumber;
   //              document.getElementById("consoleTrackSelect").innerHTML = trackSelect;
   //              document.getElementById("button1").value='ON' ;
   //              loop.volume(0);
   //          }

   //          else if (direction =='up') {
   //          	loop.stop();
			//     loop.start("sound" + 1);
   //          	var trackSelect = 3;
   //          	document.getElementById("consoleTrackNumber").innerHTML = trackNumber;
   //          	document.getElementById("consoleTrackSelect").innerHTML = trackSelect;
   //          	document.getElementById("button1").value='OFF' ;
   //          	loop.volume(1);
   //          }

			// //after leaving section 1
   //          if(index == 1 && direction =='down'){
   //              document.getElementById("consoleContent").innerHTML = "Going to section 2!";
   //              //moving the next section
			// 	$('#section1').find('.inner').delay(400).animate({
			// 		top: '-20%'
			// 	}, 1500, 'easeOutExpo');
			// 	$('#section2').find('.inner').delay(400).animate({
			// 		top: '0%'
			// 	}, 1500, 'easeOutExpo');
   //          }

   //          else if(index == 1 && direction == 'up'){
   //              document.getElementById("consoleContent").innerHTML = "Going to last section!";
   //          }

   //          //after leaving section 2
   //          else if(index == 2 && direction =='down'){
   //              document.getElementById("consoleContent").innerHTML = "Going to section 3!";
   //          }

   //          else if(index == 2 && direction == 'up'){
   //              document.getElementById("consoleContent").innerHTML = "Going to section 1!";
   //              //moving back up
			// 	$('#section2').find('.inner').delay(400).animate({
			// 		top: '20%'
			// 	}, 1500, 'easeOutExpo');
			// 	$('#section1').find('.inner').delay(400).animate({
			// 		top: '0%'
			// 	}, 1500, 'easeOutExpo');
   //          }

   //          //after leaving section 3
   //          else if(index == 3 && direction =='down'){
   //              document.getElementById("consoleContent").innerHTML = "Going to section 4!";
   //          }

   //          else if(index == 3 && direction == 'up'){
   //              document.getElementById("consoleContent").innerHTML = "Going to section 2!";
   //          }
   //      }

	});

});