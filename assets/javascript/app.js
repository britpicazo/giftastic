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
		var movie = $("#movie-input").val().trim();
		console.log(movie);
		$("#movie-buttons").append("<button class='btn btn-success' data-movie='" + movie + "'>" + movie + "</button>");        
	});

	renderButtons();

	// Getting gifs from api... onto html
	$("button").on("click", function() {
		var movie = $(this).attr("data-movie");
		console.log(movie);
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
	        movie + "&api_key=dc6zaTOxFJmzC&limit=10";
	    console.log(queryURL);

	    $.ajax({
	    	url: queryURL,
	    	method: "GET"
	    }).done(function(response){
	    	var results = response.data;
	    	console.log(results.length);
	    	for(var i = 0; i < results.length; i++){
		    	var movieDiv = $("<div>");
	          	var p = $("<p>").text("Rating: " + results[i].rating);
	          	var movieImg = $("<img>");

	          	movieImg.attr("src", results[i].images.fixed_height_still.url);
	          	movieDiv.append(p);
	          	movieDiv.append(movieImg);
	          	$("#movies").append(movieDiv);
	         }
	    });
	});	

});