var url = require('url');
var http = require('http');

function get(response, request){

	var queryString = url.parse(request.url, true).query;

	console.log("Request handler 'getPage' was called.");
	
	response.writeHead(200, {"Content-Type": "text/html"});
	
	response.write(queryString["Page"]);

	var r = http.get(queryString["Page"], function(res){
		var pageData = ""
		console.log("Status: " + res.statusCode);
		console.log("Header: " + JSON.stringify(res.headers));

		res.on("data", function(chunk){
			pageData += chunk;
		});

		res.on("end", function(){
			console.log(pageData);
		});

		res.on("error", function(e){
			console.log("Error: " + e.message);
		});
	});
	
	r.on("error", function(e){
		console.log("Error: " + e.message);
	});

	r.end();
	response.end();
}

exports.get = get;