var youtube_base_url = "https://www.googleapis.com/youtube/v3/search"
var api_key = "AIzaSyC8vg9sZggTKGAiYvX4wGs9H46pR2_spPM"

//make call to youtube API
//how do you get the key in the url?  where does it go?

function makeRequest(searchTerm, callback) {
var settings = {
	url: youtube_base_url,
	data: {
		key: "AIzaSyC8vg9sZggTKGAiYvX4wGs9H46pR2_spPM",
		q:searchTerm,
		r:"json",
		part: "snippet",
	},
	dataType: 'json',
	success: callback
	};
$.ajax(settings);
console.log();
}
//callback function
//take returned search data and place into list 
//add thumbnail images with links?  does youtube return this ?
//data.Search is the data returned from the Search of youTube
//forEach returned result, add a paragraph element with title of result
//?thumbnail with link?
//.html sets the html of the matched elements - in this case p
function displayYoutubeSearchResults(data) {
	var resultElement = "";
	if (data.Search) {
		data.Search.forEach(function(item) {
		resultElement += "<p>" + item.Title + "</p>";
	});
}
else {
	resultElement += "<p>I'm sorry, no search results.  Try again.</p>"
	console.log();
}
$(".js_search_results").html(resultElement);
}
//listens for user input in the search field.
//takes the value entered by user and should use that as searchTerm variable
//for get data function. Then display youtube callback function should be called.
function submitHandler() {
	$(".js_search_form").submit(function(event) {
		event.preventDefault();
		var query = $(this).find("js_query").val();
		makeRequest(query, displayYoutubeSearchResults);
	});
}
console.log();
$(function(){submitHandler();});