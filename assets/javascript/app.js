$(document).ready(function(){
	var movies = ["moulin rouge", "clueless", "mean girls", "drop dead fred", "breakfast at tiffanys", "cruel intentions", "donnie darko", "a night at the roxbury"];

	// Add buttons for original movies array
	function renderButtons() {
		for(i = 0; i < movies.length; i++){
			$("#movie-buttons").append("<button class='btn btn-success' data-movie='" + movies[i] + "'>" + movies[i] + "</button>");
		}
	}

	// Adding a button for movie entered
	$("#add-movie").on("click", function() {
		event.preventDefault();
		var movie = $("#movie-input").val();
		$("#movie-buttons").append("<button class='btn btn-success' data-movie='" + movies[i] + "'>" + movies[i] + "</button>");        
	});


	renderButtons();
});