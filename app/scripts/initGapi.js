/**
* Initialise Google APIs
* this relys on init() function being called on the body.onload().
*/
function init() {
	//var ROOT = 'http://localhost:8080/_ah/api';		    
	var ROOT = 'https://semiotic-pager-97414.appspot.com/_ah/api/';
	var CLIENT_ID = 'AIzaSyDqLOG1Ek4jXzGZ_PuNpSKqZ7YF10zJG4A';
	gapi.client.load('dependency', 'v1', function() {
	}, ROOT);

}

