//// Dev Stuff - stuff to removed eventually

// Random bg colors
$(function() {
    $(".bg-fresh").each(function() {
        var hue = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ')';
         $(this).css("background-color", hue);
    });
});


//// Forever stuff - probably shouldn't remove


// Seamless Audio Loop stuff
var loop = new SeamlessLoop();

//check if the browser can play MP3's. If not, use ogg.
var audio  = document.createElement("audio"),
canPlayMP3 = (typeof audio.canPlayType === "function" &&
              audio.canPlayType("audio/mpeg") !== "");
if (canPlayMP3===true) {
  loop.addUri("/music/amen_break_0.mp3", 2810, "sound1");
  // loop.addUri("/music/amen_break_0.mp3", 2810, "sound2");
  loop.addUri("/music/funky_drummer_0.mp3", 8750, "sound2");
  // loop.addUri("/music/funky_drummer_0.mp3", 8750, "sound2");
  loop.addUri("", 0, "sound3");
  // loop.addUri("", 0, "sound2");
} else {
  loop.addUri("/music/amen_break_0.ogg", 2810, "sound1");
  // loop.addUri("/music/amen_break_0.ogg", 2810, "sound2");
  loop.addUri("/music/funky_drummer_0.ogg", 8750, "sound1");
  // loop.addUri("/music/funky_drummer_0.ogg", 8750, "sound2");
  loop.addUri("", 0, "sound1");
  // loop.addUri("", 0, "sound2");
}

var trackNumber = 1;

function soundsLoadedAmen() {
  loop.start("sound" + trackNumber);
  // n++;
  // loopAmen.update("sound" + n, false);
};

loop.callback(soundsLoadedAmen);

// // Toggle loop
// function toggle(button) {
//   if (button.value == "OFF") {
//     button.value = "ON";
//     loop.stop();
//   } else {
//     button.value = "OFF";
//     loop.stop();
//     loop.start("sound" + trackNumber);
//   }
// }

// Toggle volume
function toggle(button) {
  if (button.value == "OFF") {
    button.value = "ON";
    loop.volume(0);
  } else {
    button.value = "OFF";
    loop.volume(1);
  }
}

// function soundsLoadedFunky() {
//   var n = 1;
//   loopFunky.start("sound" + n);
//   n++;
//   loopFunky.update("sound" + n, false);
// };

// loopFunky.callback(soundsLoadedFunky);


// Hashchange testing


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

	$(window).on('hashchange', function () {
	    var trackNumber = 2;
	    loop.stop();
		loop.start("sound" + trackNumber);
	});

});	