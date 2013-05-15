var http = require("http");

function start(route, portNumber){
	function onRequest(request, response){
		route(response, request);
	}

	http.createServer(onRequest).listen(portNumber);
	
	console.log("Server has started.");	
}

exports.start = start;
