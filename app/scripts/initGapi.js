/**
* Initialise Google APIs
*/
function init() {

	//var ROOT = 'http://localhost:8080/_ah/api';
		    
	var ROOT = 'https://semiotic-pager-97414.appspot.com/_ah/api/';
	var CLIENT_ID = 'AIzaSyDqLOG1Ek4jXzGZ_PuNpSKqZ7YF10zJG4A';
	gapi.client.load('maven', 'v1', function() {
	}, ROOT);

}
