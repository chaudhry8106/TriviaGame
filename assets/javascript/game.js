var timer = setTimeout(timeLeft, 1000 * 1)

function counting() {
	$("#time-left").append("<h3>" + timer + "</h3>");
  	console.log("10 seconds left");
}

counting();


// var countDown = setTimeout(counting, 1000 * 120);

function timeLeft() {

	for (var i = 120; i > 0; i--) {
		counting[i];
	}

}

timeLeft();