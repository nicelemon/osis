//// Dev Stuff - stuff to removed eventually

// Random bg/border colors
$(function() {
    $(".bg-fresh").each(function() {
        var hue = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ')';
         $(this).css("background-color", hue);
    });
    $(".border-fresh").each(function() {
        var hue = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ')';
         $(this).css("border-color", hue);
    });
});


//// Forever stuff - probably shouldn't remove


$(document).ready(function() {

// Shadow postitioning
	$( ".section" ).mousemove(function( event ) {
		var el = $(this),
			strength = 80,
			h = el.outerHeight(),
			w = el.outerWidth(),
			sh = strength / h,
			sw = strength / w,
			pageX = event.pageX || event.clientX,
			pageY = event.pageY || event.clientY,
			pageX = (pageX - el.offset().left) - (w / 2),
			pageY = (pageY - el.offset().top) - (h / 2),
			newX = Math.round(((sw * pageX)) * - 1),
			newY = Math.round(((sh * pageY)) * - 1),
			negX = (newX / 5) * - 1,
			negY = (newY / 5) * - 1;
		$(".shady").css({
			"-webkit-box-shadow: 21px 23px 55px -8px rgba(0,0,0,0.55);",
			"top": negY,
			"left": negX
	    });
		$(".outlined").css({
			"webkit-filter": "drop-shadow(" + newX + "px " + newY + "px 5px rgba(0,0,0,0.3))",
			"top": negY,
			"left": negX
		});
	});

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