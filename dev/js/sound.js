// Music related JS

// Seamless Audio Loop stuff
var loop = new SeamlessLoop();

//check if the browser can play MP3's. If not, use ogg.
var audio  = document.createElement("audio"),
canPlayMP3 = (typeof audio.canPlayType === "function" &&
              audio.canPlayType("audio/mpeg") !== "");
if (canPlayMP3===true) {
  loop.addUri("/music/amen_break_0.mp3", 2810, "secondPage");
  loop.addUri("/music/funky_drummer_0.mp3", 8750, "3rdPage");
  loop.addUri("", 1000, "firstPage");
} else {
  loop.addUri("/music/amen_break_0.ogg", 2810, "sound1");
  loop.addUri("/music/funky_drummer_0.ogg", 8750, "sound1");
  loop.addUri("", 0, "sound1");
}

var trackNumber = 1;

function soundsLoadedAmen() {
  loop.start("firstPage");
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


$(document).ready(function() {

	$(window).on('hashchange', function () {
		var hash = location.hash.replace( /^#/, '' );
		document.getElementById("consoleHashNumber").innerHTML =  hash;
	    var trackNumber = 2;
	    loop.stop();
		loop.start(hash);
	});

});