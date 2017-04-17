$(document).ready(function(){
	var movies = ["moulin rouge", "clueless", "mean girls", "drop dead fred", "breakfast at tiffanys", "cruel intentions", "donnie darko", "a night at the roxbury"];

	// Add buttons for original movies array
	function renderButtons() {
		for(i = 0; i < movies.length; i++){
			$("#movie-buttons").append("<button class='btn btn-success' data-movie='" + movies[i] + "'>" + movies[i] + "</button>");
		}
	}

	renderButtons();

	// Adding a button for movie entered
	$("#add-movie").on("click", function() {
		event.preventDefault();
		var movie = $("#movie-input").val().trim();
		$("#movie-buttons").append("<button class='btn btn-success' data-movie='" + movie + "'>" + movie + "</button>");        
	});

	

	// Getting gifs from api... onto html
	$("button").on("click", function() {
		var movie = $(this).attr("data-movie");
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
	        movie + "&api_key=dc6zaTOxFJmzC&limit=10"

	    $.ajax({
	    	url: queryURL,
	    	method: "GET"
	    }).done(function(response){
	    	var results = response.data;
	    	$("#movies").empty();
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

	// $("img").on("click", function() {
	// 	console.log("click worked!");
	// 	var src = movieImg.attr(src);
	// 	src = src.substring(0, src.length - 10);
	// 	src += ".url";
	// 	console.log(src);
	// 	movieImg.attr("src", src);
	// });

});