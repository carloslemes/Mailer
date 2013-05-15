var url = require("url")
var handler = require("./handler");

function route(response, request){
	var pathname = url.parse(request.url).pathname;
	var handle = handler.get(pathname);

	console.log("About to route a request for " + pathname);

	if (typeof handle === 'function') {
		handle(response, request);
	} else {
		console.log("No request handler found for " + pathname);
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("404 Not found");
		response.end();
	}
}
exports.route = route;