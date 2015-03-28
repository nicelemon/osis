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

	$('#menuButton').on('click', function() {
		$('#menuButton').toggleClass("open");
		$('#fullpage').toggleClass("open");
    });
    $('#fullpage').on('click', function(e) {
		$('#menuButton').removeClass("open");
		$('#fullpage').removeClass("open");
		e.preventDefault();
    });

	$( ".section" ).mousemove(function( event ) { // Shadow postitioning
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
			newX = Math.round(sw * pageX),
			newY = Math.round(sh * pageY),
			negX = Math.round((newX / 4)) * - 1,
			negY = Math.round((newY / 4)) * - 1;
		$(".shady").css({
			"webkit-filter": "drop-shadow(" + newX + "px " + newY + "px 5px rgba(0,0,0,0.4))",
			"top": negY,
			"left": negX
		});
	});

});